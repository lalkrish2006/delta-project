🌍 Delta - Hotel Listings Web App
Welcome to Delta, a full-stack web application where users can explore, add, and manage hotel listings with beautiful image integration and location-based details.

🔗 Live Demo
👉 https://delta-project-3k92.onrender.com/listings

📂 Project Structure
MAJORPROJECT/
│
├── routes/              # Express route files
│   └── user.js
│
├── utils/               # Custom utilities and error handlers
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── views/               # EJS Templates
│   ├── includes/        # Navbar, footer, flash messages
│   │   ├── flash.ejs
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   ├── layouts/
│   │   └── boilerplate.ejs
│   ├── listings/        # Pages for hotel listings
│   │   ├── edit.ejs
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   └── show.ejs
│   ├── users/           # Login/signup pages
│   │   ├── login.ejs
│   │   └── signup.ejs
│   └── error.ejs
│
├── .env                 # Environment variables
├── .gitignore
├── app.js               # Entry point for the Express server
├── cloudConfig.js       # Cloudinary configuration (if used for image uploads)
├── middleware.js        # Custom middleware functions
├── package.json
├── package-lock.json
└── schema.js            # Joi schemas for form validation


📸 Preview

![image](https://github.com/user-attachments/assets/3b157ffc-3ea5-4773-b457-b55f5798cfae)
![image](https://github.com/user-attachments/assets/001ada48-745a-4b51-9907-725c388996b4)
![image](https://github.com/user-attachments/assets/081ba82e-30a5-4ab2-b8f1-21ed7d2da9c0)


🛠 Tech Stack

| Frontend             | Backend             | Database          | Templating |
| -------------------- | ------------------- | ----------------- | ---------- |
| HTML, CSS, Bootstrap | Node.js, Express.js | MongoDB, Mongoose | EJS        |


✨ Features

🏨 Browse hotels with title, image, location & description
➕ Add new hotel listings
📝 Edit and delete listings (if logged in)
🔒 User authentication & session management
🌐 Responsive design using Bootstrap
☁️ Hosted on Render


👩‍💻 Author

Made with ❤️ by Lalith Krishna V M
Built with guidance from Apna College and special thanks to Shradha Didi 🙏



