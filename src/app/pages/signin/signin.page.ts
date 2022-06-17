import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  user={}as User;
  email:any;
  pass:any;

  constructor(private load:LoadingController,private toast:ToastController,private route:Router,private auth:AngularFireAuth) { }

  ngOnInit() {
  }
  async reg(){
    if(this.validation())
    {
      // try{

      // }catch(e)
      // {

      // }
      this.email=((document.getElementById("email") as HTMLInputElement).value);
      this.pass=((document.getElementById("password") as HTMLInputElement).value);

      this.auth.
      createUserWithEmailAndPassword( this.email, this.pass)
     .then((userCredential) => {
      if(userCredential)
      {
        window.alert('logged in');
        this.route.navigateByUrl('/login');
      }
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       // ..
       window.alert(errorMessage);
     
     });


    }
  
  }

      //pop up message
      showToast(message:string)
      {
          this.toast.create({
          message:message,
          duration:4000
      }).then(toastData=>toastData.present());
      }
      validation(){
       //const params : NavigationExtras = {queryParams: {userVaL: this.user.username}, };
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
      
       if(!this.user.username)
        {
          // check if all of this condition are not mean't  the method is, hence validation true("return true")
          this.showToast("Enter username");
          
          return false;
        }
        if(!this.user.email)
        {
          //this.userDisplaypassword="enter password";
          this.showToast("Enter email");
          return false;
        }
        if(!this.user.contact)
        {
          //this.userDisplaypassword="enter password";
          this.showToast("Enter contact");
          return false;
        }
        
      if(!this.user.password)
        {
          //this.userDisplaypassword="enter password";
          this.showToast("Enter password");
          return false;
        }
        if(!this.user.confirmpassword)
        {
          //this.userDis playpassword="enter password";
          this.showToast("confirmpassword");
          return false;
        }
      
        
        return true;
      }
}
