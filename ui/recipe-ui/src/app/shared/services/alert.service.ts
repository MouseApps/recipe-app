import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../component/dialog/dialog.component';
import { DialogContent } from '../component/dialog/dialog-content';

/**
 * manages application alerts
 */
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private dialog: MatDialog) { }

  /**
   * Opens a dialog
   * @param text text to show
   */
  public openDialog(content: DialogContent): MatDialogRef<DialogComponent, boolean> {
    return this.dialog.open<DialogComponent, DialogContent, boolean>(DialogComponent, {data: content});

  }
}
