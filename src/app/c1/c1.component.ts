import { Component } from '@angular/core';
import { CabService } from '../cab-booking-service.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})

export class C1Component {
  public cabs: any[]=[];
  fetching: boolean = false;


  carPlate: string ="123";
  id: string ="321";
  available: string = "false";

  constructor(private cabService: CabService) { }

  getAllCabs() {
    this.cabService.getAllCabs();
    this.cabService.cabs.subscribe(data => {
      if(data.length !=0){
        this.cabs = Object.assign([],data);
        this.fetching = false;
      }
      });
    console.log(this.cabs);
  }

  bookCab() {
    console.log(this.cabService.bookCab(this.carPlate, this.id, this.available));
    this.getAllCabs();
  }

}