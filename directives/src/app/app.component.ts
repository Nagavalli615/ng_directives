import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf,NgTemplateOutlet,NgTemplateOutlet,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault,NgStyle,NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user:string = "nagavalli"
isenable:boolean = false;

constructor(){
this.userObj.length
}
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
// ondelete(user:object){
//   let index = this.userObj.indexOf(user)
//   //console.log(index)
//   this.userObj.splice(index,1)
// }
ondelete(index:number){
  this.userObj.splice(index,1)
}

userrole: string = ''


//attribue binding-- style binding

isstyle: boolean = false;

}