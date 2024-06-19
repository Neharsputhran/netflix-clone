Certainly! Here is the corrected README with the license section properly placed outside the folder structure section:

---

# Netflix Clone Web Application

Welcome to the Netflix Clone Web Application! This project is a clone of the popular streaming service, Netflix, and showcases various features such as browsing movies and TV shows, viewing details, and more. It is built using modern web technologies and is deployed on Vercel.

---
![Screenshot 2024-02-08 222002](https://github.com/Neharsputhran/netflix-clone/assets/109666034/f274ba5f-a7cf-4804-905b-7a3991ce56de)
---
## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [License](#license)

## Features
- User authentication (Sign up, Login, Logout)
- Browse movies and TV shows
- View details of movies and TV shows
- Responsive design for different devices

## Technologies Used
- **React**: Frontend library for building user interfaces
- **Redux**: State management
- **Firebase**: Backend services for authentication and database
- **Styled Components**: Styling for React components
- **Axios**: HTTP client for API requests
- **Vercel**: Deployment platform

## Setup Instructions
To set up the Netflix Clone Web Application on your local machine, follow these steps:

### Prerequisites
- Node.js and npm installed on your machine

### Clone the Repository
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   cd netflix-clone
   ```

### Install Dependencies
2. **Install Dependencies**:
   ```bash
   npm install
   ```

### Configure Environment Variables
3. **Configure Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```
     REACT_APP_API_KEY=your_tmdb_api_key
     REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
     ```

### Start the Application
4. **Start the Application**:
   ```bash
   npm start
   ```
   The application will start on `http://localhost:3000`.

## Usage
1. **Access the Application**:
   - Open your web browser and navigate to `http://localhost:3000`.

2. **User Registration and Login**:
   - Register a new user account or log in using existing credentials.

3. **Browse Movies and TV Shows**:
   - Browse the available movies and TV shows on the homepage.

4. **View Details**:
   - Click on any movie or TV show to view detailed information.

## Folder Structure
```
netflix-clone/
│
├── public/               # Public assets
├── src/                  # React application source code
│   ├── components/       # Reusable components
│   ├── features/         # Redux features (slices)
│   ├── pages/            # Application pages
│   ├── app/              # Redux store configuration
│   ├── services/         # API services
│   ├── styles/           # Styled components
│   ├── App.js            # Main App component
│   ├── index.js          # Entry point for the React application
│
└── README.md             # Readme file
```

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using the Netflix Clone Web Application! If you have any questions or need further assistance, please feel free to contact us.
