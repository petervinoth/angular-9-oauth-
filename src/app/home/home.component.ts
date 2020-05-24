import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
   
  student=[{
    name:'vinoth',
    
   },{
   name:'karthi',
  
   },
   {
     name:'ertr',
    
   }]

   add(val){
    this.student.push({name:val});
    console.log(this.student);

  }
  del(val){
    for(var i=0;i<this.student.length;i++){
      if(this.student[i].name==val.name){
        this.student.splice(i,1);
        this.router.navigate(['/home']);
      }
    }
    
   }

  }
 
   

   
   


