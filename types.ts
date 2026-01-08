export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface LocationData {
  name: string;
  slug: string;
  type: 'bairro' | 'cidade';
}

export interface SEOBlock {
  title: string;
  content: string;
}