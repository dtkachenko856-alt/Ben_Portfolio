interface EmailData {
  name: string
  email: string
  subject: string
  message: string
}

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Using EmailJS service - you'll need to sign up for a free account at https://www.emailjs.com/
    // For now, I'll create a fallback that simulates email sending
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // In a real implementation, you would use one of these options:
    
    // OPTION 1: EmailJS (Free tier available)
    // const serviceID = 'your_service_id'
    // const templateID = 'your_template_id'
    // const publicKey = 'your_public_key'
    
    // const response = await emailjs.send(serviceID, templateID, {
    //   from_name: data.name,
    //   from_email: data.email,
    //   subject: data.subject,
    //   message: data.message,
    //   to_email: 'davidjones@gmail.com'
    // }, publicKey)
    
    // OPTION 2: Formspree (Free tier available)
    // const response = await fetch('https://formspree.io/f/your-form-id', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     name: data.name,
    //     email: data.email,
    //     subject: data.subject,
    //     message: data.message,
    //   }),
    // })
    
    // OPTION 3: Netlify Forms (if hosted on Netlify)
    // const response = await fetch('/.netlify/functions/send-email', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    
    // For demo purposes, we'll simulate success
    console.log('Email data:', data)
    
    return {
      success: true,
      message: 'Email sent successfully!'
    }
    
  } catch (error) {
    console.error('Email sending error:', error)
    return {
      success: false,
      message: 'Failed to send email. Please try again.'
    }
  }
}

// Configuration instructions for real implementation:
/*
To set up automatic email sending, choose one of these options:

1. EMAILJS (Recommended for simplicity):
   - Sign up at https://www.emailjs.com/
   - Create an email service and template
   - Replace the placeholder values in the code above
   - Add the EmailJS SDK to your project: npm install @emailjs/browser

2. FORMSPREE (Easy setup):
   - Sign up at https://formspree.io/
   - Create a new form
   - Use the form endpoint in the fetch request

3. NETLIFY FUNCTIONS (If hosted on Netlify):
   - Create a netlify function with nodemailer
   - Use SMTP credentials from your email provider

4. CUSTOM BACKEND:
   - Create a simple Node.js/Express server
   - Use nodemailer with SMTP credentials
   - Deploy to Vercel, Netlify, or similar

For production use, always:
- Use environment variables for sensitive data
- Implement rate limiting
- Add spam protection
- Validate input on both client and server
*/
