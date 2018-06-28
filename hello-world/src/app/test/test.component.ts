import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  templateUrl: './test.component.html', // Can create inline templates as well
  // template: `<div>
  // 				Inline Template
  // 			 </div>`,
 
  // styles: [`
  // 	div {
  // 		color: red;
  // 	}
  // `]
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
