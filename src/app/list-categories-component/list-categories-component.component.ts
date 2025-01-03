import { Component, QueryList, ViewChildren } from '@angular/core';
import { Categorie } from '../models/categorie';
import { ShortList } from '../models/short-list.model';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list-categories-component',
  templateUrl: './list-categories-component.component.html',
  styleUrls: ['./list-categories-component.component.css'],
})
export class ListCategoriesComponentComponent {
  categories: Categorie[] = [
    {
      id: 1,
      title: 'Grand électroménager',
      image: 'assets/images/categorie_electromenager.jpg',
      description: 'Grand électroménager',
      available: true,
    },
    {
      id: 2,
      title: 'Petit électroménager',
      image: 'assets/images/categorie_petit_electromenager.jpg',
      description: '8alia',
      available: true,
    },
    {
      id: 3,
      title: 'Produits informatiques',
      image: 'assets/images/categorie_produits_informatiques.jpg',
      description: 'r5issa',
      available: true,
    },
    {
      id: 4,
      title: 'Smart Phones',
      image: 'assets/images/categorie_smartPhone.jpg',
      description: 'hellooooo',
      available: true,
    },
    {
      id: 5,
      title: 'TV, images et son',
      image: 'assets/images/categorie_tv_image_son.jpg',
      description: 'bonjourr',
      available: true,
    },
    {
      id: 6,
      title: 'Produits voiture',
      image: 'assets/images/produits_nettoyages.jpg',
      description: 'nassimmm',
      available: false,
    },
  ];
  title: string = '';
  test(x: string) {
    alert(x);
  }
  shortList: ShortList[] = [];

  @ViewChildren(CardComponent) children!: QueryList<CardComponent>;

  ngAfterViewInit() {
    this.children.forEach((child) => {
      child.btnText = 'Voir produits';
    });
  }

  addToShortList(category: ShortList) {
    let exist: boolean = false;
    for (let c of this.shortList) {
      if (c.idElement == category.idElement && c.idUser == category.idUser) {
        exist = true;
      }
      break;
    }
    if (exist) {
      alert('Category already a favorite');
    } else {
      category.typeElement = 'category';
      this.shortList.push(category);
      console.log(this.shortList);
    }
  }
}
