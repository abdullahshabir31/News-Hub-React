# 📰 News Hub - React + FastAPI

A full-stack news application built using **React.js** and **FastAPI**.  
News Hub provides latest news articles with category filtering, search functionality, infinite scrolling, and a dedicated backend API.

🌐 **Live Demo:**  
https://news-hub-app-react.netlify.app/

⚡ **Backend API:**  
https://newshub-backend-yruk.onrender.com/

---

## 🚀 Features

- 📰 Latest News Headlines
- 🔍 Search News Articles
- 📂 Category Based News
  - Business
  - Entertainment
  - General
  - Health
  - Science
  - Sports
  - Technology
- ♾️ Infinite Scroll Pagination
- ⏳ Loading Progress Bar
- 📱 Fully Responsive Design
- ⚡ FastAPI Backend API
- 🖼️ Fallback Images for Missing News Images
- 🔗 REST API Integration
- 🌍 Frontend & Backend Deployment

---

# 🛠️ Technologies Used

## Frontend

- React.js
- React Router DOM
- Bootstrap
- React Infinite Scroll Component
- React Top Loading Bar
- JavaScript (ES6)

## Backend

- Python
- FastAPI
- Requests
- BeautifulSoup
- Uvicorn

---

# 📁 Project Structure

```
News-Hub-React
│
├── src
│   ├── components
│   │   ├── NavBar.js
│   │   ├── News.js
│   │   ├── NewsItem.js
│   │   └── Spinner.js
│   │
│   ├── App.js
│   └── index.js
│
├── newshub-backend
│   ├── main.py
│   └── requirements.txt
│
├── public
│
├── package.json
└── README.md
```

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/abdullahshabir31/News-Hub-React.git
```

Go to project directory:

```bash
cd News-Hub-React
```

---

# 💻 Frontend Setup (React)

Install dependencies:

```bash
npm install
```

Run React application:

```bash
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

# 🐍 Backend Setup (FastAPI)

Open another terminal:

Go to backend folder:

```bash
cd newshub-backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate environment:

Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run FastAPI server:

```bash
uvicorn main:app --reload
```

Backend will run on:

```
http://127.0.0.1:8000
```

API Documentation:

```
http://127.0.0.1:8000/docs
```

---

# 🔗 API Endpoint

## Get News Articles

```
GET /news
```

### Query Parameters:

```
country
category
page
pageSize
```

Example:

```
http://127.0.0.1:8000/news?country=us&category=technology&page=1&pageSize=10
```

---

# 🌍 Deployment

Frontend deployed on:

🔗 Netlify  
https://news-hub-app-react.netlify.app/

Backend deployed on:

🔗 Render  
https://newshub-backend-yruk.onrender.com/

---

# 📸 Screenshots

Add application screenshots here.

---

# 🔮 Future Improvements

- 🔐 User Authentication
- ❤️ Save Favorite Articles
- 🌙 Dark Mode
- 📄 News Details Page
- 🗄️ Database Integration
- 👤 User Profiles
- 📱 Better Mobile UI

---

# 👨‍💻 Author

## Abdullah Shabir

GitHub:  
https://github.com/abdullahshabir31

LinkedIn:  
https://www.linkedin.com/in/abdullahshabir31

---

⭐ If you like this project, consider giving it a star!
