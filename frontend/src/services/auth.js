import { supabase } from '../lib/supabaseClient';

// Iniciar sesión de administrador (RF-ADM-02)
export async function iniciarSesion(correo, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: correo,
      password: password,
    });
    if (error) return { ok: false, data: null, error: error.message };
    return { ok: true, data, error: null };
  } catch (e) {
    return { ok: false, data: null, error: 'No se pudo iniciar sesión. Intenta de nuevo.' };
  }
}

// Cerrar la sesión del administrador
export async function cerrarSesion() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) return { ok: false, data: null, error: error.message };
    return { ok: true, data: null, error: null };
  } catch (e) {
    return { ok: false, data: null, error: 'No se pudo cerrar sesión.' };
  }
}

// Obtener la sesión activa (si existe)
export async function obtenerSesion() {
  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) return { ok: false, data: null, error: error.message };
    return { ok: true, data: data.session, error: null };
  } catch (e) {
    return { ok: false, data: null, error: 'No se pudo obtener la sesión.' };
  }
}

// Obtener el usuario actual
export async function obtenerUsuario() {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error) return { ok: false, data: null, error: error.message };
    return { ok: true, data: data.user, error: null };
  } catch (e) {
    return { ok: false, data: null, error: 'No se pudo obtener el usuario.' };
  }
}

// Verificar si el usuario actual es ADMINISTRADOR (RF-ADM-02)
export async function esAdmin() {
  try {
    const { data: userData } = await supabase.auth.getUser();
    const user = userData?.user;
    if (!user) return false;

    const { data, error } = await supabase
      .from('perfiles')
      .select('rol')
      .eq('id', user.id)
      .single();

    if (error || !data) return false;
    return data.rol === 'admin';
  } catch (e) {
    return false;
  }
}

// Recuperación de contraseña - PASO 1: enviar correo (RF-ADM-04)
export async function recuperarContrasena(correo) {
  try {
    const redirectTo = `${window.location.origin}/restablecer-contrasena`;
    const { error } = await supabase.auth.resetPasswordForEmail(correo, {
      redirectTo,
    });
    if (error) return { ok: false, data: null, error: error.message };
    return {
      ok: true,
      data: 'Te enviamos un correo con el enlace para restablecer tu contraseña.',
      error: null,
    };
  } catch (e) {
    return { ok: false, data: null, error: 'No se pudo enviar el correo de recuperación.' };
  }
}

// Recuperación de contraseña - PASO 2: guardar nueva clave (RF-ADM-04)
export async function actualizarContrasena(nuevaPassword) {
  try {
    const { data, error } = await supabase.auth.updateUser({
      password: nuevaPassword,
    });
    if (error) return { ok: false, data: null, error: error.message };
    return { ok: true, data, error: null };
  } catch (e) {
    return { ok: false, data: null, error: 'No se pudo actualizar la contraseña.' };
  }
}

// Suscribirse a los cambios de sesión (login/logout)
export function onCambioAuth(callback) {
  const { data } = supabase.auth.onAuthStateChange((_evento, sesion) => {
    callback(sesion);
  });
  return data.subscription;
}