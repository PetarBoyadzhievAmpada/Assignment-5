import { EventEmitter } from "@angular/core";


export class CounterService{
CounterServiceInactive= new EventEmitter<number>();
CounterServiceActive = new EventEmitter<number>();
}