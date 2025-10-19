// Componente de inicio de sesión (LoginComponent)
// Maneja el formulario de login y usa el servicio AuthService para validar el acceso.

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true, // Componente independiente
  imports: [CommonModule, FormsModule, RouterLink], // Módulos necesarios
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  // Variables enlazadas con el formulario
  email = '';
  password = '';

  // Objeto para mostrar mensajes de alerta (éxito o error)
  alerta: { tipo: 'success' | 'danger' | ''; msg: string } = { tipo: '', msg: '' };

  // Inyecto el servicio de autenticación y el router
  constructor(private auth: AuthService, private router: Router) {}

  // Método que se ejecuta al enviar el formulario
  onSubmit(form: NgForm) {
    // Si el formulario está vacío o inválido, muestra alerta
    if (form.invalid) {
      this.alerta = { tipo: 'danger', msg: 'Ingresa tu correo y contraseña.' };
      return;
    }

    // Llama al servicio para validar credenciales
    const r = this.auth.login(this.email, this.password);

    // Si el login es correcto, muestra mensaje y redirige al dashboard
    if (r.ok) {
      this.alerta = { tipo: 'success', msg: 'Acceso correcto. Redirigiendo…' };
      console.log('[UI] Login OK para:', this.email);
      setTimeout(() => this.router.navigate(['/dashboard']), 600);
    } 
    // Si falla, muestra error en pantalla
    else {
      this.alerta = { tipo: 'danger', msg: r.msg };
      console.log('[UI] Login FAIL:', r.msg);
    }
  }
}
