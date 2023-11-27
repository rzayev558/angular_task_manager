import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [CommonModule, ButtonComponent],
})
export class HeaderComponent implements OnInit {
  title = 'Task Manager';
  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggleAddTask() {
    console.log('toggled');
  }
}
