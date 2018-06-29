import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template: `
  	<h2 *ngIf="displayName; else elseBlock">
  		Best in the World !
  	</h2>

  	<ng-template #elseBlock>
  	<h2>
  		Name is Hidden
  	</h2>
  	</ng-template>

  	<div *ngIf="displayName; then ifBlock; else elseblock"></div>
  	<ng-template #ifBlock>
  		<h2>
  			Executed if statement
  		</h2>
  	</ng-template>
  	<ng-template #elseblock>
  		<h2>
  			Executed else block
  		</h2>
  	</ng-template>

  	<div [ngSwitch]="color">
  		<div *ngSwitchCase="'red'">You picked red color</div>
  		<div *ngSwitchCase="'blue'">You picked blue color</div>
  		<div *ngSwitchCase="'green'">You picked green color</div>
  		<div *ngSwitchDefault>Pick Again</div>
  	</div>


  	<div *ngFor="let color of colors; index as i">
  		<h2>{{i}} {{color}}</h2>
  	</div>
  	<div *ngFor="let color of colors; first as f">
  		<h2>{{f}} {{color}}</h2>
  	</div>
  	<div *ngFor="let color of colors; last as l">
  		<h2>{{l}} {{color}}</h2>
  	</div>
  	<div *ngFor="let color of colors; odd as o">
  		<h2>{{o}} {{color}}</h2>
  	</div>
  	<div *ngFor="let color of colors; even as e">
  		<h2>{{e}} {{color}}</h2>
  	</div>


  	<h2> Understanding Component Interaction </h2>
  	<h2>sending data from parent component to child component</h2>
  	<h2>{{"Hello " + parentData}}</h2>
  	<h2>{{"Hello " + anyvariable}}</h2>

  	<h2>sending data from child component to parent component.</h2>
  	<button (click)="fireEvent()">Send event</button>

  	<h2> Understanding Pipes</h2>
  	<h2>{{ name }}</h2>
  	<h2>{{ name | lowercase }}</h2>
  	<h2>{{ name | uppercase }}</h2>
  	<h2>{{ message | titlecase }}</h2>
  	<h2>{{ name | slice:3:5 }}</h2>

  	<h2> Working with JSON pipe</h2>
  	<h2>{{ person | json }}</h2>

  	<h2> Working with number pipes</h2>
  	<h2>{{ 5.678 | number:'1.2-3' }}</h2>
  	<h2>{{ 5.678 | number:'3.4-5' }}</h2>
  	<h2>{{ 5.678 | number:'3.1-2' }}</h2>

  	<h2> Percent pipe</h2>
  	<h2> {{ 0.25 | percent }}</h2>

  	<h2> Currency pipe</h2>
  	<h2> {{ 0.25 | currency }}</h2>
  	<h2> {{ 0.25 | currency: 'GBP' }}</h2>
  	<h2> {{ 0.25 | currency: 'INR' }}</h2>

  	<h2> Date pipes</h2>
  	<h2> {{ date }}</h2>
  	<h2> {{ date | date:'short' }}</h2>
  	<h2> {{ date | date:'shortDate' }}</h2>
  	<h2> {{ date | date:'shortTime' }}</h2>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // if case
  displayName = true;

  // Switch case
  public color = "";

  // ngFor directive
  public colors = ["red", "blue", "green", "yellow"];

  // understanding component interaction (two ways)
  // sending data from parent component to child component
  // `app` is parent component, whereas `test` is child component.
  @Input() public parentData;
  @Input('parentData') public anyvariable;

  // sending data from child component to parent component.
  @Output() public childEvent = new EventEmitter();

  // understanding pipes
  public name = "CodeEvolution";
  public message = "Welcome to CodeEvolution";
  public person = {
  	"firstName": "John",
  	"lastName": "Doe"
  };

  public date = new Date();
  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
  	this.childEvent.emit('The evolution');
  }

}
