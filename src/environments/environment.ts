// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
        apiKey: "AIzaSyC88N5rWHfz2gLGiqOzjkdISfePxfOL-RY",
    authDomain: "quiz-a2e13.firebaseapp.com",
    databaseURL: "https://quiz-a2e13.firebaseio.com",
    projectId: "quiz-a2e13",
    storageBucket: "quiz-a2e13.appspot.com",
    messagingSenderId: "279113692929",
    
    "rules": {    
        ".read": true,
        ".write": true
    }

  }
};
