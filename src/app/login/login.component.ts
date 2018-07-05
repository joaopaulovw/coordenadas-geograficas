import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loading: boolean = false;
  public error: string = null;

  constructor(private api: ApiService, private router:Router) { }

  onSubmit(data) {
    this.api.login(data).subscribe((res) => {
      this.loading = true;
      this.error = null;
      localStorage.setItem('user', JSON.stringify(res));
      this.router.navigate(['']);
    }, (err) => {
      console.log(err);
      this.loading = false;
      this.error = err.error.error_description;
    })
  }

  sendCode(data) {
    this.api.remember({ Email: data });

    this.router.navigate(['code']);
  }

}
