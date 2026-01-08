
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Features from './components/Features';
import ChefAssistant from './components/ChefAssistant';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main>
        {/* 1. ATENCIÓN: El Gancho */}
        <Hero />
        
        {/* 2. INTERÉS: Problemas y Soluciones */}
        <Features />
        
        {/* 3. DESEO: El Menú Irresistible */}
        <section id="productos" className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Empacado al Vacío</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 serif">Selección para Gente con Prisa</h2>
              <p className="text-slate-500 text-lg">Nutrición real, sin conservantes, lista en minutos.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* 4. ACCIÓN/CIERRE: El Concierge IA */}
        <ChefAssistant />

        {/* 5. REFUERZO FINAL: Garantía y Redes */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4 text-center text-white space-y-10">
            <h2 className="text-3xl md:text-5xl font-bold italic serif">Únete a la revolución del "Batch Cooking" inteligente</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Síguenos para tips de 60 segundos sobre cómo comer mejor sin gastar tu tiempo libre.</p>
            <div className="flex justify-center gap-8">
               <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center group-hover:bg-blue-600 transition-all">
                    <span className="text-2xl">📸</span>
                  </div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-500 group-hover:text-white">Instagram</span>
               </div>
               <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center group-hover:bg-blue-600 transition-all">
                    <span className="text-2xl">🎵</span>
                  </div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-500 group-hover:text-white">TikTok</span>
               </div>
               <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center group-hover:bg-blue-600 transition-all">
                    <span className="text-2xl">👤</span>
                  </div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-500 group-hover:text-white">Facebook</span>
               </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Minimalista de Cierre */}
      <footer id="contacto" className="bg-white py-12 border-t border-slate-100">
        <div className="container mx-auto px-4 text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">M</div>
            <span className="text-lg font-bold tracking-tight text-slate-900">Mar & Carne Gourmet</span>
          </div>
          <p className="text-slate-500 text-sm">&copy; 2024. Sabor Gourmet, Tiempo Real. Hecho para gente que valora su salud.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
