import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-about-child',
  templateUrl: './about-child.component.html',
  styleUrl: './about-child.component.css',
})
export class AboutChildComponent {
  count = 0;
  incrementCount = output<number>();

  dataValue = input<number>();

  handleIncrement() {
    this.count++;

    this.incrementCount.emit(this.count);
  }
}
