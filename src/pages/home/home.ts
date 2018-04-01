import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NilaiPage } from '../nilai/nilai';
import { JadwalPelajaranPage } from '../jadwal-pelajaran/jadwal-pelajaran';
import { PresensiPage } from '../presensi/presensi';
import { TranskipPage } from '../transkip/transkip';
import { MapelPage } from '../mapel/mapel';
import { KelasPage } from '../kelas/kelas';
import { DataSiswaPage } from '../data-siswa/data-siswa';
import { DataGuruPage } from '../data-guru/data-guru';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	console.log(navParams.get('val'));
  }

  data_siswa(){
    this.navCtrl.push(DataSiswaPage, {
      val: 'data_siswa'
    })
  }

  data_guru(){
    this.navCtrl.push(DataGuruPage, {
      val: 'data_guru'
    })
  }

  mapel(){
    this.navCtrl.push(MapelPage, {
      val: 'mapel'
    })
  }

  kelas(){
    this.navCtrl.push(KelasPage, {
      val: 'kelas'
    })
  }

  nilai(){
  	this.navCtrl.push(NilaiPage, {
  		val: 'nilai'
  	})
  }

  jadwal(){
  	this.navCtrl.push(JadwalPelajaranPage, {
  		val: 'jadwal'
  	})
  }

  presensi(){
  	this.navCtrl.push(PresensiPage, {
  		val: 'presensi'
  	})
  }

  transkip(){
  	this.navCtrl.push(TranskipPage, {
  		val: 'transkip'
  	})
  }

}
