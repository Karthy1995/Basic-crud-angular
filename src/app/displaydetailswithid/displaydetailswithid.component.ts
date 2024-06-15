import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MyserviceService,WebApiTab1 } from '../myservice.service';
@Component({
  selector: 'app-displaydetailswithid',
  templateUrl: './displaydetailswithid.component.html',
  styleUrls: ['./displaydetailswithid.component.css']
})
export class DisplaydetailswithidComponent implements OnInit {
student:WebApiTab1|undefined;
id:number=0;
constructor (private rest:MyserviceService,private route:ActivatedRoute,private router:Router){}
ngOnInit(): void {
var paramid = this.route.snapshot.paramMap.get("id");

  console.log(this.id);
  if(paramid!==null && paramid!==undefined)
    {  this.id=+paramid;
    }
    this.rest.getWebApiTab(this.id).subscribe((data:WebApiTab1)=>this.student={...data});
 
  }}

