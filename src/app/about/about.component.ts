import { Component, signal } from '@angular/core';
import { PageTitleComponent } from '../page-title/page-title.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  standalone: true,
  imports: [PageTitleComponent],
})
export class AboutComponent {
  dataValue = signal<number>(0);

  incrementCount(value: number) {
    console.log(value);
    this.dataValue.set(value);
  }
}
