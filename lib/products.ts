export type Product = {
  slug: string;
  title: string;
  price: string;
  images: string[];
  colors: string[]; // hex
  sizes: string[];  // ex: 'UK 6'
  description: string;
  category: 'dress' | 'top' | 'skirt' | 'denim' | 'pants' | 'two-piece';
};

const products: Product[] = [
  {
    slug: 'robe-deconstruite',
    title: 'Deconstructed Dress',
    price: '€145',
    images: ['/produit-1.webp', '/produit-2-new.webp', '/produit-3-new.webp'],
    colors: ['#111111', '#bbbbbb', '#333333'],
    sizes: ['UK 4', 'UK 6', 'UK 8', 'UK 10', 'UK 12', 'UK 14', 'UK 16'],
    description: 'Upcycled limited-edition dress with an open back and fluid drape.',
    category: 'dress'
  },
  {
    slug: 'top-corset',
    title: 'Corset Top',
    price: '€90',
    images: ['/produit-2-new.webp', '/produit-3-new.webp'],
    colors: ['#222222', '#aaaaaa'],
    sizes: ['UK 4', 'UK 6', 'UK 8', 'UK 10', 'UK 12'],
    description: 'Upcycled corset top with structure and a confident silhouette.',
    category: 'top'
  },
  {
    slug: 'robe-vintage',
    title: 'Vintage Dress',
    price: '€120',
    images: ['/produit-4-new.webp', '/produit-3-new.webp'],
    colors: ['#2b2b2b', '#c0c0c0'],
    sizes: ['UK 6', 'UK 8', 'UK 10', 'UK 12', 'UK 14'],
    description: 'Reworked vintage dress, unique and sustainably made.',
    category: 'dress'
  },
  {
    slug: 'top-boheme',
    title: 'Boho Top',
    price: '€75',
    images: ['/produit-3-new.webp', '/produit-2-new.webp'],
    colors: ['#111111', '#dddddd'],
    sizes: ['UK 4', 'UK 6', 'UK 8', 'UK 10', 'UK 12'],
    description: 'Light boho top, perfect for summer and layering.',
    category: 'top'
  }
  ,
  {
    slug: 'linen-wide-pants',
    title: 'Linen Wide Pants',
    price: '€130',
    images: ['/produit-4-new.webp'],
    colors: ['#333333', '#aaaaaa'],
    sizes: ['UK 6', 'UK 8', 'UK 10', 'UK 12'],
    description: 'Upcycled linen wide-leg pants with a soft drape and tailored waistband.',
    category: 'pants'
  },
  {
    slug: 'two-piece-set-look',
    title: 'Two-piece Set',
    price: '€185',
    images: ['/produit-3.webp'],
    colors: ['#1e1e1e'],
    sizes: ['UK 6', 'UK 8', 'UK 10', 'UK 12'],
    description: 'Coordinated two-piece set crafted from upcycled materials.',
    category: 'two-piece'
  }
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((p) => p.category === category);
}

export function getAllCategories(): Product['category'][] {
  return ['dress', 'top', 'skirt', 'denim', 'pants', 'two-piece'];
}
