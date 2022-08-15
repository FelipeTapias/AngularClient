import { Component, OnInit } from '@angular/core';
import { Datamock } from 'src/app/shared/models/datamock.model';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { dataMock } from './mock.data';


@Component({
  selector: 'app-super-user',
  templateUrl: './super-user.component.html',
  styleUrls: ['./super-user.component.css']
})
export class SuperUserComponent {

  list: Array<Datamock> = dataMock;
  searchText: string = '';

  constructor(private filterPipe: FilterPipe ) { }

  searchRuleList(event: string) {
    this.searchText = event;
    this.refreshPagination(this.list);
  }

  refreshPagination(list: Array<Datamock>) {
    list = this.filterPipe.transform(list, ['country'], this.searchText);
    return list;
  }

}
