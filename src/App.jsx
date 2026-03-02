import { useState, useEffect, useRef } from 'react';
import { Menu, X, MessageCircle, Phone, Mail, MapPin, Star, Award, Zap, Palette, Smartphone, Clock, Globe, Users, ChevronDown, User, Calendar, Shield, Instagram } from 'lucide-react';
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
import LightRays from './LightRays';
import DemoBanner from './DemoBanner';
import { cn } from '@/lib/utils';

export default function App() {
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
    { value: 10, suffix: '+', label: 'Projects Completed' },
    { value: 5, suffix: '', label: 'Years Experience' },
    { value: 350, suffix: '+', label: 'Clients Satisfied' },
    { value: 98, suffix: '%', label: 'Client Retention' }
  ];

  const services = [
    {
      name: 'UI/UX Design',
      description: 'User-centered approach for intuitive interfaces',
      icon: Palette,
      price: '$150/hr'
    },
    {
      name: 'Frontend Development',
      description: 'React, HTML/CSS with modern frameworks',
      icon: Smartphone,
      price: '$120/hr'
    },
    {
      name: 'Responsive Design',
      description: 'Mobile-first principles for all devices',
      icon: Globe,
      price: '$100/hr'
    },
    {
      name: 'Web Performance',
      description: 'Optimized loading speeds and efficiency',
      icon: Zap,
      price: '$180/hr'
    }
  ];

  const portfolioItems = [
    {
      title: 'E-commerce Platform',
      description: 'Full responsive shopping experience',
      tags: ['React', 'Shopify', 'Tailwind'],
      image: '/assets/cars/car_audi.jpg'
    },
    {
      title: 'Corporate Website',
      description: 'Modern, professional design for business',
      tags: ['WordPress', 'Custom CSS', 'SEO'],
      image: '/assets/cars/car_bmw.jpg'
    },
    {
      title: 'Portfolio Gallery',
      description: 'Clean layout for creative showcases',
      tags: ['Next.js', 'Framer Motion', 'GSAP'],
      image: '/assets/cars/car_tesla.jpg'
    },
    {
      title: 'Dashboard Interface',
      description: 'Intuitive data visualization tools',
      tags: ['React', 'D3.js', 'Chart.js'],
      image: '/assets/cars/car_audi.jpg'
    }
  ];

  const experiences = [
    {
      role: 'Senior Developer',
      company: 'Tech Solutions Inc',
      period: '2021-2023',
      description: 'Built scalable web applications'
    },
    {
      role: 'Web Designer',
      company: 'Creative Studio',
      period: '2019-2021',
      description: 'Designed user interfaces for startups'
    },
    {
      role: 'Freelance Developer',
      company: 'Self-employed',
      period: '2017-2019',
      description: 'Delivered custom websites for clients'
    }
  ];

  const testimonials = [
    {
      name: 'John D.',
      role: 'M',
      quote: 'Flavian delivered my website ahead of schedule with an elegant design that exceeded expectations.',
      avatar: '/assets/people/boy_1.jpg'
    },
    {
      name: 'Sarah M.',
      role: 'F',
      quote: 'The attention to detail and speed of development made all the difference for our project.',
      avatar: '/assets/people/girl_1.jpg'
    },
    {
      name: 'Michael T.',
      role: 'M',
      quote: 'Working with Flavian was seamless. He understood our vision and brought it to life perfectly.',
      avatar: '/assets/people/boy_1.jpg'
    }
  ];

  const faqItems = [
    {
      question: 'How long does a typical project take?',
      answer: 'Most projects are completed within 2-4 weeks depending on complexity.'
    },
    {
      question: 'Do you offer ongoing maintenance services?',
      answer: 'Yes, I provide monthly maintenance packages for all my clients.'
    },
    {
      question: 'What is your process for starting a new project?',
      answer: 'We begin with a discovery call, then create a detailed plan and timeline.'
    },
    {
      question: 'Can you work remotely or do you require in-person meetings?',
      answer: 'All work can be done remotely with regular video calls.'
    },
    {
      question: 'What makes your approach different from other developers?',
      answer: 'I focus on combining fast development with luxury design elements for unique results.'
    },
    {
      question: 'Do you offer design services for non-digital products?',
      answer: 'My expertise is focused entirely on web design and development.'
    }
  ];

  const whyUsFeatures = [
    {
      number: '01',
      title: 'Fast Development',
      description: 'Quick turnaround times without compromising quality'
    },
    {
      number: '02',
      title: 'Luxury Focus',
      description: 'Premium user experiences that exceed expectations'
    },
    {
      number: '03',
      title: 'Design Excellence',
      description: 'Clean, modern interfaces that captivate users'
    },
    {
      number: '04',
      title: 'Client-Centric',
      description: 'Personalized solutions tailored to your needs'
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <DemoBanner />
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto mt-4">
          <div className="flex items-center justify-between h-14 px-4 sm:px-6 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.08]">
            <a href="#" className="font-semibold text-base tracking-tight text-white">Flavian ene</a>
            
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    activeSection === link.id 
                      ? 'text-white bg-white/[0.05]' 
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/[0.08] p-4">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="block py-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

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
        </div>
        
        <DotPattern opacity={0.15} className="absolute inset-0 z-0" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm mb-8 animate-on-scroll hero-blur hero-delay-1">
              <AnimatedShinyText className="text-sm font-medium">Designer & Developer</AnimatedShinyText>
            </div>
            
            <h1 className="hero-blur hero-delay-2 max-w-4xl mx-auto text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent mb-8">
              Crafting digital experiences that stand out
            </h1>
            
            <p className="hero-blur hero-delay-3 text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              I build elegant, high-performing websites with a focus on speed and luxury. Based in Bragadiru, Romania.
            </p>
            
            <div className="hero-blur hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <ShimmerButton className="shadow-2xl btn-hover" background="rgba(176, 243, 63, 1)">
                <span className="text-sm font-medium text-black">Book Appointment</span>
              </ShimmerButton>
              
              <Button 
                variant="outline" 
                className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover"
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

      <section id="about" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 left-0 w-72 h-72 bg-lime-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-lime-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 animate-on-scroll">Who I am</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto animate-on-scroll">
              I'm Flavian Ene, a designer and developer passionate about creating exceptional digital products. My work combines aesthetic design with efficient functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-on-scroll">
            {[
              {
                title: 'Design Excellence',
                description: 'Clean, modern interfaces',
                icon: Palette
              },
              {
                title: 'Fast Development',
                description: 'Quick turnaround times',
                icon: Zap
              },
              {
                title: 'Luxury Focus',
                description: 'Premium user experiences',
                icon: Award
              },
              {
                title: 'Client-Centric',
                description: 'Personalized solutions',
                icon: Users
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover animate-on-scroll delay-{index + 1}"
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

      <section id="services" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-lime-500/[0.06] rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 animate-on-scroll">My services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover animate-on-scroll delay-{index + 1}"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#b0f33f" colorTo="#b0f33f" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-lime-500/15 to-lime-600/5 border border-lime-500/10 mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(176,243,63,0.15)] transition-all duration-500">
                    <service.icon className="w-6 h-6 text-lime-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-lime-50 transition-colors">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Separator className="my-4" />
                  <div className="text-2xl font-black bg-gradient-to-r from-lime-300 to-lime-500 bg-clip-text text-transparent">
                    {service.price}
                  </div>
                  <ShimmerButton className="mt-4 w-full btn-hover" background="rgba(176, 243, 63, 1)">
                    <span className="text-sm font-medium text-black">Get Started</span>
                  </ShimmerButton>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 animate-on-scroll">Career journey and expertise</h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover animate-on-scroll delay-{index + 1}"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#b0f33f" colorTo="#b0f33f" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold mb-1 group-hover:text-lime-50 transition-colors">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                    <Badge className="bg-lime-500/10 text-lime-400 border-lime-500/20 text-xs mt-2 sm:mt-0">
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

      <section id="testimonials" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-lime-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-lime-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 animate-on-scroll">What people say about working with me</h2>
          </div>

          <div className="relative max-w-6xl mx-auto overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover mx-4 animate-on-scroll delay-{index + 1} max-w-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#b0f33f" colorTo="#b0f33f" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8">
                    <div className="flex items-center mb-4">
                      <Avatar className="w-12 h-12 mr-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">"{testimonial.quote}"</p>
                    <div className="flex text-lime-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
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

      <section id="faq" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 animate-on-scroll">Everything you need to know about working together</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="multiple" className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border border-white/[0.08] rounded-xl overflow-hidden animate-on-scroll delay-{index + 1}"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:bg-white/[0.02] transition-colors">
                    <span className="font-medium">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-lime-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 animate-on-scroll">Let's build something amazing together</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto animate-on-scroll">
              Ready to start your next project? Get in touch today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                {
                  icon: MessageCircle,
                  title: 'WhatsApp',
                  value: '757289370'
                },
                {
                  icon: Mail,
                  title: 'Email',
                  value: 'office@eflavian.com'
                },
                {
                  icon: MapPin,
                  title: 'Location',
                  value: 'Bragadiru, Romania'
                }
              ].map((item, index) => (
                <Card 
                  key={index} 
                  className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover animate-on-scroll delay-{index + 1}"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#b0f33f" colorTo="#b0f33f" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-lime-500/15 to-lime-600/5 border border-lime-500/10 mr-4 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(176,243,63,0.15)] transition-all duration-500">
                        <item.icon className="w-5 h-5 text-lime-400" />
                      </div>
                      <h3 className="text-lg font-bold group-hover:text-lime-50 transition-colors">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </Card>
              ))}
              
              <ShimmerButton className="w-full btn-hover" background="rgba(176, 243, 63, 1)">
                <span className="text-sm font-medium text-black">Book Appointment</span>
              </ShimmerButton>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden animate-on-scroll">
                <div className="h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                  <iframe
                    src={"https://www.google.com/maps?q=" + encodeURIComponent("Romania bragadiru") + "&output=embed"}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative overflow-x-clip pt-8 pb-32">
        <Separator className="border-white/[0.05] mb-8" />
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Flavian ene. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a href="https://instagram.com/e.flav" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.05] hover:bg-lime-500/20 transition-colors">
              <Instagram className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </footer>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden sm:block"><ProgressiveBlur position="bottom" height="250px" /></div><div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden"><ProgressiveBlur position="bottom" height="150px" /></div>
    </>
  );
}