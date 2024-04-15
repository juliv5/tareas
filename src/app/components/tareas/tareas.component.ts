import { Component } from '@angular/core';
import { Tarea } from '../../models/Tarea';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.scss'
})
export class TareasComponent {
listTareas: Tarea[] =[];
nombreTarea = '';


addTareas(){
  console.log(this.nombreTarea)
}
}
