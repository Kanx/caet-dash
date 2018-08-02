import { Component } from '@angular/core';
import { DialogComponent, DialogService} from 'ng2-bootstrap-modal';

export interface ConfirmModel {
  title: string;
  message: string;
  theme: string;
}

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss']
})
export class DialogModalComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  theme: string;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {
    this.result = true;
    this.close();
  }
}
