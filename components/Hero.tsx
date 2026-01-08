
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=2000" 
          alt="Gourmet healthy meal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80 md:bg-slate-900/60 backdrop-blur-[1px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-xs md:text-sm font-bold backdrop-blur-md animate-pulse">
          🚀 RECIBE TU PACK GOURMET EN {"<"} 24 HORAS
        </div>
        
        <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight max-w-5xl mx-auto">
          Cena como en un <span className="text-blue-400 italic serif">Restaurante</span> <br className="hidden md:block" /> 
          sin cocinar y sin ensuciar
        </h1>
        
        <p className="text-lg md:text-xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">
          Filetes de Corvina y Atún marinados al vacío. La solución para personas ocupadas que quieren comer <span className="font-bold text-white underline decoration-blue-500">sano y delicioso</span> en solo 10 minutos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <a 
            href="#productos" 
            className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-blue-600/40 transform hover:scale-105"
          >
            🔥 VER MENÚ Y OFERTAS
          </a>
          <a 
            href="#chef" 
            className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm rounded-2xl font-bold text-lg transition-all"
          >
            💬 CONSULTAR AL CHEF IA
          </a>
        </div>
        
        <div className="pt-12 flex flex-col items-center gap-4">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">Síguenos para tips de 60s</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-white/60 hover:text-white transition-all transform hover:scale-110">
              <span className="sr-only">TikTok</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525 0.02c1.31-0.02 2.61-0.01 3.91-0.02 0.08 1.53 0.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-0.17-2.89-0.6-4.13-1.47V18c0 1.94-0.96 3.82-2.68 4.79-1.73 0.97-3.95 1.1-5.77 0.34-1.81-0.76-3.23-2.52-3.66-4.43-0.43-1.91-0.04-4.04 1.09-5.61 1.13-1.57 3.03-2.52 4.97-2.46 0.2 0 0.4 0 0.6 0.03v4.03c-0.6-0.11-1.25-0.1-1.83 0.13-1.01 0.4-1.6 1.48-1.44 2.54 0.16 1.05 0.9 2.01 1.94 2.21 1.04 0.2 2.15-0.2 2.76-1.07 0.34-0.49 0.5-1.09 0.47-1.68V0.02z"/>
              </svg>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-all transform hover:scale-110">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584 0.012 4.85 0.07 3.252 0.148 4.771 1.691 4.919 4.919 0.058 1.265 0.069 1.645 0.069 4.849 0 3.205-0.012 3.584-0.069 4.849-0.149 3.225-1.664 4.771-4.919 4.919-1.266 0.058-1.644 0.07-4.85 0.07-3.204 0-3.584-0.012-4.849-0.07-3.26-0.149-4.771-1.699-4.919-4.92-0.058-1.265-0.07-1.644-0.07-4.849 0-3.204 0.013-3.583 0.07-4.849 0.149-3.227 1.664-4.771 4.919-4.919 1.266-0.057 1.645-0.069 4.849-0.069zM12 0C8.741 0 8.333 0.014 7.053 0.072 2.695 0.272 0.273 2.69 0.073 7.052 0.014 8.333 0 8.741 0 12c0 3.259 0.014 3.668 0.072 4.948 0.2 4.358 2.618 6.78 6.98 6.98 1.281 0.058 1.689 0.072 4.948 0.072 3.259 0 3.668-0.014 4.948-0.072 4.354-0.2 6.782-2.618 6.979-6.98 0.059-1.28 0.073-1.689 0.073-4.948 0-3.259-0.014-3.667-0.072-4.947-0.196-4.354-2.617-6.78-6.979-6.98C15.668 0.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-all transform hover:scale-110">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686 0.235 2.686 0.235v2.953H15.83c-1.491 0-1.956 0.925-1.956 1.874v2.25h3.328l-0.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
