import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, Input } from '@angular/core';
import { CounterService } from '../CounterService.service';
import {  UsersService } from '../UsersService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  count = 0;
 
  

  constructor(private inactiveChange: UsersService,
              private CounterService:CounterService){

                this.CounterService.CounterServiceActive.subscribe((count:Number)=> 
                console.log("Changed from Inactive to Active, count: " + count));
  }
 
  setInactive(id: number) {
    this.inactiveChange.setInactive(id);
      this.count++
      this.CounterService.CounterServiceInactive.emit(this.count);
        
  }
  
  
  
 
}


