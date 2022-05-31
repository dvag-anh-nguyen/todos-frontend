import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../core/http/swagger/task/models/task";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {

  @Input("value") tasks?: Array<Task> | undefined | null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
