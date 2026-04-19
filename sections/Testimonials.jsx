import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "To be updated with a testimonial from a real person. I'm working on it later.",
    author: "Allan Nabule",
    role: "Software Developer",
    company: "Personal Portfolio",
  },
  // {
  //   quote: "Allan is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are impressive.",
  //   author: "John Doe",
  //   role: "Product Manager",
  //   company: "Tech Corp",
  // },
  // {
  //   quote: "Working with Allan was a pleasure. He is a talented professional who brings both technical expertise and a collaborative spirit to every project.",
  //   author: "Jane Smith",
  //   role: "Design Lead",
  //   company: "Creative Solutions",
  // },
  // {
  //   quote: "Allan's technical skills and dedication to excellence have significantly contributed to our project's success.",
  //   author: "Alice Johnson",
  //   role: "Engineering Manager",
  //   company: "Innovate Inc",
  // },
]

function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length)
  };

  const previous = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  };

  return (
    <section id='testimonials' className='py-32 relative overflow-hidden'>
      <div className='absolute top-1/2 left-1/2 w-200 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2' />

      <div className='container mx-auto px-6 relative z-10'>
      {/* section header */}
      <div className='text-center max-w-3xl mx-auto mb-16'>
        <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
          What People Say
        </span>
        <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
          Words of motivation from{" "}
          <span className='font-serif italic font-normal text-white'>amazing people</span>
        </h2>
      </div>
      {/* testimonial carousel */}
      <div className='max-w-4xl mx-auto'>
        <div className='relative'>
          {/* main testimonial */}
          <div className='glass p-8  rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200'>
            <div className='absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center'>
              <Quote className='w-6 h-6 text-primary-foreground'/>
            </div>
            <blockquote className='text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4 '>
              "{testimonials[activeIdx].quote}"
            </blockquote>

            <div className='flex items-center gap-4'>
              <div>
                <div className='font-semibold'>{testimonials[0].author}</div>
                <div className='text-sm text-muted-foreground'>{testimonials[activeIdx].role}, {testimonials[0].company}</div>
              </div>
            </div>
          </div>
        </div>
        {/* testimonial navigation */}
        <div className='flex items-center justify-center gap-4 mt-8'>
          <button onClick={previous} className='p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all'>
            <ChevronLeft />
          </button>
          <div className='flex gap-2'>
            {testimonials.map((_, idx) => (
            <button onClick={() => {setActiveIdx(idx)}} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50" }`}/>
          ))}
            </div>
            <button onClick={next} className='p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all'>
              <ChevronRight />
            </button>
        </div>
      </div>
      </div>

    </section>
  )
}

export default Testimonials;