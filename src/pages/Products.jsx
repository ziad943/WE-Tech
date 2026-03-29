import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

export default function Products({ products, onAddToCart }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => ['All', ...new Set(products.map(p => p.category))], [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, products]);

  return (
    <div className="min-h-screen pt-48 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-serif font-light tracking-tight">The <span className="italic opacity-50">Collection</span></h1>
            <p className="text-white/40 text-sm tracking-widest uppercase">Precision engineered hardware for visionaries</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 group-focus-within:text-white transition-colors" />
              <input 
                type="text" 
                placeholder="SEARCH GEAR..." 
                className="bg-white/[0.03] border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-[10px] font-bold tracking-[0.2em] uppercase focus:outline-none focus:border-white/30 transition-all w-full sm:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="relative group">
              <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 group-focus-within:text-white transition-colors" />
              <select 
                className="bg-white/[0.03] border border-white/10 rounded-2xl pl-12 pr-10 py-4 text-[10px] font-bold tracking-[0.2em] uppercase focus:outline-none focus:border-white/30 transition-all appearance-none w-full sm:w-48"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat} className="bg-[#020203] text-white">{cat.toUpperCase()}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-[40px] p-24 text-center space-y-8">
            <div className="w-20 h-20 glass-card rounded-full flex items-center justify-center mx-auto">
              <Search className="h-8 w-8 text-white/20" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-serif italic tracking-tight">No gear found</h3>
              <p className="text-white/40 text-sm font-light">Try adjusting your search or filters.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
