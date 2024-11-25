import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  addFormCv = new FormGroup({
    name: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [
      Validators.minLength(8),
      Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
      ),
    ]),
    Adresse: new FormGroup({
      city: new FormControl(''),
      PostalCode: new FormControl('', [Validators.required]),
      Town: new FormControl(''),
    }),
    skills: new FormArray([new FormControl('')]),
  });
  onSubmit(): void {
    if (this.addFormCv.valid) {
      console.log(this.addFormCv.value);
    } else {
      console.log('Form is invalid');
    }
  }
  get skills(): FormArray {
    return this.addFormCv.get('skills') as FormArray;
  }
  addSkill(): void {
    this.skills.push(new FormControl(''));
  }
  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }
}
