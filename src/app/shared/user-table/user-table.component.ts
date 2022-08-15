import { Component, Input, OnInit } from '@angular/core';
// import { dataMock } from 'src/app/pages/super-user/mock.data';
import { Datamock } from '../models/datamock.model';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {

  @Input() list: Array<Datamock> = [];

}
