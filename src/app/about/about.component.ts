import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  dataValue = signal<number>(0);

  incrementCount(value: number) {
    console.log(value);
    this.dataValue.set(value);
  }
}
