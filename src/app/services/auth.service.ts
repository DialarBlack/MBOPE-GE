// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://dialarblack.pythonanywhere.com/login/'; // Update this to match your Django login endpoint
  private logoutUrl = 'https://dialarblack.pythonanywhere.com/logout/';

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }) {
    return this.http.post(this.loginUrl, credentials).pipe(
      map((response: any) => {
        // Assuming the response includes the user's is_superuser status
        sessionStorage.setItem('isSuperuser', JSON.stringify(response.is_superuser));
        return response.is_superuser;
      }),
      catchError((error) => {
        // Handle error appropriately
        throw error;
      })
    );
  }
  
  getUserStatus(): boolean {
    const isSuperuser = sessionStorage.getItem('isSuperuser');
    return isSuperuser ? JSON.parse(isSuperuser) : false;
  }
  
  logout() {
    return this.http.post(this.logoutUrl, {});
  }

}
