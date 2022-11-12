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

  saveFile(file: any) {
    let reader = new FileReader();
    file = this.archivo;
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.fileService.subirImagen('file.name', reader.result, 1).then(url => {
        console.log(url);
      });
    };
  }
}
