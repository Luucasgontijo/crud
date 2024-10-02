import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PatientsService } from '../services/patients.service'; // Importe o serviço correto

@Component({
  selector: 'app-patient-add-edit',
  templateUrl: './patient-add-edit.component.html',
  styleUrls: ['./patient-add-edit.component.scss']
})
export class PatientAddEditComponent implements OnInit {
  generos: string[] = ['Masculino', 'Feminino'];

  patientsForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _patientsService: PatientsService,
    private _dialogRef: MatDialogRef<PatientAddEditComponent>
  ) {
    this.patientsForm = this._fb.group({
      nome: '',
      CPF: '',
      data_nascimento: '',
      nome_mae: '',
      cartao_sus: '',
      email: '',
      telefone1: '',
      telefone2: '',
      CEP: '',
      logradouro: '',
      bairro: '',
      complemento: '',
      numero: ''
    });
  }

  ngOnInit(): void {}

  onFormSubmit() {
    if (this.patientsForm.valid) {
      this._patientsService.addPatient(this.patientsForm.value).subscribe({
        next: () => {
          console.log('Paciente adicionado com sucesso');
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.error('Erro ao adicionar paciente', err);
        }
      });
    }
  }
}