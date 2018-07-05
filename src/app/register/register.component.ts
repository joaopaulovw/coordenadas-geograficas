import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public loading: boolean = false;
  public error: string = null;

  constructor(private api: ApiService, private router: Router) { }

  onSubmit(data) {
    this.api.register(data).subscribe((res) => {
      this.error = null;
      this.loading = true;
      this.router.navigate(['login']);
    }, (err) => {
      this.loading = false;
      this.error = err.error.Message;
      console.log(err);
    })
  }

}
