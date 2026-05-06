import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import AnimatedBorderButton from '../components/AnimatedBorderButton'

const projects = [
  {
    title: 'Savings Tracker',
    decription: 'A django project that tracks contributions from a google sheet',
    image: '../projects/contri.png',
    tags: ['Django', 'HTML', 'CSS', 'Render'],
    link: "https://notifier-dpvz.onrender.com/",
    githubrepo: "#"
  },
  {
    title: 'Workout Tracker',
    decription: 'A React project that uses supabase in the backend and wger api to fetch and store user exercises',
    image: '../projects/workout.png',
    tags: ['React', 'Supabase', 'Tailwind', 'Render'],
    link: "https://capstone-project-woad.vercel.app/",
    githubrepo: "#" 
  },
  {
    title: 'Realtime chat app',
    decription: 'A django app that allows users to fetch and read news from various opensource APIs',
    image: '../projects/chat_app.png',
    tags: ['React', 'Supabase', 'Tailwind', 'Google Cloud', 'Vercel'],
    link: "https://chat-7ezt.vercel.app",
    githubrepo: "#"
  }
]
function Projects() {
  return (
    <section id='projects' className='py-32 relative overflow-hidden'>
      {/* glowing bg */}
      <div className='absolute top-1/4 right-0 w-96 bg-primary/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl'></div>
      <div className='container mx-auto px-6 relative z-10'>
        {/* section header */}
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>Featured Work</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>Projects that
            <span className='font-serif italic font-normal text-white'> {" "} stand out</span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            This section highligts some of my works that reflect my technical expertise and understanding of software architecture.
          </p>
        </div>
        {/* projects grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project, idx) => (
            <div key={idx} className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
            style={{animationDelay: `${(idx + 1) * 100}ms` }}>
              {/* image */}
              <div className='relative overflow-hidden aspect-video'>
                <img 
                src={project.image} 
                alt={project.title} 
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60'/>
                {/* overlay links */}
                <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                  <a href={project.link} target='_blank' rel='noopener noreferrer' className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                    <ArrowUpRight className='w-5 h-5'/>
                  </a>
                  <a href={project.githubrepo} target='_blank' rel='noopener noreferrer' className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                    <FaGithub className='w-5 h-5'/>
                  </a>
                </div>
              </div>
              {/* content */}
              <div className='p-6 space-y-4'>
                <div className='flex items-start justify-between'>
                  <h3 className='text-xl group-hover:text-primary transition-colors'>{project.title}</h3>
                  <ArrowUpRight 
                  className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all'/>
                </div>
                <p className='text-muted-foreground text-sm'>{project.decription}</p>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className='px-4 py-1.5  rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'>{tag}</span>
                ))}
                </div>
              </div>
            </div>
          ))}

        </div>
        {/* CTA view all */}
        <div className='text-center mt-12 animate-fade-in animation-delay-500'>
           <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className='w-5 h-5'/>
            </AnimatedBorderButton>
        </div>
       
      </div>

    </section>
  )
}

export default Projects;