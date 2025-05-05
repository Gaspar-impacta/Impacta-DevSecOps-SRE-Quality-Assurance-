import { CalculadoraComponent } from './calculadora.component';

describe('Test - Calculator', () => {
  let calcComponent: CalculadoraComponent;

  beforeEach(() => {
    calcComponent = new CalculadoraComponent();
  });

  it('deve somar dois números', () => {
    calcComponent.press('5');
    calcComponent.press('+');
    calcComponent.press('3');
    calcComponent.calculate();
    expect(calcComponent.display).toBe('8');
  });

  it('deve subtrair dois números', () => {
    calcComponent.press('5');
    calcComponent.press('-');
    calcComponent.press('3');
    calcComponent.calculate();
    expect(calcComponent.display).toBe('2');
  });
});
