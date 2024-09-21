import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment-service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialValue = signal('0');
  enteredAnnualValue = signal('0');
  enteredExpectedlValue = signal('5');
  enteredDurationValue = signal('10');

  constructor(private investmentService: InvestmentService){}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialValue(),
      annualInvestment: +this.enteredAnnualValue(),
      expectedReturn: +this.enteredExpectedlValue(),
      duration: +this.enteredDurationValue()
    })
    
  this.enteredInitialValue.set('0');
  this.enteredAnnualValue.set('0');
  this.enteredExpectedlValue.set('0');
  this.enteredDurationValue.set('0');
  }
}
