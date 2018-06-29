import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
