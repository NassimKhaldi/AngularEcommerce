import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addcateg',
  templateUrl: './addcateg.component.html',
  styleUrls: ['./addcateg.component.css'],
})
export class AddcategComponent {
  f(addForm: any) {
    console.log('Form object:', addForm);
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Formulaire soumis avec succès', form.value);
    } else {
      console.log('Formulaire invalide');
    }
  }
}
