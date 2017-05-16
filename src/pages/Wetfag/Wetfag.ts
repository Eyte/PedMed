import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { lftgewPage} from '../lftgew/lftgew';

@Component({
  selector: 'page-Wetfag',
  templateUrl: 'Wetfag.html'
})
export class WetfagPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
   gewicht= 'title'
  ionViewDidLoad() {
    this.navParams.get('title');
  }
}
