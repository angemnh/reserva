// ===============================================
// auth.guard.ts
// ===============================================
// Este guardia (AuthGuard) protege las rutas del sistema.
// Solo permite acceder si el usuario ha iniciado sesión.
// Si no está logeado, lo redirige al login.
// ===============================================

import { inject } from '@angular/core';          // Permite obtener instancias de servicios sin usar constructor
import { CanActivateFn, Router } from '@angular/router'; // CanActivateFn define una función de protección de rutas
import { AuthService } from '../services/auth.service';  // Servicio de autenticación (controla si el usuario está logeado)

// Definición del guardia de autenticación
export const authGuard: CanActivateFn = () => {
  // Inyecta el servicio de autenticación y el enrutador
  const auth = inject(AuthService);
  const router = inject(Router);

  // Si el usuario está logeado, permite el acceso a la ruta
  if (auth.isLoggedIn()) return true;

  // Si no, redirige al login y bloquea el acceso
  router.navigate(['/auth/login']);
  return false;
};
