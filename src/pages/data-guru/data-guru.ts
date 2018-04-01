import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NavController, LoadingController } from 'ionic-angular';
import { AddGuruPage } from '../add-guru/add-guru';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-data-guru',
  templateUrl: 'data-guru.html',
})
export class DataGuruPage {

  guruList: Observable<any[]>;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public db: AngularFireDatabase) {
  	let loading = this.loadingCtrl.create({
      content: "Load Data...",
      duration: 3000,
      dismissOnPageChange: true
    });
    loading.present();
    this.guruList = db.list('/guru').valueChanges();

  }


  AddGuru(){
  	this.navCtrl.push(AddGuruPage);
  }

  editGuru(guru){
    this.navCtrl.push(AddGuruPage, {
      id: guru.$id,
      nama: guru.nama,
      alamat: guru.alamat,
      usia: guru.usia,
      nohp: guru.nohp
    });
  }
}
