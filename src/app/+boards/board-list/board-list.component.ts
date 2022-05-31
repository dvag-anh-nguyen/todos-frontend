import {Component, Input, OnInit} from '@angular/core';
import {Board} from "../../core/http/swagger/task/models/board";

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.sass']
})
export class BoardListComponent implements OnInit {

  @Input("value") boards?: Array<Board>

  constructor() {
  }

  ngOnInit(): void {
  }

}
