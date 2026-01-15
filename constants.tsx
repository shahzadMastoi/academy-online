
import { Course, FAQ, Testimonial } from './types';

export const COLORS = {
  primary: 'emerald',
  secondary: 'sky',
  accent: 'amber',
};

export const COURSES: Course[] = [
  {
    id: 'noorani-qaida',
    title: 'Noorani Qaida',
    description: 'Perfect foundation for beginners to learn Arabic alphabets and phonetics with proper pronunciation.',
    longDescription: 'Our Noorani Qaida course is designed to take students from knowing nothing about the Arabic language to being able to read the Holy Quran fluently. We focus on the foundational building blocks of pronunciation (Makharij) and the basic rules of Tajweed.',
    learningObjectives: [
      "Master the Arabic alphabet and its correct pronunciation",
      "Understand and apply basic vowel marks (Harakat)",
      "Learn the rules of joining letters to form words",
      "Develop the confidence to start reading simple Quranic verses"
    ],
    curriculum: [
      { title: "Introduction to Alphabets", topics: ["Single Letters", "Compound Letters", "Makharij (Articulation Points)"] },
      { title: "Vowels and Signs", topics: ["Fatha, Kasra, Damma", "Tanween", "Standing Vowels"] },
      { title: "Advanced Rules", topics: ["Madd (Prolongation)", "Sukoon", "Shaddah (Doubling)"] }
    ],
    icon: '📖',
    color: 'bg-emerald-100 text-emerald-700',
    ageRange: '4-7 years',
    category: 'Quranic',
    level: 'Beginner',
    duration: '3-6 Months',
    demoVideoId: 'demo1'
  },
  {
    id: 'quran-recitation',
    title: 'Quran Recitation',
    description: 'Master the art of recitation with advanced Tajweed rules and beautiful melodic flow.',
    longDescription: 'This course is for students who have completed Noorani Qaida and wish to improve their recitation skills. We focus on the spiritual and technical aspects of reading the Quran as it was revealed to the Prophet Muhammad (PBUH).',
    learningObjectives: [
      "Apply all Tajweed rules fluently during recitation",
      "Improve the melodic tone and rhythm of reading",
      "Understand common vocabulary found in Juz Amma",
      "Gain a deeper spiritual connection through correct recitation"
    ],
    curriculum: [
      { title: "Advanced Tajweed", topics: ["Rules of Noon Sakinah", "Rules of Meem Sakinah", "Rules of Lam and Ra"] },
      { title: "Melodic Recitation", topics: ["Breath Control", "Proper Pausing (Waqf)", "Melodic Patterns"] }
    ],
    icon: '🎙️',
    color: 'bg-sky-100 text-sky-700',
    ageRange: '7-12 years',
    category: 'Quranic',
    level: 'Intermediate',
    duration: 'Ongoing',
    demoVideoId: 'demo2'
  },
  {
    id: 'hifz-program',
    title: 'Quran Memorization',
    description: 'Structured Hifz tracks with personalized schedules for children of all levels.',
    longDescription: 'Our Hifz Program is a dedicated track for students aiming to memorize the Holy Quran. We provide a structured environment with daily targets, revisions, and assessments to ensure long-term retention of the sacred text.',
    learningObjectives: [
      "Memorize selected Surahs or the entire Quran",
      "Develop strong memorization techniques (Hifdh)",
      "Maintain a consistent revision cycle (Muraja'ah)",
      "Understand the basic meanings of memorized verses"
    ],
    curriculum: [
      { title: "Juz Amma Track", topics: ["Last 30 Surahs", "Proper Pronunciation", "Basic Tafsir"] },
      { title: "Intermediate Track", topics: ["Selected long Surahs", "Advanced Revision Techniques"] }
    ],
    icon: '💎',
    color: 'bg-amber-100 text-amber-700',
    ageRange: '8-15 years',
    category: 'Quranic',
    level: 'Advanced',
    duration: '2-4 Years',
    demoVideoId: 'demo3'
  },
  {
    id: 'ai-tech',
    title: 'AI & Tech for Kids',
    description: 'Future-ready digital literacy focusing on ethical AI, basic coding, and responsible technology.',
    longDescription: 'In a world driven by technology, we empower children to understand and create with AI while remaining grounded in Islamic ethics. This course covers the basics of how machines learn and how we can use tech for good.',
    learningObjectives: [
      "Understand the basics of Artificial Intelligence",
      "Learn to use AI tools ethically and creatively",
      "Develop basic computational thinking skills",
      "Critically analyze the impact of technology on society"
    ],
    curriculum: [
      { title: "Introduction to AI", topics: ["What is AI?", "Daily Life Examples", "Machine Learning Basics"] },
      { title: "Creative Coding", topics: ["Visual Programming", "AI Art & Tools", "Building a Simple Bot"] }
    ],
    icon: '🤖',
    color: 'bg-indigo-100 text-indigo-700',
    ageRange: '9-15 years',
    category: 'Technology',
    level: 'Beginner',
    duration: '3 Months',
    demoVideoId: 'demo4'
  },
  {
    id: 'character-building',
    title: 'Character Building',
    description: 'Nurturing Islamic values (Akhlaq) through storytelling and real-life scenarios.',
    longDescription: 'Nurturing Islamic values (Akhlaq) through storytelling and real-life scenarios. This course focus on building strong moral character based on the Sunnah.',
    learningObjectives: ["Understand Islamic values", "Apply ethics in daily life"],
    curriculum: [{title: "Basics of Akhlaq", topics: ["Honesty", "Respect"]}],
    icon: '🌱',
    color: 'bg-rose-100 text-rose-700',
    ageRange: '5-12 years',
    category: 'Character',
    level: 'All Levels',
    duration: 'Ongoing'
  },
  {
    id: 'social-ethics',
    title: 'Social Life Ethics',
    description: 'Learning Adab, respect, and emotional intelligence in a modern social context.',
    longDescription: 'Learning Adab, respect, and emotional intelligence in a modern social context. Preparing kids for positive social interactions.',
    learningObjectives: ["Social skills in Islam", "Digital etiquette"],
    curriculum: [{title: "Social Interactions", topics: ["Greeting", "Neighbor rights"]}],
    icon: '🤝',
    color: 'bg-violet-100 text-violet-700',
    ageRange: '7-15 years',
    category: 'Character',
    level: 'Intermediate',
    duration: '4 Months'
  },
  {
    id: 'parenting-guidance',
    title: 'Parenting Guidance',
    description: 'Special workshops for parents on Islamic Tarbiyah and child psychology.',
    longDescription: 'Special workshops for parents on Islamic Tarbiyah and child psychology. Empowering parents to lead their homes with wisdom.',
    learningObjectives: ["Islamic parenting techniques", "Child psychology"],
    curriculum: [{title: "Parenting Basics", topics: ["Emotional connection", "Discipline"]}],
    icon: '👪',
    color: 'bg-teal-100 text-teal-700',
    ageRange: 'Parents',
    category: 'Parenting',
    level: 'All Levels',
    duration: 'Workshops'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Ahmed',
    location: 'London, UK',
    text: 'The teachers are so patient! My daughter used to struggle with Arabic, but now she looks forward to every session at NoorLearn.',
    rating: 5
  },
  {
    id: '2',
    name: 'Omar Farooq',
    location: 'Toronto, Canada',
    text: 'I appreciate the blend of Quranic studies with modern tech. It keeps my son engaged while grounding him in his values.',
    rating: 5
  },
  {
    id: '3',
    name: 'Aisha Malik',
    location: 'Dubai, UAE',
    text: 'The parenting workshops have been a game-changer for our family dynamics. Truly a holistic academy.',
    rating: 4
  }
];

export const FAQS: FAQ[] = [
  {
    question: "What is the minimum age for enrollment?",
    answer: "We welcome children as young as 4 years old for our Noorani Qaida foundation course. Our curriculum is tailored for kids up to 15 years."
  },
  {
    question: "How do online classes work?",
    answer: "Classes are conducted live via our secure, high-definition video platform. Students and teachers interact in real-time with digital whiteboards and interactive tools."
  },
  {
    question: "Are the teachers qualified?",
    answer: "Yes, all our teachers undergo a rigorous vetting process. They are certified (Ijazah holders) and trained specifically in child pedagogy and online teaching methods."
  },
  {
    question: "Can I choose my child's class timings?",
    answer: "Absolutely! We offer flexible scheduling to accommodate families across different time zones worldwide. You can discuss preferred timings during your free consultation."
  },
  {
    question: "Is there a free trial session?",
    answer: "Yes, we offer a 30-minute free trial session and consultation to assess your child's level and discuss learning goals."
  }
];
