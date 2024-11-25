import { Component } from '@angular/core';
import { Product2 } from '../models/product2';
import { ShortList } from '../models/short-list.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent {
  listProducts: Product2[] = [
    {
      id: 1,
      title: 'Cuisinière',
      image: 'assets/images/grand_electromenagers/cuisiniere.png',
      description: '699 dt',
      promotion: false,
      quantity: '50',
      categoryId: 1,
    },
    {
      id: 2,
      title: 'Réfrigérateur',
      image: 'assets/images/grand_electromenagers/refrigerateur.jpg',
      description: '1500 dt',
      promotion: false,
      quantity: '20',
      categoryId: 1,
    },
    {
      id: 3,
      title: 'Robot Pétrin',
      image: 'assets/images/petit_electromenager/robot_petrin.jpg',
      description: '430 dt',
      promotion: false,
      quantity: '150',
      categoryId: 2,
    },
    {
      id: 4,
      title: 'Fer à repasser',
      image: 'assets/images/petit_electromenager/fer_a_repasser.jpg',
      description: '130 dt',
      promotion: false,
      quantity: '100',
      categoryId: 2,
    },
    {
      id: 5,
      title: 'Oppo',
      image: 'assets/images/smart_phones/Oppo.jpg',
      description: '920 dt',
      promotion: false,
      quantity: '10',
      categoryId: 4,
    },
    {
      id: 6,
      title: 'TV Téléfunkun',
      image: 'assets/images/tv_images_son/tv1.jpg',
      description: '845 dt',
      promotion: false,
      quantity: '50',
      categoryId: 5,
    },
  ];
  shortList: ShortList[] = [];
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
