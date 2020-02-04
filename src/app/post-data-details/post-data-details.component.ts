import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-data-details',
  templateUrl: './post-data-details.component.html',
  styleUrls: ['./post-data-details.component.scss']
})
export class PostDataDetailsComponent implements OnInit {
  @Input() postDetailsData : any;
  constructor() { }

  ngOnInit() {
  }

}
