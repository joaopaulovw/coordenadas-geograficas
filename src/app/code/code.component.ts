import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent {
  public remember: boolean = false;

  constructor(private api: ApiService, private router: Router) { }

  onSubmit(data) {
    this.api.checkCode(data).subscribe((res) => {
      this.remember = true;
    }, (err) => {
      this.remember = false;
    });
  }

  onSubmitRemember(data) {
    this.api.changePassword(data).subscribe((res) => {
      this.router.navigate(['login']);
    }, (err) => {
      console.log(err);
    });
  }
}
