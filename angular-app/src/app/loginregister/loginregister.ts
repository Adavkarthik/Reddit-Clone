import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { login, register, Userservice } from '../userservice';

@Component({
  selector: 'app-loginregister',
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './loginregister.html',
  styleUrl: './loginregister.css',
})  
export class Loginregister {
 @Output() close=new EventEmitter<void>;  
 username:string="";
 password:any="";
 password2:any="";
 email:any="";
 logindata:login={"username":"","password":""};
 registerdata:register={"username":"","password":"","password2":"","email":""}
 constructor (private userservice:Userservice){}
  closePopup()
  {
      this.close.emit();
  }
  login()
  {

    this.logindata.username=this.username;
    this.logindata.password=this.password;
    this.userservice.login(this.logindata).subscribe((result=>{
      console.log(result);
    }));
    this.username='';
    this.password='';
    this.close.emit();
    
  }
  register()
  {
    this.registerdata.username=this.username;
    this.registerdata.password=this.password;
    this.registerdata.password2=this.password2;
    this.registerdata.email=this.email;
    this.userservice.register(this.registerdata).subscribe((result)=>
    {
      console.log(result);
    })
    this.close.emit();
    this.registerdata.username='';
    this.registerdata.password='';
    this.registerdata.password2='';
    this.registerdata.email='';

    
  }

}
