import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class CounterService{
onInactive= new EventEmitter<number>();
onActive = new EventEmitter<number>();
}