import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { FormGroup, AbstractControl } from "@angular/forms";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url: string = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

//   validateUsernameNotTaken(control: AbstractControl) {
//     return this.checkUsernameNotTaken(control.value).pipe(
//       map(res => {
//         return res ? null : { usernameTaken: true };
//       })
//     );
//   }

//   //Fake API call -- You can have this in another service
//   checkUsernameNotTaken(username: string): Observable<boolean> {
//     return this.http.get(this.url).pipe(
//       map((usernameList: Array<any>) =>
//         usernameList.filter(user: (any: any) => user.username === username)
//       ),
//       map(users => !users.length)
//     );
//   }
// }
}
