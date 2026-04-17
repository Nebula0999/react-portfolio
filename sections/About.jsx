import React from 'react'
import { CodeXml, Lightbulb, Rocket, Users, Activity, ChartColumnIncreasing } from 'lucide-react'

const highlights = [
  {
    icon: CodeXml,
    title: "Clean Code",
    description: "I write clean, maintainable and scalable codde that satisfy senior coding standards"
  },
  {
    icon: Rocket,
    title: "Performance Focus",
    description: "I optimize apps for speed, responsiveness, and smooth user experiences across devices"
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "I break down complex challenges into clear, practical solutions that deliver reliable results"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "I communicate clearly, review thoughtfully, and work effectively with teams to ship quality products"
  },
  {
    icon: ChartColumnIncreasing,
    title: "Continuous Learning",
    description: "I stay current with modern tools and best practices to build better software every day"
  }
]

function About() {
  return (
     <section id='about' className='relative py-32 overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'> 
          {/* left column */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>About Me</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>Building Resilient Software,
            <span className='font-serif italic font-normal text-white'> {" "} one component at a time</span>
            </h2>
            <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
              <p>
                As a fullstack developer, I have built and deployed a diverse range of web applications that demonstrate both my technical depth and problem-solving ability. 
                My projects include a daily savings tracker integrated with Google Sheets, a fully functional blog application, an e-commerce platform, and a workout tracker built with 
                React and Supabase — all of which have been successfully deployed to production. These projects have sharpened my ability to architect solutions from the ground up, 
                handling everything from database design and backend logic to crafting responsive, interactive user interfaces.
                </p>
                <p>
                Throughout my development journey, I have tackled real-world challenges including implementing secure JWT-based authentication, managing complex application state, 
                integrating third-party APIs, and optimizing performance through caching with Redis. My toolkit spans across Python, Django, React, PostgreSQL, MySQL, Docker, Git, 
                and Postman, with additional experience in design tools like Figma and Canva. This combination of hands-on project experience and exposure to industry-standard tools 
                has equipped me to build scalable, maintainable, and high-quality software solutions.
              </p>
            </div>

            <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
              <p className='text-lg font-medium italic text-foreground'>
                "To build digital solutions that matter by combining clean, efficient code with thoughtful design to create web experiences that solve real problems, 
                empower users, and stand the test of scale."
              </p>
            </div>
          </div>
          {/* right column- highlights */}
            <div className='grid sm:grid-cols-2 gap-6'>
              {highlights.map((item, idx) => (
                <div key={idx} 
                className='glass p-6 rounded-2xl animate-fade-in'
                style={{animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20'>
                    <item.icon className='w-6 h-6 text-primary'/>
                  </div>
                  <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                  <p className='text-sm text-muted-foreground'>{item.description}</p>
                </div>
              ))}

            </div>
        </div>
      </div>
     </section>
  )
}

export default About;