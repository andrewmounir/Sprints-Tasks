import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }