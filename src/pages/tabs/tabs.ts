import { Component } from '@angular/core';

import { lftgewPage } from '../lftgew/lftgew';
//import { WetfagPage } from '../Wetfag/Wetfag';
import { ContactPage } from '../contact/contact';
import { medicatiePage } from '../medicatie/medicatie';
import { ParamsOtherPage} from "../params-other/params-other";
import{ TubesJoulesPage } from '../tubes-joules/tubes-joules';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = lftgewPage;
  tab2Root: any = ParamsOtherPage;
  tab3Root: any = TubesJoulesPage ;
  tab4Root: any = ContactPage;
  tab5Root: any = medicatiePage;


  constructor() {

  }
}
