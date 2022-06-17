import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from './../../model/user.model';
import { RouterModule } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, sendEmailVerification } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { async } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   
user={}as User;
email:any;
pass:any;
  constructor( private route:Router,
    private toast:ToastController,
    private load:LoadingController,private auth:AngularFireAuth) {}

  ngOnInit() {

  }
 
  //  // auth.onAuthStateChanged(user => {
  
  //    //let initialView = user ? "Home" : "Login";
  
  //   })
   
   

      
  
    async login(){
      
      this.email=((document.getElementById("email") as HTMLInputElement).value);
      this.pass=((document.getElementById("password") as HTMLInputElement).value);

      this.auth.
      signInWithEmailAndPassword( this.email, this.pass)
     .then((userCredential) => {
      if(userCredential.user)
      {
        window.alert('logged in');
        this.route.navigateByUrl('/home');
      }
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       // ..
       window.alert(errorMessage);
     
     });

  }
  functionvalidation(){
    const params : NavigationExtras = {queryParams: {userVaL: this.user.username}, };
    if(!this.user.name)
    {
      //this.userDisplaypassword="enter password";
      this.showToast("Enter name");
      return false;
    }
    if(!this.user.surname)
    {
      // check if all of this condition are not mean't  the method is, hence validation true("return true")
      this.showToast("Enter username");
      
      return false;
    }
    return true;
  }

  move(){
    this.route.navigateByUrl('/reset');
  

  }









  showToast(message:string){
   this.toast.create({
     message:message,
     duration:3000
   }).then(toastData=>toastData.present());
  }


validation(){
  if(!this.user.email){
    //alert("enter your email")
    this.showToast("enter your email");
    return false;
  }
  if(!this.user.password){
    //alert("enter your password")
    this.showToast("enter your password");
  
    return false;
  }
  return true;
}
}