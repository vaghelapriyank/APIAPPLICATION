import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CRUDService } from '../services/crud.service';

@Component({
  selector: 'app-product-from',
  templateUrl: './product-from.component.html',
  styleUrls: ['./product-from.component.css']
})
export class ProductFromComponent implements OnInit{
  //@ts-ignore
  productForm: FormGroup;
  constructor(private curdService: CRUDService ,private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.createProductForm();

  }

  createProductForm(){
      this.productForm=this.formBuilder.group({
        'name':['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(50)])],
        'description':['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(500)])],
        'price':['',Validators.compose([Validators.required,Validators.minLength(1),Validators.maxLength(8)])]
      })
  }

}
