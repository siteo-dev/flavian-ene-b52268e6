import { useState, useEffect, useRef } from 'react';
import { Menu, X, MessageCircle, Calendar, Mail, MapPin, Phone, Star, ChevronRight } from 'lucide-react';
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
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const stats = [
    { value: 10, suffix: '+', label: 'Years experience' },
    { value: 350, suffix: '+', label: 'Projects completed' },
    { value: 400, suffix: '+', label: 'Happy clients' },
    { value: 24, suffix: '/7', label: 'Support availability' }
  ];

  const services = [
    {
      title: 'Web Design',
      description: 'Beautiful, responsive websites that convert visitors into customers.',
      price: 1200,
      icon: '🎨'
    },
    {
      title: 'Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      price: 2500,
      icon: '💻'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that enhances engagement and improves usability.',
      price: 1800,
      icon: '📱'
    },
    {
      title: 'Maintenance',
      description: 'Ongoing support to keep your website running smoothly and securely.',
      price: 300,
      icon: '🔧'
    }
  ];

  const portfolioItems = [
    {
      title: 'E-commerce platform',
      description: 'Modern shopping experience',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Corporate website',
      description: 'Professional branding implementation',
      tags: ['Vue.js', 'CSS3', 'Responsive']
    },
    {
      title: 'Mobile app UI',
      description: 'User-centric interface design',
      tags: ['Figma', 'UI/UX', 'Mobile']
    },
    {
      title: 'Dashboard design',
      description: 'Data visualization solutions',
      tags: ['React', 'D3.js', 'Analytics']
    }
  ];

  const experienceItems = [
    {
      role: 'Senior Designer',
      company: 'Creative Studio',
      period: '2020-2022',
      description: 'Led design projects for major clients'
    },
    {
      role: 'Frontend Developer',
      company: 'Tech Solutions',
      period: '2018-2020',
      description: 'Built responsive web applications'
    },
    {
      role: 'UI/UX Designer',
      company: 'Digital Agency',
      period: '2016-2018',
      description: 'Created user-centered designs'
    }
  ];

  const testimonials = [
    {
      name: 'Alexandra M.',
      role: 'F',
      quote: 'Flavian delivered our website ahead of schedule. The design was exactly what we envisioned.'
    },
    {
      name: 'Mihai R.',
      role: 'M',
      quote: 'Working with Flavian was smooth from start to finish. His attention to detail is remarkable.'
    },
    {
      name: 'Ioana S.',
      role: 'F',
      quote: 'The website transformed our online presence. Clients love the modern, fast-loading interface.'
    }
  ];

  const faqItems = [
    {
      question: 'How long does a typical project take?',
      answer: 'Most projects are completed within 2-4 weeks depending on complexity and requirements.'
    },
    {
      question: 'What is your development process?',
      answer: 'I follow an agile methodology with regular checkpoints and client feedback integration.'
    },
    {
      question: 'Do you offer ongoing support after launch?',
      answer: 'Yes, I provide maintenance packages that include updates, security patches, and performance optimization.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'I work primarily with modern web technologies including React, Vue.js, Node.js, and responsive design frameworks.'
    },
    {
      question: 'Can you work on international projects?',
      answer: 'Absolutely. I\'ve worked with clients from multiple countries and adapt to different time zones.'
    },
    {
      question: 'What\'s your pricing structure?',
      answer: 'Pricing varies based on project scope but my standard web design service is 500 RON.'
    }
  ];

  const handleResize = () => {
    setIsMobile(window.innerWidth < 640);
  };

  useEffect(() => {
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
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
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
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
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); setIsMenuOpen(false); }}
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
            <div className="text-center max-w-4xl mx-auto">
              <div className="hero-blur hero-delay-1 mb-6">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
                  <AnimatedShinyText className="text-sm font-medium">Creative Digital Solutions</AnimatedShinyText>
                </div>
              </div>
              
              <h1 className="hero-blur hero-delay-2 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
                <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                  Crafting digital excellence
                </span>
              </h1>
              
              <p className="hero-blur hero-delay-3 text-lg text-muted-foreground max-w-xl mx-auto mb-12">
                I design and develop websites that are both fast and luxurious. My work combines modern aesthetics with technical precision to deliver exceptional user experiences.
              </p>
              
              <div className="hero-blur hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <ShimmerButton 
                  className="shadow-2xl btn-hover"
                  background="rgba(176,243,63, 1)"
                >
                  <span className="text-sm font-medium text-black">Book Appointment</span>
                </ShimmerButton>
                
                <Button 
                  variant="outline" 
                  className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Me
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
        <section id="about" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
          <div className="absolute top-0 left-0 w-72 h-72 bg-lime-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-lime-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Building digital dreams
              </h2>
              <p className="text-lg text-muted-foreground">
                I'm a designer and developer based in Bragadiru, Romania. My passion lies in creating beautiful, functional websites that exceed client expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-on-scroll">
              {[
                { title: 'Fast development process', icon: '⚡' },
                { title: 'Luxury design approach', icon: '✨' },
                { title: 'Client-focused solutions', icon: '👥' },
                { title: 'Modern technology stack', icon: '🔧' }
              ].map((item, index) => (
                <Card 
                  key={index} 
                  className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <BorderBeam size={120} duration={20} delay={index * 1.5} colorFrom="#b0f33f" colorTo="#b0f33f" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-lime-500/15 to-lime-600/5 border border-lime-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(176,243,63,0.15)] transition-all duration-500">
                        <span className="text-xl">{item.icon}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-lime-50 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-lime-500/[0.06] rounded-full blur-[130px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Services I offer
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive digital solutions tailored to your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#b0f33f" colorTo="#b0f33f" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-lime-500/15 to-lime-600/5 border border-lime-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(176,243,63,0.15)] transition-all duration-500">
                        <span className="text-xl">{service.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-lime-50 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <Separator className="mb-6" />
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-black bg-gradient-to-r from-lime-300 to-lime-500 bg-clip-text text-transparent">
                        {service.price} RON
                      </span>
                      <ShimmerButton 
                        className="shadow-2xl btn-hover"
                        background="rgba(176,243,63, 1)"
                      >
                        <span className="text-sm font-medium text-black">Get Started</span>
                      </ShimmerButton>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-lime-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Career journey
              </h2>
              <p className="text-lg text-muted-foreground">
                My professional background in both design and development allows me to bridge the gap between creative vision and technical execution.
              </p>
            </div>
            
            <div className="space-y-6 animate-on-scroll">
              {experienceItems.map((exp, index) => (
                <Card 
                  key={index} 
                  className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-lime-50 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-lime-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <Badge className="bg-lime-500/10 text-lime-400 border-lime-500/20">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-lime-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-lime-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Client feedback
              </h2>
              <p className="text-lg text-muted-foreground">
                What people I've worked with say about collaborating with me.
              </p>
            </div>
            
            <div className="relative max-w-6xl mx-auto overflow-hidden">
              <Marquee pauseOnHover className="[--duration:30s]">
                {testimonials.map((testimonial, index) => (
                  <Card 
                    key={index} 
                    className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover mx-4 max-w-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage 
                            src={`/assets/people/${testimonial.role === 'M' ? 'boy_1.jpg' : 'girl_1.jpg'}`} 
                            alt={testimonial.name} 
                          />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <div className="flex items-center gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-lime-400 text-lime-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground italic">
                        "{testimonial.quote}"
                      </p>
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
        <section id="portfolio" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
          <div className="absolute top-1/3 left-0 w-72 h-72 bg-lime-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Featured projects
              </h2>
              <p className="text-lg text-muted-foreground">
                A selection of my recent work showcasing design and development capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
              {portfolioItems.map((project, index) => (
                <Card 
                  key={index} 
                  className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {index === 0 && (
                    <BorderBeam size={80} duration={20} delay={0} colorFrom="#b0f33f" colorTo="#b0f33f" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  )}
                  <div className="relative p-8">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-lime-50 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          className="bg-lime-500/10 text-lime-400 border-lime-500/20"
                        >
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

        {/* FAQ Section */}
        <section id="faq" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
          <div className="absolute top-0 left-0 w-72 h-72 bg-lime-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Frequently asked questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Common queries about working with me and my services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto animate-on-scroll">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border-white/[0.05] rounded-xl mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:bg-white/[0.02] transition-colors duration-200">
                      <span className="text-left">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
          <div className="absolute top-1/3 left-0 w-72 h-72 bg-lime-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Let's build something together
              </h2>
              <p className="text-lg text-muted-foreground">
                Reach out to discuss your next digital project. I'm ready to help bring your vision to life.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 animate-on-scroll">
              <div className="space-y-8">
                {[
                  { icon: Mail, label: 'Email', value: 'office@eflavian.com' },
                  { icon: Phone, label: 'Phone', value: '757289370' },
                  { icon: MapPin, label: 'Location', value: 'Bragadiru, Romania' }
                ].map((item, index) => (
                  <Card 
                    key={index} 
                    className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-lime-500/15 to-lime-600/5 border border-lime-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(176,243,63,0.15)] transition-all duration-500">
                          <item.icon className="w-5 h-5 text-lime-400" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">{item.label}</h3>
                          <p className="text-muted-foreground">{item.value}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="outline" 
                    className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  
                  <ShimmerButton 
                    className="shadow-2xl btn-hover"
                    background="rgba(176,243,63, 1)"
                  >
                    <span className="text-sm font-medium text-black">Book Appointment</span>
                  </ShimmerButton>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <Card className="bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden h-[500px]">
                  <div className="h-full w-full">
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
      </main>

      {/* Footer */}
      <footer className="relative pt-16 pb-32">
        <Separator className="mb-8" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Flavian ene. All rights reserved.
            </p>
            
            <div className="flex gap-3">
              <a 
                href="https://instagram.com/e.flav" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-lime-500/10 transition-colors duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden sm:block">
          <ProgressiveBlur position="bottom" height="250px" />
        </div>
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden">
          <ProgressiveBlur position="bottom" height="150px" />
        </div>
      </footer>
    </>
  );
};

export default App;
