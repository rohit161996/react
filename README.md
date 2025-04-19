# React
--------------------------------------------------------------------------

## Node Installation
1. Install the Node using .msi file
			or
2. Install using the following commands
## Download and install fnm:
-> winget install Schniz.fnm

## Download and install Node.js:
-> fnm install 22

## Verify the Node.js version:
-> node -v # Should print "v22.14.0".

## Verify npm version:
-> npm -v # Should print "10.9.2".

--------------------------------------------------------------------------

## Check the commands in the command prompt
### Install node to the system
1. Version of node - v22.14.0

-> Command to check the Node is installed or not
-> node -v

## Install npm to the system
2. Version of the npm - v10.9.2

-> Command to check the npm is installed or not
-> npm -v

## Installation version Image is added in the repo
1. Installation_Version.png

## Install the extensions in VS Code for React
- Search for react extensions and install

--------------------------------------------------------------------------

## To create basic project in React
1. Open the directory in the VS Code editor
2. Open the terminal and write the command
-> npm create vite@latest

- vite is used to create the structure of the project

-> cd project_name
-> npm install
-> npm run dev

3. Delete App.css
4. Remove the entire code from the index.css
5. In App.jsx remove the entire code write "rfce" for recommendation and press enter
   because we are adding the .jsx file.
6. In index.css remove the entire code and import the library as follows:
   @import "tailwindcss";

--------------------------------------------------------------------------
##Tailwind resources 
https://tailwindcss.com/


## Install Tailwind and use it in the code using
https://tailwindcss.com/docs/installation/using-vite


Tailwind is a CSS framework used to design the webpages easily by importing the code 
in the React code.

--------------------------------------------------------------------------

## Install Tailwind using npm
-> npm install tailwindcss @tailwindcss/vite



--------------------------------------------------------------------------
## Shortcuts in VS Code
1. Open the terminal
Ctrl + `

2. Make all the content in one window
Alt + Z

3. Open extensions in VS Code 
Ctrl + Shift + x

--------------------------------------------------------------------------

### props in React

- Atributes in HTML are called props, e.g. bg-color etc.

- Every property of the tag in tailwind will be given by the class.

- React is also called reuseable component based library.

### routing in React
- anchor tag is not used because it reloads the file.

- link is used in react beacuse it does not reload the files.

- React router dom rules:-
  - npm i react-router-dom 
    It installs the react-router-dom package into the project which gives the 
    user all the tools to handle routing in the Web Page.

  - Import the BrowserRouter in the main.jsx
    import { createRoot } from 'react-dom/client'

  - Create 2 folder in src/
	- src/Pages
	- src/Components
 * Note:
   1. There will be too many components so we will create the directory store components.
   2. Similarly there will be too many pages, so we will create the directory to store pages.
  
  - In App.jsx creates routes
  <Routes>
	<Route/>
	<Route/>
	<Route/>
	<Route/>
	<Route/>
	<Route/>
  </Routes>

### When to use Link and when to use NavLink
- In the Navigation Bar use NavLink and in the body part other than header and footer use Link.

- <Link> tag is similar to the <a> tag, "Link" is replaced by "a" and "href" is replaced by "to".

## When to use {} and when to use directly
- {} is used when we import from the library.

- When we import from the /src folders use name directly.

## To create basic project in React
1. Open the directory in the VS Code editor
2. Open the terminal and write the command
-> npm create vite@latest

- vite is used to create the structure of the project

-> cd project_name
-> npm install
-> npm run dev

3. Install the package for Routes and tailwind
npm install react-router-dom
npm install tailwindcss @tailwindcss/vite

- Note 
  - Package Installation can be checked in the package.json file.
  - In the directory structure the task will be performed in the src folder.

4. Delete src/App.css
5. Remove the entire code from the src/index.css
6. In src/App.jsx remove the entire code write "rfce" for recommendation and press enter
   because we are adding the .jsx file.
7. In src/index.css remove the entire code and import the library as follows:
   @import "tailwindcss";

   In vite.config.js add the following lines 
   import tailwindcss from '@tailwindcss/vite'

  plugins: [react(),
            tailwindcss(),
  ],

8. Import the BrowserRouter in the src/main.jsx
   import { createRoot } from 'react-dom/client'

9. Create 2 folder in src/
   - src/Pages
   - src/Components

10. Components are Navbar.jsx, Service.jsx file etc.
11. These will be added in the App.jsx file like <Navbar/> <Service/> after importing these components in the App.jsx.
12. In App.jsx add 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

13. 