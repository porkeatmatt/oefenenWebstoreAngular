import { Product } from "../models/product.model";

export const products: Product[] = [
    {
      id: 1,
      title: 'Ugly Detective',
      price: 358.85,
      category: 'ape',
      description: 'Very popular on social media.',
      image: 'assets/images/ape1.png',
    },
    {
      id: 2,
      title: 'Ugly Influencer',
      price: 69.69,
      category: 'ape',
      description: 'Spends too much time on Instagram.',
      image: 'assets/images/ape2.png',
    },
    {
        id: 3,
        title: 'Ketchup Lion',
        price: 0.39,
        category: 'lion',
        description: 'Is a messy eater.',
        image: 'assets/images/lion1.jpg',
      },
    
  ];