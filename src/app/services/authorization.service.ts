import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserData } from 'src/modules/login/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  data: BehaviorSubject<UserData> = new BehaviorSubject(null);
  user$ = this.data.asObservable();

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) { }

  login(email, password): Observable<any> {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!');
        const user = {
          name: res['user']['displayName'],
          email: res['user']['email'],
          photoUrl: res['user']['photoURL']
        };
        this.data.next(user);
        this.router.navigate(['dashboard']);
      })
      .catch(err => {
        this.data.next(null);
        console.log('Something is wrong:', err.message);
      });
      return this.user$;
  }

  signUp() {
    console.log('sign up...')

    return new Observable(observer => {
      observer.next();
    })
  }

  logout() {
    console.log('logout...')
  }
}
