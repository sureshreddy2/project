import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-selected-book-to-buy',
  templateUrl: './selected-book-to-buy.component.html',
  styleUrls: ['./selected-book-to-buy.component.css']
})
export class SelectedBookToBuyComponent {

  constructor(
    public dialogRef: MatDialogRef<SelectedBookToBuyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
