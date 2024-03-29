import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersDataService } from 'src/app/service/users-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentPage: number =1 ;
  users:any;
  text_search:any;
  total_pages:number=0;
  constructor(private _UsersDataService:UsersDataService,private router: Router) { }



  ngOnInit(): void {

    setTimeout(()=>{
      this.get_data(this.currentPage);

    },2000)


  }


  get_data(currentPage:number){
    this._UsersDataService.getUsers(currentPage).subscribe(data=>{
      this.users=data.data;
      this.total_pages=data.total_pages;
      console.log(data);

    })
  }
  nextPage(): void {
    if(this.currentPage<this.total_pages)
    this.currentPage++;
    this.get_data(this.currentPage);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.get_data(this.currentPage);
    }

  }
}
