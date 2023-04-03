import { Component, OnInit } from '@angular/core';
import { UserTableService } from "../../services/user-table.service";
import DataSource from "devextreme/data/data_source";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  users: any;
  isPhoneVisible: boolean = true;
  isGenderVisible: boolean = true;
  isCityVisible: boolean = true;
  isStreetVisible: boolean = true;
  isEmailVisible: boolean = true;

  constructor(private userTableService: UserTableService) {}

  getFullName(rowData: any) {
    return `${rowData.name.first} ${rowData.name.last}`;
  }

  ngOnInit() {
    this.userTableService.filters.subscribe((res) => {
      this.isCityVisible = res.city;
      this.isStreetVisible = res.street;
      this.isEmailVisible = res.email;
      this.updateUsers();
    });
  }

  updateUsers(): void {
    this.userTableService.getUsers().subscribe((res) => {
      this.users = new DataSource({
        store: res.data,
        paginate: true,
        pageSize: 25,
      });

      this.isPhoneVisible = res.data.some((el: any) => el.hasOwnProperty("phone"))
      this.isGenderVisible = res.data.some((el: any) => el.hasOwnProperty("gender"))
    });
  }
}
