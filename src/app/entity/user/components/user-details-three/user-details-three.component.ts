import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details-three',
  templateUrl: './user-details-three.component.html',
  styleUrls: ['./user-details-three.component.css']
})
export class UserDetailsThreeComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute
    ) { 
      this.activatedRoute.params.subscribe(value => console.log(value));
      console.log(this.router.getCurrentNavigation().extras.state);
    }

  ngOnInit(): void {
  }

}
