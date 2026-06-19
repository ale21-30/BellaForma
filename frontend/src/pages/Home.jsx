// Página Home - Jenny García

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-800 antialiased flex flex-col min-h-screen">

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 px-4 py-3 flex justify-between items-center border-b border-slate-200">
        <div className="flex items-center gap-2">
          <img src="logo_mies.jpg" alt="logo_mies" className="h-16 w-auto object-contain" />
          <span className="font-bold text-lg tracking-tight text-indigo-900 ml-6">Bienestar Cuidadoras</span>
        </div>
        <a href="#sugerencias" className="bg-indigo-50 text-indigo-700 font-semibold px-3 py-2 rounded-lg text-sm flex items-center gap-1">
          <i className="fa-solid fa-comment-dots"></i> Sugerencias
        </a>
      </header>

      {/* Main */}
      <main className="flex-grow p-4 max-w-md mx-auto w-full">

        {/* Bienvenida */}
        <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl p-5 mb-6 shadow-md">
          <h1 className="text-2xl font-bold mb-2">¡Hola, bienvenida! 👋</h1>
          <p className="text-indigo-100 text-sm mb-4">Este es tu espacio de aprendizaje, diseñado especialmente para ti y tu bienestar.</p>

          <div className="bg-white/10 rounded-xl p-3 border border-white/20">
            <p className="text-xs font-semibold mb-2 text-indigo-200">
              <i className="fa-solid fa-chart-line"></i> Ayúdanos a mejorar (Opcional):
            </p>
            <div className="flex flex-col gap-2">
              <input type="text" placeholder="Tu Nombre y Apellido" className="bg-white text-slate-800 placeholder-slate-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 w-full" />
              <select className="bg-white text-slate-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 w-full">
                <option value="MIES">Pertenezco al MIES</option>
                <option value="Otro">Otro grupo / Particular</option>
              </select>
              <button className="bg-yellow-400 hover:bg-yellow-300 text-indigo-950 font-bold py-2 rounded-lg text-sm">
                Ingresar a los cursos
              </button>
            </div>
          </div>
        </section>

        {/* Módulos */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <i className="fa-solid fa-graduation-cap text-indigo-600"></i> Módulos de Aprendizaje
          </h2>
          <p className="text-xs text-slate-500 mb-4 italic">Presiona el módulo que deseas revisar hoy. ¡No hay un orden obligatorio!</p>

          <div className="grid grid-cols-1 gap-4">

            {/* Módulo 1 */}
            <a href="modulo-nutricion.html" className="block bg-white border-2 border-emerald-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all text-left group">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center text-2xl">
                  <i className="fa-solid fa-apple-whole"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-slate-900">Módulo 1: Nutrición</h3>
                  <p className="text-slate-500 text-xs mt-0.5">Tu salud importa: ideas prácticas y nutritivas para llenar tu día de vitalidad.</p>
                </div>
                <i className="fa-solid fa-chevron-right text-slate-300"></i>
              </div>
            </a>

            {/* Módulo 2 */}
            <a href="modulo-imagen.html" className="block bg-white border-2 border-pink-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all text-left group">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-pink-100 text-pink-700 rounded-xl flex items-center justify-center text-2xl">
                  <i className="fa-solid fa-user text-xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-slate-900">Módulo 2: Imagen Personal</h3>
                  <p className="text-slate-500 text-xs mt-0.5">Autoestima, vestimenta cómoda, automaquillaje y bienestar.</p>
                </div>
                <i className="fa-solid fa-chevron-right text-slate-300"></i>
              </div>
            </a>

            {/* Módulo 3 */}
            <a href="modulo-piel.html" className="block bg-white border-2 border-sky-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all text-left group">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-sky-100 text-sky-700 rounded-xl flex items-center justify-center text-2xl">
                  <i className="fa-solid fa-hand-holding-heart"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-slate-900">Módulo 3: Cuidado de la Piel</h3>
                  <p className="text-slate-500 text-xs mt-0.5">Rutinas básicas, protección solar e infografías dermatológicas.</p>
                </div>
                <i className="fa-solid fa-chevron-right text-slate-300"></i>
              </div>
            </a>

          </div>
        </section>

        {/* Sugerencias */}
        <section id="sugerencias" className="bg-white rounded-2xl p-5 border border-slate-200 mb-4">
          <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
            <i className="fa-solid fa-inbox text-purple-600"></i> Buzón de Sugerencias
          </h2>
          <p className="text-xs text-slate-500 mb-4">¿Tienes alguna duda o comentario sobre los talleres? Escríbenos aquí abajo.</p>

          <form className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Nombre (Opcional)</label>
              <input type="text" placeholder="Ej. María" className="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Correo Electrónico (Opcional)</label>
              <input type="email" placeholder="ejemplo@correo.com" className="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Tu mensaje *</label>
              <textarea rows="3" placeholder="Escribe aquí lo que piensas o lo que necesitas..." className="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
            </div>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl text-base">
              Enviar Comentario
            </button>
          </form>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-center py-4 px-4 text-xs mt-auto">
        <p>© 2026 Plataforma de Estética Integral & MIES</p>
        <p className="mt-1 text-slate-500">Contenido educativo adaptado para visualización móvil eficiente.</p>
      </footer>

    </div>
  )
}