import { EventEmitter } from "@angular/core";


export class counterService{


counterServiceInactive= new EventEmitter<number>();
counterServiceActive = new EventEmitter<number>();
}