# 🃏 Card Manager App

A responsive React application that manages a dynamic list of cards using Firebase Firestore. Users can add and delete cards, with smooth animations powered by Framer Motion.

---

## 🌐 Live Demo

👉 [Click here to view the app](https://cardmanger.netlify.app/)

## ✨ Features

- 🔄 Realtime Firestore integration (CRUD)
- 💫 Animated UI transitions using Framer Motion
- ➕ Add new cards with a single click
- 🗑️ Delete cards with instant UI update
- 📱 Fully responsive for desktop, tablet, and mobile
- 📦 Clean, modular code structure

---

## 🔧 Tech Stack

- **Frontend**: React.js
- **Backend**: Firebase Firestore
- **Animation**: Framer Motion
- **Styling**: CSS Flexbox + Media Queries

---


## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Pon-Rahul/CardManager
cd card-manager

2. Install dependencies
npm install

3. Set Up Firebase
	•	Go to Firebase Console
	•	Create a project
	•	Enable Cloud Firestore
	•	Create a collection named cards
	•	Copy your Firebase config
	•	Replace the config inside src/config/firebase.js

// src/config/firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyDAZNLooBWCaK4NxH4tLzby29aeCcMDFQM",
  authDomain: "cardmanager-a3d68.firebaseapp.com",
  projectId: "cardmanager-a3d68",
  storageBucket: "cardmanager-a3d68.firebasestorage.app",
  messagingSenderId: "1038322433246",
  appId: "1:1038322433246:web:1b1cc2aefb5bcd8c8cd64f" };

4. Start the development server
npm start
App will run at: http://localhost:3000