import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  apiUrl = 'https://api.spacexdata.com/v3/launches';
  missions: any[] = [];
  searchByYear: string = '';
  launchByYears: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getMissions();
  }

  getMissions() {
    this.http.get<any[]>(this.apiUrl)
      .subscribe((data: any[]) => {
        //filter mission based on year
        this.missions = data.filter(mission => mission.launch_year.includes(this.searchByYear));
      });
  }

  //need to navigate to details component
  goToMissionDetails(flight_number: string) {
    this.router.navigate(['/mission', flight_number]);
  }
}