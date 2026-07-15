# 📰 News Hub - React + FastAPI

News Hub is a full-stack news application built using **React.js** and **FastAPI**.  
The application provides latest news articles with category filtering, search functionality, infinite scrolling, and a separate backend API.

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
- 📱 Responsive Design using Bootstrap
- ⚡ FastAPI Backend API
- 🖼️ Fallback Images for Missing News Images

---

## 🛠️ Technologies Used

### Frontend

- React.js
- React Router DOM
- Bootstrap
- React Infinite Scroll Component
- React Top Loading Bar

### Backend

- Python
- FastAPI
- Requests
- BeautifulSoup

---

## 📁 Project Structure

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
├── package.json
└── README.md
```

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/abdullahshabir31/News-Hub-React.git
```

Go to project folder:

```bash
cd News-Hub-React
```

---

# Frontend Setup (React)

Install dependencies:

```bash
npm install
```

Start React server:

```bash
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

# Backend Setup (FastAPI)

Open another terminal:

Go to backend folder:

```bash
cd newshub-backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate virtual environment:

Windows:

```bash
venv\Scripts\activate
```

Install required packages:

```bash
pip install -r requirements.txt
```

Start FastAPI server:

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

### Get News

```
GET /news
```

Parameters:

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

# 📸 Screenshots

Add your project screenshots here.

---

# 🔮 Future Improvements

- User Authentication
- Save Favorite Articles
- Dark Mode
- News Details Page
- Deploy Frontend and Backend
- Database Integration

---

# 👨‍💻 Author

**Abdullah Shabir**

GitHub:  
https://github.com/abdullahshabir31

LinkedIn:  
https://www.linkedin.com/in/abdullahshabir31

---

⭐ If you like this project, consider giving it a star!
