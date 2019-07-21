import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public name : string;
  public code : string;
  public price : number;
  public previousPrice : number;
  public positiveChange : boolean;


  constructor() { }

  ngOnInit() {
    this.name = "Test Stock Company";
    this.code = "TSC";
    this.price = 85;
    this.previousPrice = 89;
    this.positiveChange = this.previousPrice<= this.price;
  }

  toggleFavorite(){
    console.log("Added to favoritescd");
  }

}
