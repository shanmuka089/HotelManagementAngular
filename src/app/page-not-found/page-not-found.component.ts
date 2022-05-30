import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private routerService:Router,private activetedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  // onClick(){
  //   this.routerService.navigate(['/home'],{relativeTo:this.activetedRoute});
  // }

}
