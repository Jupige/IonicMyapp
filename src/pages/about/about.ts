import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutService } from './services/about.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [AboutService]
})
export class AboutPage implements OnInit {

  datas: any[] = [];
  columns: string[];

  constructor(public navCtrl: NavController, private sev: AboutService) {

  }

  ngOnInit(): void {
    // this.columns = ['name','age']
    // this.datas = [
    //   {
    //     name: 'Jupige-0',
    //     age: 25,
    //   },
    //   {
    //     name: 'Jupige-1',
    //     age: 24,
    //   },
    //   {
    //     name: 'Jupige-2',
    //     age: 23,
    //   }
    // ]
    let isInitColumns = false;
    this.sev.getPersionsAsync()
      .subscribe(p => {
        if (!isInitColumns) {
          this.columns = Object.keys(p);
        }

        this.datas.push(p);
      });
  }
}
