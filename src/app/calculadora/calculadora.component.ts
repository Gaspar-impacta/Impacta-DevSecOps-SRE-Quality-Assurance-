import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  display: string = '';

  press(key: string): void {
    const operators = ['+', '-'];
    const lastChar = this.display.slice(-1);

    if (operators.includes(key)) {
      if (this.display === '' && key !== '-') {
        return;
      }
      if (operators.includes(lastChar)) {
        return;
      }
    }

    this.display += key;
  }

  calculate(): void {
    try {
      const result = evaluate(this.display);
      this.display = result.toString();
    } catch {
      this.display = 'Error';
    }
  }

  clear(): void {
    this.display = '';
  }
}
