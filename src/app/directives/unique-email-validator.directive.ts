import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../services/user.service';

export function uniqueEmailValidator(userService: UserService): AsyncValidatorFn {

  return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return userService.getUserByEmail(c.value).pipe(
      map (users  => {
        return users && Object.keys(users).length > 0 ? {'uniqueEmail': true} : null;
      })
    );
  }
}



@Directive({
  selector: '[uniqueEmail]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueEmailValidatorDirective, multi: true}]
})
export class UniqueEmailValidatorDirective implements AsyncValidator{

  constructor(private userService: UserService) { }

  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.userService.getUserByEmail(c.value).pipe(
      map (users => {
        return users && Object.keys(users).length > 0 ? {'uniqueEmail': true} : null;
      })
    );
  }

}
