import { Component,Input,OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { lftgewPage} from '../lftgew/lftgew';
import { Medicatie } from '../../data/medicatie.interface';
import  medicaties from '../../data/medicatielijst';
import { MedPage } from '../med/med';

@Component({
  selector: 'page-medgew',
  templateUrl: 'medgew.html',


})
export class MedgewPage implements OnInit {

  public kg:number;
  public medicatieverzameling: any;
  medPage = MedPage;

  ngOnInit(){
    this.medicatieverzameling = medicaties;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl: ModalController ) {

  }

   ionViewDidLoad() {
     this.kg = this.navParams.get ('gewicht');
  }

   gotoMedPage(medicatie){
     this.kg = this.navParams.get ('gewicht');
     medicatie.kg= this.kg;
     let kg= this.kg;


    this.navCtrl.push(MedPage,medicatie);
  }
  /* gotolftgewPage(){
     let modal=this.modalCtrl.create(lftgewPage);
     modal.present();
   }*/
  }
