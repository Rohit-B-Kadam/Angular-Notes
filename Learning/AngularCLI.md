# Angular CLI (Command Line Interface)

The Angular CLI is a command line interface tool that can create a project, add files, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.

[Check-out for all detail command](https://github.com/angular/angular-cli/wiki)

## Important Command

1. **New**

	- Create New Project

			$ ng new Project_Name

	- Create New Project supporting router

        	$ ng new Project_Name --routing

2. **Serve** - Easily test your app locally while developing.

	- Simple serve command

        	$ ng serve
        
	- Serve and open automatically

        	$ ng serve --open

3. **Generate** - Generate [x] =  component , service , pipe , directive , class , interface , module

	- Create a Component

        	$ ng generate [x] NameX

4. **Test, Lint, Format**
Make your code really shine. Run your unittests or your end-to-end tests with the breeze of a command. Execute the official Angular linter and run clang format.

5. __model__

		ng generate class foo --type=model