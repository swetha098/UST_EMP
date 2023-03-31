import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { EmployeeRegService } from '../employee-reg.service';

@Component({
  selector: 'app-employee-reg',
  templateUrl: './employee-reg.component.html',
  styleUrls: ['./employee-reg.component.css']
})
export class EmployeeRegComponent implements OnInit {
  user:User=new User("","",0,"");
  message: any;

  //to link between component and service

constructor(private service:EmployeeRegService){

}

  ngOnInit(){
    
  }
  public registerNow(){
    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data=>this.message=data))
  }
  
}


