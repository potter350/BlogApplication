import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router} from '@angular/router'
import { BloghttpService } from '../bloghttp.service';

//importing location for goback functionality
import {Location} from '@angular/common'



@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers :[Location]
})
export class BlogViewComponent implements OnInit {

  public currentBlog: any

  public myblogid:any = this.route.snapshot.paramMap.get('blogId');
  
  
  
  

  constructor(private route : ActivatedRoute, private router : Router, 
    private http : BloghttpService, private location : Location) {
      console.log('cons called blogview comp')
     }

  ngOnInit(): void {
    console.log('oninit called blogview comp')

    

    this.currentBlog = this.http.getonebloginfo(this.myblogid).subscribe(

      (      data: any) => {
        console.log('single blog data lodging')
        console.log(data)
        this.currentBlog = data
        
        
      },
      (      error: { errorMessage: any; })=> {
        console.log('error occured'),
        console.log(error.errorMessage);
      },
    )   // end of current blog   
    
    
  }

  public deleteblog (): any{
    console.log(this.myblogid)
    this.http.deleteblog(this.myblogid).subscribe(

        (data:any) => {
          console.log(data)
          alert('blog deleted successfully')
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1000)
        },

        (error:any) => {
          alert('blog deleted succefully')
          console.log('error occured')
          alert('error occured')
          console.log(error.errorMessage)
        }
    )

  }// end of delete method


  // method to goback 
  public goback():any{
    this.location.back();
  }

  
    


  


  
}
