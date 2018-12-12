// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api/v1/',
  firebase: {
    apiKey: 'AIzaSyDueIh6nxo-wxTG2moQbq_iNDKFFtNDARI',
      authDomain: 'spectrum-app.firebaseapp.com',
      databaseURL: 'https://spectrum-app.firebaseio.com',
      projectId: 'spectrum-app',
      storageBucket: 'spectrum-app.appspot.com',
      messagingSenderId: '68602982808'
  }

};
