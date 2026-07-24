import { Component, signal } from '@angular/core';

interface TodoItems {
  name: string;
  isDone: boolean;
}

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})

export class Todo {

  task = signal<string>('');

  items = signal<TodoItems[]>([]);

  addTodo() {
    if(this.task() === '') return;
    this.items.update(item => [...item, {name: this.task(), isDone: false}]);
    // this.items.set([...this.items(), {name: this.task(), isDone: false}]);
    this.task.set('');
  }
  
  deleteTodo(id: number) {
    this.items.update(items => items.filter((items, i) => 
      i !== id
    ));
    // this.items.set(this.items().filter((item, i) => i !== id));
  }

  completeTodo(id: number) {
    this.items.update(items => items.map((item, i) => 
      i === id ? { ...item, isDone: !item.isDone } : item
    ));
    /* this.items.set(this.items().map((item, i) => 
      {
        return i === id ? {...item, isDone: !item.isDone} : item;
      }
    ));*/
  }

}
