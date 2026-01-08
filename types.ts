
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'pescado' | 'carne';
  details: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
