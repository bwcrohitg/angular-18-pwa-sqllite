import { NgFor } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-tab-1',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tab-1.component.html',
  styleUrl: './tab-1.component.scss',
})
export class Tab1Component implements OnInit {
  private httpService = inject(HttpService);

  data: any = [];
  ngOnInit() {
    this.getTabData();
  }
  async getTabData() {
    const data = await this.httpService.getData('tab-1');
    this.data = data?.data;
  }
}
