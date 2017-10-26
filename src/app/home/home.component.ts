import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
  }
  onChange(e:any){ 
    this.router.config[2].data['selectedID'] = parseInt(e.target.value);
    this.router.resetConfig(this.router.config);
  }
}
