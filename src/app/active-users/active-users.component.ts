import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, Input } from '@angular/core';
import { counterService } from '../counterService.service';
import {  usersService } from '../usersService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  count = 0;
 
  

  constructor(private inactiveChange: usersService,
              private counterService:counterService){

                this.counterService.counterServiceActive.subscribe((count:Number)=> 
                console.log("Changed from Inactive to Active, count: " + count));
  }
 
  setInactive(id: number) {
    this.inactiveChange.changedToInactive(id);
      this.count++
      this.counterService.counterServiceInactive.emit(this.count);
        
  }
  
  
  
 
}


