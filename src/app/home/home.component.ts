import { Component, OnInit,OnDestroy } from '@angular/core';


//importing bloghttp service here to provide the data from API
import { BloghttpService } from '../bloghttp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  public allblogs:any ;

  constructor(public bloghttp : BloghttpService) { 
    console.log('constructor called homeconponent')
  }
 
   

  ngOnInit(): void {
    console.log('ngOnInit called homecomponent')

    this.allblogs = this.bloghttp.getallblogs().subscribe(

      (      data: never[]) => {
        console.log('data lodging'),
        console.log(data);
        this.allblogs = data
        
      },

      (      error: { errorMessage: any; })=> {
        console.log('error occured'),
        console.log(error.errorMessage);
      },
    )

  }

  ngOnDestroy(): void {
    console.log('Homecompoent destroyed ')
  }

}
