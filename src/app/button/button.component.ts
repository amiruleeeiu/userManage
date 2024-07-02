import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  standalone: true,
  imports: [MatButtonModule, MatTableModule],
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() size: string = '';
  @Output()
  onPrimary = new EventEmitter<null | string>();
  @Output()
  onEdit = new EventEmitter<null | string>();
  @Output()
  onDelete = new EventEmitter<null | string>();
  @Output()
  onView = new EventEmitter<null | string>();

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  handleButton(id: string) {
    this.onPrimary.emit(id);
  }
  handleEdit(id: string) {
    this.onEdit.emit(id);
  }
  handleDelete(id: string) {
    this.onDelete.emit(id);
  }
  handleView(id: string) {
    this.onView.emit(id);
  }

  constructor(private dialog: MatDialog) {}
}
