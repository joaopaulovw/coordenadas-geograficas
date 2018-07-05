import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remember',
  templateUrl: './remember.component.html',
  styleUrls: ['./remember.component.scss']
})
export class RememberComponent {

  constructor(private api: ApiService, private router: Router) { }

  onSubmit(data) {
    this.api.setPassword(data).subscribe(() => {
      this.router.navigate(['login']);
    }, (err) => {
      this.router.navigate(['code']);
    });
  }

}
