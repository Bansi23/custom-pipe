import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUser',
})
export class SearchUserPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value || !this.checkArgsExist(args)) {
      return value;
    }
    var newArr = value.filter(
      (val : any) => val.name.toLowerCase().indexOf(args.name.toLowerCase()) !== -1
    );
    return newArr;
  }

  private checkArgsExist(args: any): boolean {
    return Object.values(args).every(
      (arg) => arg !== null && arg !== undefined
    );
  }
}

@Pipe({
  name: 'searchMobile',
})
export class searchNumberPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value || !this.checkArgsExist(args)) {
      return value;
    }
    var newArr = value.filter(
      (val : any) => val.mobile.toString().indexOf(args.mobile.toString()) !== -1
    );
    return newArr;
  }

  private checkArgsExist(args: any): boolean {
    return Object.values(args).every(
      (arg) => arg !== null && arg !== undefined
    );
  }
}

@Pipe({
  name: 'searchEmail',
})
export class searchEmailPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value || !this.checkArgsExist(args)) {
      return value;
    }
    var newArr = value.filter(
      (val: any) =>
        val?.email.toString().indexOf(args?.email.toString()) !== -1
    );
    return newArr;
  }

  private checkArgsExist(args: any): boolean {
    return Object.values(args).every(
      (arg) => arg !== null && arg !== undefined
    );
  }
}

@Pipe({
  name: 'searchGender',
})
export class searchGenderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value || !this.checkArgsExist(args)) {
      return value;
    }
    var newArr = value.filter(
      (val : any) => val.gender.toLowerCase().indexOf(args.gender.toLowerCase()) !== -1
    );
    return newArr;
  }

  private checkArgsExist(args: any): boolean {
    return Object.values(args).every(
      (arg) => arg !== null && arg !== undefined
    );
  }
}
