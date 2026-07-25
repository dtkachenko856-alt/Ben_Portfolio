import { useState, useEffect } from "react";
import { GitBranch, Star, Users, ExternalLink, Code2 } from "lucide-react";
import { githubUsername } from "../data/mockData";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  forks_count: number;
  updated_at: string;
}

export default function GitHub() {
  const [userData, setUserData] = useState<any>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [contributions, setContributions] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredDay, setHoveredDay] = useState<{
    count: number;
    date: string;
  } | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userRes = await fetch(
          `https://api.github.com/users/${githubUsername}`,
        );
        const user = await userRes.json();
        setUserData(user);

        // Fetch repos
        const reposRes = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`,
        );
        const reposData = await reposRes.json();
        setRepos(reposData.slice(0, 6)); // Show top 6 repos

        // Generate mock contributions (real ones need auth)
        const mockContributions = Array.from({ length: 364 }, () =>
          Math.floor(Math.random() * 5),
        );
        setContributions(mockContributions);
      } catch (err) {
        console.error("GitHub fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  // Get contribution color
  const getColor = (level: number) => {
    if (level === 0) return "bg-dark-700";
    if (level === 1) return "bg-cyan-900/50";
    if (level === 2) return "bg-cyan-700/60";
    if (level === 3) return "bg-cyan-500/70";
    return "bg-cyan-400";
  };

  // Split into weeks
  const weeks = [];
  for (let i = 0; i < 52; i++) {
    weeks.push(contributions.slice(i * 7, (i + 1) * 7));
  }

  // Generate date for tooltip
  const getDate = (weekIndex: number, dayIndex: number) => {
    const today = new Date();
    const daysAgo = (51 - weekIndex) * 7 + (6 - dayIndex);
    const date = new Date(today);
    date.setDate(date.getDate() - daysAgo);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <section id="github" className="py-10 relative  border-cyan-500/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            GITHUB <span className="text-cyan-400">—</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My open source contributions and public repositories
          </p>
        </div>
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 glass-effect rounded-2xl p-6 animate-pulse min-h-[420px]">
              <div className="h-8 w-48 bg-cyan-500/20 rounded mb-6" />
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="h-20 bg-cyan-500/10 rounded-xl" />
                <div className="h-20 bg-cyan-500/10 rounded-xl" />
                <div className="h-20 bg-cyan-500/10 rounded-xl" />
              </div>
              <div className="h-4 bg-cyan-500/10 rounded w-3/4 mb-4" />
              <div className="h-4 bg-cyan-500/10 rounded w-2/5 mb-6" />
              <div className="flex gap-1">
                {Array.from({ length: 20 }).map((_, index) => (
                  <div key={index} className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-cyan-500/10 flex-shrink-0" />
                ))}
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-6 animate-pulse min-h-[420px]">
              <div className="h-6 bg-cyan-500/20 rounded w-2/3 mb-4" />
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="h-16 bg-cyan-500/10 rounded-xl" />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main GitHub Card */}
            <div className="lg:col-span-2 glass-effect rounded-2xl p-6 overflow-hidden">
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                {userData?.avatar_url && (
                  <img
                    src={userData.avatar_url}
                    alt={userData.login}
                    className="w-16 h-16 rounded-2xl"
                  />
                )}
                <div>
                  <h3 className="text-xl font-semibold">
                    {userData?.name || userData?.login}
                  </h3>
                  <a
                    href={userData?.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1"
                  >
                    @{userData?.login}
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="glass-effect p-4 rounded-xl text-center">
                  <GitBranch size={20} className="text-cyan-400 mx-auto mb-1" />
                  <p className="text-2xl font-bold">
                    {userData?.public_repos || 0}
                  </p>
                  <p className="text-xs text-gray-400">Repositories</p>
                </div>
                <div className="glass-effect p-4 rounded-xl text-center">
                  <Users size={20} className="text-cyan-400 mx-auto mb-1" />
                  <p className="text-2xl font-bold">
                    {userData?.followers || 0}
                  </p>
                  <p className="text-xs text-gray-400">Followers</p>
                </div>
                <div className="glass-effect p-4 rounded-xl text-center">
                  <Star size={20} className="text-cyan-400 mx-auto mb-1" />
                  <p className="text-2xl font-bold">
                    {repos.reduce((sum, r) => sum + r.stargazers_count, 0)}
                  </p>
                  <p className="text-xs text-gray-400">Total Stars</p>
                </div>
              </div>

              {/* Bio */}
              {userData?.bio && (
                <p className="text-gray-400 mb-6">{userData.bio}</p>
              )}

              {/* Contribution Graph */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-400 mb-3">
                  Contribution Graph
                  {hoveredDay && (
                    <span className="ml-2 text-cyan-400">
                      {hoveredDay.count} commits on {hoveredDay.date}
                    </span>
                  )}
                </h4>
                {/* Full Contribution Graph - all 52 weeks, 7 days - scales to fit container */}
                <div className="w-full overflow-hidden">
                  <div 
                    className="grid gap-[1px] sm:gap-[2px]"
                    style={{ 
                      gridTemplateColumns: 'repeat(52, minmax(0, 1fr))',
                      gridTemplateRows: 'repeat(7, minmax(0, 1fr))'
                    }}
                  >
                    {weeks.map((week, weekIndex) => (
                      week.map((day, dayIndex) => (
                        <div
                          key={`${weekIndex}-${dayIndex}`}
                          className={`aspect-square rounded-[1px] sm:rounded-sm ${getColor(day)} hover:ring-1 hover:ring-cyan-400 transition-all cursor-pointer`}
                          onMouseEnter={() =>
                            setHoveredDay({
                              count: day,
                              date: getDate(weekIndex, dayIndex),
                            })
                          }
                          onMouseLeave={() => setHoveredDay(null)}
                        />
                      ))
                    ))}
                  </div>
                </div>
                {/* Legend */}
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-dark-700" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-cyan-900/50" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-cyan-700/60" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-cyan-500/70" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm bg-cyan-400" />
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Repository List */}
            <div className="glass-effect rounded-2xl p-6 overflow-hidden">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Code2 size={20} className="text-cyan-400" />
                Public Repositories
              </h3>
              <div className="space-y-3 max-h-[420px] overflow-y-auto pr-2">
                {repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block glass-effect p-4 rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-cyan-400 group-hover:text-cyan-300 truncate">
                          {repo.name}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                          {repo.description || "No description"}
                        </p>
                      </div>
                      <ExternalLink
                        size={14}
                        className="text-gray-500 ml-2 flex-shrink-0"
                      />
                    </div>
                    <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                      {repo.language && (
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star size={12} />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitBranch size={12} />
                        {repo.forks_count}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-4 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                View all repositories →
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
