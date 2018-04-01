import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 

@Component({
  selector: 'page-add-guru',
  templateUrl: 'add-guru.html',
})
export class AddGuruPage {

   guruList: AngularFireList<any>;
  guru = {
    id: '',
    nama: '',
    alamat: '',
    usia: '',
    nohp: ''
  };
  constructor(public navCtrl: NavController, public af: AngularFireDatabase, public params: NavParams) {
    this.guruList = af.list('/guru');
    this.guru.id = this.params.get('key');
    this.guru.nama = this.params.get('nama');
    this.guru.alamat = this.params.get('alamat');
    this.guru.usia = this.params.get('usia');
    this.guru.nohp = this.params.get('nohp');
  }

  addGuru(id, nama, alamat, usia, nohp) {
    if(id) {
      this.guruList.update(id, {
        nama: nama,
        alamat: alamat,
        usia: usia,
        nohp: nohp
      }).then( newGuru => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);
      });
    } else {
      this.guruList.push({
        nama: nama,
        alamat: alamat,
        usia: usia,
        nohp: nohp
      }).then( newGuru => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);
      });
    }
  }
}
