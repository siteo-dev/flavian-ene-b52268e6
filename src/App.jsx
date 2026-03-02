import { useState, useEffect, useRef } from 'react';
import { Menu, X, MessageCircle, Calendar, Mail, MapPin, Phone, Star, Award, Zap, Users, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Marquee } from '@/components/magicui/marquee';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { ShineBorder } from '@/components/magicui/shine-border';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { ProgressiveBlur } from '@/components/magicui/progressive-blur';
import { cn } from '@/lib/utils';
import DemoBanner from './DemoBanner';
import LightRays from './LightRays';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'experience', label: 'Experience' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const stats = [
    { value: 150, suffix: '+', label: 'Projects Completed' },
    { value: 120, suffix: '+', label: 'Happy Clients' },
    { value: 30, suffix: '+', label: 'Days Average Delivery' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' }
  ];

  const services = [
    {
      title: 'UI/UX Design',
      description: 'Beautiful interfaces that users love to interact with',
      price: '$250',
      icon: Globe
    },
    {
      title: 'Web Development',
      description: 'Responsive websites built with modern technologies',
      price: '$350',
      icon: Zap
    },
    {
      title: 'Brand Identity',
      description: 'Complete visual identity solutions for your business',
      price: '$400',
      icon: Award
    },
    {
      title: 'Performance Optimization',
      description: 'Fast loading websites that deliver exceptional user experience',
      price: '$300',
      icon: Clock
    }
  ];

  const portfolioItems = [
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online store with seamless checkout',
      tags: ['React', 'Next.js', 'Tailwind'],
      image: '/assets/cars/car_audi.jpg'
    },
    {
      title: 'Corporate Website',
      description: 'Professional design for business growth and brand visibility',
      tags: ['Figma', 'React', 'Node.js'],
      image: '/assets/cars/car_bmw.jpg'
    },
    {
      title: 'Portfolio Site',
      description: 'Showcase for creative professionals with stunning visual impact',
      tags: ['Next.js', 'Tailwind', 'Framer Motion'],
      image: '/assets/cars/car_tesla.jpg'
    },
    {
      title: 'Mobile App Interface',
      description: 'User-friendly mobile experience optimized for engagement',
      tags: ['React Native', 'Figma', 'Firebase'],
      image: '/assets/people/boy_1.jpg'
    }
  ];

  const experiences = [
    {
      role: 'Senior Designer',
      company: 'Creative Agency',
      period: '2021-2023',
      description: 'Led design systems and brand strategy for multiple clients'
    },
    {
      role: 'Freelance Developer',
      company: 'Independent',
      period: '2019-2021',
      description: 'Built custom websites and applications for startups and small businesses'
    },
    {
      role: 'Junior Web Developer',
      company: 'Tech Startup',
      period: '2017-2019',
      description: 'Developed responsive websites using modern web technologies'
    }
  ];

  const testimonials = [
    {
      name: 'Maria L.',
      role: 'CEO',
      content: 'Flavian delivered our website ahead of schedule. The design was exactly what we envisioned and the performance is outstanding. Highly recommended!',
      avatar: '/assets/people/girl_1.jpg'
    },
    {
      name: 'David R.',
      role: 'Marketing Director',
      content: 'Working with Flavian was a pleasure. He understood our needs and created a stunning website that exceeded expectations. The attention to detail is unmatched.',
      avatar: '/assets/people/boy_1.jpg'
    },
    {
      name: 'Anna M.',
      role: 'Founder',
      content: 'The website has transformed our online presence. Flavian\'s ability to combine fast development with luxury design is impressive. We\'ve seen a significant increase in conversions.',
      avatar: '/assets/people/girl_1.jpg'
    }
  ];

  const faqItems = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Most projects are completed within 30-45 days, depending on complexity and requirements.'
    },
    {
      question: 'What is your design process like?',
      answer: 'I begin with discovery, followed by wireframing, prototyping, and iterative feedback until final approval.'
    },
    {
      question: 'Do you offer maintenance services?',
      answer: 'Yes, I provide ongoing support including updates, security patches, and performance optimization.'
    },
    {
      question: 'Can you work on existing websites?',
      answer: 'Absolutely. I can revamp, optimize, or modernize any existing website to improve its performance and user experience.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'I specialize in React, Next.js, Tailwind CSS, Figma, and various backend solutions including Node.js and Firebase.'
    },
    {
      question: 'How do we get started?',
      answer: 'Simply contact me via WhatsApp or email to schedule a consultation. We\'ll discuss your project needs and timeline.'
    }
  ];

  const whyUsFeatures = [
    {
      number: '01',
      title: 'Fast Development',
      description: 'Agile workflows for rapid delivery without compromising quality'
    },
    {
      number: '02',
      title: 'Luxury Design',
      description: 'Premium aesthetics that captivate users and create lasting impressions'
    },
    {
      number: '03',
      title: 'User-Centric Approach',
      description: 'Focus on intuitive interfaces that enhance user experience'
    },
    {
      number: '04',
      title: 'Technical Excellence',
      description: 'Clean, efficient code for optimal performance and scalability'
    }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
          observer.unobserve(e.target); 
        } 
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    
    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const handleScroll = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <DemoBanner />
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto mt-4">
          <div className="flex items-center justify-between h-14 px-4 sm:px-6 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.08]">
            <a href="#" className="font-semibold text-base tracking-tight text-white">Flavian ene</a>
            
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={(e) => { e.preventDefault(); handleScroll(link.id); }}
                  className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.05] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/[0.08] p-4">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={(e) => { e.preventDefault(); handleScroll(link.id); setIsMenuOpen(false); }}
                  className="block py-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="relative">
        {/* Hero Section */}
        <section 
          id="hero" 
          className="pt-40 pb-24 sm:pt-48 sm:pb-32 min-h-screen flex items-center relative overflow-x-clip"
        >
          <div className="absolute inset-0 z-0">
            <LightRays 
              raysOrigin="top-center" 
              raysColor="#b0f33f" 
              raysSpeed={1} 
              lightSpread={isMobile ? 2 : 0.5} 
              rayLength={isMobile ? 3 : 1} 
              followMouse={true} 
              mouseInfluence={0.05} 
              noiseAmount={0} 
              distortion={0} 
              pulsating={false} 
              fadeDistance={1} 
              saturation={1} 
            />
            <DotPattern opacity={0.15} className="absolute inset-0 z-0" />
          </div>
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
            <div className="text-center">
              <div className="hero-blur hero-delay-1 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm mb-8">
                <AnimatedShinyText className="text-sm font-medium">Premium Digital Solutions</AnimatedShinyText>
              </div>
              
              <h1 className="hero-blur hero-delay-2 max-w-4xl mx-auto text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent mb-8">
                Crafting digital experiences with speed and elegance
              </h1>
              
              <p className="hero-blur hero-delay-3 text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                I design and develop websites that are both beautiful and functional, delivering luxury solutions at lightning-fast speeds.
              </p>
              
              <div className="hero-blur hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <ShimmerButton className="shadow-2xl" background="rgba(176,243,63, 1)">
                  <span className="text-sm font-medium text-black">Book Appointment</span>
                </ShimmerButton>
                <Button 
                  variant="outline" 
                  className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
              
              <div className="hero-blur hero-delay-5 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
                {stats.map((stat, i) => (
                  <div key={i} className={cn("text-center", i > 0 && "sm:border-l sm:border-white/10 sm:pl-12")}>
                    <NumberTicker 
                      value={stat.value} 
                      suffix={stat.suffix} 
                      className="text-4xl font-black bg-gradient-to-r from-white to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(176,243,63,0.6)]" 
                    />
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
          <div className="absolute top-0 left-0 w-72 h-72 bg-lime-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-lime-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Who I am</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                I'm a passionate designer and developer based in Bragadiru, Romania. My work blends creativity with technical excellence to deliver exceptional digital experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { title: 'Fast Development', description: 'Agile workflows for rapid delivery', icon: Clock },
                { title: 'Luxury Design', description: 'Premium aesthetics that captivate users', icon: Award },
                { title: 'User-Centric Approach', description: 'Focus on intuitive interfaces', icon: Users },
                { title: 'Technical Excellence', description: 'Clean, efficient code for optimal performance', icon: Zap }
              ].map((item, index) => (
                <Card 
                  key={index} 
                  className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <BorderBeam size={120} duration={20} delay={index * 1.5} colorFrom="#b0f33f" colorTo="#b0f33f" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-lime-500/15 to-lime-600/5 border border-lime-500/10 mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(176,243,63,0.15)] transition-all duration-500">
                      <item.icon className="w-6 h-6 text-lime-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-lime-50 transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-lime-500/[0.06] rounded-full blur-[130px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">My Services</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Premium digital solutions designed to elevate your online presence and achieve business goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <BorderBeam size={80} duration={20} colorFrom="#b0f33f" colorTo="#b0f33f" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-lime-500/15 to-lime-600/5 border border-lime-500/10 mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(176,243,63,0.15)] transition-all duration-500">
                      <service.icon className="w-6 h-6 text-lime-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-lime-50 transition-colors">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <Separator className="my-4" />
                    <div className="text-2xl font-black bg-gradient-to-r from-lime-300 to-lime-500 bg-clip-text text-transparent">
                      {service.price}
                    </div>
                    <ShimmerButton className="mt-4 w-full shadow-2xl" background="rgba(176,243,63, 1)">
                      <span className="text-sm font-medium text-black">Get Started</span>
                    </ShimmerButton>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-lime-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Why Choose Me</h2>
            </div>
            
            <BentoGrid className="lg:grid-rows-2">
              {whyUsFeatures.map((feature, index) => (
                <BentoCard 
                  key={index} 
                  className={`group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8 h-full">
                    <div className="text-6xl font-bold text-lime-400 mb-4 opacity-20">{feature.number}</div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-lime-50 transition-colors">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </BentoCard>
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-lime-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-lime-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">What Clients Say</h2>
            </div>
            
            <div className="relative overflow-hidden max-w-6xl mx-auto">
              <Marquee pauseOnHover className="[--duration:30s]">
                {testimonials.map((testimonial, index) => (
                  <Card 
                    key={index} 
                    className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover mx-4 max-w-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-lime-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                      <div className="flex items-center">
                        <Avatar className="w-10 h-10 mr-3">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </Marquee>
              <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
              <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">My Work in Action</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover"
                >
                  {index === 0 && (
                    <BorderBeam size={80} duration={20} colorFrom="#b0f33f" colorTo="#b0f33f" />
                  )}
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700 img-hover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs bg-lime-500/10 text-lime-400 border-lime-500/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">My Journey So Far</h2>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card 
                  key={index} 
                  className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-lg font-bold group-hover:text-lime-50 transition-colors">{exp.role}</h3>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                      </div>
                      <Badge variant="secondary" className="bg-lime-500/10 text-lime-400 border-lime-500/20">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border-white/[0.06] rounded-xl overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:bg-white/[0.02] transition-colors">
                      <span className="font-medium">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-sm text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
          <div className="absolute top-1/3 left-0 w-72 h-72 bg-lime-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Let's Build Something Together</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Ready to elevate your digital presence? Reach out today for a free consultation.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                {[
                  { icon: Phone, title: 'Phone', content: '757289370' },
                  { icon: Mail, title: 'Email', content: 'office@eflavian.com' },
                  { icon: MapPin, title: 'Location', content: 'Bragadiru, Romania' }
                ].map((item, index) => (
                  <Card 
                    key={index} 
                    className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-lime-500/15 to-lime-600/5 border border-lime-500/10 mr-4 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(176,243,63,0.15)] transition-all duration-500">
                          <item.icon className="w-5 h-5 text-lime-400" />
                        </div>
                        <h3 className="text-lg font-bold group-hover:text-lime-50 transition-colors">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{item.content}</p>
                    </div>
                  </Card>
                ))}
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <ShimmerButton className="shadow-2xl" background="rgba(176,243,63, 1)">
                    <span className="text-sm font-medium text-black">Book Appointment</span>
                  </ShimmerButton>
                  <Button 
                    variant="outline" 
                    className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden">
                <iframe 
                  src={"https://www.google.com/maps?q=" + encodeURIComponent("Romania bragadiru") + "&output=embed"} 
                  width="100%" 
                  height="500" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/[0.05] py-8 pb-32">
        <Separator className="mb-8" />
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © {new Date().getFullYear()} Flavian ene. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a href="https://instagram.com/e.flav" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.05] hover:bg-lime-500/10 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden sm:block">
        <ProgressiveBlur position="bottom" height="250px" />
      </div>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden">
        <ProgressiveBlur position="bottom" height="150px" />
      </div>
    </>
  );
};

export default App;
