import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface login
{
  username:string;
  password:any;
}

export interface register
{
  username:string;
  password:any;
  email:any;
  password2:any;
}
@Injectable({
  providedIn: 'root',
})
export class Userservice {
constructor(private http:HttpClient){}
loginurl="http://127.0.0.1:8000/login"
registerurl="http://127.0.0.1:8000/register"
private object=new BehaviorSubject<boolean>(true)
object$=this.object.asObservable();
login(data:Partial<login>):Observable<login>
{
   return this.http.post<any>(this.loginurl,data);
}
register(data:Partial<register>):Observable<register>
{
  return this.http.post<any>(this.registerurl,data);
}
// showbutton(status:boolean)
// {
//   this.object.next(status);
//   this.object$.subscribe
// }

}
