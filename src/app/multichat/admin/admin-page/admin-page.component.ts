import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  route = inject(ActivatedRoute)
  id: string | null = ""

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
  }

}
