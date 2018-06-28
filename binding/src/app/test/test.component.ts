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

  	<h2 [class]="successClass">{{"Welcome" + name}}</h2>

  	<h2 [class.text-danger]="hasError">{{name.toUpperCase()}}</h2>

  	<h2>{{name.length}}</h2>
  	<h2>{{name.toUpperCase()}}</h2>

  	<h2>{{greetUser()}}</h2>

  	<h2>{{siteUrl}}</h2>

  	<input [id]="myId" type="text" value="Anubhav">
  	<input [disabled]="isDisabled" id={{myId}} type="text" value="Anubhav">

  	<h2 [ngClass]="messageClasses">Class Binding</h2>

  	<h2 [style.color]="'orange'">Style Binding</h2>
  	<h2 [style.color]="hasError ? 'red' : 'green'">Style Binding 2</h2>
  	<h2 [style.color]="highlightColor">Style Binding 3</h2>
  	<h2 [ngStyle]="titleStyles">Style Binding 4</h2>
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
  public successClass = "text-success";
  // will display red font if set to true and black if false.
  public hasError = true;

  // using ng-class directive (class binding)
  public isSpecial = true;
  public messageClasses = {
  	"text-success": !this.hasError,
  	"text-danger" : this.hasError,
  	"text-special": this.isSpecial
  }

  // using style binding
  public highlightColor = "orange";
  public titleStyles = {
  	color: "blue",
  	fontStyle: "italic",

  }
  constructor() { }

  ngOnInit() {
  }

  greetUser() {
  	return "Hello" + this.name;
  }

}
