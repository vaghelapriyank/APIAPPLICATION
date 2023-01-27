import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CURDRoutingModule } from './curd-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFromComponent } from './product-from/product-from.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AgGridAngular,AgGridModule } from 'ag-grid-angular';
import { Component } from 'ag-grid-community';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductFromComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    CURDRoutingModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CURDModule { }
