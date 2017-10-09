import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiki-content',
  templateUrl: './wiki-content.component.html',
  styleUrls: ['./wiki-content.component.scss']
})
export class WikiContentComponent implements OnInit {
  public editorContent: string;

  constructor() { }

  ngOnInit() {}

}
