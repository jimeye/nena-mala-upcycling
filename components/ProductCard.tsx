"use client";
import Link from 'next/link';
import React from 'react';
import Price from './Price';

type ProductCardProps = {
  image: string;
  name: string;
  price: string;
  href?: string;
  onClick?: () => void;
};

export default function ProductCard({ image, name, price, href, onClick }: ProductCardProps) {
  const Card = (
    <article className="group relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer">
      {/* Image */}
      <div className="aspect-[3/5] bg-gray-200 relative">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* Product name overlay */}
        <div className="absolute bottom-4 left-4">
          <h3 className="text-white font-normal text-sm md:text-lg">{name}</h3>
          <Price
            cents={Math.round(parseFloat(price.replace(/[^0-9.,]/g, '').replace(',', '.')) * 100) || 0}
            className="text-white text-xs md:text-sm font-normal"
          />
        </div>

        {/* Hover effect */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>

        {/* Hover CTA text only (non-interactive) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-transparent text-white font-normal border border-white text-xs md:text-base px-4 py-1.5 md:px-6 md:py-2">shop now</span>
        </div>
      </div>
    </article>
  );

  if (href) return <Link href={href} className="block">{Card}</Link>;
  return <button type="button" onClick={onClick} className="w-full text-left">{Card}</button>;
}
