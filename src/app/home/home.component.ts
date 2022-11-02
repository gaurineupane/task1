import { Component, OnInit } from '@angular/core';
import {ServiceNameService} from "../service-name.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allData: any;
  dataFetched: boolean = false;
  partData:any;
  deleteData:any;

  constructor(private user:ServiceNameService,
              private route: Router) {

  }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.dataFetched = true;
    this.user.getData().subscribe({
      next: (res: any) =>{
        this.allData = res;
        console.log(this.allData);
      }
    });
  }
  getById(id: any){
    this.dataFetched = true;
    this.user.getDataWithId(id).subscribe({
      next:(res: any)=>{
      this.partData=res?.data;
        console.log(this.partData);
      },
    })
  }

  edit(id: any){
    this.dataFetched = true;
    this.user.getDataWithId(id).subscribe({
      next:(res: any)=>{
        this.partData=res?.data;
        console.log(this.partData);
      },
      complete: ()=>{
        this.route.navigate(['/put',id]);
      }
    })
  }
  delete(id:any)
  {
    this.dataFetched = true;
    this.user.deleteUser(id).subscribe({
      next:(res:any)=>
      {
        this.deleteData=res.data;
      }
    })
  }

}


