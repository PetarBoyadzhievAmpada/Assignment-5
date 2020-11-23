import { Component } from '@angular/core';
import {  usersService } from './usersService.service';
import { OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private activeInactive: usersService){}

  activeUsers = [];
  inactiveUsers = [];

  ngOnInit(){
    this.activeUsers = this.activeInactive.activeUsers;
    this.inactiveUsers = this.activeInactive.inactiveUsers;

  }
}
