import { Component } from '@angular/core';
import { Residence } from '../Core/Models/residence';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
}
