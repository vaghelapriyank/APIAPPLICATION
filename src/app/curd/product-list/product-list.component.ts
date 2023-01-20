import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  columnDefs=[
    {field: 'make'},
    {field: 'model'},
    {field: 'price'}
  ];
  rowData=[
    {make: 'Toyota', model: 'celica', price: 35000 },
    {make: 'ford', model: 'mdo', price: 32000 },
    {make: 'Pourch', model: 'boxer', price: 75000 }
  ];
  constructor(){}
  ngOnInit(): void {

  }
}
