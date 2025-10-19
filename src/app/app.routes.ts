import { Routes } from '@angular/router';

import { LoginComponent } from './pages/auth/login/login';
import { RegisterComponent } from './pages/auth/register/register';
import { ForgotPassword } from './pages/auth/forgot-password/forgot-password';

import { MainLayout } from './core/layouts/main-layout/main-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { List } from './pages/reservas/list/list';

import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  // 🔹 Páginas públicas (sin menú ni navbar)
  {
    path: 'auth/login',
    loadComponent: () => import('./pages/auth/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'auth/register',
    loadComponent: () => import('./pages/auth/register/register').then(m => m.RegisterComponent)
  },
  {
    path: 'auth/forgot',
    loadComponent: () => import('./pages/auth/forgot-password/forgot-password').then(m => m.ForgotPassword)
  },

  // 🔹 Resto de la app (dentro del layout con menú y navbar)
  {
    path: '',
    loadComponent: () => import('./core/layouts/main-layout/main-layout').then(m => m.MainLayout),
    children: [
      { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard) },
      { path: 'laboratorios', loadComponent: () => import('./pages/laboratorios/list/list').then(m => m.List) },
      { path: 'equipos', loadComponent: () => import('./pages/equipos/list/list').then(m => m.List) },
      { path: 'reservas', loadComponent: () => import('./pages/reservas/list/list').then(m => m.List) },
      { path: 'reservas/aprobaciones', loadComponent: () => import('./pages/reservas/aprobaciones/aprobaciones').then(m => m.Aprobaciones) },
      { path: 'reportes/labs', loadComponent: () => import('./pages/reportes/labs/labs').then(m => m.Labs) },
      { path: 'perfil', loadComponent: () => import('./pages/perfil/perfil').then(m => m.Perfil) },
    ]
  },

  { path: '**', redirectTo: 'auth/login' }
];
