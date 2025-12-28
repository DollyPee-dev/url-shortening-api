# 🔗 URL Shortening Web App

A modern, responsive URL shortening application built with **React** and **Tailwind CSS**, powered by the **Bitly API**. The app allows users to shorten long URLs, copy them instantly, and view a persistent history of recently generated links.

---

## 🚀 Features

* 🔹 Shorten long URLs using the Bitly API
* 🔹 Copy shortened links to clipboard with one click
* 🔹 Persistent link history stored in `localStorage`
* 🔹 Displays only the **3 most recent links** for a clean UI
* 🔹 Fully responsive design (mobile, tablet, desktop)
* 🔹 Smooth UI interactions and clean layout
* 🔹 Mobile-friendly navigation with toggle menu

---

## 🛠️ Tech Stack

* **React (Vite)**
* **JavaScript (ES6+)**
* **Tailwind CSS**
* **HTML5 & CSS3**
* **Bitly REST API**
* **LocalStorage API**

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── ShortLinks.jsx
│   ├── SearchResults.jsx
│   ├── Card.jsx
│   └── Button.jsx
├── assets/
│   └── images/
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ How It Works

1. User enters a long URL
2. The app sends a request to the Bitly API
3. A shortened link is returned and displayed
4. The link is saved to `localStorage`
5. Only the **latest 3 links** are shown
6. Users can copy links instantly
7. History persists even after page refresh

---

## 🧠 Key Implementation Details

* **State management** handled with React hooks (`useState`, `useEffect`)
* **Responsive layouts** built using Tailwind utility classes
* **Mobile menu toggle** implemented with conditional rendering
* **Persistent data storage** using browser localStorage
* **API error handling** for better user feedback

---

## 📦 Installation & Setup

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/url-shortener.git
   ```

2. Navigate into the project

   ```bash
   cd url-shortener
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Run the development server

   ```bash
   npm run dev
   ```

---

## 🔐 Environment Variables

To use the Bitly API, replace the token in your fetch request with your own:


---

## 📱 Responsive Design

The app is optimized for:

* Mobile phones
* Tablets
* Desktop screens

Layouts adjust smoothly using Tailwind breakpoints.

---

## ✨ Future Improvements

* Authentication for saved links
* Click analytics per shortened URL
* Custom alias support
* Dark mode toggle

---

## 👤 Author

**Akele Ayokanmi Precious**
Frontend Developer
Specialized in React, Tailwind CSS, and modern UI development

---

## 📄 License

This project is open-source and available under the **MIT License**.

