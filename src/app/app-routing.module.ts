import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { ListCategoriesComponentComponent } from './list-categories-component/list-categories-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsCategoryComponentComponent } from './products-category-component/products-category-component.component';
import { AddcategComponent } from './addcateg/addcateg.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { AddReactiveFormComponent } from './product/add-reactive-form/add-reactive-form.component';
import { CvComponent } from './cv/cv.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponentComponent },
  { path: 'Categories', component: ListCategoriesComponentComponent },
  { path: 'addcateg', component: AddcategComponent },
  { path: 'addproduct', component: AddProductComponent },
  { path: 'addReactiveForm', component: AddReactiveFormComponent },
  { path: 'cvForm', component: CvComponent },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'apropos',
    loadChildren: () =>
      import('./apropos/apropos.module').then((m) => m.AproposModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
  { path: 'detailsCategory/:param', component: DetailsCategoryComponent },
  { path: 'ProductCategory/:x', component: ProductsCategoryComponentComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
