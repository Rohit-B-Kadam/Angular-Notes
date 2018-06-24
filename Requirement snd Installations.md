==============================================================================================================

I] Thing Required for Angular

===============================================================================================================

    > Angular Library to create Angular application.
    > A web server to serve the file to browser.
    > A transpiler to convert TypeScript to JavaScript.
    > An IDE to write code, Prefer Visual Studio code.
    > Any Browser, Prefer Google Chrome.


================================================================================================================

II] Installation For Angular

================================================================================================================

1. Installing NodeJS: (https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)
        $ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
        $ sudo apt-get install -y nodejs
	$ sudo apt-get install -y build-essential

2. Install / Updating npm: (node package manager)
        $ sudo npm install -g npm

3. Install Angular CLI(Command Line Interface)
        $ sudo npm install -g @angular/cli

4. To Update CLI
        $ sudo npm uninstall -g @angular/cli
        $ sudo npm cache verify
        $ sudo npm install -g @angular/cli@next
 

================================================================================================================

III] Steps to create Angular Project

=================================================================================================================

Step 1: Open command prompt.
Step 2: Select specific Location For Project Folder ( Angular/Project)
Step 3: Create new Project by this Command as                                   ng new MarvellousDemo
Step 4: Go to the Project Folder as                                             cd MarvellousDemo
Step 5: Now start developmental server as                                       ng serve
Step 6: Now we can check our application using browser                          http://localhost:4200
