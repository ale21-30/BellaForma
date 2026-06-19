import './HomeModulos.css';

export default function App() {
  
  const modules = [
    {
      title: "NUTRICION",
      desc: "Videos, PDFs y consejos sobre alimentación saludable para cuidadoras",
      badge: "4 videos",
      color: "bg-pink-100 text-pink-700",
      image: "https://i.pinimg.com/736x/55/75/bd/5575bdff9449f1ddaa3d01f4412ef736.jpg", 
    },
    {
      title: " IMAGEN PERSONAL",
      desc: "Tutoriales de imagen personal, fotografías demostrativas y guías descargables",
      badge: "3 videos",
      color: "bg-green-100 text-green-700",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ49o9KqO7h-imlR2Xg28tSI3vEMWY32iXv8Q&s", 
    },
    {
      title: "CUIDADO DE LA PIEL",
      desc: "Videos prácticos, infografías y guías imprimibles sobre cuidado dermatológico",
      badge: "4 videos",
      color: "bg-orange-100 text-orange-700",
      image: "https://img.magnific.com/vector-premium/nina-lavando-cara-limpieza-piel-tratamientos-belleza-piel-procedimiento-cosmetico-cuidado-piel-icono-vector_939711-7887.jpg?semt=ais_hybrid&w=740&q=80", 
    }
  ];

  return (
    <div 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#faf7f5',
        textAlign: 'left',
        overflowY: 'auto',
        zIndex: 99999
      }}
    >
      <div className="p-5 md:p-10 lg:p-16 w-full">
        <div className="max-w-7xl mx-auto w-full"> 

          {/* Encabezado */}
          
          <header className="mb-8 md:mb-12">
            <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-gray-400">
              Contenidos
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold mt-1 !text-gray-950 tracking-tight">
              Elige tu módulo de aprendizaje
            </h1>
          </header>

          {/* Contenedor de módulos/Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            
            {modules.map((m, i) => (
              <div
                key={i} 
                className="flex items-center md:flex-col bg-white rounded-3xl p-5 shadow-sm border border-gray-100/70 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 group"
              >
                {/* Contenedor de la imagen */}
                <div className="w-20 h-20 md:w-full md:h-48 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0 mb-0 md:mb-5">
                  <img 
                    src={m.image} 
                    alt={m.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Contenedor de texto */}
                <div className="ml-5 md:ml-0 flex-1 min-w-0 md:text-center w-full">
                 
                  <h2 className="text-lg font-bold !text-gray-900 leading-tight">
                    {m.title}
                  </h2>
                  
                 
                  <p className="text-sm !text-gray-700 mt-1 md:mt-2 line-clamp-2 md:line-clamp-none">
                    {m.desc}
                  </p>
                  
                  {/* Badge de contenido */}
                  <div className="mt-3 md:mt-4">
                    <span className={`inline-block px-3 py-1 text-xs md:text-sm font-semibold rounded-full shadow-inner ${m.color}`}>
                      {m.badge}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}