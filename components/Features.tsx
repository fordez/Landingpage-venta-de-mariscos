
import React from 'react';

const PAIN_POINTS = [
  {
    title: 'Recupera tu Tiempo',
    desc: 'Olvida picar, lavar y esperar. Del congelador a tu mesa en 10 minutos exactos.',
    icon: '⏰'
  },
  {
    title: 'Cero Estrés, 100% Sabor',
    desc: 'Marinamos por ti al vacío. El sabor penetra hasta el centro, garantizando jugosidad siempre.',
    icon: '✨'
  },
  {
    title: 'Nutrición sin Pensar',
    desc: 'Control de porciones, sin azúcar, sin conservantes. Ideal para tu estilo de vida Keto o Fit.',
    icon: '🥗'
  }
];

const Features: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Comer sano ya no es una "tarea" de tu lista diaria
          </h2>
          <p className="text-slate-500 text-lg md:text-xl">
            Diseñado para personas que valoran su salud tanto como su tiempo libre.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PAIN_POINTS.map((item) => (
            <div key={item.title} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-all hover:shadow-2xl group text-center">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col lg:flex-row items-center gap-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-8 md:p-16 text-white shadow-3xl">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1544070078-a212eda27b49?auto=format&fit=crop&q=80&w=800" 
              alt="Healthy meal preparation"
              className="rounded-3xl shadow-2xl transform lg:-rotate-3 hover:rotate-0 transition-all duration-500"
            />
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold">La Tecnología V-Pack: Tu aliado en la cocina</h3>
            <p className="text-blue-100 text-lg leading-relaxed">
              Nuestro sellado al vacío industrial no solo conserva la frescura; fuerza a los ingredientes del marinado a integrarse en la proteína, creando un sabor que antes tomaba horas lograr en casa.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['100% Natural', 'Sabor Gourmet', 'Sin Suciedad', 'Resultados Uniformes'].map(check => (
                <div key={check} className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/20">
                  <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  <span className="font-semibold text-sm uppercase tracking-wider">{check}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
