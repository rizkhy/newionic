import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 

@Component({
  selector: 'page-add-mapel',
  templateUrl: 'add-mapel.html',
})
export class AddMapelPage {

   mapelList: AngularFireList<any>;
  mapel = {
    id: '',
    kode: '',
    nama: '',
    kkm: ''
  };
  constructor(public navCtrl: NavController, public af: AngularFireDatabase, public params: NavParams) {
    this.mapelList = af.list('/mapel');
    this.mapel.id = this.params.get('key');
    this.mapel.kode = this.params.get('kode');
    this.mapel.nama = this.params.get('nama');
    this.mapel.kkm = this.params.get('kkm');
  }

  addMapel(id, kode, nama, kkm) {
    if(id) {
      this.mapelList.update(id, {
        kode: kode,
        nama: nama,
        kkm: kkm
      }).then( newMapel => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);
      });
    } else {
      this.mapelList.push({
        kode: kode,
        nama: nama,
        kkm: kkm
      }).then( newMapel => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);
      });
    }
  }
}
