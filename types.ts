
export interface CurriculumModule {
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  learningObjectives: string[];
  curriculum: CurriculumModule[];
  icon: string;
  color: string;
  ageRange: string;
  category: 'Quranic' | 'Technology' | 'Character' | 'Parenting';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string;
  demoVideoId?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}
