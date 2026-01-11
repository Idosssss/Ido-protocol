import React from 'react';

interface WikiSectionProps {
  title: string;
  children: React.ReactNode;
  align?: 'left' | 'right';
  id?: string;
}

const WikiSection: React.FC<WikiSectionProps> = ({ title, children, align = 'left', id }) => {
  return (
    <section id={id} className="py-20 relative overflow-hidden">
      <div className={`container mx-auto px-6 relative z-10`}>
        <div className={`max-w-4xl ${align === 'right' ? 'ml-auto text-right' : 'mr-auto text-left'}`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 gold-gradient-text uppercase tracking-tighter">
            {title}
          </h2>
          <div className={`h-1 w-32 bg-gold-400 mb-12 ${align === 'right' ? 'ml-auto' : 'mr-auto'}`} />
          
          <div className={`text-gray-300 space-y-6 leading-relaxed text-lg font-light ${align === 'right' ? 'pl-0 md:pl-20' : 'pr-0 md:pr-20'}`}>
            {children}
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className={`absolute top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none ${align === 'right' ? 'right-[-100px]' : 'left-[-100px]'}`} />
    </section>
  );
};

export default WikiSection;