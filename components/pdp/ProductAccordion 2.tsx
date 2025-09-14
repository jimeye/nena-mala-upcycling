import { useState } from 'react';

export default function ProductAccordion({ title, content }: { title: string; content: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t">
      <button className="w-full flex items-center justify-between py-4 text-left" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span>{open ? '-' : '+'}</span>
      </button>
      {open && (
        <div className="pb-4 text-sm text-gray-700">
          {content}
        </div>
      )}
    </div>
  );
}
