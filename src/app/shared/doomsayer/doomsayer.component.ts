import { Component, OnInit } from '@angular/core';
import { DoomsayerService } from './doomsayer.service';
import { DoomsayerMessage } from './doomsayer-message.class';

@Component({
  selector: 'app-doomsayer',
  templateUrl: './doomsayer.component.html',
  styleUrls: ['./doomsayer.component.scss']
})
export class DoomsayerComponent implements OnInit {
  messageQueue: Array<DoomsayerMessage> = [];

  constructor(private doomService: DoomsayerService) { }

  ngOnInit() {
    this.doomService.doomsayer$.subscribe(data => {
      this.messageQueue.push(new DoomsayerMessage({theme: data.theme, message: data.message}));
    });
  }
}
