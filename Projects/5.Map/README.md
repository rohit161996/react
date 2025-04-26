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

7. vite-config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

8. Import the BrowserRouter in the src/main.jsx
   import { createRoot } from 'react-dom/client'

9. Create 2 folder in src/
   - src/Pages
   - src/Components

10. Components are Navbar.jsx, Service.jsx file etc.
11. These will be added in the App.jsx file like <Navbar/> <Service/> after 
    importing these components in the App.jsx.
    
12. In App.jsx add 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

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
