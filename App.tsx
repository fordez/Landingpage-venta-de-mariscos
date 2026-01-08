
import React, { Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Features from './components/Features';
import ChefAssistant from './components/ChefAssistant';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* FASE 1: ATENCIÓN - Hero con Gancho */}
        <Hero />
        
        {/* FASE 2: INTERÉS - Agitar el Dolor y Solución */}
        <Features />
        
        {/* FASE 3: DESEO - Catálogo Visual Atractivo */}
        <section id="productos" className="py-24 bg-white relative">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-50 to-white"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
              <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs">Menú Premium</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 serif italic">Directo a tu Mesa</h2>
              <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
              <p className="text-slate-500 text-lg md:text-xl font-light">Filetes porcionados al vacío, listos para brillar en tu plato.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* FASE 4: ACCIÓN/CIERRE - Chef Concierge IA */}
        <ChefAssistant />

        {/* FASE 5: SOCIAL PROOF Y REFUERZO FINAL */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 serif">¿Por qué esperar al fin de semana?</h2>
              <p className="text-slate-500 text-xl font-light max-w-2xl mx-auto">Únete a los más de 5,000 clientes que han transformado sus cenas aburridas en festines gourmet.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
               {['tiktok', 'instagram', 'facebook'].map(platform => (
                 <a key={platform} href="#" className="flex flex-col items-center gap-4 group">
                    <div className="w-20 h-20 rounded-[2rem] bg-slate-50 flex items-center justify-center text-3xl group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:-translate-y-2 shadow-lg group-hover:shadow-blue-200">
                      {platform === 'tiktok' ? '🎵' : platform === 'instagram' ? '📸' : '👤'}
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-600">{platform}</span>
                 </a>
               ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer Minimalista de Cierre de Embudo */}
      <footer id="contacto" className="bg-slate-900 py-16 text-white/50 text-sm border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-xl">M</div>
              <span className="text-lg font-black text-white tracking-tight uppercase">Mar & Carne <span className="text-blue-500">Gourmet</span></span>
            </div>
            <div className="flex gap-8 font-bold uppercase tracking-widest text-[10px]">
              <a href="#" className="hover:text-white transition-colors">Términos</a>
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Envíos</a>
            </div>
            <p className="font-medium">&copy; 2024. Sabor sin esfuerzo.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
