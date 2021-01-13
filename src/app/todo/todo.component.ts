import { Component, OnInit } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  filter: string = '';
  public todos: Todo[];

  constructor() {
    this.todos = [
      { task: 'Give baby a bath', completed: false },
      { task: 'Cook dinner', completed: true },
      { task: 'Order groceries', completed: false },
      { task: 'Clean kitchen', completed: true },
      { task: 'Practice Javascript', completed: true },
      { task: 'Meditate', completed: false },
    ];
  }

  ngOnInit(): void {}
  markComplete = function (todo: Todo): void {
    todo.completed = true;
  };

  displayedTodos: Todo[] = [...this.todos];

  getFilteredResults() {
    return this.displayedTodos.filter((todo) => {
      return todo.task.includes(this.filter);
    }); 

  }

  title: string = 'Weekend TODO List';
}
