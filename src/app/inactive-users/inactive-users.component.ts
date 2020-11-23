import { identifierModuleUrl } from '@angular/compiler/src/compile_metadata';
import { Component, Input } from '@angular/core';
import { counterService } from '../counterService.service';
import { usersService } from '../usersService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  count= 0;

  constructor(private activeChange:usersService,
              private counterService:counterService){
      
          this.counterService.counterServiceInactive.subscribe(
            (count:number) => console.log("Changed from Active to Inactive, count: " + count)
           );

  }
   


  setActive(id:number) {
   this.activeChange.changedToActive(id);
    this.count++;
    this.counterService.counterServiceActive.emit(this.count);
  }
}
