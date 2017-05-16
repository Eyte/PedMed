import { Component,OnInit,Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import parameters from '../../data/parameters';
import otherItems from '../../data/other';

@Component({
  selector: 'page-params-other',
  templateUrl: 'params-other.html'
})
export class ParamsOtherPage implements OnInit{
  public params: any;
  public other: any;

  ngOnInit(){
    this.params = parameters;
    this.other = otherItems;
  }


  constructor(public navCtrl: NavController, public navParams: NavParams) {}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ParamsOtherPage');
  }

}
