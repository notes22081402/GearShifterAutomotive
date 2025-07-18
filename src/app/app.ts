import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.html',
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.css'
})
export class App {
  protected title = 'GearShifterAutomotive';
}
