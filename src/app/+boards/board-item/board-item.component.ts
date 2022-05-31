import {Component, Input, OnInit} from '@angular/core';
import {Board} from "../../core/http/swagger/task/models/board";

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.sass']
})
export class BoardItemComponent implements OnInit {

  @Input("value") board!: Board;

  constructor() {
  }

  ngOnInit(): void {
  }

}
