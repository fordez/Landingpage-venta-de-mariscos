
import React from 'react';
import { Product } from '../types';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg ${
            product.category === 'carne' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
          }`}>
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </div>
        
        <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">
          {product.description}
        </p>
        
        <ul className="space-y-2 mb-8 flex-grow">
          {product.details.map((detail, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              {detail}
            </li>
          ))}
        </ul>
        
        <div className="flex items-center justify-between pt-6 border-t border-slate-50">
          <div className="text-2xl font-bold text-slate-900">
            ${product.price.toFixed(2)}
          </div>
          <button className="bg-slate-900 hover:bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all transform active:scale-95 flex items-center gap-2">
            Añadir
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
