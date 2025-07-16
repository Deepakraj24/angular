import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
//   name=""
//   displayName="";
//   email="";
//   getEvent(event: Event) {
//     const name= (event.target as HTMLInputElement).value;
//     this.name = name;
//   }
//   showName() {
//     this.displayName = this.name;
//   }
//   setName() {
//     this.name = "John Doe";

//   }
// getEmail(val:string) {
//   console.log(val);
//   this.email = val;

// }
// setEmail() {
//   this.email = "deepak@gamil.com";
// }

// display = false;
// x = 10;
count = signal(0);
x=20;

constructor() {
  effect(() => {
    console.log("Count changed: ", this.count());
  })
}
updateCount() {
  this.count.set(this.count() + 1);
}
}
