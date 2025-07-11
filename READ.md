# YelpCamp

YelpCamp is a full-stack web application where users can create, view, edit, and delete campgrounds. It includes user authentication, image uploads via Cloudinary, reviews, and more. This project was developed to practice modern web development skills using Node.js, Express, MongoDB, and other technologies.

⚠️ **This project is currently a work in progress**. Some features might be unfinished.

## 📂 Project Structure

├── cloudinary/ # Cloudinary config for image upload
├── controllers/ # Route logic for users, campgrounds, reviews
├── models/ # Mongoose models
├── public/ # Static files (CSS, JS, images)
├── routes/ # Route definitions
├── seeds/ # Database seed scripts (generate fake campgrounds)
├── utils/ # Custom Express error classes
├── views/ # EJS templates
├── .env # Environment variables (excluded from Git)
├── app.js # Main application file
├── middleware.js # Custom middleware
├── schemas.js # Joi validation schemas
├── package.json
└── README.md

## 🧰 Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- EJS with EJS-Mate for layouts
- Passport.js for authentication
- Joi for validation
- Cloudinary & Multer for image uploads
- Method-override, Connect-flash, Express-session

---

## 🚀 Features

- Register/Login/Logout
- Password hashing and session management
- Campground CRUD operations
- Cloudinary image upload and storage
- Flash messaging system
- Joi validation for user input
- Leave and delete reviews on campgrounds
- Dynamic error handling

---

📸 Image Uploads
Image uploads are handled via Cloudinary. Multer and multer-storage-cloudinary are used to connect the form submission to Cloudinary storage. You must configure your Cloudinary credentials in the .env file.

🔒 Authentication
Authentication is implemented using Passport.js with the passport-local and passport-local-mongoose strategies. The User model handles password hashing and salting.

📋 Validation
Input validation is handled with Joi on the server side for both campground and review creation. Error messages are caught and rendered using a custom ExpressError class.

## 🛠 Installation

### 1. Clone the Repository and install Dependencies

```bash
git clone https://github.com/Frandalor/Yelp-Camp-Website
cd Yelp-Camp-Website
nmp install
```

### 2. Set Up Environment Variables:

Create a .env file in the root with the following content:

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret

### 3. Seed the Database (Optional)

`node seeds/index.js`

### 4. Run the Application

`node app.js`
