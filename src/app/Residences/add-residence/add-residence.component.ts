import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Residence } from 'src/app/Core/Models/residence';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {

  constructor(private fb: FormBuilder) { }
  newResidence!: Residence
  addResidence = this.fb.group({
    id: [''],
    name: ['', [Validators.required, Validators.minLength(3)]],
    address: ['', Validators.required],
    image: ['', Validators.required],
    status: ['', Validators.required],
    apartments: ['', Validators.required]
  });
  statusList: String[] = [" Disponible", "En_Construction", "Vendu"];
  get id() { return this.addResidence.get('id'); }
  get name() { return this.addResidence.get('name'); }
  get address() { return this.addResidence.get('address'); }
  get image() { return this.addResidence.get('image'); }
  get status() { return this.addResidence.get('status'); }
  add() {
    // console.log(this.addResidence)
    // this.newResidence.address = String(this.addResidence.controls.address);
    // console.log(this.newResidence);
    this.newResidence = this.addResidence.value as unknown as Residence;
    console.log(this.newResidence);
  }
}
