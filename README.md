# Project Name
This is a project that uses Django as the backend framework and Next.js as the frontend framework. The project follows a separated architecture, where the backend and frontend are decoupled and can be developed and deployed independently.

## Getting Started

Prerequisites
- Python (version 3.8 or later)
- Node.js (version 14 or later)
  
## Installation
1.Clone the repository:
- git clone https://github.com/your-username/project-name.git

2.Install backend dependencies:
- cd backend
- python -m venv env
- source env/bin/activate (on Windows, use `env\Scripts\activate`)
- pip install -r requirements.txt

3.Install frontend dependencies:
- cd ../frontend
- npm install

## Running the Development Server
1.Start the backend server:
- cd ../backend
- source env/bin/activate (on Windows, use `env\Scripts\activate`)
- python manage.py runserver

2.Start the frontend development server:
- cd ../frontend
npm run dev

The backend server will be running at http://localhost:8000, and the frontend development server will be running at http://localhost:3000.
