import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public user: any;
  public results: any = [];
  public result: string;
  public addresses: any = [];

  constructor(private api: ApiService, private router: Router) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getAddresses();
  }

  auto(data) {
    this.api.autoComplete(data).subscribe((res: any) => {
      this.results = res.predictions;
    }, (err) => {
      console.log(err);
    });
  }

  getAddresses() {
    this.api.getAddresses().subscribe((res) => {
      this.addresses = res;
    }, (err) => {
      console.log(err);
    });
  }

  add() {
    this.api.getPlace(this.result).subscribe((res: any) => {
      let location = res.results[0].geometry.location;

      let data = {
        Lat: location.lat,
        Lng: location.lng,
        FormatedAddress: this.result,
      };

      this.api.saveAddresses(data).subscribe((res: any) => {
        this.getAddresses();
      }, (err) => {
        console.log();
      });
    }, (err) => {
      console.log(err);
    });
  }

  logout() {
    this.api.logout().subscribe(() => {
      localStorage.clear();
      this.router.navigate(['login']);
    }, (err) => {
      console.log(err);
    });
  }

}
