import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css'],
})
export class DetailsCategoryComponent implements OnInit {
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
      description: 'Petit électroménager',
      available: true,
    },
    {
      id: 3,
      title: 'Produits informatiques',
      image: 'assets/images/categorie_produits_informatiques.jpg',
      description: 'Produits informatiques à prix abordables',
      available: true,
    },
    {
      id: 4,
      title: 'Smart Phones',
      image: 'assets/images/categorie_smartPhone.jpg',
      description: 'Téléphones intelligents dernière génération',
      available: true,
    },
    {
      id: 5,
      title: 'TV, images et son',
      image: 'assets/images/categorie_tv_image_son.jpg',
      description: 'Télévision et systèmes audio modernes',
      available: true,
    },
    {
      id: 6,
      title: 'Produits voiture',
      image: 'assets/images/produits_nettoyages.jpg',
      description: 'Produits de nettoyage pour voitures',
      available: false,
    },
  ];

  idFromPath!: number;
  cat!: Categorie | undefined;

  constructor(private actR: ActivatedRoute) {}

  ngOnInit(): void {
    this.idFromPath = Number(this.actR.snapshot.params['param']);
    this.cat = this.categories.find((cat) => cat.id === this.idFromPath);
  }
}
