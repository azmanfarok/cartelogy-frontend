import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-ocds',
  templateUrl: './ocds.component.html',
  styleUrls: ['./ocds.component.css']
})
export class OcdsComponent implements OnInit {

  dataSource: any;
  myprogressbar: boolean = false;
  displayedColumns: string[] = ['tender_no', 'title', 'ocds'];
  resultsLength: number;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private _company: CompanyService,
  ) { }

  ngOnInit() {
    this.getOCDS();
  }

  getOCDS() {

    this.myprogressbar = true;

    this._company.getOCDS().subscribe(
      success => {

        this.dataSource =  new MatTableDataSource(success.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.resultsLength = this.dataSource.length;

      },
      error => {
        console.error(error.status);
      },
      () => {
        this.myprogressbar = false;
      }
    );

  }
}
