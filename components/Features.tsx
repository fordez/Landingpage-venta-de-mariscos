
import React from 'react';

const PAIN_POINTS = [
  {
    title: 'Cero Complicaciones',
    desc: 'Llegas cansado, abres el empaque, 8-10 min a la plancha o Air Fryer y listo. Sin picar, sin marinar.',
    icon: '⚡'
  },
  {
    title: 'Sabor de Alta Cocina',
    desc: 'Nuestros adobos de Corvina Crunch y Finas Hierbas están diseñados para no aburrirte nunca.',
    icon: '👨‍🍳'
  },
  {
    title: 'Nutrición Keto/Sana',
    desc: 'Proteína pura de alta calidad, grasas saludables y 0% azúcares añadidos. Ideal para tu dieta.',
    icon: '⚖️'
  }
];

const Features: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 italic serif">Comer bien ya no es un trabajo de tiempo completo</h2>
          <p className="text-slate-500 text-lg">Eliminamos las barreras que te impiden alimentarte de forma saludable.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {PAIN_POINTS.map((item) => (
            <div key={item.title} className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center gap-12 bg-blue-600 rounded-[3rem] p-8 md:p-16 text-white">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1544070078-a212eda27b49?auto=format&fit=crop&q=80&w=800" 
              alt="Healthy lifestyle"
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold">La ciencia del sabor al vacío</h3>
            <p className="text-blue-100 text-lg leading-relaxed">
              Al marinar al vacío, las fibras del pescado absorben las especias de manera profunda. 
              El resultado es un filete que siempre queda jugoso, sin importar si lo haces a la plancha, horno o freidora de aire.
            </p>
            <ul className="space-y-4">
              {['Sin conservantes artificiales', 'Porciones exactas para control de peso', 'Ahorras 45 min por comida'].map(point => (
                <li key={point} className="flex items-center gap-3 font-medium">
                  <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
