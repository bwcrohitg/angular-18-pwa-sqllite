import { Component, OnInit, inject } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-tab-3',
  standalone: true,
  imports: [],
  templateUrl: './tab-3.component.html',
  styleUrl: './tab-3.component.scss',
})
export class Tab3Component implements OnInit {
  private httpService = inject(HttpService);

  data: any = [];
  ngOnInit() {
    this.getTabData();
  }
  async getTabData() {
    const data = await this.httpService.getData('tab-3');
    this.data = data?.data;
  }
}
