import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';


@Injectable()
  // providedIn: 'root'

export class AuthService {

  constructor(private myHttp: Http ) { }

signup(user){
  return this.myHttp.post(`${environment.apiBase}/api/signup`,
  {
    signUpUsername: user.username,
    signUpEmail: user.username,
    signUpPassword: user.password
  },
  {
    withCredentials: true
  }
)
.map(res => res.json())
}

login(data){
  return this.myHttp.post(`${environment.apiBase}/api/login`,
    {
      loginEmail: data.username,
      loginPassword: data.password
    },
    {
      withCredentials: true
    }
  )
  .map(res => res.json())
}

}
