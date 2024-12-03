# Dynamic-Registration-Hub
A user-friendly, sleek, and dynamic registration form designed with modern web technologies. This project demonstrates the creation of an interactive UI with a focus on user experience, and a robust backend to handle form submissions seamlessly.

---

## ✨ Features

- 🌐 **Dynamic UI**: A visually appealing and responsive registration form.
- 🔐 **Secure Validation**: Implements basic form validations for clean and safe data submission.
- 🛠️ **Server Integration**: Uses Node.js and Express.js for backend operations.
- 📄 **Database Connectivity**: Stores user data securely in a MySQL database.
- 🌟 **Custom Styling**: Modern and clean CSS design inspired by professional registration forms.
- 🚀 **Real-Time Feedback**: Eye-catching interactive UI elements for enhanced user experience.

---

## 🏗️ **Project Structure**

```graphql
Dynamic-Registration-Hub/
├── views/                         # Contains EJS templates for rendering pages
│   ├── form.ejs                   # Registration form template
│   └── response.ejs               # Confirmation page template
├── public/                        # Public directory for static assets
│   ├── css/
│   │   └── style.css              # Styling for the registration form
│   ├── js/
│   │   └── validations.js         # Client-side form validations (optional)
│   └── images/                    # Placeholder for screenshots or other images
│       └── logo.png               # Project logo (if any)
├── schema.sql                     # Database schema for creating tables
├── app.js                         # Main server file for handling routes
├── package.json                   # Node.js project configuration
├── .gitignore                     # Files and folders to ignore in Git
└── README.md                      # Project documentation
```

---

## 💻 **Technologies Used**

```yaml
| **Frontend**         | **Backend**            | **Database**          |
|-----------------------|------------------------|-----------------------|
| HTML5, CSS3, EJS      | Node.js, Express.js    | MySQL                 |
```

---

## 🚀 **How to Run the Project**

### 1️⃣ Prerequisites
- Install **[Node.js](https://nodejs.org/)** (latest version)
- Install **[XAMPP](https://www.apachefriends.org/)** for MySQL and Apache server

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/Dynamic-Registration-Hub.git
cd Dynamic-Registration-Hub
```

### 3️⃣ Install Dependencies
```bash
npm install
```

### 4️⃣ Set Up the Database
* Open phpMyAdmin using XAMPP: http://localhost/phpmyadmin
* Create a database named: registration_hub
* Import the schema.sql file provided in the project (optional: create a users table with name, email, country, phone, and password fields).

### 5️⃣ Run the Server
```bash
node app.js
```
* Access the application in your browser: http://localhost:3000
---


## 📂 **Database Schema**
```sql
CREATE DATABASE registration_hub;

USE registration_hub;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    country VARCHAR(100),
    phone VARCHAR(15),
    password VARCHAR(100)
);
```

---

## 🎨 **Screenshots**
### Registraion Form:
<img src="registrationform.jpeg />
### Confirmation Response:
<img src="registrationform.jpeg />

---
## 🛠️ Customizing the Project



