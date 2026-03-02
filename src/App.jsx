import { useState, useEffect, useRef } from 'react';
import { Menu, X, MessageCircle, Calendar, Mail, MapPin, Phone, Star, User, Code, Palette, Zap, ArrowRight, Instagram } from 'lucide-react';
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
  const observerRef = useRef();

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Work' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const stats = [
    { value: 10, suffix: '+', label: 'Years Experience' },
    { value: 350, suffix: '+', label: 'Projects Completed' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 24, suffix: '/7', label: 'Support Available' }
  ];

  const services = [
    {
      title: 'Web Design',
      description: 'Beautiful, responsive websites that convert visitors into customers.',
      price: '$1,200',
      features: ['UI/UX Design', 'Responsive Layouts', 'Brand Integration']
    },
    {
      title: 'Frontend Development',
      description: 'Modern, interactive interfaces built with cutting-edge technologies.',
      price: '$2,500',
      features: ['React/Vue.js', 'Performance Optimization', 'Cross-browser Compatibility']
    },
    {
      title: 'Backend Development',
      description: 'Robust server-side solutions that power your digital products.',
      price: '$3,000',
      features: ['Node.js/PHP', 'Database Design', 'API Integration']
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration and inventory management.',
      price: '$4,500',
      features: ['Shopify/WooCommerce', 'Payment Gateways', 'SEO Optimization']
    }
  ];

  const portfolioItems = [
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online store with payment integration',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Corporate Website',
      description: 'Modern, responsive site for a growing business',
      tags: ['WordPress', 'PHP', 'CSS']
    },
    {
      title: 'Portfolio Site',
      description: 'Creative showcase for artists and designers',
      tags: ['Vue.js', 'Figma', 'Tailwind']
    },
    {
      title: 'SaaS Dashboard',
      description: 'User-friendly interface for complex applications',
      tags: ['React', 'TypeScript', 'D3.js']
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: 'Marketing Director',
      quote: 'Flavian delivered our website ahead of schedule and exceeded our expectations. The attention to detail was impressive.',
      avatar: '/assets/people/boy_1.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'Startup Founder',
      quote: 'Working with Flavian was smooth and efficient. He understood our needs and translated them into a beautiful, functional site.',
      avatar: '/assets/people/girl_1.jpg'
    },
    {
      name: 'Michael Brown',
      role: 'CEO',
      quote: 'I\'ve hired several developers before, but Flavian stands out for his professionalism and quality of work. Highly recommended!',
      avatar: '/assets/people/boy_1.jpg'
    }
  ];

  const faqItems = [
    {
      question: 'How long does a typical project take?',
      answer: 'Most projects are completed within 3-6 weeks depending on complexity and scope.'
    },
    {
      question: 'What is your development process?',
      answer: 'I begin with discovery, followed by design, development, testing, and launch phases to ensure quality.'
    },
    {
      question: 'Do you offer ongoing support after project completion?',
      answer: 'Yes, I provide maintenance packages for continued website performance and updates.'
    },
    {
      question: 'Can you work with existing designs or mockups?',
      answer: 'Absolutely. I can implement any design or mockup into a fully functional website.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'My expertise includes React, Vue.js, Node.js, PHP, WordPress, and various CMS platforms.'
    },
    {
      question: 'How do we communicate during a project?',
      answer: 'We\'ll establish clear communication channels through email, WhatsApp, or video calls as needed.'
    },
    {
      question: 'What sets your approach apart from others?',
      answer: 'I focus on understanding client needs deeply and creating solutions that exceed expectations while maintaining quality.'
    }
  ];

  const whyUsItems = [
    {
      title: 'Expert Team',
      description: 'Seasoned professionals with proven track records in digital excellence.',
      icon: <Palette className="w-6 h-6 text-lime-400" />
    },
    {
      title: 'Innovative Solutions',
      description: 'Cutting-edge approaches that push boundaries and deliver results.',
      icon: <Code className="w-6 h-6 text-lime-400" />
    },
    {
      title: 'Client Focus',
      description: 'Every project is tailored to your specific business goals and vision.',
      icon: <User className="w-6 h-6 text-lime-400" />
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and optimization for flawless performance.',
      icon: <Zap className="w-6 h-6 text-lime-400" />
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
                  className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.05] transition-colors"
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

      <section id="hero" className="pt-40 pb-24 sm:pt-48 sm:pb-32 min-h-screen flex items-center relative overflow-x-clip">
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
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm mb-8 animate-on-scroll hero-delay-1">
              <AnimatedShinyText className="text-sm font-medium">Crafting digital excellence</AnimatedShinyText>
            </div>
            
            <h1 className="hero-blur hero-delay-2 max-w-4xl mx-auto text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8 animate-on-scroll">
              <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">Crafting digital excellence</span>
            </h1>
            
            <p className="hero-blur hero-delay-3 text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-on-scroll">
              I design and develop websites that are both fast and luxurious. With over a decade of experience, I bring your vision to life with precision and creativity.
            </p>
            
            <div className="hero-blur hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-on-scroll">
              <ShimmerButton className="shadow-2xl btn-hover" background="rgba(176,243,63, 1)">
                <span className="text-sm font-medium text-black">Book Appointment</span>
              </ShimmerButton>
              <Button 
                variant="outline" 
                className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact via WhatsApp
              </Button>
            </div>
            
            <div className="hero-blur hero-delay-5 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 animate-on-scroll">
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
          <div className="text-center mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Who I am</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              I'm Flavian ene, a passionate designer and developer based in Bragadiru, Romania. My work combines aesthetic design with functional development to create exceptional digital experiences.
            </p>
          </div>
          
          <div className="mb-16 animate-on-scroll">
            <p className="text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My approach is rooted in understanding client needs and translating them into visually stunning and highly functional solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll delay-1">
            {[
              { icon: User, title: 'Personal Touch', description: 'Every project is crafted with personal attention' },
              { icon: Palette, title: 'Design Excellence', description: 'Beautiful interfaces that delight users' },
              { icon: Code, title: 'Technical Precision', description: 'Clean code that performs flawlessly' },
              { icon: Zap, title: 'Fast Delivery', description: 'Quick turnaround without compromising quality' }
            ].map((item, index) => (
              <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={120} duration={20} delay={index * 1.5} colorFrom="#b0f33f" colorTo="#b0f33f" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-lime-500/15 to-lime-600/5 border border-lime-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(176,243,63,0.15)] transition-all duration-500">
                      <item.icon className="w-6 h-6 text-lime-400" />
                    </div>
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
          <div className="text-center mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">My Services</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Comprehensive digital solutions tailored to your business needs and goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll delay-1">
            {services.map((service, index) => (
              <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#b0f33f" colorTo="#b0f33f" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-lime-50 transition-colors">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Separator className="my-4" />
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-black bg-gradient-to-r from-lime-300 to-lime-500 bg-clip-text text-transparent">
                      {service.price}
                    </span>
                    <ShimmerButton className="shadow-lg btn-hover" background="rgba(176,243,63, 1)">
                      <span className="text-xs font-medium">Get Started</span>
                    </ShimmerButton>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-lime-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">My work speaks volumes</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Here are some of my recent projects that showcase my design and development capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll delay-1">
            {portfolioItems.map((project, index) => (
              <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {index === 0 && (
                  <BorderBeam size={80} duration={20} delay={0} colorFrom="#b0f33f" colorTo="#b0f33f" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
                <div className="relative p-8">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-lime-50 transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} className="bg-lime-500/10 text-lime-400 border-lime-500/20 text-xs">
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

      <section id="testimonials" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-lime-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-lime-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">What people say about working with me</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Don't just take my word for it — hear from clients who've experienced my work firsthand.
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover mx-4 min-w-[300px] max-w-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8">
                    <div className="flex items-center mb-4">
                      <Avatar className="w-12 h-12 mr-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-lime-400 text-lime-400" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
                  </div>
                </Card>
              ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          </div>
        </div>
      </section>

      <section id="why-us" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 left-0 w-72 h-72 bg-lime-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Why Choose Me</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              The factors that make me the ideal partner for your digital projects.
            </p>
          </div>
          
          <BentoGrid className="lg:grid-rows-2">
            {whyUsItems.map((item, index) => (
              <BentoCard 
                key={index}
                className="group relative bg-white/[0.02] border-white/[0.05] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-lime-500/20 transition-all duration-500 card-hover hover:border-lime-500/20"
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                }
              >
                <div className="flex flex-col items-start p-6 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-lime-500/15 to-lime-600/5 border border-lime-500/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(176,243,63,0.15)] transition-all duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-lime-50 transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground flex-grow">{item.description}</p>
                </div>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </section>

      <section id="faq" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 left-0 w-72 h-72 bg-lime-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Frequently asked questions</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Answers to common questions about my services and working process.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full animate-on-scroll delay-1">
            {faqItems.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/[0.05] mb-4 rounded-xl">
                <AccordionTrigger className="text-left py-4 px-6 hover:bg-white/[0.02] transition-colors duration-200 rounded-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-lime-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Let's build something together</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Ready to elevate your digital presence? Get in touch today for a free consultation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 animate-on-scroll delay-1">
            <div className="space-y-6">
              {[
                { icon: Mail, title: 'Email', content: 'office@eflavian.com' },
                { icon: Phone, title: 'Phone', content: '757 289 370' },
                { icon: MapPin, title: 'Location', content: 'Bragadiru, Romania' }
              ].map((item, index) => (
                <Card key={index} className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm rounded-2xl">
                  <div className="p-6 flex items-start">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-lime-500/15 to-lime-600/5 border border-lime-500/10 flex items-center justify-center mr-4">
                      <item.icon className="w-6 h-6 text-lime-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.content}</p>
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
                <Button 
                  variant="outline" 
                  className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
                <Button 
                  variant="outline" 
                  className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden h-[350px] sm:h-[400px] lg:h-[500px]">
              <iframe 
                src={"https://www.google.com/maps?q=" + encodeURIComponent("Romania bragadiru") + "&output=embed"} 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative pt-8 pb-32">
        <Separator className="mb-8" />
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Flavian ene. All rights reserved.</p>
          <div className="flex gap-3 mt-4 sm:mt-0">
            <a href="https://instagram.com/e.flav" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-white/[0.1] transition-colors">
              <Instagram className="w-5 h-5 text-lime-400" />
            </a>
          </div>
        </div>
      </footer>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden sm:block"><ProgressiveBlur position="bottom" height="250px" /></div><div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden"><ProgressiveBlur position="bottom" height="150px" /></div>
    </>
  );
};

export default App;
