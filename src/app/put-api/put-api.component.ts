import { Component, OnInit } from '@angular/core';
import {ServiceNameService} from "../service-name.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-put-api',
  templateUrl: './put-api.component.html',
  styleUrls: ['./put-api.component.scss']
})
export class PutApiComponent implements OnInit {
putDa:any;
id: any;
dataFetched:boolean=false;
apiForm :FormGroup=new FormGroup<any>({});
  constructor(
    private userData:ServiceNameService,
    private formBuilder:FormBuilder,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    console.log(this.apiForm.value);
    this.fun();
    this.edit();
  }


  // getUsersFormData(data: any) {
  //
  //   this.userData.putUser(data).subscribe((result: any) => {
  //     console.warn(data)
  //   })
  // }
  onSubmit()
  {
    const data = this.apiForm.value;
    this.userData.putUser(data).subscribe({
      next:(res:any)=>
      {
        this.putDa=res?.data;
        console.log(this.putDa)

      }
    })
  }
  fun(){
    this.apiForm=this.formBuilder.group({
      id:['undefined'],
      name:['undefined'],
      salary:['undefined'],
      age:['undefined'],
      image:['undefined']
    })
  }

  edit(){
    this.dataFetched=true;
    this.userData.getDataWithId(this.id).subscribe({
      next:(res: any)=>{
        const data =res.data;
        console.log(data);
        this.apiForm.patchValue({
          id:data?.id,
          name:data?.employee_name,
          salary:data?.employee_salary,
          age:data?.employee_age,
          image:data?.profile_image
        })
      },

    })
  }
}
