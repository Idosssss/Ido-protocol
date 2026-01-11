import React from 'react';
import { PRODUCTS } from '../data';
import { ShoppingBag, ArrowUpRight, Star } from 'lucide-react';

const ProductCatalog: React.FC = () => {
  return (
    <section id="catalog" className="py-24 bg-black relative scroll-mt-24">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-gold-400/5 via-black to-black opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
             <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
                <span className="text-gold-400 tracking-[0.3em] text-xs font-bold uppercase">Based Body Works</span>
             </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">The Armory</h2>
          </div>
          <p className="text-gray-500 max-w-sm text-right mt-4 md:mt-0">
            Essential tools for your ascension protocol. High-grade ingredients. Zero estrogenics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative flex flex-col h-full bg-[#0a0a0a] rounded-xl border border-white/5 hover:border-gold-400/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              
              {/* Image Container with Glow */}
              <div className="h-64 relative flex items-center justify-center bg-gradient-to-b from-[#151515] to-[#0a0a0a] p-6 overflow-hidden">
                <div className="absolute inset-0 bg-gold-400/20 blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                
                <img 
                  src={product.imagePlaceholder} 
                  alt={product.name}
                  className="w-full h-full object-contain relative z-10 drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />

                <a href="https://basedbodyworks.com" target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold-400 z-20">
                  <ShoppingBag size={18} />
                </a>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <p className="text-xs text-gold-400 uppercase tracking-widest font-bold mb-1">{product.subtitle}</p>
                  <h3 className="text-xl font-bold font-serif text-white">{product.name}</h3>
                </div>
                
                <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                  <span className="text-white font-mono text-lg">{product.price}</span>
                  <a href="https://basedbodyworks.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
                    Acquire <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;