export type ProjectType = 'subnet' | 'packet' | 'etl' | 'serial' | 'helpdesk' | 'inventory' | 'schedule' | 'cyber';

export type ProjectConfig = {
  slug: string;
  title: string;
  type: ProjectType;
  deploy: boolean;
  description: string;
  tagline: string;
  accent: string;
  secondary: string;
  topics: string[];
};

export const project: ProjectConfig = {
  "slug": "eetepa-maker-serial-dashboard",
  "title": "EETEPA Dashboard Maker Serial",
  "description": "Dashboard Web Serial para Arduino/ESP32 com modo sintetico e foco em laboratorio maker.",
  "topics": [
    "eetepa",
    "maker",
    "web-serial",
    "arduino",
    "esp32",
    "robotics",
    "typescript",
    "robotica",
    "github-pages",
    "portugues-brasil",
    "educacao-tecnologica",
    "sala-de-aula"
  ],
  "deploy": true,
  "tagline": "Painel maker para sensores seriais reais ou simulados, sem backend.",
  "type": "serial",
  "accent": "#5b628f",
  "secondary": "#c47a36"
};
