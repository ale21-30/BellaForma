//Página de sugerencias - Erick Tapia

import {useState} from 'react'; //guardar y actualizar el estado del formulario
import {supabase} from '../lib/supabaseClient'; //conectarse a la base de datos Supabase

export default function Sugerencias() {
    const[form, setForm] = useState({
        nombre: '',
        correo: '',
        mensaje: ''
    }); 

    //mensjaes de exito o error
    const [exito, setExito] = useState(false);
    const [error, setError] = useState("");
    const [cargado, setCargado] = useState(false);

    const handleChange = (e) => { //Ejecucion cada vez que el usuario escribe en un campo del formulario
        setForm({...form, [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => { //Ejecucion al enviar el formulario
        e.preventDefault();
    
    if (!form.nombre || !form.correo || !form.mensaje) { //validacion de campos vacios
        setError("Por favor, complete todos los campos.");
        return;
    }

    setCargado(true); //indica que se esta procesando el formulario
    setError(""); //limpia mensajes de error previos

    const{error: sbError} = await supabase.from('sugerencias').insert([ //inserta los datos en la tabla "sugerencias" de Supabase
        {nombre: form.nombre,
            correo: form.correo,
            mensaje: form.mensaje
        }
    ]);

    setCargado(false); //indica que se ha terminado de procesar el formulario

    if (sbError) { //manejo de errores
        setError("Ocurrió un error al enviar su sugerencia. Por favor, inténtelo de nuevo.");
        console.error(sbError);
    } else {
        setExito(true); //indica que el formulario se envió correctamente 
        setForm({nombre: '', correo: '', mensaje: ''}); //limpia el formulario
    }
};

return(
  <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4">
    
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
      
      <h1 className="text-2xl font-bold text-pink-600 mb-2">
        Envíanos tu sugerencia
      </h1>

      <p className="text-gray-500 mb-6 text-sm">
        Tu opinión nos ayuda a mejorar BellaForma
      </p>
      {exito && (
        <div className="bg-green-100 text-green-700 rounded-lg p-3 mb-4 text-sm">
          ¡Sugerencia enviada correctamente!
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-600 rounded-lg p-3 mb-4 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <div>
          <label className="text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Correo</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            placeholder="tucorreo@ejemplo.com"
            className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu sugerencia aquí..."
            rows={4}
            className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={cargado}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg py-2 transition-colors disabled:opacity-50"
        >
          {cargado ? "Enviando..." : "Enviar sugerencia"}
        </button>

      </form>
    </div>
  </div>)
}



