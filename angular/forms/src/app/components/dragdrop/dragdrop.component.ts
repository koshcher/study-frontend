import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, CdkDragStart, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.scss']
})
export class DragdropComponent implements OnInit {
  constructor() { }

  top = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y'
  ];
  home = [
    'C',
    'R',
    'S',
    'T',
    'B',
    'F'
  ];

  keys = [
    'w', 'l', 'y', 'p', 'k', 'z', 'x', 'o', 'u', ';', '[', ']', '\\', 'c', 'v', 'd', 'g', 'b'
  ]

  dragIndex: number = -1

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer == event.container) {
      moveItemInArray(this.top, event.previousIndex, event.currentIndex);
    } else {

      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      //transferArrayItem(event.container.data, event.previousContainer.data, event.previousIndex, event.currentIndex);

    }
  }

  dropKey(event: CdkDragDrop<string[]>) {
    if (event.previousContainer == event.container) {
      console.log(event)
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);

    }
    event.previousContainer.data.splice(event.previousContainer.data.indexOf(''), 1)
  }

  enter(event: CdkDragStart<any>, index: number) {
    event.source.dropContainer.data.splice(index + 1, 0, '')
    this.dragIndex = index;
  }

  ngOnInit(): void {
  }

}
