🌲 YelpCamp – Discover, Share & Review Campgrounds



YelpCamp is the final project of a full-stack web development course. It is a platform where users can explore, review, and share campgrounds. Users can create accounts, add new campgrounds, leave reviews, and manage content with a user-friendly interface.

🔗 Live Demo: https://yelp-camp-website-pu2a.onrender.com

📌 Project Highlights

Full-Stack Development: End-to-end implementation using Node.js, Express, MongoDB, and EJS.

Authentication & Security: Implemented secure user login, registration, and session management with Passport.js.

File Management: Integrated image uploads with Cloudinary & Multer for scalable storage.

Data Validation & Error Handling: Ensured reliable data with Joi validation and custom error handling.

UX & Feedback: Dynamic flash messages to improve user experience.

Team Project Skills: Learned project structuring, modular code design, and deployment workflows.

🚀 Features

User registration, login, and logout with secure sessions

CRUD operations for campgrounds

Cloudinary image uploads for campground images

Add and delete campground reviews

Flash messages for feedback on actions

Server-side input validation with Joi

Custom error handling and responsive UI

📸 Screenshots

<img width="1915" height="907" alt="image" src="https://github.com/user-attachments/assets/a7d3c8a1-3ba7-425b-96cb-25f61f47d02c" />

🛠 Installation & Running Locally

Clone the repository and install dependencies

git clone https://github.com/Frandalor/Yelp-Camp-Website
cd Yelp-Camp-Website
npm install


Set up environment variables

Create a .env file in the root directory:
```bash
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
```

(Optional) Seed the database with sample data
```bash
node seeds/index.js
```

Run the application
```bash
node app.js
```
🌐 Deployment

The project is hosted on Render, a cloud platform for Node.js applications.

🔗 Live Demo: https://yelp-camp-website-pu2a.onrender.com

Free Render plans may take a few seconds to wake up after inactivity.
