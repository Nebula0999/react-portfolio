import React from 'react'
import Button from '../components/Button';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import AnimatedBorderButton from '../components/AnimatedBorderButton';

const skills = [
    "Python",
    "Django",
    "React",
    "Tailwind CSS",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Figma",
    "Framer Motion",
    "REST APIs",
    "GraphQL",
    "SQL",
    "PostgreSQL",
    "Docker",
]

function Hero() {

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/projects/Allan_Nabule_CV.pdf";
        link.download = "Allan_Nabule_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
        {/* Bg */}
        <div className='absolute inset-0'>
            <img 
            src="../projects/bg1.jpg" 
            alt="Hero image" 
            className='w-full h-full object-cover opacity-40' 
            />
            <div className='absolute inset-o bg-linear-to-b from-background/20 via-background/80  to-background'>
                 
            </div>
        </div>
        {/* Green Dots */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            {[...Array(30)].map((_, i) => (
                <div 
                className='absolute w-1.5 h-1.5 rounded-full opacity-60'
                style={{
                    backgroundColor: "#20B2A6",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`
                }}
                />
            ))}
        </div>
        {/* Content */}
        <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
                {/* Text column - left */}
                <div className='space-y-8'>
                    <div className='animate-fade-in'>
                        <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                            <span className='w-2 h-2 bg-primary rounded-full animate-pulse' />
                            software Engineer . React and Django Developer
                        </span>
                        
                    </div>
                    {/* Headline */}
                    <div className='space-y-4'>
                        <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>
                            Crafting <span className='text-primary glow-text'>digital</span>
                            <br />
                            experience with
                            <br />
                            <span className='font-serif italic font-normal text-white'>precision.</span>
                        </h1>
                        <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
                           I am Allan Nabule, a fullstack developer proficient in Python, Django, and React. 
                           I build efficient, scalable web applications — from robust backend APIs to responsive, 
                           dynamic user interfaces with a strong focus on clean code and best practices. 
                           I am passionate about solving real-world problems and delivering end-to-end, 
                           high-quality solutions. 
                        </p>
                    </div>
                    {/* CTAs */}
                    <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
                        <Button size='lg' >
                            <a href="#contact">Contact Me</a>
                            <ArrowRight className='w-5 h-5' />
                        </Button>
                        <AnimatedBorderButton onClick={handleDownload}>
                            <Download className='w-5 h-5'/>
                             Download CV
                        </AnimatedBorderButton>
                    </div>
                    {/* social links */}
                    <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
                        <span className='text-sm text-muted-foreground'>Follow me: </span>
                        {[
                            { icon: FaGithub, href: "https://github.com/Nebula0999" },
                            { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/allan-nabule-540638292/" },
                            { icon: FaXTwitter, href: "https://twitter.com/nabule_allan" },
                            { icon: FaInstagram, href: "https://www.instagram.com/allannabule/" },
                        ].map((social, idx) => (
                        <a 
                        key={idx} 
                        href={social.href}
                        target='_blank'
                        className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300'>
                            {<social.icon className='w-5 h-5' />}</a>
                        ))}
                    </div>
                </div>
                {/* profile image - right */}
                <div className='relative animate-fade-in animation-delay-300 '>
                    {/* profile Image */}
                    <div className='relative max-w-md mx-auto'>
                        <div className='absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse' />
                            <div className='relative glass rounded-3xl p-2 glow-border'>
                                <img 
                                src="../projects/profile2.png" 
                                alt="Allan Nabule" 
                                className='w-full aspect-[4/5 object-cover rounded-2xl' 
                                />
                            </div>
                            {/* floatimg badge */}
                            <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-4 animate-float'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                                    <span className='text-sm font-medium'>Available for Tasks</span>
                                </div>
                            </div>
                            {/* stats badge */}
                            <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                                <div className='text-2xl font-bold text-primary'>2+</div>
                                <div className='text-xs text-muted-foreground'>Years Exp.</div>
                            </div>
                    </div>
                </div>
            </div>
            {/* skills sect */}
            <div className='mt-20 animate-fade-in animation-delay-600'>
                <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies I work with</p>
                <div className='relative overflow-hidden'>
                    <div className='flex animate-marquee'>
                        {[...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className='shrink-0 px-8 py-4'>
                                <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

            <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800'>
                <a href="#about"
                className='flex flex-col items-center gap-2 text-muted-foreground hover:text-primary'
                >
                    <span className='text-xs uppercase tracking-wider'>Scroll</span>
                    <ChevronDown className='w-6 h-6 animate-bounce' />
                </a>
            </div>
    </section>
  )
}

export default Hero;