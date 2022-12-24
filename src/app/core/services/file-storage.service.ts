import { Injectable } from '@angular/core';

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

@Injectable({
  providedIn: 'root',
})
export class FileStorageService {
  storageRef = firebase.app().storage().ref();

  async subirImagen(nombre: string, imaBase64: any, iduser: number) {
    try {
      let res = await this.storageRef
        .child(`files/${iduser}/${nombre}`)
        .putString(imaBase64, 'data_url');

      return res.ref.getDownloadURL();
    } catch (error) {
      console.log(error);

      return null;
    }
  }
}
