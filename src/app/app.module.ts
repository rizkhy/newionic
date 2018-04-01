import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DataSiswaPage } from '../pages/data-siswa/data-siswa';
import { AddSiswaPage } from '../pages/add-siswa/add-siswa';
import { DataGuruPage } from '../pages/data-guru/data-guru';
import { AddGuruPage } from '../pages/add-guru/add-guru';
import { MapelPage } from '../pages/mapel/mapel';
import { AddMapelPage } from '../pages/add-mapel/add-mapel';
import { JadwalPelajaranPage } from '../pages/jadwal-pelajaran/jadwal-pelajaran';
import { KelasPage } from '../pages/kelas/kelas';
import { NilaiPage } from '../pages/nilai/nilai';
import { TranskipPage } from '../pages/transkip/transkip';
import { PresensiPage } from '../pages/presensi/presensi';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DataSiswaPage,
    DataGuruPage,
    AddSiswaPage,
    AddGuruPage,
    MapelPage,
    AddMapelPage,
    KelasPage,
    JadwalPelajaranPage,
    NilaiPage,
    TranskipPage,
    PresensiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DataSiswaPage,
    DataGuruPage,
    AddGuruPage,
    AddSiswaPage,
    MapelPage,
    AddMapelPage,
    KelasPage,
    JadwalPelajaranPage,
    NilaiPage,
    TranskipPage,
    PresensiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
