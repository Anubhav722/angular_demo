import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template: `
  	<h2>
  		Welcome {{name}}
  	</h2>
  	<h2>{{2+7}}</h2>
  	<h2 class="text-success">Welcome {{name}}</h2>
  	<h2>{{"Welcome" + name}}</h2>
  	<h2>{{name.toUpperCase()}}</h2>
  	<h2>{{name.length}}</h2>
  	<h2>{{name.toUpperCase()}}</h2>

  	<h2>{{greetUser()}}</h2>

  	<h2>{{siteUrl}}</h2>

  	<input [id]="myId" type="text" value="Anubhav">
  	<input [disabled]="isDisabled" id={{myId}} type="text" value="Anubhav">
  `,
  styles: [`
  	.text-success {
  		color: green;
  	}
  	.text-danger {
  		color: red;
  	}
  	.text-special {
  		font-style: italic;
  	}
  `]
  // styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Anu";
  public siteUrl = window.location.href;

  // property binding
  public myId = "testId";
  public isDisabled = true;
  constructor() { }

  ngOnInit() {
  }

  greetUser() {
  	return "Hello" + this.name;
  }

}
