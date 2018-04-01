import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KelasPage } from './kelas';

@NgModule({
  declarations: [
    KelasPage,
  ],
  imports: [
    IonicPageModule.forChild(KelasPage),
  ],
})
export class KelasPageModule {}
