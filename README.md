<h1>warbler-lite</h1>

<p>A simple and lightweight chat application intended to bring conversations that matter right into your fingertips. No more complex options to fiddle around. Just a down-to-earth chat app where sending and receiving messages on real-time is painless.</p>

#### [Live App](https://warbler-lite.vercel.app/)
#### [Repository](https://github.com/danveb/warbler-lite)

<h1>Initialize Vite Project</h1>

Clone repo

```sh
$ git clone git@github.com:danveb/warbler-lite.git
```

Head into client directory, where package.json/yarn.lock will be located

```sh
$ cd/warbler-lite/client
```

Install required dependencies/devDependencies (creates a node_modules directory)

```sh
$ yarn install
```

<h1>Google Firebase Configuration</h1>

<h3><em>Note: For this chat app to work you'll need to configure a new Google Firebase project. Make 100% sure to read the Firebase documentation prior to going forward. <a>https://firebase.google.com/docs</a></em></h3>

<h3>Requirements</h3>
<ul>
    <li>Firebase Authentication</li>
    <li>Firebase Storage</li>
    <li>Firestore Database</li>
</ul>

Create a new ```.env``` file in client directory to store all ```API Keys```.

```sh
$ touch .env 
```

Add required Firebase environment variables. You can follow the prefix ```VITE``` to start adding them. 

```js
VITE_FIRE_API_KEY=YOUR_KEY
VITE_FIRE_AUTH_DOMAIN=YOUR_KEY
VITE_FIRE_PROJECT_ID=YOUR_KEY
VITE_FIRE_STORAGE_BUCKET=YOUR_KEY
VITE_FIRE_MESSAGING_SENDER_ID=YOUR_KEY
VITE_FIRE_APP_ID=YOUR_KEY
VITE_FIRE_MEASUREMENT_ID=YOUR_KEY
```

Create a new ```firebase.ts``` config file to initialize Firebase in this application. Make sure when adding environment variables to use ```import.meta.env.VITE``` prefix to load them up correctly. 

```ts
// firebase v10
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// add firebase to webapp
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_API_KEY,
  authDomain: import.meta.env.VITE_FIRE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIRE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIRE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIRE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIRE_APP_ID,
  measurementId: import.meta.env.VITE_FIRE_MEASUREMENT_ID, 
}; 

// initialize app 
const app = initializeApp(firebaseConfig); 
// initialize firestore
const db = getFirestore(app); 
// initialize auth 
const auth = getAuth(app); 
// initialize firebase storage -- only for uploading img
const storage = getStorage(app); 

export { app, db, auth, storage }; 
```

Start development server

```sh
$ yarn dev
```

<h3>Test</h3>

Running Vitest v0.34.5 with React Testing Library

```sh
$ yarn add -D vitest jsdom @testing-library/react @testing-library/jest-dom @types/jest @types/node
```

<h3>File Tree</h3>

```
src/
├── components/
|    ├── ChatApp/
|       ├── ChatFriends.tsx
|       ├── ChatNav.tsx
|       ├── ChatPanel.tsx
|       ├── ChatSearch.tsx
|       ├── index.ts
|    ├── Conversation/
|       ├── ConversationPanel.tsx
|       ├── Message.tsx
|       ├── MessageInput.tsx
|       ├── Messages.tsx
|       ├── index.ts
|    ├── Navigation/
|       ├── Navbar.tsx
|       ├── NavbarSidebar.tsx
|       ├── index.ts
├── constants/
|    ├── links.ts
├── context/
|    ├── AuthContext.tsx
|    ├── ChatContext.tsx
├── pages/
|    ├── Home.tsx
|    ├── About.tsx
|    ├── Contact.tsx
|    ├── Login.tsx
|    ├── Register.tsx
|    ├── NotFound.tsx
|    └── index.ts
├── styles/
├── types/
|    ├── index.ts
├── utils/
|    ├── index.ts
├── App.tsx
├── firebase.ts

```

<h3>Technologies</h3>

```sh
React.js 
TypeScript
CSS
Google Firebase
Vercel
```