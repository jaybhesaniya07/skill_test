import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postfixExpression: string = '';
  result: number | string = '';
  operators = ['+', '-', '*', '/'];
  stack: number[] = [];

  evaluatePostfix(): void {
    // const stack: number[] = [];
    // const operators = ['+', '-', '*', '/'];

    for (let i = 0; i < this.postfixExpression.length; i++) {
      const char = this.postfixExpression[i];

      if (!this.operators.includes(char)) {
        this.stack.push(Number(char));
      } else {
        const operand2 = this.stack.pop();
        const operand1 = this.stack.pop();

        if (operand1 !== undefined && operand2 !== undefined) {
          if (char === '+') {
            this.stack.push(operand1 + operand2);
          } else if (char === '-') {
            this.stack.push(operand1 - operand2);
          } else if (char === '*') {
            this.stack.push(operand1 * operand2);
          } else if (char === '/') {
            this.stack.push(operand1 / operand2);
          }
        } else {
          this.result = 'Invalid postfix expression';
          return;
        }
      }
    }

    if (this.stack.length === 1) {
      this.result = this.stack.pop()!;
    } else {
      this.result = 'Invalid postfix expression';
    }
  }
}

