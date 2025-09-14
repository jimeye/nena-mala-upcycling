'use client';
import { useState } from 'react';

export default function ProductAccordion({ title, content }: { title: string; content: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t">
      <button className="w-full py-4 text-center" onClick={() => setOpen(!open)}>
        <span className="inline-block">
          {title} {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div className="pb-4 text-sm text-gray-700 text-center">
          {content}
        </div>
      )}
    </div>
  );
}
