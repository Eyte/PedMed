import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import  medicaties from '../../data/medicatielijst';


@Component({
  selector: 'page-medicatie',
  templateUrl: 'medicatie.html'
})
/*export class medicatiePage {
  medicaties = [

     {"merknaam": "Adrenaline",
      "generisch": "epinefrine",
      "dosis":"0,01mg/kg",
      "vorm":"IV"},

     {"merknaam": "Cordarone",
     "generisch": "amiodarone",
     "dosis":"5mg/kg",
     "vorm":"IV"},

     {"merknaam": "Paracetamol",
      "generisch": "",
      "dosis":"15mg/kg",
      "vorm":"IV/po"},

     {"merknaam": "ibuprofen",
      "generisch": "",
      "dosis":"10mg/kg",
      "vorm":"po/suppo"},

     {"merknaam": "fentanyl",
      "generisch": "",
      "dosis":"1µg/kg nadien 6,5µg herhalen",
      "vorm":"IV"},

     {"merknaam": "litican",
      "generisch": "Alizapride",
      "dosis":"1mg/kg",
      "vorm":"IV"},

     {"merknaam": "Ketamine",
      "generisch": "",
      "dosis":"1mg/kg",
      "vorm":"IV of IR/IB"},

     {"merknaam": "Dormicum",
      "generisch": "midazolam",
      "dosis":"0,05mg/kg",
      "vorm":"IV"},

      {"merknaam": "Dormicum",
       "generisch": "midazolam",
       "dosis":"0,25mg/kg bij onrust, 0,5mg/kg bij convulsies, eventueel herhalen",
       "vorm":"IR/IB"},

     {"merknaam": "Temesta",
      "generisch": "",
      "dosis":"0,1mg/kg",
      "vorm":"IV"},

     {"merknaam": "Ventolin",
      "generisch": "",
      "dosis":"2,5mg",
      "vorm":"aerosol"},

     {"merknaam": "atrovent",
      "generisch": "",
      "dosis":"1 flapule",
      "vorm":"aerosol"},

     {"merknaam": "Solu Cortef",
      "generisch": "",
      "dosis":"4mg/kg",
      "vorm":"IV"},

     {"merknaam": "Rocephine",
      "generisch": "Ceftriaxon",
      "dosis":"100mg/kg",
      "vorm":"IV"},

     {"merknaam": "glucose 10%",
      "generisch": "",
      "dosis":"2ml/kg",
      "vorm":"IV"},



  ];*/
  export class medicatiePage implements OnInit {

    public kg;
    medicatieverzameling: any;

  ngOnInit(){
    this.medicatieverzameling = medicaties;
  }



  itemSelected(item: string) {
      console.log("Selected Item", item);
    }

 }
