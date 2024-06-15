import { Component ,OnInit} from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { WebApiTab1 } from '../myservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-select-all-details',
  templateUrl: './select-all-details.component.html',
  styleUrls: ['./select-all-details.component.css']
})
export class SelectAllDetailsComponent implements OnInit {
  Getdata:WebApiTab1[]=[];
  constructor(public details:MyserviceService,private router:Router){}
ngOnInit(): void {
  this.GetAllDetails();
}
GetAllDetails():void{
  this.details.getAllWebApiTabs().subscribe((resp:any)=>
    {
  this.Getdata=resp;
});

}
delete(id:number):void{
  this.details.deleteWebApiTab(id).subscribe(()=>{
    this.GetAllDetails();
  },(err)=>{
    console.log(err);
  }
  
  );
}

}
