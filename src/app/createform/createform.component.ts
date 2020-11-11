import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
export class CreateformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() addNewArticleEvent = new EventEmitter<any>();
  newTitle: string = "";
  newUrl: string = "";
  addArticle() {
    this.addNewArticleEvent.emit(
      {
        title: this.newTitle,
        url: this.newUrl
      }
    )
  }
}
