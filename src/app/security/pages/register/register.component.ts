import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  user = new User();

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      //campo curso_nombre vacio que es requerido y maximo de caracteres de 30
      user_nombre: ['', [Validators.required, Validators.maxLength(30)]],
      //campo descripcion vacio que es requerido y un maximo de caracteres de 160
      correo: [''],
      //campo conoci_previo vacio
      contrasenia: [''],
    });
  }

  crearCurso() {
    if (this.userForm.valid) {
      //Creacion de un objeto curso
      this.user.usuario = this.userForm.get('user_nombre')?.value;
      this.user.correo = this.userForm.get('correo')?.value;
      this.user.contrasenia = this.userForm.get('contrasenia')?.value;
      console.log(this.user);
      this.userService.crearCurso(this.user).subscribe(x => {
        console.log(x);
      });
    }
  }
}
