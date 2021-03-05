import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
var CryptoJS = require("crypto-js");

const emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,63}';

@Component({
  selector: 'app-crud-demo',
  templateUrl: './crud-demo.component.html',
  styleUrls: ['./crud-demo.component.scss'],
})
export class CrudDemoComponent implements OnInit {
  //#region properties
  registerForm: FormGroup = new FormGroup({});
  listUser: any = [];
  isEdit: boolean = false;
  name: any;
  mobile: any;
  email: any;
  gender: any;
  selectedUser: any;
  MaxDate: any;

  listHeader: any = [
    'name',
    'gender',
    'email',
    'Date of Birth',
    'mobie no',
    'about me',
    'Action',
  ];

  //#endregion

  /**
   * @param FormBuilder used for reduces the amount of boilerplate needed to build complex forms.
   */
  constructor(private FormBuilder: FormBuilder) {
  }

  /**
   * @var dtToday get new Date
   * @var month for get month
   * @var day  get date
   * @var year get year
   *
   */
  ngOnInit(): void {
    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    this.MaxDate = year + '-0' + month + '-0' + day;

    if (localStorage.getItem('userlist') != null) {
      this.listUser = JSON.parse(localStorage.getItem('userlist') || '[]');
    } else {
      this.listUser = [];
    }

    this.ValidationForm();
  }

  /**
   * @description validation required & pattern for the user form
   */
  ValidationForm() {
    this.registerForm = this.FormBuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(emailPattern),
        ]),
      ],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      about: ['', Validators.required],
      dob: ['', Validators.required],
    });
  }

  saveForm() {
    this.isEdit = false;
    for (let val in this.registerForm.controls) {
      this.registerForm?.controls[val]?.markAsTouched();
    }
    if (this.registerForm?.valid) {
      let UserForm = this.registerForm?.value;
      const index = this.listUser.findIndex(
        (userId: any) => userId.id == UserForm.id
      );
      if (index > -1) {
        this.listUser.splice(index, 1, UserForm);
      } else {
        UserForm.id = new Date().getTime();
        this.listUser.push(UserForm);
        localStorage.setItem('userlist', JSON.stringify(this.listUser));
      }
      this.ResetForm();
    }
  }

  /**
   * @description reset form using reset() method
   */
  ResetForm() {
    this.isEdit = false;
    this.registerForm.reset();
  }

  /**
   * @param i get the index for splice the object
   */

  deleteRecord(i: any) {
    if (confirm(' Are you sure you want to delete this record?')) {
      this.listUser.splice(i, 1);
      localStorage.setItem('userlist', JSON.stringify(this.listUser));
    }
  }

  /**
@description edit record patch values
@param users get the object of slected user
*/

  editRecord(users: any) {
    this.isEdit = true;
    if (users) {
      this.registerForm.patchValue(users);
    }
    this.selectedUser = users;
  }

  /**
   * @description click on edit button to update the user list
   * @var  body set the form value
   */
  editUser() {
    if (this.registerForm.valid) {
      var body = {
        id: this.selectedUser.id,
        name: (this.selectedUser.name = this.registerForm?.value.name),
        email: (this.selectedUser.email = this.registerForm?.value.email),
        mobile: (this.selectedUser.mobile = this.registerForm?.value.mobile),
        about: (this.selectedUser.about = this.registerForm?.value.about),
        gender: (this.selectedUser.gender = this.registerForm?.value.gender),
        dob: (this.selectedUser.dob = this.registerForm?.value.dob),
      };
      this.listUser[this.selectedUser] = body;
      localStorage.setItem('userlist', JSON.stringify(this.listUser));

      this.isEdit = false;
    }
    this.ResetForm();
  }
}
