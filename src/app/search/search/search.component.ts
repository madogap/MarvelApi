import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  searchTerm='';
  
  constructor(){}
  ngOnInit():void{}

  searchApi():void{
    //debugger;
    console.log('search api', this.searchTerm);
  }

}
