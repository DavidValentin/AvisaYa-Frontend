import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';

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
      //campo user_nombre vacio que es requerido y maximo de caracteres de 30
      user_nombre: ['', [Validators.required, Validators.maxLength(30)]],
      //campo de correo
      correo: [''],
      //campo constraseña
      contrasenia: [''],
    });
  }

  crearUsuario() {
    if (this.userForm.valid) {
      //Creacion de un objeto curso
      this.user.usuario = this.userForm.get('user_nombre')?.value;
      this.user.correo = this.userForm.get('correo')?.value;
      this.user.contrasenia = this.userForm.get('contrasenia')?.value;
      console.log(this.user);
      this.userService.crearUsuario(this.user).subscribe(x => {
        Swal.fire({
          title: 'Registro Exitoso',
          text: `El usuario se ha creado con éxito ya puedes iniciar sesion`,
          icon: 'success',
          confirmButtonColor: '#2F6DF2',

        }).then(function() {
          window.location.href = "/security/login";
      });
      
    });
  }
}
}
