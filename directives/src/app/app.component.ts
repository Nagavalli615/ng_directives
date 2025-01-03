import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf,NgTemplateOutlet,NgTemplateOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user:string = "nagavalli"
isenable:boolean = false;

logincount = 0;
checkfordata(){
  this.logincount ++;
  console.log(this.logincount);
}
users:Array<string> =['valli','siva','karthiik']

userObj :Array<any> = [ 
   {id:1,name:'valli',gmail:'vallikatta226@gmail.com'},
   {id:2,name:'siva',gmail:'siva@gmail.com'},
   {id:3,name:'karthik',gmail:'karthik@gmail.com'}
]
addnew(){
  let newuser = {id:5,name:'nagavalli',gmail:'nagavalli@gmail.com'}
  this.userObj.push(newuser)
}
}