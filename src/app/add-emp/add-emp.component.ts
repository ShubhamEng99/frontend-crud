import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent implements OnInit {
  name='';
  email='';
  position='';
  salary=0;
  list:any
  tobeupdated:any=null
  update=false
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.getemployees().subscribe(res=>{
      this.list=res;
      })
  }
add(){
let emp={
  name:this.name,
  email:this.email,
  position:this.position,
  salary:this.salary
}
console.log(emp)
this.service.addemployee(emp).subscribe(res=>{
 alert('employee added successfully')
  this.service.getemployees().subscribe(res=>{
    this.list=res;
    })
   this.name='',this.email='',this.salary=0;this.position='' 
})
}
del(id : any){
  this.service.delemployee(id).subscribe(res=>{

    this.service.getemployees().subscribe(res=>{
      alert('employee deleted successfully')
      this.list=res;
      })
  })
 }
 getemp(id:any){
  this.service.getemployee(id).subscribe(res=>{
    console.log(res);
    this.tobeupdated=res;
    this.name=this.tobeupdated.name
    this.email=this.tobeupdated.email
    this.position=this.tobeupdated.position
    this.salary=this.tobeupdated.salary
    
   this.update=true

  })
 }
 updateemp(){
  if(this.tobeupdated!=null){
      this.tobeupdated.name=this.name;
      this.tobeupdated.email=this.email;
      this.tobeupdated.position=this.position;
      this.tobeupdated.salary=this.salary
      console.log(this.tobeupdated)
      this.service.updateemp(this.tobeupdated._id,this.tobeupdated).subscribe(res=>{
        console.log(this.tobeupdated)
        this.service.getemployees().subscribe(res=>{
          alert('employee updated successfully')
          this.list=res;
          })
        
        
        this.update=false;
        this.name='';
        this.email='';
        this.salary=0;
        this.position=''
       })
  }

  
 }
}
