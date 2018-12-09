import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CoverageOnFly';
  name:any;
  pass:any;
  
  click(){
	  this.name="mohsin";
	  this.pass="abc";
  }
  test(){
	  this.name="mohammad";
	  this.pass="cgf";
  }
	  
}
