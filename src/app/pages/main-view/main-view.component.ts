import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board, Column } from './main-vew.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = <Board>{};
  column1: Column = <Column>{};
  column2: Column = <Column>{};
  column3: Column = <Column>{};
  column4: Column = <Column>{};

  ngOnInit() {
    this.board.name = 'Test Board';

    this.column1.name = 'Ideas1';
    this.column1.tasks = [
      "Some random idea",
      "This is another random idea",
      "build an awesome application"
    ];

    this.column2.name = 'Research';
    this.column2.tasks = [
      "Lorem ipsum",
      "foo",
      "This was in the 'Research' column"
    ];

    this.column3.name = 'Todo';
    this.column3.tasks = [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ];

    this.column4.name = 'Done';
    this.column4.tasks = [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ];

    this.board.columns = [
      this.column1, this.column2, this.column3, this.column4
    ]
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
