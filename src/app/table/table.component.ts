import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
  columnDefs = [
    { headerName: 'Lead Score', field: 'score', sortable: true, filter: true },
    { headerName: 'First Name', field: 'firstName', sortable: true, filter: true },
    { headerName: 'Last Name', field: 'lastName', sortable: true, filter: true },
    { headerName: 'Mobile Number', field: 'mobileNumber', sortable: true, filter: true },
    { headerName: 'Email', field: 'emailId', sortable: true, filter: true },
    { headerName: 'Area', field: 'location', sortable: true, filter: true },
    { headerName: 'Zip Code', field: 'zip', sortable: true, filter: true },
    { headerName: 'Gender', field: 'gender', sortable: true, filter: true },
    { headerName: 'Message', field: 'enquiryMessage', sortable: true, filter: true },
  ];

  rowData: any;
  gridOptions: GridOptions;
  public gridApi: any;

  onBtExport() {
    this.gridApi.exportDataAsCsv();
  };

  onGridReady(params: any) {
    this.gridApi = params.api;
  }


  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.rowData = this.http.get('https://insurance-prospect-backend.cfapps.io/data/getAllUsers');
  }

}
