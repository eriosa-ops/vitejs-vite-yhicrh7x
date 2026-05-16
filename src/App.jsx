import React, { useState } from 'react';
import { 
  Lightbulb, 
  BookOpen, 
  Globe2, 
  ShoppingCart, 
  MapPin,
  ChevronRight,
  Target,
  BarChart3,
  Users
} from 'lucide-react';

const marketingTopics = [
  {
    id: '1.1',
    title: 'Concepto e Importancia',
    icon: Lightbulb,
    color: 'bg-yellow-500',
    lightColor: 'bg-yellow-50',
    shortDesc: '¿Qué es la mercadotecnia y por qué es vital para las organizaciones?',
    details: [
      { subtitle: 'Concepto', text: 'Es el proceso social y administrativo mediante el cual grupos e individuos obtienen lo que necesitan y desean a través de generar, ofrecer e intercambiar productos de valor con sus semejantes.' },
      { subtitle: 'Importancia', text: 'Conecta a las empresas con sus clientes ideales. Permite identificar oportunidades de mercado, satisfacer necesidades de forma rentable y construir relaciones a largo plazo que aseguran la supervivencia de la empresa.' }
    ]
  },
  {
    id: '1.2',
    title: 'Antecedentes y Fundamentos',
    icon: BookOpen,
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    shortDesc: 'Origen, contexto histórico, filosofía y las variables principales.',
    details: [
      { subtitle: 'Origen e Historia', text: 'Evolucionó desde el simple trueque comercial, pasando por la era de la producción masiva (Revolución Industrial), la era de las ventas, hasta llegar a la era moderna del marketing enfocado en el cliente y las relaciones.' },
      { subtitle: 'Filosofía y Objetivo', text: 'La filosofía central es que la satisfacción de las necesidades del cliente es la justificación social y económica de la existencia de una empresa. Su objetivo es crear valor y captar valor a cambio.' },
      { subtitle: 'Variables (Las 4 P\'s)', text: 'Producto (lo que se ofrece), Precio (lo que se paga), Plaza o Distribución (dónde se vende) y Promoción (cómo se comunica).' }
    ]
  },
  {
    id: '1.3',
    title: 'Medio Ambiente (Entorno)',
    icon: Globe2,
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50',
    shortDesc: 'Factores políticos, legales, sociales, económicos y tecnológicos.',
    details: [
      { subtitle: 'Macroentorno', text: 'Son las fuerzas externas que la empresa no puede controlar pero que afectan su capacidad de operar.' },
      { subtitle: 'Político-Legal', text: 'Leyes, agencias gubernamentales y grupos de presión que influyen en las organizaciones.' },
      { subtitle: 'Económico y Social', text: 'Poder adquisitivo, patrones de gasto, tendencias demográficas, valores culturales y estilos de vida.' },
      { subtitle: 'Tecnológico', text: 'Fuerzas que crean nuevas tecnologías, creando nuevos productos y oportunidades de mercado.' }
    ]
  },
  {
    id: '1.4',
    title: 'Conceptos Centrales',
    icon: ShoppingCart,
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50',
    shortDesc: 'La base del marketing: Necesidad, deseo, demanda e intercambio.',
    details: [
      { subtitle: 'Necesidad', text: 'Estado de carencia percibida (física, social o individual). Ej: Tener sed.' },
      { subtitle: 'Deseo', text: 'La forma que adopta una necesidad humana moldeada por la cultura y la personalidad. Ej: Querer un refresco de cola.' },
      { subtitle: 'Demanda', text: 'Deseos humanos respaldados por el poder adquisitivo. Ej: Tener el dinero para comprar ese refresco.' },
      { subtitle: 'Intercambio', text: 'El acto de obtener un objeto deseado de alguien, ofreciéndole algo a cambio. Es el núcleo del marketing.' }
    ]
  },
  {
    id: '1.5',
    title: 'Mercadotecnia en México',
    icon: MapPin,
    color: 'bg-red-500',
    lightColor: 'bg-red-50',
    shortDesc: 'El contexto y la evolución de la mercadotecnia en el territorio mexicano.',
    details: [
      { subtitle: 'Antecedentes Prehispánicos', text: 'Inicia con los "pochtecas" (comerciantes aztecas) y los mercados o "tianguis" de Tlatelolco, que eran centros neurálgicos de intercambio.' },
      { subtitle: 'Evolución Moderna', text: 'Integración de prácticas internacionales adaptadas a la cultura local. Crecimiento de supermercados en el siglo XX y la rápida adopción del e-commerce en la actualidad.' },
      { subtitle: 'El Consumidor Mexicano', text: 'Se caracteriza por ser cálido, valorar la recomendación familiar ("boca a boca"), buscar promociones y tener una fuerte lealtad a las marcas tradicionales y a lo "hecho en México".' }
    ]
  }
];

export default function App() {
  const [activeTopic, setActiveTopic] = useState(marketingTopics[0].id);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 p-4 md:p-8">
      
      {/* Header */}
      <header className="max-w-5xl mx-auto mb-10 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
          <Target className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
          Panorama General de la Mercadotecnia
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Explora los fundamentos esenciales del marketing. Haz clic en cada sección para descubrir sus conceptos clave, origen y cómo se aplica en el entorno actual.
        </p>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Navigation / Cards List */}
        <div className="lg:w-1/3 flex flex-col gap-4">
          {marketingTopics.map((topic) => {
            const isActive = activeTopic === topic.id;
            const Icon = topic.icon;
            return (
              <button
                key={topic.id}
                onClick={() => setActiveTopic(topic.id)}
                className={`flex items-start text-left p-4 rounded-2xl transition-all duration-300 border-2 ${
                  isActive 
                    ? `border-transparent shadow-lg ${topic.color} text-white scale-105` 
                    : `border-slate-200 bg-white hover:border-${topic.color.split('-')[1]}-300 hover:shadow-md`
                }`}
              >
                <div className={`p-3 rounded-full mr-4 shrink-0 transition-colors ${
                  isActive ? 'bg-white/20' : topic.lightColor
                }`}>
                  <Icon className={`w-6 h-6 ${isActive ? 'text-white' : topic.color.replace('bg-', 'text-')}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-bold ${isActive ? 'text-white/80' : 'text-slate-400'}`}>
                      Módulo {topic.id}
                    </span>
                    {isActive && <ChevronRight className="w-5 h-5 text-white animate-pulse" />}
                  </div>
                  <h3 className={`text-lg font-bold mt-1 mb-1 leading-tight ${isActive ? 'text-white' : 'text-slate-800'}`}>
                    {topic.title}
                  </h3>
                  <p className={`text-sm line-clamp-2 ${isActive ? 'text-white/90' : 'text-slate-500'}`}>
                    {topic.shortDesc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Details Panel */}
        <div className="lg:w-2/3">
          {marketingTopics.map((topic) => {
            if (activeTopic !== topic.id) return null;
            const Icon = topic.icon;
            
            return (
              <div 
                key={`detail-${topic.id}`} 
                className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-100 h-full animate-in fade-in slide-in-from-right-4 duration-500"
              >
                <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
                  <div className={`${topic.color} p-4 rounded-2xl text-white shadow-md transform -rotate-3`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <div>
                    <span className={`text-sm font-bold tracking-wider uppercase ${topic.color.replace('bg-', 'text-')}`}>
                      Sección {topic.id}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1">
                      {topic.title}
                    </h2>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {topic.details.map((detail, idx) => (
                    <div 
                      key={idx} 
                      className={`${topic.lightColor} p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-shadow`}
                    >
                      <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${topic.color}`} />
                        {detail.subtitle}
                      </h4>
                      <p className="text-slate-700 leading-relaxed">
                        {detail.text}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Visual decoration specific to section */}
                <div className="mt-8 flex justify-end">
                  <div className={`opacity-10 pointer-events-none transform translate-x-4 translate-y-4 ${topic.color.replace('bg-', 'text-')}`}>
                    <Icon className="w-48 h-48" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </main>

      {/* Footer */}
      <footer className="mt-16 text-center text-slate-400 text-sm">
        <p>Fundamentos de Mercadotecnia • Unidad 1</p>
      </footer>
    </div>
  );
}