# Food E-Commerce - ReactJs, Tailwind, Redux, Spring Boot, MYSQL, JWT, Stripe


## Description:

- Developed a food e-commerce website, implementing role-based access control for distinct admin and customer functionalities, resulting in streamlined operations and enhanced user experience.
- Customers can register/login, update credentials, filter the website's menu, add items to the cart, and checkout.
- All actions above are available to both roles; however, admin personnel have extra actions, such as adding, editing, and deleting menu items from a dashboard.
- MVC structured application with React/Redux as the front-end and incorporated a MYSQL container to create a Spring Boot Rest API in the back end.
- Secured the API to a specified origin and allowed unauthorized access to fetching products and retrieving credentials while requiring a JWT for all other crud operations.

## Installation

<pre>
cd food-ordering-platfrom
npm install 
npm run dev
</pre>

## Technologies Used:

- ReactJS
- Tailwind
- TypeScript
- Redux
- Spring Boot
- MYSQL
- JWT
- Stipe

## Top Features:
- Bcrypt password encryption/verification
- JWT authentication and authorization
- One Click Login/Register
- Menu Filtering by category
- Shopping cart where users can add food items to their shopping cart and complete purchase
- Admin dashboard so owners can log in and manage their menu items
- Dashboad sorting function for product properties 
- Mobile first web design

## Design:


Rest API: 
- Spring Boot:
  - Spring Security
  - Module-View-Controller project structure
  - JPA model ORM
  - Store user and product images in Firebase
  - User Authenication done through secure HTTP only JWT

### Database:

Tables:
- Users: stores username, password, email, img, role, provider
- Products: stores img, alt, title, detail, category, price, stock



  