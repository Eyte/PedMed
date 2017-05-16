import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { lftgewPage } from '../pages/lftgew/lftgew';
import { WetfagPage } from '../pages/Wetfag/Wetfag';
import { medicatiePage } from '../pages/medicatie/medicatie';
import { MedgewPage } from '../pages/medgew/medgew';
import { MedPage } from "../pages/med/med";
import { ParamsOtherPage} from "../pages/params-other/params-other"
import { TubesJoulesPage } from "../pages/tubes-joules/tubes-joules"

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    TabsPage,
    lftgewPage,
    WetfagPage,
    medicatiePage,
    MedgewPage,
    MedPage,
    ParamsOtherPage,
    TubesJoulesPage ,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    TabsPage,
    lftgewPage,
    WetfagPage,
    medicatiePage,
    MedgewPage,
    MedPage,
    ParamsOtherPage,
    TubesJoulesPage ,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
