import { Component,Input, OnInit } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { MedgewPage } from '../medgew/medgew';
import parameters from '../../data/parameters';
import otherItems from '../../data/other';
/*
  Generated class for the Med page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-med',
  templateUrl: 'med.html'
})
export class MedPage implements OnInit {
  merknaam: string;
  generisch: string;
  vorm: string;
  dosis: string;
  doel: string;
  info: string;
  formule: number;
  resultaat: any;
  kg: number;
  medicatie:any;
  public params: any;
  public other: any;
  public param: any;
  public id1:any;
  public HR:string;

  ngOnInit(){
    this.params = parameters;
    this.other = otherItems;
  }

  constructor(private viewCtrl: ViewController, private navParams: NavParams, ) {

  }

  ionViewDidLoad() {
    this.merknaam = this.navParams.get('merknaam');
    this.generisch = this.navParams.get('generisch');
    this.dosis = this.navParams.get('dosis');
    this.vorm = this.navParams.get('vorm');
    this.doel = this.navParams.get('doel');
    this.info = this.navParams.get('info');
    this.formule= this.navParams.get('formule');
    this.id1= this.navParams.get('id1')
    this.kg=this.navParams.get("kg");
    this.id1.HR=this.navParams.get('id1.HR')

  }
  Resultaat(){

    if (this.formule){
  this.resultaat=  this.formule* this.kg + "mg" ;
    return this.resultaat ;}

    else {
    }


  }

  

   onClose() {
     this.viewCtrl.dismiss();
}



}
