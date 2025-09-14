'use client';
import { useState, ReactNode } from 'react';

export default function ProductGallery({ images, overlay }: { images: string[]; overlay?: ReactNode }) {
  const [index] = useState(0);
  const current = images[index] ?? images[0];

  return (
    <div className="relative w-full h-[85vh] md:h-[95vh] overflow-hidden">
      {overlay && (
        <div className="absolute top-0 left-0 right-0 z-10 px-[15px] pt-4">
          {overlay}
        </div>
      )}
      <img src={current} alt="product" className="absolute inset-0 w-full h-full object-cover" />
    </div>
  );
}

