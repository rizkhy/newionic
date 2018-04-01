import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 

@Component({
  selector: 'page-add-siswa',
  templateUrl: 'add-siswa.html',
})
export class AddSiswaPage {

   siswaList: AngularFireList<any>;
  siswa = {
    id: '',
    nis: '',
    nama: '',
    password: '',
    kelas: '',
    semester: '',
    thn_ajaran: '',
    nama_ortu: '',
    pekerjaan_ortu: '',
  };
  constructor(public navCtrl: NavController, public af: AngularFireDatabase, public params: NavParams) {
    this.siswaList = af.list('/siswa');
    this.siswa.id = this.params.get('key');
    this.siswa.nis = this.params.get('nis');
    this.siswa.nama = this.params.get('nama');
    this.siswa.password = this.params.get('password');
    this.siswa.kelas = this.params.get('kelas');
    this.siswa.semester = this.params.get('semester');
    this.siswa.thn_ajaran = this.params.get('thn_ajaran');
    this.siswa.nama_ortu = this.params.get('nama_ortu');
    this.siswa.pekerjaan_ortu = this.params.get('pekerjaan_ortu');
  }

  addSiswa(id, nis, nama, password, kelas, semester, thn_ajaran, nama_ortu, pekerjaan_ortu) {
    if(id) {
      this.siswaList.update(this.siswa.id, {
        nis: nis,
        nama: nama,
        password: password,
        kelas: kelas,
        semester: semester,
        thn_ajaran: thn_ajaran,
        nama_ortu: nama_ortu,
        pekerjaan_ortu: pekerjaan_ortu
      }).then( newSiswa => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);
      });
    } else {
      this.siswaList.push({
        nis: nis,
        nama: nama,
        password: password,
        kelas: kelas,
        semester: semester,
        thn_ajaran: thn_ajaran,
        nama_ortu: nama_ortu,
        pekerjaan_ortu: pekerjaan_ortu
      }).then( newSiswa => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);
      });
    }
  }
}
