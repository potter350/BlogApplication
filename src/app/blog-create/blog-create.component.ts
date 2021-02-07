import { Component, OnInit } from '@angular/core';
import { BloghttpService } from '../bloghttp.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  
  constructor(public http:BloghttpService) { 
    
  } 

    

    public name!: string;
    public username!: string;
    public title!: string;
    public body!: string;
    public email!: string;
    public blogcatagory !: string;
    public possiblecatagories = ["ok","above average","nice","awesome"]

  

  ngOnInit(): void {
  }

  public createblog():any {
    let blogdata = {
    name: this.name,
    username :this.username,
    title : this.title,
    body : this.body,
    email : this.email,
    catagory : this.blogcatagory
    }
  // end of createblog

  console.log(blogdata)
  this.http.createblog(blogdata).subscribe(
        (data : any) => {
          console.log('blog created successfully')
          console.log(data)
          console.log(data.id)
          this.http.toastr.success('Blog Posted Successfully', 'Success!' )
          setTimeout(()=>{
            this.http.router.navigate(['/home'])
            //this.http.router.navigate(['/blog',data.id])
          }, 3000)
        },
        (error : any) => {
          console.log('error happened')
          console.log(error.errorMessage)
          this.http.toastr.error('Error happened', 'Error!');
        }
  )


  }
}
