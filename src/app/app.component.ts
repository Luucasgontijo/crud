import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PatientAddEditComponent } from './patient-add-edit/patient-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud';

  constructor(private _dialog: MatDialog) { }
   
  openAddEditPatientForm() {
    this._dialog.open(PatientAddEditComponent, {
      width: '350%', // Defina a largura desejada (por exemplo, 80% da largura da tela)
      maxWidth: '70vw' // Defina a largura máxima desejada (por exemplo, 600px)
    });
  }
}