import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MyserviceService } from './myservice.service';
import { InsertTabComponent } from './insert-tab/insert-tab.component';
import { SelectAllDetailsComponent } from './select-all-details/select-all-details.component';
import { DisplaydetailswithidComponent } from './displaydetailswithid/displaydetailswithid.component';
import { EditDBdetailsComponent } from './edit-dbdetails/edit-dbdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertTabComponent,
    SelectAllDetailsComponent,
    DisplaydetailswithidComponent,
    EditDBdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
