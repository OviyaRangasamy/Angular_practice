import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
    name = "Oviya";
    value="home";
    getName(){
      let displayName = "Welcome "+this.name+"!"
      return (displayName)
    }
  
}
