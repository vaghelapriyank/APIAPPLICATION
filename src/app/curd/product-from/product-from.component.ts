import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../services/crud.service';

@Component({
  selector: 'app-product-from',
  templateUrl: './product-from.component.html',
  styleUrls: ['./product-from.component.css']
})
export class ProductFromComponent implements OnInit{

  constructor(private curdService: CRUDService){}
  ngOnInit(): void {

  }

}
