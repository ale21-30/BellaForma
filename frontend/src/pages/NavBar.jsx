// Componente Footer - Jessica Guano
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO / NOMBRE DEL PROYECTO */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-pink-700">Mujer en Acción</h1>
            {/* Si tienes imagen de logo, pones <img src={logo} alt="Logo" className="h-8 w-8" /> */}
          </div>

          {/* ENLACES DEL MENÚ (Para computadora) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:text-pink-600 px-3 py-2 font-medium">Inicio</Link>
              <Link to="/modulos" className="text-gray-700 hover:text-pink-600 px-3 py-2 font-medium">Módulos</Link>
              <Link to="/sugerencias" className="text-gray-700 hover:text-pink-600 px-3 py-2 font-medium">Sugerencias</Link>
            </div>
          </div>

          {/* BOTONES DE ACCIÓN */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/login" className="text-pink-700 hover:bg-pink-50 px-4 py-2 rounded-lg font-medium">Ingresar</Link>
            <Link to="/registro" className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-medium">Registrarme</Link>
          </div>

          {/* MENÚ PARA CELULAR (Se ve cuando la pantalla es pequeña) */}
          <div className="md:hidden">
            {/* Aquí puedes agregar un botón de menú tipo hamburguesa si quieres, por ahora dejamos el texto simple */}
            <Link to="/" className="text-pink-700 font-bold">Menú</Link>
          </div>

        </div>
      </div>
    </nav>
  );
}