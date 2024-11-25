import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-add-reactive-form',
  templateUrl: './add-reactive-form.component.html',
  styleUrls: ['./add-reactive-form.component.css'],
})
export class AddReactiveFormComponent {
  addForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('[a-zA-Z]*'),
    ]),
    image: new FormControl(''),
    categoryId: new FormControl('', Validators.required),
    description: new FormControl(''),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern('^\\d+(\\.\\d+)?$'),
    ]),
    brand: new FormControl(''),
    promotion: new FormControl('', [
      Validators.max(100),
      Validators.pattern('^(0|[1-9][0-9]?)$'),
    ]),
  });
}
