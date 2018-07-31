import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
    <h1>
      Marvellous InfoSystems
    </h1>
      This is TextField <input type="text" name="demo">
  </div>
  `,
  styles: ['h1{ color:blue; }']
})
export class AppComponent {
  title = 'Angular-Assignment2-Que3';
}
