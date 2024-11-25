import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListCategoriesComponentComponent } from './list-categories-component/list-categories-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainsPipe } from './contains.pipe';
import { HighlightDirective } from './highlight.directive';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsCategoryComponentComponent } from './products-category-component/products-category-component.component';
import { AddcategComponent } from './addcateg/addcateg.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { AddReactiveFormComponent } from './product/add-reactive-form/add-reactive-form.component';
import { CvComponent } from './cv/cv.component';
import { CardComponent } from './card/card.component';
import { ListProductsComponent } from './list-products/list-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    ListCategoriesComponentComponent,
    ContainsPipe,
    HighlightDirective,
    DetailsCategoryComponent,
    NotFoundComponent,
    ProductsCategoryComponentComponent,
    AddcategComponent,
    AddProductComponent,
    AddReactiveFormComponent,
    CvComponent,
    CardComponent,
    ListProductsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
