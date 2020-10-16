import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details-two',
  templateUrl: './user-details-two.component.html',
  styleUrls: ['./user-details-two.component.css']
})
export class UserDetailsTwoComponent implements OnInit {

  constructor(private router: Router,
              private activatedroute: ActivatedRoute
    ) { 
      this.activatedroute.params.subscribe(value => {
        console.log(this.router.getCurrentNavigation().extras.state);
        console.log(history.state);
        
      });
  }

  ngOnInit(): void {
  }

}
