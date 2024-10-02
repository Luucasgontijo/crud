import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-add-edit',
  templateUrl: './patient-add-edit.component.html',
  styleUrl: './patient-add-edit.component.scss'
})
export class PatientAddEditComponent {
  generos: string[] = ['Masculino', 'Feminino'];
}
