import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('src/app/home/home.module').then(mod => mod.HomeModule)
      },
      {
        path: 'fundas-nordicas-c/:id-category',
        loadChildren: () => import('src/app/categories/categories.module').then(mod => mod.CategoriesModule)
      },
      {
        path: ':productName/:productId',
        loadChildren: () => import('src/app/products/products.module').then(mod => mod.ProductsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
