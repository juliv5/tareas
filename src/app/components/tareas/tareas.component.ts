import { Component } from '@angular/core';
import { Tarea } from '../../models/Tarea';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';



@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [FormsModule,CommonModule,AppComponent],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.scss',
})
export class TareasComponent {
  listTareas: Tarea [] = [];
  nombreTarea = '';

  addTareas() {
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false,
    };
    this.listTareas.push(tarea);
    this.nombreTarea='';
  }
}
