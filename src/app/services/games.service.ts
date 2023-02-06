import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  public dataSource = new BehaviorSubject({});


  constructor(private http :HttpClient ) {



   }



// api key 7b82ea45ab954e5a8ca9c151e125b861

// api key cf2eed6d9ba94df5a8f187a2756d4125
// api key 90a51e6f40d34e62b4e6ecc1c95ba3d9
// api key  7271742083a84d6c90e8f3a8346984cd


fetchData() {

  for (let i =0 ; i<8 ; i++)
  {

  this.http.get(`https://api.rawg.io/api/games?dates=2019-09-01%2C2019-09-30&key=7271742083a84d6c90e8f3a8346984cd&page=${i+1}&platforms=18%2C1%2C7`).subscribe((data :any) => {


  this.dataSource.next(data.results);

  });

  }


}



getData(page :number ) : Observable<any>
{

return this.http.get(`https://api.rawg.io/api/games?dates=2019-09-01%2C2019-09-30&key=7271742083a84d6c90e8f3a8346984cd&page=${page}&platforms=18%2C1%2C7`)


}





}
