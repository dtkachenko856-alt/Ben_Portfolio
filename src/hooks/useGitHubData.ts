import { useState, useEffect } from 'react'
import { githubData as mockData, githubUsername } from '../data/mockData'

interface GitHubUser {
  login: string
  avatar_url: string
  html_url: string
  repos_url: string
  public_repos: number
  followers: number
  following: number
  bio: string
  name: string
}

interface GitHubRepo {
  id: number
  stargazers_count: number
}

interface GitHubData {
  username: string
  profileUrl: string
  avatar: string
  name: string
  bio: string
  stats: {
    repositories: number
    stars: number
    followers: number
    following: number
  }
  contributions: number[]
  loading: boolean
  error: string | null
}

export function useGitHubData(username: string = githubUsername): GitHubData {
  const [data, setData] = useState<GitHubData>({
    username: mockData.username,
    profileUrl: mockData.profileUrl,
    avatar: '',
    name: '',
    bio: '',
    stats: mockData.stats,
    contributions: mockData.contributions,
    loading: true,
    error: null,
  })

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`)
        
        if (!userResponse.ok) {
          if (userResponse.status === 404) {
            throw new Error('User not found')
          }
          if (userResponse.status === 403) {
            throw new Error('API rate limit exceeded. Using mock data.')
          }
          throw new Error('Failed to fetch GitHub data')
        }

        const userData: GitHubUser = await userResponse.json()

        // Fetch repos to calculate total stars
        const reposResponse = await fetch(`${userData.repos_url}?per_page=100`)
        let totalStars = 0
        
        if (reposResponse.ok) {
          const repos: GitHubRepo[] = await reposResponse.json()
          totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)
        }

        // Note: GitHub contribution graph requires GraphQL API with auth
        // For now, we'll use randomized mock contributions
        // In production, you'd use a GitHub token with GraphQL
        
        setData({
          username: userData.login,
          profileUrl: userData.html_url,
          avatar: userData.avatar_url,
          name: userData.name || userData.login,
          bio: userData.bio || '',
          stats: {
            repositories: userData.public_repos,
            stars: totalStars,
            followers: userData.followers,
            following: userData.following,
          },
          contributions: generateMockContributions(),
          loading: false,
          error: null,
        })
      } catch (err) {
        console.warn('GitHub API error:', err)
        // Fall back to mock data
        setData(prev => ({
          ...prev,
          loading: false,
          error: err instanceof Error ? err.message : 'Unknown error',
        }))
      }
    }

    fetchGitHubData()
  }, [username])

  return data
}

// Generate realistic mock contributions (since real ones need auth)
function generateMockContributions(): number[] {
  // Generate 52 weeks x 7 days = 364 days
  return Array.from({ length: 364 }, () => {
    const rand = Math.random()
    if (rand < 0.6) return 0.5 // 60% no activity
    if (rand < 0.8) return 1 // 20% low activity
    if (rand < 0.9) return 2 // 10% medium
    if (rand < 0.95) return 3 // 5% high
    return 4 // 5% very high
  })
}
