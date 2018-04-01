import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the KelasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kelas',
  templateUrl: 'kelas.html',
})
export class KelasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	console.log(navParams.get('val'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KelasPage');
  }

}
