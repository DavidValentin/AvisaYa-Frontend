import { Component, OnInit } from '@angular/core';
import { FileStorageService } from 'src/app/core/services/file-storage.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css'],
})
export class FileComponent implements OnInit {
  archivo: any;

  constructor(private fileService: FileStorageService) {}

  ngOnInit(): void {}

  subirArvhivos(event: any) {
    this.archivo = event.target.files[0];
  }

  saveFile() {
    let reader = new FileReader();
    let file = this.archivo;
    let usuario_id = 1;
    // +sessionStorage!.getItem('usuario_id');

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.fileService
        .subirImagen(file.name, reader.result, usuario_id)
        .then(url => {
          console.log(url);
        });
    };
  }
}
