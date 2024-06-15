import { Component,OnInit,Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MyserviceService,WebApiTab1 } from '../myservice.service';
@Component({
  selector: 'app-edit-dbdetails',
  templateUrl: './edit-dbdetails.component.html',
  styleUrls: ['./edit-dbdetails.component.css']
})
export class EditDBdetailsComponent implements OnInit {
 
id:number=0;
@Input() userData:any={Name:'',Age:0,Mark:0};
constructor (private rest:MyserviceService,private route:ActivatedRoute,private router:Router){}
ngOnInit(): void {
  var paramid = this.route.snapshot.paramMap.get("id");

  console.log(this.id);
  if(paramid!==null && paramid!==undefined)
    {  this.id=+paramid;
    }
    this.rest.getWebApiTab(this.id).subscribe((data:{})=>{this.userData=data;

    });
}
Update(){
this.rest.putWebApiTab(this.id,this.userData).subscribe((result)=>{
  this.router.navigate(['/details/']);
},
(err)=>{
  console.log(err);
});
}

}
  