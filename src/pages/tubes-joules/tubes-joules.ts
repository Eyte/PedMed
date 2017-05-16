import { Component, OnInit,Input  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import otherItems from '../../data/other';

@Component({
  selector: 'page-tubes-joules',
  templateUrl: 'tubes-joules.html'
})
export class TubesJoulesPage implements OnInit{
  public others: any;


  ngOnInit(){

    this.others = otherItems;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TubesJoulesPage');
  }

}
