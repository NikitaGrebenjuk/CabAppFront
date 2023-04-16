import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CabService {
  private baseUrl = 'http://localhost:9070/cab-booking-service/api/v1';
  public cabs: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private httpClient: HttpClient) { }


  /**
   * getAllCabs
   */
  public getAllCabs() {
    
    this.httpClient.get(`${this.baseUrl}/cabs`).subscribe( (response)=>{
      this.cabs.next(Object.assign([],response));
    })
  }

/*
  getAvailableCabs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cabs?available=true`);
  }
*/
  bookCab(carPlate: string, id: string, available: string){
    const body = { carPlate, id, available };
    this.httpClient.post(`${this.baseUrl}/cabs/${id}/book`,body).subscribe(response => {console.log(response)});
  }

}