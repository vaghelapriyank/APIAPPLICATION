import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFromComponent } from './product-from/product-from.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'', redirectTo:'product-list',pathMatch:'full'},
  {path:'product-list',component: ProductListComponent},
  {path:'create-product',component: ProductFromComponent},
  {path:'update-product/:productId',component: ProductListComponent},
  {path:'view-product-details/:productId',component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CURDRoutingModule { }
