import { Component } from '@angular/core';
import { HeadersComponent } from "./headers/headers.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeadersComponent, UserInputComponent, InvestmentResultsComponent],
})

export class AppComponent {
}
