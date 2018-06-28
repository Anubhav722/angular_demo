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
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // if case
  displayName = false;

  // Switch case
  public color = "";
  constructor() { }

  ngOnInit() {
  }

}
