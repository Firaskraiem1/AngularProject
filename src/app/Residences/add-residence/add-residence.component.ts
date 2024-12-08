import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Residence } from 'src/app/Core/Models/residence';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {

  constructor(private fb: FormBuilder) { }
  imageError: string | null = null;
  newResidence!: Residence
  addResidence = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    address: ['', Validators.required],
    image: ['', Validators.required],
    status: ['', Validators.required],
    apartments: this.fb.array([])
  });
  statusList: String[] = [" Disponible", "En_Construction", "Vendu"];
  get id() { return this.addResidence.get('id'); }
  get name() { return this.addResidence.get('name'); }
  get address() { return this.addResidence.get('address'); }
  get image() { return this.addResidence.get('image'); }
  get status() { return this.addResidence.get('status'); }
  get apartments() {
    return (this.addResidence.get('apartments') as FormArray);
  }
  onFileSelect(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      if (this.isValidImage(file)) {
        this.addResidence.patchValue({ image: file.name });
        this.imageError = null;
      } else {
        this.imageError = 'Invalid image format. Only JPG or PNG allowed.';
      }
    }
  }

  isValidImage(file: File): boolean {
    const validFormats = ['image/jpeg', 'image/png'];
    return validFormats.includes(file.type);
  }
  add() {
    // console.log(this.addResidence)
    // this.newResidence.address = String(this.addResidence.controls.address);
    // console.log(this.newResidence);
    this.newResidence = this.addResidence.value as unknown as Residence;
    console.log(this.newResidence);
  }

  addApartment() {
    this.apartments.push(this.fb.group({
      apartNum: ['', Validators.required],
      floorNum: ['', Validators.required],
      surface: ['', Validators.required],
      terrace: ['', Validators.required],
      surfaceterrace: ['', Validators.required],
      category: ['', Validators.required],
    }));
  }

}
