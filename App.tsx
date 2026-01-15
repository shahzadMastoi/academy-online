
import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Star,
  CheckCircle2,
  MessageCircle,
  Monitor,
  ArrowLeft,
  ArrowRight,
  Play,
  Shield,
  Award,
  ChevronDown,
  Lock,
  ThumbsUp,
  UserCheck,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';
import { COURSES, FAQS, TESTIMONIALS } from './constants';
import TarbiyahAssistant from './components/TarbiyahAssistant';

// --- Navbar Component ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'For Parents', path: '/parents' },
    { name: 'Contact', path: '/contact' },
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-600 rounded-lg md:rounded-xl flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg shadow-emerald-200 group-hover:rotate-6 transition-transform">N</div>
              <span className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">NoorLearn<span className="text-emerald-600">Academy</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold transition-all relative py-1 ${
                  location.pathname === link.path ? 'text-emerald-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-600' : 'text-slate-500 hover:text-emerald-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={openWhatsApp}
              className="bg-emerald-600 text-white px-5 lg:px-6 py-2 rounded-full font-bold text-sm hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 flex items-center whitespace-nowrap"
            >
              <MessageCircle size={16} className="mr-2" />
              Enroll
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2 hover:bg-slate-50 rounded-lg transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-emerald-50 px-4 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-bold px-2 py-2 rounded-xl ${
                location.pathname === link.path ? 'bg-emerald-50 text-emerald-600' : 'text-slate-700 hover:text-emerald-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={openWhatsApp}
            className="w-full bg-emerald-600 text-white px-6 py-4 rounded-2xl font-bold flex items-center justify-center mt-4 active:scale-95 transition-transform"
          >
            <MessageCircle size={20} className="mr-2" />
            WhatsApp Enrollment
          </button>
        </div>
      )}
    </nav>
  );
};

// --- Footer Component ---
const Footer = () => (
  <footer className="bg-slate-950 text-slate-300 pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-amber-500 opacity-50"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-12 md:mb-20">
        <div>
          <div className="flex items-center space-x-2 mb-6 md:mb-8">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-500 rounded-lg md:rounded-xl flex items-center justify-center text-white font-bold">N</div>
            <span className="text-xl md:text-2xl font-bold text-white">NoorLearn</span>
          </div>
          <p className="text-slate-400 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
            Guiding your child's journey through Quranic wisdom and modern excellence with care and professional integrity.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:bg-emerald-600 hover:text-white transition-all transform hover:-translate-y-1"><Facebook size={18} /></a>
            <a href="#" className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:bg-emerald-600 hover:text-white transition-all transform hover:-translate-y-1"><Instagram size={18} /></a>
            <a href="#" className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:bg-emerald-600 hover:text-white transition-all transform hover:-translate-y-1"><Twitter size={18} /></a>
          </div>
        </div>
        
        <div className="sm:pl-10 lg:pl-0">
          <h4 className="text-white font-bold text-base md:text-lg mb-6 md:mb-8">Navigation</h4>
          <ul className="space-y-3 md:space-y-4">
            <li><Link to="/about" className="hover:text-emerald-400 transition-colors flex items-center text-sm md:text-base"><ChevronRight size={14} className="mr-2 opacity-50" /> About Us</Link></li>
            <li><Link to="/courses" className="hover:text-emerald-400 transition-colors flex items-center text-sm md:text-base"><ChevronRight size={14} className="mr-2 opacity-50" /> All Courses</Link></li>
            <li><Link to="/parents" className="hover:text-emerald-400 transition-colors flex items-center text-sm md:text-base"><ChevronRight size={14} className="mr-2 opacity-50" /> For Parents</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-400 transition-colors flex items-center text-sm md:text-base"><ChevronRight size={14} className="mr-2 opacity-50" /> Support Desk</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-base md:text-lg mb-6 md:mb-8">Tracks</h4>
          <ul className="space-y-3 md:space-y-4">
            {COURSES.slice(0, 4).map(c => (
              <li key={c.id}><Link to={`/course/${c.id}`} className="hover:text-emerald-400 transition-colors flex items-center text-sm md:text-base"><ChevronRight size={14} className="mr-2 opacity-50" /> {c.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-base md:text-lg mb-6 md:mb-8">Contact</h4>
          <ul className="space-y-4 md:space-y-6">
            <li className="flex items-start space-x-3 md:space-x-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400"><Mail size={18} /></div>
              <div>
                <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Inquiry</p>
                <p className="text-white font-medium text-sm md:text-base">hello@noorlearn.com</p>
              </div>
            </li>
            <li className="flex items-start space-x-3 md:space-x-4">
              <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400"><Phone size={18} /></div>
              <div>
                <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Global Support</p>
                <p className="text-white font-medium text-sm md:text-base">+1 (234) 567-890</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 md:pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-slate-500 space-y-4 md:space-y-0">
        <p className="text-center md:text-left">© 2024 NoorLearn Academy. Excellence in Islamic Online Education.</p>
        <div className="flex space-x-6 md:space-x-8">
          <Link to="/contact" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-slate-300 transition-colors">Terms</Link>
        </div>
      </div>
    </div>
  </footer>
);

// --- Hero Slider / Class Gallery Component ---
const ClassGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  
  const images = [
    { url: 'https://images.unsplash.com/photo-1577891721396-227d3470199e?auto=format&fit=crop&q=80&w=1200', title: 'Engaging Recitation', desc: '1-on-1 focus with qualified scholars' },
    { url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200', title: 'Interactive Learning', desc: 'Gamified curriculum for younger kids' },
    { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200', title: 'Future-Ready Tech', desc: 'Ethical AI & Technology classes' },
    { url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200', title: 'Live Virtual Halls', desc: 'Global community of young seekers' },
    { url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1200', title: 'Modern Methodology', desc: 'Digital whiteboards and smart tools' }
  ];

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section className="py-16 md:py-24 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-16">
        <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
            <Monitor size={14} /> <span>Virtual Campus</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 tracking-tight">Life at <span className="text-emerald-600">NoorLearn</span></h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">Experience a classroom designed for the 21st century child. Interactive, soulful, and globally connected.</p>
        </div>
      </div>

      <div 
        className="relative w-full overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="w-full flex-shrink-0 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative aspect-video md:aspect-[21/9] w-full rounded-[1.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white ring-1 ring-slate-100">
                  <img 
                    src={img.url} 
                    className="w-full h-full object-cover select-none" 
                    alt={img.title} 
                    loading="lazy"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-12 lg:p-20">
                    <div className="max-w-2xl transform transition-all duration-700">
                      <h3 className="text-white text-xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 drop-shadow-lg">{img.title}</h3>
                      <p className="text-emerald-300 text-xs md:text-lg lg:text-xl font-medium drop-shadow-md">{img.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <button 
            onClick={prevSlide}
            className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all z-20 shadow-xl opacity-0 group-hover:opacity-100"
            aria-label="Previous slide"
          >
            <ArrowLeft size={32} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-md text-white rounded-full items-center justify-center hover:bg-emerald-600 transition-all z-20 shadow-xl opacity-0 group-hover:opacity-100 flex"
            aria-label="Next slide"
          >
            <ArrowRight size={32} />
          </button>
        </div>

        <div className="flex justify-center space-x-2 md:space-x-3 mt-8 md:mt-12 px-4">
          {images.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 md:h-2 transition-all duration-500 rounded-full ${activeIndex === i ? 'w-8 md:w-12 bg-emerald-600' : 'w-1.5 md:w-2 bg-slate-200 hover:bg-slate-300'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <div className="overflow-hidden">
      <section className="relative pt-10 md:pt-24 pb-16 md:pb-32 bg-gradient-to-br from-emerald-50 via-white to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative z-10 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider mb-6">Global Islamic Academy</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">Nurturing Young Minds with <span className="text-emerald-600 font-arabic">Akhlaq</span> & Modern Skills</h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">The premier online destination for Quranic excellence and future-ready technology education for the next generation.</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <button onClick={openWhatsApp} className="px-8 md:px-10 py-4 md:py-5 bg-emerald-600 text-white rounded-2xl md:rounded-[2rem] font-bold text-base md:text-lg hover:bg-emerald-700 shadow-2xl shadow-emerald-200 transform hover:-translate-y-1 transition-all flex items-center justify-center active:scale-95">Free Consultation <ChevronRight className="ml-2" size={20} /></button>
                <Link to="/courses" className="px-8 md:px-10 py-4 md:py-5 bg-white text-slate-700 border border-slate-200 rounded-2xl md:rounded-[2rem] font-bold text-base md:text-lg hover:bg-slate-50 transition-all text-center active:scale-95">Explore Programs</Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" className="rounded-[2.5rem] md:rounded-[4rem] shadow-3xl w-full object-cover aspect-square border-4 md:border-8 border-white ring-1 ring-slate-100" alt="Learning" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 md:py-12 border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[{v:'50+',l:'Countries'},{v:'100k+',l:'Classes'},{v:'100%',l:'Safe Space'},{v:'4.9/5',l:'Rating'}].map((s,i)=>(
              <div key={i}>
                <p className="text-2xl md:text-3xl font-black text-slate-900 mb-1">{s.v}</p>
                <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClassGallery />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12 md:mb-20 px-4">
             <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 tracking-tight">Excellence Tracks</h2>
             <p className="text-base md:text-lg text-slate-600">Structured paths for every level of development.</p>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {COURSES.slice(0, 4).map(c => (
                <Link to={`/course/${c.id}`} key={c.id} className="group p-8 md:p-10 bg-slate-50 border border-slate-100 rounded-[1.5rem] md:rounded-[3rem] hover:bg-white hover:border-emerald-200 hover:shadow-2xl transition-all duration-500 flex flex-col">
                  <div className={`w-14 h-14 md:w-16 md:h-16 ${c.color} rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-6 md:mb-10 group-hover:scale-110 transition-transform shadow-sm`}>{c.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-emerald-600 transition-colors">{c.title}</h3>
                  <p className="text-slate-500 text-sm md:text-base mb-8 md:mb-10 line-clamp-2 flex-grow leading-relaxed">{c.description}</p>
                  <span className="text-emerald-600 font-bold flex items-center text-sm">See Tracks <ChevronRight size={16} className="ml-1" /></span>
                </Link>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

// --- Other Basic Page Components ---
const AboutPage = () => (
  <div className="py-24 px-4 max-w-7xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8">Who We Are</h1>
    <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">NoorLearn Academy is dedicated to blending traditional Islamic wisdom with modern pedagogical excellence.</p>
  </div>
);

const CoursesPage = () => (
  <div className="py-24 px-4 max-w-7xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-12">Academic Catalog</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {COURSES.map(c => (
        <Link to={`/course/${c.id}`} key={c.id} className="p-8 bg-slate-50 rounded-3xl border hover:shadow-xl transition-all">
          <div className="text-4xl mb-4">{c.icon}</div>
          <h3 className="text-xl font-bold mb-2">{c.title}</h3>
          <p className="text-slate-600 text-sm">{c.description}</p>
        </Link>
      ))}
    </div>
  </div>
);

const ContactPage = () => (
  <div className="py-24 px-4 text-center max-w-7xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8">Contact Us</h1>
    <button onClick={() => window.open('https://wa.me/1234567890')} className="bg-emerald-600 text-white px-12 py-5 rounded-3xl font-bold text-xl shadow-xl">WhatsApp Inquiry</button>
  </div>
);

// --- Course Details Page Component ---
const CourseDetailsPage = () => {
  const { id } = useParams();
  const course = COURSES.find(c => c.id === id);

  if (!course) {
    return (
      <div className="py-24 px-4 text-center min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Course not found</h2>
        <Link to="/courses" className="text-emerald-600 font-bold hover:underline flex items-center">
          <ArrowLeft size={18} className="mr-2" /> Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-10 md:pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/courses" className="inline-flex items-center text-slate-500 hover:text-emerald-600 mb-8 transition-colors font-bold text-sm uppercase tracking-widest">
          <ArrowLeft size={16} className="mr-2" /> Back to Catalog
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          <div className="lg:col-span-2">
            <div className={`w-20 h-20 ${course.color} rounded-3xl flex items-center justify-center text-4xl mb-8 shadow-sm`}>
              {course.icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">{course.title}</h1>
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="px-4 py-1.5 bg-slate-100 rounded-full text-xs font-bold text-slate-600 uppercase tracking-wider">{course.category}</span>
              <span className="px-4 py-1.5 bg-emerald-50 rounded-full text-xs font-bold text-emerald-700 uppercase tracking-wider">{course.level}</span>
              <span className="px-4 py-1.5 bg-sky-50 rounded-full text-xs font-bold text-sky-700 uppercase tracking-wider">{course.duration}</span>
              <span className="px-4 py-1.5 bg-amber-50 rounded-full text-xs font-bold text-amber-700 uppercase tracking-wider">{course.ageRange}</span>
            </div>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
              {course.longDescription}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
              <span className="w-8 h-8 bg-emerald-600 text-white rounded-lg flex items-center justify-center mr-4 text-sm">01</span>
              Learning Objectives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              {course.learningObjectives.map((obj, i) => (
                <div key={i} className="flex items-start space-x-3 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                  <CheckCircle2 className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700 font-semibold">{obj}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
              <span className="w-8 h-8 bg-emerald-600 text-white rounded-lg flex items-center justify-center mr-4 text-sm">02</span>
              Course Curriculum
            </h2>
            <div className="space-y-6">
              {course.curriculum.map((module, i) => (
                <div key={i} className="border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-white border-b border-slate-50 p-6 md:p-8">
                    <h3 className="text-xl font-bold text-slate-900">{module.title}</h3>
                  </div>
                  <div className="p-6 md:p-8 bg-slate-50/50">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {module.topics.map((topic, j) => (
                        <li key={j} className="flex items-center text-slate-600 bg-white p-4 rounded-xl border border-slate-50">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-4 flex-shrink-0" />
                          <span className="font-medium">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-white border border-slate-100 rounded-[3rem] p-8 md:p-10 shadow-2xl shadow-emerald-900/5">
              <h3 className="text-2xl font-bold mb-6">Start Learning</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">Secure your child's spot in our next intake. Classes are 1-on-1 and tailored to their pace.</p>
              
              <div className="space-y-5 mb-10 pb-10 border-b border-slate-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 font-medium">Est. Duration</span>
                  <span className="font-bold text-slate-900">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 font-medium">Difficulty</span>
                  <span className="font-bold text-slate-900">{course.level}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 font-medium">Certificate</span>
                  <span className="font-bold text-emerald-600">Included</span>
                </div>
              </div>

              <button 
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 shadow-xl shadow-emerald-200 transition-all active:scale-95 mb-6 flex items-center justify-center"
              >
                <MessageCircle size={20} className="mr-2" /> Enroll Now
              </button>
              <div className="flex items-center justify-center space-x-2 text-slate-400">
                <Shield size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Money back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/parents" element={<div className="py-24 px-4 max-w-7xl mx-auto"><h1 className="text-4xl font-bold">For Parents</h1></div>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/course/:id" element={<CourseDetailsPage />} />
        </Routes>
      </main>
      <Footer />
      <TarbiyahAssistant />
    </div>
  );
}

const AppWrapper = () => <Router><App /></Router>;
export default AppWrapper;
