import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag: boolean = true;
  myColor: string = 'green';

  toggle() {
    this.flag = !this.flag;
  }

  whenHighlightTriggered(value: string) {
    console.log('Highlighted as triggered, with color ' + value);
  }

}
