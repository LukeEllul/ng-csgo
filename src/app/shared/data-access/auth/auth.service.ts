import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor() {}

    csgoLogin(): void {
        window.location.href =
            'https://api-staging.csgoroll.com/auth/steam?redirectUri=http://localhost:4200';
    }
}
