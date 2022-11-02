import {Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClientModule, HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceNameService implements OnInit{

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
   console.log(this.getData()) ;
  }
  getData(): Observable<any> {
    let url="https://jsonplaceholder.typicode.com/todos";
    return this.http.get(url);
  }
  getDataWithId(id: any): Observable<any> {
    let url=`https://dummy.restapiexample.com/api/v1/employee/${id}`;
    return this.http.get(url);
  }

  postUser(data:any)
  {
    let url="https://jsonplaceholder.typicode.com/todos";
    return this.http.post(url,data)
  }
  putUser(id:any):Observable<any>
  {
    let url="https://jsonplaceholder.typicode.com/todos" ;
    return this.http.put(url,id);
  }
deleteUser(id:any):Observable<any>
{
  let url=`https://dummy.restapiexample.com/api/v1/employee/${id}`;
  return this.http.delete(url,id);
}

getd():Observable<any>
{
  let url="https://jsonplaceholder.typicode.com/todos";
  return this.http.get(url)
}
}



