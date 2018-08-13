# MarvellousFirebase

Refer Two PDF:

This Project will not run because I have remove below contain from [environemt/environment.ts](environemt/environment.ts)

contain is:

```ts

    export const environment =
    {
        production: false,
        // Add this to access firebase in our project
        firebase :
        {
            apiKey: “—————————————————-”,
            authDomain: "fir-c9b1d.firebaseapp.com",
            databaseURL: "https://fir-c9b1d.firebaseio.com",
            projectId: “————————“,
            storageBucket: "fir-c9b1d.appspot.com",
            messagingSenderId: "387353492656"
        }
    }

```