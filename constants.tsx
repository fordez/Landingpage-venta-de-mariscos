
import { Product, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Productos', href: '#productos' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Chef IA', href: '#chef' },
  { label: 'Contacto', href: '#contacto' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'corvina-crunch',
    name: 'Filete de Corvina Tipo Crunch',
    description: 'Textura crujiente por fuera y jugosidad incomparable por dentro. Marinado con especias secretas.',
    price: 12.50,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    category: 'pescado',
    details: ['Porcionado al vacío', 'Listo para freír o air fryer', 'Sin conservantes']
  },
  {
    id: 'corvina-hierbas',
    name: 'Corvina a las Finas Hierbas & Almendras',
    description: 'Un toque mediterráneo con el crunch sutil de almendras fileteadas. Elegancia en cada bocado.',
    price: 14.20,
    image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&q=80&w=800',
    category: 'pescado',
    details: ['Marinado premium', 'Incluye almendras', 'Ideal para horno o plancha']
  },
  {
    id: 'corvina-adobo',
    name: 'Filete de Corvina Adobo Tradicional',
    description: 'El sabor de casa. Adobo artesanal con ajo, pimentón y hierbas autóctonas.',
    price: 11.80,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800',
    category: 'pescado',
    details: ['Sabor criollo', 'Bajo en sodio', 'Empaque al vacío individual']
  },
  {
    id: 'atun-pesto',
    name: 'Filete de Atún al Pesto',
    description: 'Lomo de atún premium bañado en un pesto genovés de albahaca fresca y piñones.',
    price: 15.50,
    image: 'https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?auto=format&fit=crop&q=80&w=800',
    category: 'pescado',
    details: ['Atún grado sashimi', 'Pesto artesanal', 'Rico en Omega-3']
  },
  {
    id: 'lanchitas-keto',
    name: 'Lanchitas de Carne Keto',
    description: 'Lonchas de carne premium ultra delgadas, perfectas para dietas cetogénicas y snacks saludables.',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1607623814075-e512199b0213?auto=format&fit=crop&q=80&w=800',
    category: 'carne',
    details: ['15 lonchas por empaque', '0% carbohidratos', 'Empaque hermético']
  }
];
