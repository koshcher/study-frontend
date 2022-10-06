import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-swap',
  templateUrl: './drag-swap.component.html',
  styleUrls: ['./drag-swap.component.scss']
})
export class DragSwapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  draged = {
    row: -1,
    col: -1
  }

  keys = [
    ['w', 'l', 'y', 'p', 'k', 'z', 'x', 'o', 'u', ';', '[', ']', '\\'],
    ['c', 'r', 's', 't', 'b', 'f', 'n', 'e', 'i', 'a', '\''],
    ['j', 'v', 'd', 'g', 'q', 'm', 'h', '/', ',', '.']
  ]

  // to show ability to drop
  dragover(event: any) {
    event.preventDefault();
  }

  // rowIndex, colIndex = indexs of key from 
  drag(row: number, col: number) {
    this.draged.col = col
    this.draged.row = row
  }

  // row, col = indexs of key to
  drop(row: number, col: number) {
    [this.keys[this.draged.row][this.draged.col], this.keys[row][col]] = [this.keys[row][col], this.keys[this.draged.row][this.draged.col]];
  }
}
