
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

const ChefAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const getChefAdvice = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResponse('');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const productList = PRODUCTS.map(p => p.name).join(', ');
      
      const prompt = `Eres el Chef Concierge de Mar & Carne Gourmet. 
      Tu objetivo es ayudar a clientes que quieren comer SANO, RÁPIDO y SIN ESFUERZO a elegir sus productos y darles tips de cocina veloces (menos de 10 mins).
      Productos: ${productList}.
      Pregunta: "${query}"
      Responde de forma entusiasta, breve y persuasiva. Si preguntan cómo comprar, diles que usen el botón de "Hacer Pedido por WhatsApp" abajo. 
      Usa emojis para que parezca un chat de redes sociales.`;

      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setResponse(result.text || '¡Hola! Estoy listo para ayudarte a comer delicioso hoy. ¿Qué tienes en mente?');
    } catch (error) {
      console.error(error);
      setResponse('¡Ups! Mi gorro de chef se cayó. ¿Podrías intentar preguntarme de nuevo?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="chef" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden grid md:grid-cols-2">
          <div className="p-12 md:p-16 flex flex-col justify-center space-y-8 bg-blue-600 text-white">
            <h2 className="text-4xl font-extrabold leading-tight">¿Dudas sobre cómo empezar tu vida saludable?</h2>
            <p className="text-blue-100 text-lg">
              Nuestro Asistente IA te ayuda a elegir el marinado perfecto según tus gustos o te da la receta de 5 minutos para hoy.
            </p>
            <div className="space-y-4">
               <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl">
                 <span className="text-2xl">📱</span>
                 <p className="text-sm">Ideal para resolver dudas antes de comprar por WhatsApp.</p>
               </div>
            </div>
          </div>

          <div className="p-12 md:p-16 flex flex-col justify-between">
            <div className="space-y-6">
              <label className="text-slate-900 font-bold text-xl block">Chatea con nuestro Concierge</label>
              <div className="space-y-4">
                <input 
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ej: ¿Qué me recomiendas para bajar de peso?"
                  className="w-full bg-slate-100 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-blue-500 transition-all text-slate-800"
                  onKeyDown={(e) => e.key === 'Enter' && getChefAdvice()}
                />
                <button 
                  onClick={getChefAdvice}
                  disabled={loading}
                  className="w-full bg-slate-900 hover:bg-blue-600 text-white py-5 rounded-2xl font-bold transition-all transform active:scale-95"
                >
                  {loading ? 'Consultando al experto...' : 'Obtener Recomendación'}
                </button>
              </div>

              {response && (
                <div className="mt-6 p-6 bg-blue-50 border border-blue-100 rounded-3xl animate-fade-in">
                  <p className="text-slate-800 leading-relaxed font-medium">{response}</p>
                </div>
              )}
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100">
               <button className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-green-500/20">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                 Hacer Pedido por WhatsApp
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefAssistant;
