import { Component,OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  formDataModel = '1';
  constructor() {}
  ngOnInit() {
    setInterval(() => {
      console.log('DashboardComponent', this.formDataModel);
    }, 30000);
  }
}
