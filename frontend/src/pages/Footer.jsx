// Componente Footer - Jessica Guano

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-center py-6 px-4 text-xs mt-auto">
      
      {/* Logo y nombre */}
      <p className="text-white font-bold text-base mb-1">BellaForma</p>
      <p className="text-slate-500 mb-4">Tu plataforma de estética, bienestar y cuidado personal</p>

      {/* Links */}
      <div className="flex justify-center gap-6 mb-4 text-slate-400">
        <a href="#" className="hover:text-white transition-colors">Inicio</a>
        <a href="#" className="hover:text-white transition-colors">Módulos</a>
        <a href="#" className="hover:text-white transition-colors">Sugerencias</a>
      </div>

      {/* Derechos */}
      <p className="text-slate-500">© 2026 BellaForma. Todos los derechos reservados.</p>

    </footer>
  )
}