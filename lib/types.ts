export interface Stat {
  label: string;
  value: string;
}

export interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  color: string;
  thumbnail: string;
  videoUrl: string;
  videoType: 'youtube' | 'vimeo';
  stats: Stat[];
  description: string;
  press: string[];
}
