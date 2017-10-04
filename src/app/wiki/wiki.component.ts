import { Component, OnInit } from '@angular/core';
import {WikiService} from './wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

  constructor(private wikiService: WikiService) { }

  ngOnInit() {
  }

}
