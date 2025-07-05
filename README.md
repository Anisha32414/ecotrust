# EcoTrust

**EcoTrust** is a website security checker that analyzes URLs for potential threats using pattern recognition, SSL certificate validation, and AI-powered feedback. Built with **React**, **Flask**, and **Google Generative AI**, it provides actionable insights and recommendations to help users stay safe online.

## Features

- Real-time SSL certificate inspection using Flask backend
- AI-generated security feedback powered by Google's Gemini
- Heuristic detection of phishing patterns and risky domains
- Risk score classification: Low, Medium, High
- Detailed threat report and security recommendations
- Modern UI built with Tailwind CSS, React, and Vite

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Lucide Icons
- **Backend**: Flask, Flask-CORS, Gunicorn
- **AI**: Google Generative AI (Gemini)
- **Hosting**: Render (Backend), GitHub Pages or Vercel (Frontend)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ecotrust.git
cd ecotrust
```
EcoTrust - Website Security Checker

EcoTrust is a URL threat analysis tool that checks website links for potential phishing, malicious patterns, SSL issues, and other security threats. It uses a React-based frontend and a Flask + AI-powered backend.

------------------------------------------------------------
Frontend Setup (React + Vite)
------------------------------------------------------------

1. Navigate to the frontend directory:
   cd frontend

2. Install frontend dependencies:
   npm install

3. Run the development server:
   npm run dev

   The app will start on: http://localhost:5173/

------------------------------------------------------------
Backend Setup (Flask + Google Generative AI)
------------------------------------------------------------

1. Navigate to the backend directory:
   cd backend

2. Install required Python packages:
   pip install -r requirements.txt

3. Run the Flask backend:
   python Democode.py

   OR use Gunicorn for production:
   gunicorn Democode:app

   The API will be available at: http://localhost:5000/api/check-ssl

------------------------------------------------------------
Hosting
------------------------------------------------------------

Backend can be deployed on Render:
   - Use "gunicorn Democode:app" as the start command

Frontend can be deployed on:
   - Vercel, Netlify, or GitHub Pages

------------------------------------------------------------
Project Structure
------------------------------------------------------------

/frontend        - React app (Vite)
/backend         - Flask API server (Democode.py)
/requirements.txt - Python dependencies for backend


