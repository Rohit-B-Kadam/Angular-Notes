# Deploy Project On FireBase

---

## Firebase provides 5 types of services as

1. __Realtime Database :__
    - Firebase provides a realtime database and backend as a service.

2. __Authentication :__
    - Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.

3. __Firebase Cloud Messaging:__
    - Firebase Cloud Messaging (FCM) provides a reliable and battery-efficient connection between your server and devices that allows you to deliver and receive messages and notifications on iOS, Android, and the web at no cost.

4. __Firebase Storage :__
    - Firebase Storage provides secure file uploads and downloads for Firebase apps, regardless of network quality.
    - The developer can use it to store images, audio, video, or other user-generated content.
    - Firebase Storage is backed by Google Cloud Storage.

5. __Firebase Hosting :__
    - Firebase Hosting is a static and dynamic web hosting service that launched on May 13, 2014.
    - It supports hosting static files such as CSS, HTML, JavaScript and other files, as well as dynamic Node.js support through Cloud Functions.
    - The service delivers files over a content delivery network (CDN) through HTTP Secure (HTTPS) and Secure Sockets Layer encryption (SSL).

From the above services we are going to use Firebase Hosting service for deployment.

---

## To setup the Firebase

__Step 1 : To host your site, you need to install Firebase command line tools using npm.__

        sudo npm install -g firebase-tools

__Step 2 : Sign in to google using terminal by entering below command.__

        firebase login

It will ask you to access to the internet or browser as:

- Allow Firebase to collect anonymous CLI usage and error reporting information? (y/N) (Type __Yes__ and `<enter>` for next)

- It will automatically opens browser to gmail, login here to your google account If already login select your account and __Allow Access__ for firebase-cli.

- It will display “Firebase CLI Login Successful” on your browser.

---

## To deploy Angular application on firebase we have to follow below steps

__Step 1: Create Project in [firebase console](console.firebase.google.com)__.

__Step 2 : Build your project__ for production with AOT (Ahead Of Time) support

        ng build --prod --aot

__Step 3 : Initialize the firebase project__ with your production code using below command

        firebase init

__Step 4 : Here you have to select firebase develop options.__

selected: ◯ Hosting: Configure and deploy Firebase Hosting sites

__Step 5 : Select your firebase project created in firebase console.__

__Step 6 : Select folder to deploy on firebase.__

What do you want to use as your public directory? (public) (Type __dist/ yourprojectname__ and `<enter>` for next step )
We have to provide folder name which contains index.html file in it.

__Step 7 : Type Yes for single page app.__

__Step 8 : Type No for Overwrite index.html.__

__Step 9 : Deploy your Project.__

        firebase deploy

__Step 10 : Open our hosted website using below command.__

        firebase open hosting:site

---

## [More detail](https://firebase.google.com/docs/cli/)