// Página de Sugerencias - Erick Tapia
// Esta vista permite a los usuarios enviar sugerencias al equipo de BellaForma

import { useState } from "react"
import { supabase } from "../lib/supabaseClient"

export default function Sugerencias() {

  // Aquí guardamos lo que el usuario escribe en el formulario
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  })

  // Mensajes para decirle al usuario si salió bien o mal
  const [exito, setExito] = useState(false)
  const [error, setError] = useState("")
  const [cargando, setCargando] = useState(false)

  // Esta función se ejecuta cada vez que el usuario escribe en un campo
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Esta función se ejecuta cuando el usuario hace clic en "Enviar"
  const handleSubmit = async (e) => {
    e.preventDefault() // Evita que la página se recargue

    // Validación: todos los campos son obligatorios
    if (!form.nombre || !form.correo || !form.mensaje) {
      setError("Por favor completa todos los campos.")
      return
    }

    setCargando(true) // Muestra que está procesando
    setError("")

    // Enviamos los datos a la tabla "sugerencias" en Supabase
    const { error: sbError } = await supabase
      .from("sugerencias")
      .insert([{
        nombre: form.nombre,
        correo: form.correo,
        mensaje: form.mensaje
      }])

    setCargando(false)

    if (sbError) {
      // Si Supabase devuelve un error lo mostramos
      setError("Hubo un error al enviar. Intenta de nuevo.")
    } else {
      // Si salió bien, limpiamos el formulario y mostramos mensaje de éxito
      setExito(true)
      setForm({ nombre: "", correo: "", mensaje: "" })
    }
  }

  return (
    // Contenedor principal centrado en la pantalla
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4">

      {/* Caja del formulario */}
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">

        {/* Título */}
        <h1 className="text-2xl font-bold text-pink-600 mb-2">
          Envíanos tu sugerencia
        </h1>

        {/* Subtítulo */}
        <p className="text-gray-500 mb-6 text-sm">
          Tu opinión nos ayuda a mejorar BellaForma
        </p>

        {/* Mensaje de éxito si se envió bien */}
        {exito && (
          <div className="bg-green-100 text-green-700 rounded-lg p-3 mb-4 text-sm">
            ✅ ¡Sugerencia enviada con éxito! Gracias por tu opinión.
          </div>
        )}

        {/* Mensaje de error si algo salió mal */}
        {error && (
          <div className="bg-red-100 text-red-600 rounded-lg p-3 mb-4 text-sm">
            ⚠️ {error}
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Campo Nombre */}
          <div>
            <label className="text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Campo Correo */}
          <div>
            <label className="text-sm font-medium text-gray-700">Correo</label>
            <input
              type="email"
              name="correo"
              value={form.correo}
              onChange={handleChange}
              placeholder="tucorreo@ejemplo.com"
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Campo Mensaje */}
          <div>
            <label className="text-sm font-medium text-gray-700">Mensaje</label>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              placeholder="Escribe tu sugerencia aquí..."
              rows={4}
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
            />
          </div>

          {/* Botón de enviar */}
          <button
            type="submit"
            disabled={cargando}
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg py-2 transition-colors disabled:opacity-50"
          >
            {/* Cambia el texto según si está cargando o no */}
            {cargando ? "Enviando..." : "Enviar sugerencia"}
          </button>

        </form>
      </div>
    </div>
  )
}