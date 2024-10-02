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
    this._dialog.open(PatientAddEditComponent);
  }
    }