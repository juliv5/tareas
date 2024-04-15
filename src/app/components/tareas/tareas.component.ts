import { Component } from '@angular/core';
import { Tarea } from '../../models/Tarea';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.scss',
})
export class TareasComponent {
  listTareas: Tarea[] = [];
  nombreTarea = '';
  mostrarBoton: boolean = false;

  constructor() {
    this.mostrarBoton = this.detectarDispositivoMovil();
    console.log(window.innerWidth)
  }
  detectarDispositivoMovil(): boolean {
    return window.innerWidth <= 1080; 
    
  }
  addTareas() {
    const trimmedNombre = this.nombreTarea.trim();

    if (trimmedNombre !== '') {
      const tarea: Tarea = {
        nombre: trimmedNombre,
        estado: false,
      };
      this.listTareas.push(tarea);
      this.nombreTarea = '';
    } else {
      alert('Por favor, ingrese un nombre válido para la tarea.');
    }
  }
}
