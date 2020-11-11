import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likebutton',
  templateUrl: './likebutton.component.html',
  styleUrls: ['./likebutton.component.css']
})
export class LikebuttonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  likes: number = 0;
  likeThis() {
    this.likes++;
  }

  unlikeThis(){
    if(this.likes > 0)
    this.likes--;
  }

}
