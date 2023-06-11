import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projects-fe';
  inputValue = 'very value';

  clickHandler() {
	alert('hello');
  }
}
