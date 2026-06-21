import supabase from './supabaseClient'

async function testConexion() {
    console.log('Probando conexión con Supabase...')
  const { data, error } = await supabase.from('modulos').select('*')
  if (error) {
  console.log('Error al consultar MODULOS:', error.message)
  } else if (data.length === 0) {
  console.warn('Conexión correcta pero la tabla MODULOS está vacía.')
  } else {
    console.log('Datos obtenidos de MODULOS:', data)
  }
}

testConexion()
