import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'https://coord.gear.host/';
  private mapsBaseUrl: string = 'https://maps.googleapis.com/maps/api/';
  private mapsApiKey: string = 'AIzaSyBYWr3gyrwTWcImqfP4-NvIwz_F_jYx8DI';

  constructor(private http: HttpClient) { }

  getAuthHeader(): any {
    let user = JSON.parse(localStorage.getItem('user'));

    return { headers: { 'Authorization': 'Bearer ' + user.access_token } }
  }

  login(data) {
    return this.http.post(this.baseUrl + 'Login', 'grant_type=password&username=' + data.username + '&password=' + data.password, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
  }

  register(data) {
    return this.http.post(this.baseUrl + 'api/Account/Register', data);
  }

  logout() {
    return this.http.post(this.baseUrl + 'api/Account/Logout', null, this.getAuthHeader());
  }

  remember(data) {
    return this.http.post(this.baseUrl + 'api/ValidCodes', data);
  }

  checkCode(data) {
    return this.http.post(this.baseUrl + 'api/CheckValidCode', data);
  }

  changePassword(data) {
    return this.http.post(this.baseUrl + 'api/Account/ChangePassword', data);
  }

  getAddresses() {
    return this.http.get(this.baseUrl + 'api/Address', this.getAuthHeader());
  }

  saveAddresses(data) {
    return this.http.post(this.baseUrl + 'api/Address', data, this.getAuthHeader());
  }

  autoComplete(data) {
    return this.http.get(this.mapsBaseUrl + 'place/queryautocomplete/json?key=' + this.mapsApiKey + '&language=pt-BR&input=' + data);
  }

  getPlace(data) {
    return this.http.get(this.mapsBaseUrl + 'place/textsearch/json?key=' + this.mapsApiKey + '&language=pt-BR&input=' + data);
  }
}
