import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

users:any;

  constructor(private rout:Router, private Activated: ActivatedRoute) { }

  ngOnInit() {
    // snapshot my value from login page
    const user = this.Activated.snapshot.paramMap.get('userVal');
    //this.users = user;
    console.log(user);
    //console.log(this.users);

  }

}
