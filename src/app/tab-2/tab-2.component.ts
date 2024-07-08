import { Component, OnInit, inject } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-tab-2',
  standalone: true,
  imports: [],
  templateUrl: './tab-2.component.html',
  styleUrl: './tab-2.component.scss',
})
export class Tab2Component implements OnInit {
  private httpService = inject(HttpService);

  data: any = [];
  ngOnInit() {
    this.getTabData();
  }
  async getTabData() {
    const data = await this.httpService.getData('tab-2');
    this.data = data?.data;
  }
}
