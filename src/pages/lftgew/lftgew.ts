import { Component, } from '@angular/core';
import { NavController, } from 'ionic-angular';

import { WetfagPage } from '../Wetfag/Wetfag';
import { MedgewPage } from '../medgew/medgew';

@Component({
  selector: 'page-lftgew',
  templateUrl: 'lftgew.html'
})
export class lftgewPage {



  constructor(public NavCtrl: NavController) {

    this.NavCtrl = NavCtrl;

  }

 goToMedgewPage(kg) {
   let modal= this.NavCtrl.push(MedgewPage, {gewicht: kg});
  // modal.present();
 }

}
