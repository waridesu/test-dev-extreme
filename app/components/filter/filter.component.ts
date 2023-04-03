import { Component, OnInit } from '@angular/core';
import { UserTableService } from "../../services/user-table.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filters: any = {
    gender: false,
    city: false,
    street: false,
    email: false,
    phone: false
  };

  constructor(private userTableService: UserTableService) {}

  ngOnInit(): void {
    const savedFilters = localStorage.getItem('filters');
    if (savedFilters) {
      this.filters = JSON.parse(savedFilters);
      this.userTableService.filters.next(this.filters);
    }
  }

  onFilterChanged(): void {
    localStorage.setItem('filters', JSON.stringify(this.filters));
    this.userTableService.filters.next(this.filters);
  }
}
