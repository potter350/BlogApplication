import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BloghttpService } from '../bloghttp.service';



@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  constructor(public http: BloghttpService, public route :ActivatedRoute,public router : Router) { }

  public currentBlog:any


  ngOnInit(): void {
    let  myblogid:any = this.route.snapshot.paramMap.get('blogId');
    console.log(myblogid)

    this.currentBlog = this.http.getonebloginfo(myblogid).subscribe(

      (      data: any) => {
        console.log('single blog data lodging')
        console.log(data)
        this.currentBlog = data
        
        
      },
      (      error: { errorMessage: any; })=> {
        console.log('error occured'),
        console.log(error.errorMessage);
      },
    ) 

  }

  public editblog (): any{
    console.log(this.currentBlog.myblogid)
    this.http.editblog(this.currentBlog.myblogid,this.currentBlog).subscribe(

        (data:any) => {
          console.log(data)
          
          this.http.toastr.success('Blog Edited Successfully', 'Success!' )
          setTimeout(() => {
            this.router.navigate(['/blog',this.currentBlog.myblogid]);
          }, 1000)
        },

        (error:any) => {
          
          console.log('error occured')
          this.http.toastr.error('Error occured while editing your blog', 'Error!');
          console.log(error.errorMessage)
        }
    )

  }

}
