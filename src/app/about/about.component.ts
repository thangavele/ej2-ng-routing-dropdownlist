import {Component, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { DropDownListComponent } from '@syncfusion/ej2-ng-dropdowns'

@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  constructor(private route: ActivatedRoute,private router: Router) {
  }
  @ViewChild('sample')
  public dropdownlistObj: DropDownListComponent;

  public selectedID: string;
  public data: Object[];
  public fields: Object = { text: 'Game', value: 'Id' };
  ngOnInit(): void { 
      this.data = [];
      this.getData();
      this.selectedID = this.route.snapshot.data['selectedID'];
  }
  getData(){
      this.data = [
        { Id: 'Game1', Game: 'Cricket' },
        { Id: 'Game2', Game: 'Football' },
        { Id: 'Game3', Game: 'Golf' },
        { Id: 'Game4', Game: 'Hockey' },
        { Id: 'Game5', Game: 'Snooker' },
        { Id: 'Game6', Game: 'Tennis' }
      ];
  }
}
