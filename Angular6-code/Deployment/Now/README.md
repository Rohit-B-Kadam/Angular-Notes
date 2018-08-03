# Now

Realtime Global Deployments

You can Deploy static web application. like Angular Project on [zeit/now](https://zeit.co/now)

[demo](https://angular-project-rlsatiqhdw.now.sh/)

---

## Setup

    sudo npm install -g now --unsafe-perm

    sudo npm install -g now@canary --unsafe-perm

## Step to Deploy the Angular project

Step 1. Built your project for production with AOT (Ahead of time) support

    ng build --prod --aot

Step 2. Go to dist/projectName folder ( where All the static web page file are present ) then run below command and you will get url of your website.

    now

---