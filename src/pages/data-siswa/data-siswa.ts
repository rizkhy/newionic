import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NavController,LoadingController } from 'ionic-angular';
import { AddSiswaPage } from '../add-siswa/add-siswa';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-data-siswa',
  templateUrl: 'data-siswa.html',
})
export class DataSiswaPage {

  siswaList: Observable<any[]>;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public db: AngularFireDatabase) {
  	let loading = this.loadingCtrl.create({
      content: "Load Data...",
      duration: 3000,
      dismissOnPageChange: true
    });
    loading.present();
    this.siswaList = db.list('/siswa').valueChanges();

  }


  AddSiswa(){
  	this.navCtrl.push(AddSiswaPage);
  }

  editSiswa(siswa){
    this.navCtrl.push(AddSiswaPage, {
      id: siswa.$id,
      nama: siswa.nama,
      alamat: siswa.alamat,
      kelas: siswa.kelas,
      angkatan: siswa.angkatan
    });
  }
  
  deleteSiswa(siswa) {
    this.siswaList.remove(siswa);
  }
  
}
