import { Component, OnInit } from '@angular/core';
import { Residence } from 'src/app/Core/Models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {

  listResidences: Residence[] = [
    {
      id: 1, "name": "El fel", "address": "Borj Cedria",
      "image": "../../assets/images/R1.jpeg", status: "Disponible"
    },
    {
      id: 2, "name": "El yasmine",
      "address": "Ezzahra", "image": "../../assets/images/R2.jpeg", status:
        "Disponible"
    },
    {
      id: 3, "name": "El Arij",
      "address": "Rades", "image": "../../assets/images/R3.jpeg", status:
        "Vendu"
    },
    {
      id: 4, "name": "El Anber", "address": "inconnu",
      "image": "../../assets/images/R4.jpeg", status: "En Construction"
    }
  ];

  residenceSelected!: Residence;
  showLocation(residence: Residence): void {
    if (residence.address !== "inconnu") {
      this.residenceSelected = residence;
    } else {
      alert("L'adresse de résidence " + residence.name + " est inconnu");
    }
  }
  liked: boolean = false
  favoris!: Residence[];
  like(r: Residence) {
    this.liked = !this.liked;
    this.residenceSelected = r;
    if (this.liked) {
      this.favoris.push(r);
    } else {
      this.favoris = this.favoris.filter(res => res.id != r.id);
    }
  }
  filtredResidences: Residence[] = this.listResidences;
  filterAddress: string = "";
  filter() {
    this.filtredResidences = this.listResidences.filter(r => r.address.toLowerCase().includes(this.filterAddress.toLowerCase()));
  }
}
