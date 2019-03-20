import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  input:string;
  listItems: Array<string> = [];
  constructor() { }

  ngOnInit() {
  }

  addListItem(item:string){
    this.input = '';
    this.listItems.push(item);
    // console.log(this.listItems);
    
  }  
}
