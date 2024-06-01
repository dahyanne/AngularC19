import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <h1>Analizador de Números Capicúa</h1>
      <input type="text" [(ngModel)]="numero" (input)="analizarNumero()" placeholder="Ingresa un número" />
      <p *ngIf="mensaje">{{ mensaje }}</p>
    </div>
  `
})
export class AppComponent {
  numero: string = '';
  esCapicua: boolean = false;
  mensaje: string = '';

  analizarNumero() {
    if (this.numero.length >= 2) {
      this.esCapicua = this.numero === this.numero.split('').reverse().join('');
      this.mensaje = this.esCapicua ? 'El número es capicúa' : 'El número no es capicúa';
    } else {
      this.mensaje = '';
      this.esCapicua = false;
    }
  }
}
