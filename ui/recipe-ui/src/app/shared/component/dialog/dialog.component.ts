import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DialogContent } from './dialog-content';

/**
 * shows the dialog
 */
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogContent) { }


}
