// Componente de registro (RegisterComponent)
// Permite crear una nueva cuenta y valida los datos del formulario.

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService, Usuario } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true, // Componente independiente
  imports: [CommonModule, ReactiveFormsModule, RouterLink], // Módulos usados en el HTML
  templateUrl: './register.html'
})
export class RegisterComponent implements OnInit {
  
  // Objeto para mostrar mensajes de éxito o error
  alerta: { tipo: 'success' | 'danger' | ''; msg: string } = { tipo: '', msg: '' };

  // Formulario reactivo
  form!: FormGroup;

  // Inyección de dependencias: constructor con form builder, servicio y router
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  // Inicializa el formulario y define las validaciones
  ngOnInit(): void {
    this.form = this.fb.group({
      nombres: ['', Validators.required], // Campo obligatorio
      apellidos: ['', Validators.required],
      email: [
        '',
        [
          Validators.required, // Requerido
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@utmachala\.edu\.ec$/) // Solo correos institucionales
        ]
      ],
      password: ['', [Validators.required, Validators.minLength(6)]] // Mínimo 6 caracteres
    });
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit(): void {
    // Si el formulario es inválido, muestra error
    if (this.form.invalid) {
      this.alerta = { tipo: 'danger', msg: 'Completa los campos requeridos correctamente.' };
      this.form.markAllAsTouched(); // Marca los campos para mostrar errores
      return;
    }

    // Crea el objeto usuario con los datos del formulario
    const user: Usuario = {
      nombres: this.form.value.nombres,
      apellidos: this.form.value.apellidos,
      email: this.form.value.email,
      password: this.form.value.password
    };

    // Intenta registrar el usuario con el servicio de autenticación
    const r = this.auth.registrar(user);
    
    // Si el registro fue exitoso
    if (r.ok) {
      this.alerta = { tipo: 'success', msg: r.msg };
      console.log('[UI] Registro exitoso:', user);

      // Redirige al login después de un breve retraso
      setTimeout(() => {
        this.router.navigate(['/auth/login']);
      }, 900);
    } 
    // Si el registro falla (correo repetido, etc.)
    else {
      this.alerta = { tipo: 'danger', msg: r.msg };
      console.log('[UI] Registro fallido:', r.msg);
    }
  }
}
