import { Component, OnInit } from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  nameRegex =  /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
  passwordRegex = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;
 
  registerModel = {
    name:"",
    email:"",
    contact_number:"",
    password:"",
    cpassword:"",
  }
  constructor(public ngForm : ReactiveFormsModule,) { }
value2:any
  ngOnInit(): void {
  }
  onSubmit(values:any){
    if(values.password === values.cpassword){
      console.log(this.registerModel)
    }
    
  }
}
