import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NavController,LoadingController } from 'ionic-angular';
import { AddMapelPage } from '../add-mapel/add-mapel';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-mapel',
  templateUrl: 'mapel.html',
})
export class MapelPage {

  mapelList: Observable<any[]>;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public db: AngularFireDatabase) {
  	let loading = this.loadingCtrl.create({
      content: "Load Data...",
      duration: 3000,
      dismissOnPageChange: true
    });
    loading.present();
    this.mapelList = db.list('/mapel').valueChanges();

  }


  AddMapel(){
  	this.navCtrl.push(AddMapelPage);
  }

  editMapel(mapel){
    this.navCtrl.push(AddMapelPage, {
      id: mapel.$id,
      kode: mapel.kode,
      nama: mapel.nama,
      kkm: mapel.kkm
    });
  }
  /*
  deleteMapel(mapel) {
    this.mapelList.remove(mapel);
  }
  */
}
