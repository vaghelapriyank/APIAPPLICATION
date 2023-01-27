import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CellRendererComponent } from 'ag-grid-community/dist/lib/components/framework/componentTypes';
import { Observer } from 'rxjs';
import { CRUDService } from '../services/crud.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  columnDefs=[
    {field: 'p_name',
    headerName: 'Product',
    sortable: true,
    headerClass:'header-cell'
    },
    {field: 'p_description',
    headerName: 'Discription',
    sortable:true,
    headerClass:'header-cell'},
    {
    field: 'p_price',
    headerName: 'Price',
    sortable:true,
    headerClass:'header-cell'},
    {
      field: '',
      headerName: 'Action',
      headerClass:'header-cell',
      width:300 ,
      cellRenderer: this.actionRender.bind(this)}
  ];
  rowData: any =[];

  productList: any=[];
  productListSubscribe: any;
  constructor(private crudService: CRUDService,private router:Router){}
  ngOnInit(): void {
    this.getProductList();

  }
  getProductList(){
    this.productListSubscribe=this.crudService.loadProducts().subscribe(res=>{
      this.productList = res;
      this.rowData=res;
      console.log('res',res);
    })

  }

  actionRender(params: any){
let div= document.createElement('div');
let htmlCode='<button type="button" class="btn btn-success">view</button>\n'+
'<button type="button" class="btn btn-danger">delete</button>\n'+
'<button type="button" class="btn btn-warning">Edit</button>'
div.innerHTML=htmlCode;
//handle view button
let viewButton=div.querySelector('.btn-success');
viewButton?.addEventListener('click', ()=>{
  this.viewProductDetail(params);
  //console.log('view cllicked');
});
//handle edit button
let editButton=div.querySelector('.btn-warning');
editButton?.addEventListener('click', ()=>{
  this.editProductDetails(params);
  //console.log('edit cllicked');
});

//handle delete button
let deleteButton=div.querySelector('.btn-danger');
deleteButton?.addEventListener('click', ()=>{
  this.deleteProduct(params);
  console.log('delete cllicked');
});

return div;
}

  viewProductDetail(params: any){
    this.router.navigate(['/curd/view-product-details/'+params.data.p_id]);
    //console.log('params',params);
  }

  editProductDetails(params:any)
  {
    //console.log('params',params);
    this.router.navigate(['/curd/update-product/'+params.data.p_id]);
  }

  deleteProduct(params:any){
    //later
  }
}
