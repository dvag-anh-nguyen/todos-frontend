import {Component, Input, OnInit} from '@angular/core';
import {SlimTask} from "../../core/http/swagger/task/models/slim-task";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.sass']
})
export class TaskItemComponent implements OnInit {

  @Input("value") task!: SlimTask;

  constructor() {
  }

  ngOnInit(): void {
  }

}
