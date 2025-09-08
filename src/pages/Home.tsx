import React from 'react';
import { Hero } from '../components/Home/Hero';
import { Categories } from '../components/Home/Categories';
import { FeaturedProducts } from '../components/Home/FeaturedProducts';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <Categories />
      <FeaturedProducts />
    </div>
  );
};