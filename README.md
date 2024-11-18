# Project Name
Currency Exchange Portal
# Project Description
The Currency Exchange Portal is a web application that allows users to sign up, log in, exchange currencies, and request exchange 
services. This application supports user authentication via JWT tokens, performs live currency conversions,
and stores exchange requests in a MySQL database.

# Features
- User Authentication: Secure sign-up and login functionality using JWT for authentication.
- Currency Exchange: Convert currencies in real-time using live exchange rates.
- Exchange Request Management: Submit and store currency exchange requests in the database.
- User Dashboard: Access to exchange features after successful login.

# Technologies Used
- Backend: Node.js, Express
- Frontend: HTML, CSS, JavaScript
- Database: MySQL
- Authentication: JSON or Session-management
- API: Exchange rate API (e.g., ExchangeRate-API or any other service)

# Installation
- Clone the repository : git clone
- cd currency_exchange

# Setup
- install the dependencies and npm 
- install npm

# Session and Exchange properties
- SESSION_SECRET=1458965475
- EXCHANGE_API_URL=https://api.exchangerate-api.com/v4/latest/

# API Endpoints
- GET /signup : Get the signup page
- GET /login : Get the Login Page
- POST /signup : Create a new Account
- POST /login : Login into exicting account
- GET /dashboard : Get the dashboard page
- POST /exchange_request : For saving the data of exchange request in the database

