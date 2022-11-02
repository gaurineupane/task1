import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {ServiceNameService} from "../service-name.service";

@Component({
  selector: 'app-post-api',
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.scss']
})
export class PostApiComponent implements OnInit {
  rForm: FormGroup = new FormGroup<any>({})
  postDa: any;
  submitted: boolean = false;

  constructor(
    private abc: FormBuilder,
    private userData: ServiceNameService
  ) {
  }

  get form(): { [key: string]: AbstractControl } {
    return this.rForm.controls;
  }

  ngOnInit(): void {
    this.fun();
  }

  fun() {
    // this.rForm=this.abc.group({
    //   uid:['',Validators.compose([Validators.maxLength(10),Validators.required,Validators.minLength(6)])],
    //   id:['',Validators.compose([Validators.maxLength(10),Validators.required,Validators.minLength(6)])],
    //   title:['',Validators.compose([Validators.maxLength(10),Validators.required,Validators.minLength(6)])],
    //   completed:['',Validators.compose([Validators.maxLength(10),Validators.required,Validators.minLength(6)])]
    // })
    this.rForm = this.abc.group({
      uid: [undefined],
      id: [undefined],
      title: [undefined],
      completed: [undefined],
    })
  }

  submit() {
    console.log('form', this.rForm.value);
    if (this.rForm.invalid) {
      return;
    }
    this.getUsersFormData(this.rForm?.value);
  }

  // getUsersFormData(data: any) {         //yo purano tarika ho so use nagarni
  //
  //   this.userData.postUser(data).subscribe((result: any) => {
  //     console.warn(data)
  //   })
  // }

  getUsersFormData(data: any) { //yo tarika use garney

    this.userData.postUser(data).subscribe
    ({
      next: (res: any) => {
        this.postDa = res?.data;
        console.log(this.postDa);
      }
    })
  }
}
