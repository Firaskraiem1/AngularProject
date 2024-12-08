import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Apartment } from 'src/app/Core/Models/apartment';
import { Residence } from 'src/app/Core/Models/residence';
@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {

  newApart!: Apartment;
  apartForm = new FormGroup({
    apartNum: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    floorNum: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    surface: new FormControl('', Validators.required),
    terrace: new FormControl('', Validators.required),
    surfaceterrace: new FormControl({ value: '', disabled: true }),
    category: new FormControl('', Validators.required),
    ResidenceId: new FormControl('', Validators.required),
  })
  listResidences: Residence[] = [
    {
      id: 1,
      name: "El fel",
      address: "Borj Cedria",
      image: "../../assets/images/R1.jpeg",
      status: "Disponible",
      apartments: [
        { apartNum: 101, floorNum: 1, surface: 50, terrace: true, surfaceterrace: 10, category: "Studio", ResidenceId: 1 },
        { apartNum: 102, floorNum: 1, surface: 60, terrace: false, surfaceterrace: 0, category: "T2", ResidenceId: 1 },
        { apartNum: 201, floorNum: 2, surface: 70, terrace: true, surfaceterrace: 15, category: "T3", ResidenceId: 1 },
      ],
    },
    {
      id: 2,
      name: "El yasmine",
      address: "Ezzahra",
      image: "../../assets/images/R2.jpeg",
      status: "Disponible",
      apartments: [
        { apartNum: 101, floorNum: 1, surface: 50, terrace: true, surfaceterrace: 8, category: "Studio", ResidenceId: 2 },
        { apartNum: 102, floorNum: 1, surface: 60, terrace: false, surfaceterrace: 0, category: "T2", ResidenceId: 2 },
        { apartNum: 201, floorNum: 2, surface: 70, terrace: true, surfaceterrace: 12, category: "T3", ResidenceId: 2 },
      ],
    },
    {
      id: 3,
      name: "El Arij",
      address: "Rades",
      image: "../../assets/images/R3.jpeg",
      status: "Vendu",
      apartments: [
        { apartNum: 101, floorNum: 1, surface: 50, terrace: false, surfaceterrace: 0, category: "Studio", ResidenceId: 3 },
        { apartNum: 102, floorNum: 1, surface: 60, terrace: true, surfaceterrace: 10, category: "T2", ResidenceId: 3 },
        { apartNum: 201, floorNum: 2, surface: 70, terrace: true, surfaceterrace: 15, category: "T3", ResidenceId: 3 },
      ],
    },
    {
      id: 4,
      name: "El Anber",
      address: "Inconnu",
      image: "../../assets/images/R4.jpeg",
      status: "En Construction",
      apartments: [
        { apartNum: 101, floorNum: 1, surface: 50, terrace: true, surfaceterrace: 12, category: "Studio", ResidenceId: 4 },
        { apartNum: 102, floorNum: 1, surface: 60, terrace: false, surfaceterrace: 0, category: "T2", ResidenceId: 4 },
        { apartNum: 201, floorNum: 2, surface: 70, terrace: true, surfaceterrace: 18, category: "T3", ResidenceId: 4 },
      ],
    },
  ];

  get apartNum() { return this.apartForm.get('apartNum'); }
  get floorNum() { return this.apartForm.get('floorNum'); }
  get surface() { return this.apartForm.get('surface'); }
  get terrace() { return this.apartForm.get('terrace'); }
  get surfaceterrace() { return this.apartForm.get('surfaceterrace'); }
  get category() { return this.apartForm.get('category'); }
  get ResidenceId() { return this.apartForm.get('ResidenceId'); }

  addApartment() {
    // console.log(this.apartForm.value);
    // this.newApart.apartNum = Number(this.apartForm.value.apartNum);
    // this.newApart.floorNum = Number(this.apartForm.value.floorNum);
    // this.newApart.surface = Number(this.apartForm.value.surface);
    // this.newApart.terrace = Boolean(this.apartForm.value.terrace);
    // this.newApart.surfaceterrace = Number(this.apartForm.value.surfaceterrace);
    // this.newApart.category = String(this.apartForm.value.category);
    // this.newApart.ResidenceId = Number(this.apartForm.value.ResidenceId);
    
    // console.log(this.newApart);

    this.newApart = this.apartForm.value as unknown as Apartment;
    console.log(this.newApart);

  }
}
