# Get Started


## Thing Required for Angular

1. Angular Library to create Angular application.
1. A web server to serve the file to browser.
1. A transpiler to convert TypeScript to JavaScript.
1. An IDE to write code, Prefer Visual Studio code.
1. Any Browser, Highly recommend using the [Google Chrome Web Browser](https://www.google.com/chrome/).  
  
  
## Installation For Angular

1. Installing NodeJS: 
    [Installation throught package manager](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)
     , 
    [Download Node](https://nodejs.org/en/download)

        $ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
        $ sudo apt-get install -y nodejs
	    $ sudo apt-get install -y build-essential

2. Install / Updating npm: (node package manager)
        $ sudo npm install -g npm

3. Install TypeScript
        $ sudo npm install -g typescript

3. Install Angular CLI(Command Line Interface)
        $ sudo npm install -g @angular/cli

4. To Update CLI
        $ sudo npm uninstall -g @angular/cli
        $ sudo npm cache verify
        $ sudo npm install -g @angular/cli@next
 
## To check everything install are correctly

1. NodeJS and npm  
    `$ npm -v`

2. TypeScript  
    `$ tsc -v`

3. Angular CLI  
    `$ ng -v`

##  Steps to create Angular Project

1. Create new Project by this Command as                                   
        $ ng new angular-hello-world
2. Go to the Project Folder as                                             
        $ cd angular-hello-world
3. Now start developmental server as                                       
        $ ng serve
4. Now we can check our application using browser                          
        http://localhost:4200
5. Skip 3 and 4 step
        $ ng serve --open
