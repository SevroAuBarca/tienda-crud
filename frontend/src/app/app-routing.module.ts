import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateProductoComponent } from './components/create-producto/create-producto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { UpdateProductoComponent } from './components/update-producto/update-producto.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosComponent,
  },
  {
    path: 'new',
    component: CreateProductoComponent,
  },
  {
    path: ':id',
    component: ProductoComponent,
  },
  {
    path: 'edit/:id',
    component: UpdateProductoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
