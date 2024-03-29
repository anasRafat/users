import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersDataService } from 'src/app/service/users-data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user:any;
  id:any;

  constructor(private _UsersDataService:UsersDataService, private _ActivatedRoute: ActivatedRoute ,private location: Location
    ) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.id= this._ActivatedRoute.snapshot.paramMap.get('id');
    this._UsersDataService.getUserDetails(this.id).subscribe(data =>{
      this.user=data.data;
    })

    },1000)

  }
  goBack(): void {
    this.location.back();
  }
}
