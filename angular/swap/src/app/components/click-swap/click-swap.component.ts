import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-swap',
  templateUrl: './click-swap.component.html',
  styleUrls: ['./click-swap.component.scss']
})
export class ClickSwapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedRow: number = -1
  selectedCol: number = -1
  readyToSwap = false

  keys = [
    ['w', 'l', 'y', 'p', 'k', 'z', 'x', 'o', 'u', ';', '[', ']', '\\'],
    ['c', 'r', 's', 't', 'b', 'f', 'n', 'e', 'i', 'a', '\''],
    ['j', 'v', 'd', 'g', 'q', 'm', 'h', '/', ',', '.']
  ]

  swap(row: number, col: number) {
    if (this.readyToSwap) {
      [this.keys[this.selectedRow][this.selectedCol], this.keys[row][col]] = [this.keys[row][col], this.keys[this.selectedRow][this.selectedCol]];
      this.readyToSwap = false
    } else {
      this.readyToSwap = true
    }
    this.selectedRow = row
    this.selectedCol = col
  }
}
