import { identifierModuleUrl } from '@angular/compiler/src/compile_metadata';
import { Component, Input } from '@angular/core';
import { CounterService } from '../CounterService.service';
import { UsersService } from '../UsersService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  count= 0;

  constructor(private activeChange:UsersService,
              private counterService:CounterService){
      
          this.counterService.onInactive.subscribe(
            (count:number) => console.log("Changed from Active to Inactive, count: " + count)
           );

  }

  setActive(id:number) {
   this.activeChange.setActive(id);
    this.count++;
    this.counterService.onActive.emit(this.count);
  }
}
