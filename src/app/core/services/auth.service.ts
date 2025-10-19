// Servicio de autenticación (AuthService)
// Maneja el registro, login, logout y sesión del usuario.

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Interfaz para definir la estructura de un usuario
export interface Usuario {
  nombres: string;
  apellidos: string;
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  /** Lista de usuarios almacenados solo en memoria (no se guarda al refrescar la página) */
  private usuarios: Usuario[] = [];

  /** Clave usada para guardar la sesión en sessionStorage */
  private LS_SESSION = 'u-reserva:session';

  constructor(private router: Router) {}

  // ------- Registro de usuario -------
  registrar(nuevo: Usuario): { ok: boolean; msg: string } {
    // Evita duplicar correos
    if (this.usuarios.some(u => u.email.toLowerCase() === nuevo.email.toLowerCase())) {
      return { ok: false, msg: 'El correo ya está registrado.' };
    }
    // Guarda el nuevo usuario en memoria
    this.usuarios.push(nuevo);
    return { ok: true, msg: 'Cuenta creada correctamente.' };
  }

  // ------- Inicio de sesión -------
  login(email: string, password: string): { ok: boolean; msg: string } {
    const user = this.usuarios.find(u => u.email.toLowerCase() === email.toLowerCase());
    // Verifica credenciales
    if (!user || user.password !== password) {
      return { ok: false, msg: 'Correo o contraseña incorrectos.' };
    }
    // Guarda la sesión en sessionStorage
    sessionStorage.setItem(this.LS_SESSION, JSON.stringify({ email: user.email }));
    return { ok: true, msg: 'Bienvenido' };
  }

  // ------- Cierre de sesión -------
  logout() {
    sessionStorage.removeItem(this.LS_SESSION); // Elimina sesión
    this.router.navigate(['/auth/login']);      // Redirige al login
  }

  // ------- Validaciones -------
  isLoggedIn(): boolean {
    // Devuelve true si hay sesión activa
    return !!sessionStorage.getItem(this.LS_SESSION);
  }

  // Obtiene los datos del usuario logeado
  getUsuarioActual(): Usuario | null {
    const s = sessionStorage.getItem(this.LS_SESSION);
    if (!s) return null;
    const { email } = JSON.parse(s);
    return this.usuarios.find(u => u.email === email) ?? null;
  }
}
