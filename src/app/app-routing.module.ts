import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './curd/product-details/product-details.component';
import { ProductFromComponent } from './curd/product-from/product-from.component';
import { ProductListComponent } from './curd/product-list/product-list.component';

const routes: Routes = [
  {path:'',redirectTo:'curd',pathMatch:'full'},
  {path:'curd', loadChildren: ()=>import('./curd/curd.module').then(m=>m.CURDModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
