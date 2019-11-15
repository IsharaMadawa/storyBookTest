import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task/tasl.model';

@Component({
  selector: 'task-list',
  template: `
    <div class="list-items">
      <task-item
        *ngFor="let task of tasksInOrder"
        [task]="task"
        (onArchiveTask)="onArchiveTask.emit($event)"
        (onPinTask)="onPinTask.emit($event)"
      >
      </task-item>
    </div>
  `,
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  @Input() loading: boolean = false;
  @Output() onPinTask: EventEmitter<any> = new EventEmitter();
  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }
}