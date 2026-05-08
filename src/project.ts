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
  "title": "EETEPA Maker Serial Dashboard",
  "type": "serial",
  "deploy": false,
  "description": "Web Serial dashboard for Arduino and ESP32 learning labs, with synthetic demo mode and no backend.",
  "tagline": "Web Serial dashboard for Arduino and ESP32 labs, with synthetic demo mode.",
  "accent": "#5b628f",
  "secondary": "#c47a36",
  "topics": [
    "eetepa",
    "maker",
    "web-serial",
    "arduino",
    "esp32",
    "robotics",
    "typescript"
  ]
};
