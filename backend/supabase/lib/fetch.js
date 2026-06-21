//se crea funciones d lectura
import supabase from './supabaseClient'

// Traer módulos
export async function getModulos() {
  const { data, error } = await supabase
    .from('modulos')
    .select('*')
  if (error) throw error
  return data
}

// Traer submódulos
export async function getSubmodulos(moduloId) {
  const { data, error } = await supabase
    .from('submodulos')
    .select('*')
    .eq('modulo_id', moduloId)
  if (error) throw error
  return data
}
