// src/types/index.ts
export interface Section {
  id: string;
  title: string;
  subtitle?: string;
}

export interface Service {
  title: string;
  description: string;
  icon?: string;
}
