// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-missiondetails',
//   templateUrl: './missiondetails.component.html',
//   styleUrl: './missiondetails.component.css'
// })
// export class MissiondetailsComponent implements OnInit {
//   //Now we are selecting an individual item
//   missionDetails: any;
//   apiUrl = 'https://api.spacexdata.com/v3/launches/';

//   constructor(private http: HttpClient, private route: ActivatedRoute) { }

//   ngOnInit(): void {
//     // Get the flight_number from URL? ---> how?
//     const flightNumber = this.route.snapshot.paramMap.get('flight_number');

//     // Make a GET request to fetch mission details
//     this.http.get<any>(this.apiUrl + flightNumber)
//       .subscribe((data: any) => {
//         this.missionDetails = data;
//       });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  missionDetails: any;
  apiUrl = 'https://api.spacexdata.com/v3/launches/';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get the flight_number from the route parameters
    const flightNumber = this.route.snapshot.paramMap.get('flight_number');

    // Make a GET request to fetch mission details
    this.http.get<any>(this.apiUrl + flightNumber)
      .subscribe((data: any) => {
        this.missionDetails = data;
      });
  }
}