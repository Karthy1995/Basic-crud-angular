import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertTabComponent } from './insert-tab/insert-tab.component';
import { SelectAllDetailsComponent } from './select-all-details/select-all-details.component';
import { DisplaydetailswithidComponent } from './displaydetailswithid/displaydetailswithid.component';
import { EditDBdetailsComponent } from './edit-dbdetails/edit-dbdetails.component';
const routes: Routes = [{path:'insert',component:InsertTabComponent},
{path:'',component:SelectAllDetailsComponent},
{path:'details',component:SelectAllDetailsComponent},
{path:'details/:id',component:DisplaydetailswithidComponent},
{path:'edit/:id',component:EditDBdetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
