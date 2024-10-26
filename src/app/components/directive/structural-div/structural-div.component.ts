import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-div',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-div.component.html',
  styleUrl: './structural-div.component.css'
})
export class StructuralDivComponent {

div1BgColor:string='bg-primary';
  
isDiv2Active:boolean=false;

num1:string='';
num2:string='';

isActive:boolean=true;

addRedClass(){
  this.div1BgColor="bg-danger";
}
addBlueClass(){
  this.div1BgColor="bg-primary";
}

toggleDiv2Class(){
  this.isDiv2Active=!this.isDiv2Active;
}
}
