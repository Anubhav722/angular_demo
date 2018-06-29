import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // sending data from parent component to child component
  public name = "Anubhav";

  // receiveing data from child component to parent component
  public message = "";
}
