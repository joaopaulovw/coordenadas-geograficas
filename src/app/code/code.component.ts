import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent {

  constructor(private router: Router) { }

  onSubmit(data) {
    this.router.navigate(['remember']);
  }

}
