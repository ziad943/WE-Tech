import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight } from 'lucide-react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="glass-card rounded-[32px] overflow-hidden group flex flex-col">
      <Link to={`/products/${product.id}`} className="block relative aspect-[4/5] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white flex items-center">
            View Details <ArrowRight className="ml-2 h-3 w-3" />
          </span>
        </div>
      </Link>
      
      <div className="p-8 space-y-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{product.category}</p>
            <h3 className="text-xl font-serif tracking-tight text-white group-hover:text-glow transition-all">{product.name}</h3>
          </div>
          <p className="text-lg font-light text-white">${product.price}</p>
        </div>
        
        <button 
          onClick={() => onAddToCart(product)}
          className="w-full py-4 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 hover:border-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 mt-auto"
        >
          Add to Collection
        </button>
      </div>
    </div>
  );
}
