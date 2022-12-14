// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    apiKey: 'AIzaSyBsIQA3aCDdS--YYMDyo58xjQiLy50f1OI',
    authDomain: 'avisaya-8a2e0.firebaseapp.com',
    projectId: 'avisaya-8a2e0',
    storageBucket: 'avisaya-8a2e0.appspot.com',
    messagingSenderId: '1056940170618',
    appId: '1:1056940170618:web:f73bce072e446116e20ac3',
  },
  production: false,
  api: {
    // baseUrl: 'http://localhost:8080/api/',
    baseUrl: 'https://avisa-ya-backend-acto-delictivo-2.vercel.app/api/',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
