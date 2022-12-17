import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  signForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    let user = new User();
    user.correo = this.signForm.get('email')?.value;
    user.contrasenia = this.signForm.get('password')?.value;
    this.userService.auth(user).subscribe(res =>
      Swal.fire({
        title: 'Inicio de sesión correcto',
        // text: `El usuario ha iniciado sesion`,
        icon: 'success',
        confirmButtonColor: '#2F6DF2',
      }).then(() => {
        // window.location.href = '/delictivo/registro';
        this.router.navigate(['delictivo/registro']).then(() => {
          window.location.reload();
        });
      })
    );
  }
}
