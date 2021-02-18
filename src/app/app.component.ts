import { Component } from '@angular/core';
import { Todo } from './todo';


import {trigger, transition, style, animate, query, stagger} from '@angular/animations'

const listAnimation = trigger('listAnimation',[
  transition('open => closed',[
    query(':enter',
    [
      style({ opacity:0}),
      stagger('60ms', animate('600ms ease-out', style({opacity:1})))
    ],
    {optional:true}
    )
  ])
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [listAnimation ]
})
export class AppComponent {
  title = 'Angular Project';
  todoValue:string = '';
  list:Todo[]=[];

  ngOnInit(){
    this.list=[];
    this.todoValue='';

  }

  addItem(){
    if(this.todoValue !== ''){
      const newItem:Todo = {
        id:Date.now(),
        value: this.todoValue,
        isDone:false
      };
      this.list.push(newItem)
    }
    this.todoValue = '';
  }

  deleteItem(id:number){
    this.list = this.list.filter(item => item.id !== id);
  }

}
