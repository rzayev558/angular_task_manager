import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Tasks';
import { TaskItemComponent } from '../task-item/task-item.component';
import { tasks } from '../../mock-tasks';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  tasks: Task[] = tasks;
  constructor() {}
  ngOnInit(): void {}
}
