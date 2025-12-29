# 🎄 Product Catalog E-Commerce Application

A full-stack e-commerce product catalog application built with **Spring Boot** (backend) and **React + Vite** (frontend). This application allows users to browse products, filter by categories, search for items, and sort by price.

## 🚀 Features

### Backend (Spring Boot)
- **RESTful API** with Spring Boot 4.0.1
- **JPA/Hibernate** for database management
- **MySQL** database integration
- CRUD operations for products and categories
- Automatic data seeding on application startup
- Cross-Origin Resource Sharing (CORS) enabled for frontend integration

### Frontend (React + Vite)
- Modern **React 19.2** with hooks
- **Vite** for fast development and building
- **Bootstrap 5.3** and **React Bootstrap** for responsive UI
- Real-time product filtering and search
- Category-based filtering
- Price sorting (ascending/descending)
- Festive-themed UI with Christmas decorations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Java 21** or higher
- **Maven 3.6+**
- **Node.js 16+** and **npm**
- **MySQL 8.0+**

## 🛠️ Technology Stack

### Backend
- Spring Boot 4.0.1
- Spring Data JPA
- Spring Web MVC
- MySQL Connector
- Java 21

### Frontend
- React 19.2
- Vite 7.2.4
- React Bootstrap 2.10.10
- Bootstrap 5.3.8
- ESLint

## 📦 Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd productcatalog
```

### 2. Database Setup
Create a MySQL database:
```sql
CREATE DATABASE `product-catalog`;
```

Update the database credentials in `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/product-catalog
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### 3. Backend Setup
Navigate to the project root and run:
```bash
# Build the project
mvn clean install

# Run the Spring Boot application
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

### 4. Frontend Setup
Navigate to the React application directory:
```bash
cd ecom-catalog-react

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will start on `http://localhost:5173`

## 🎯 API Endpoints

### Categories
- `GET /api/categories` - Get all categories with their products

### Products
- `GET /api/products` - Get all products
- `GET /api/products/category/{categoryId}` - Get products by category ID

## 📁 Project Structure

```
productcatalog/
├── src/
│   ├── main/
│   │   ├── java/com/e_com/productcatalog/
│   │   │   ├── ProductcatalogApplication.java
│   │   │   ├── config/
│   │   │   │   └── DataSeeder.java          # Database seeding
│   │   │   ├── controller/
│   │   │   │   ├── CategoryController.java
│   │   │   │   └── ProductController.java
│   │   │   ├── model/
│   │   │   │   ├── Category.java
│   │   │   │   └── Product.java
│   │   │   ├── repository/
│   │   │   │   ├── CategoryRepository.java
│   │   │   │   └── ProductRepository.java
│   │   │   └── service/
│   │   │       ├── CategoryService.java
│   │   │       └── ProductService.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/
│       └── java/com/e_com/productcatalog/
├── ecom-catalog-react/
│   ├── src/
│   │   ├── App.jsx                         # Main application component
│   │   ├── ProductList.jsx                 # Product display component
│   │   ├── CategoryFilter.jsx              # Category filter component
│   │   └── main.jsx                        # Entry point
│   ├── package.json
│   └── vite.config.js
└── pom.xml
```

## 🎨 Features Walkthrough

### Product Browsing
- View all products in a responsive grid layout
- Each product card displays name, image, description, and price

### Category Filtering
- Filter products by category (Electronics, Clothing, Home and Kitchen, etc.)
- Real-time filtering without page reload

### Search Functionality
- Search products by name
- Case-insensitive search
- Instant results as you type

### Price Sorting
- Sort products by price (Low to High / High to Low)
- Combines with category filtering and search

## 🚀 Build for Production

### Backend
```bash
mvn clean package
java -jar target/productcatalog-0.0.1-SNAPSHOT.jar
```

### Frontend
```bash
cd ecom-catalog-react
npm run build
```

The production build will be in the `dist` folder.

## 🔧 Configuration

### CORS Configuration
The backend is configured to accept requests from `http://localhost:5173`. Update the `@CrossOrigin` annotation in controllers if deploying to a different origin.

### Database Configuration
All database settings are in `application.properties`:
- Hibernate DDL auto-update mode
- MySQL dialect configuration
- Connection pooling settings

## 🧪 Testing

Run backend tests:
```bash
mvn test
```

Run frontend linting:
```bash
cd ecom-catalog-react
npm run lint
```

## 📝 Data Seeding

The application automatically seeds the database with sample data on startup through the `DataSeeder` component. This includes:
- Sample categories (Electronics, Clothing, Home and Kitchen)
- Sample products with images from Unsplash

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ by Maddy

## 🎉 Acknowledgments

- Spring Boot framework
- React and Vite communities
- Bootstrap for UI components
- Unsplash for product images

---

**Happy Shopping! 🎄🎁**
