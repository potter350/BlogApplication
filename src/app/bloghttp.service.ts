import { Injectable, } from '@angular/core';

//importing toastr in services so it will available to all comp
import { ToastrService } from 'ngx-toastr';


// importing httpclient and httperrorResponse for to make http requests

import { HttpErrorResponse,HttpClient } from '@angular/Common/Http';
import { ActivatedRoute, BaseRouteReuseStrategy, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BloghttpService {
  delete(arg0: string) {
    throw new Error('Method not implemented.');
  }

  public baseUrl =  'https://jsonplaceholder.typicode.com'

  constructor(private http:HttpClient, public route : ActivatedRoute, public router : Router, public toastr: ToastrService) {
   
   }

  

  public getallblogs (): any{

    let myresponse = this.http.get(this.baseUrl+'/users')
    console.log(myresponse)
    return myresponse

  }

  public createblog (blogdata:any): any{

    let myresponse = this.http.post(this.baseUrl+'/posts/',blogdata)
    console.log(myresponse)
    return myresponse

  }

  public getonebloginfo (blogid:any): any{

    let myresponse = this.http.get(this.baseUrl+'/users/'+ blogid)
    console.log(myresponse)
    return myresponse

  }

  public deleteblog (myblogid:any): any{

    console.log(myblogid)
    let myresponse = this.http.delete(this.baseUrl+'/post/'+ myblogid)
    console.log(myresponse)
    return myresponse

  }

  public editblog (myblogid:any,blogdata:any): any{

    console.log(myblogid)
    let myresponse = this.http.put(this.baseUrl+'/post/'+ myblogid,blogdata)
    console.log(myresponse)
    return myresponse

  }
}
