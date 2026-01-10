export const backendProjects = [
  // =============================== LinkSphere ===============================
  {
    name: "LinkSphere",
    image: "./projects/Linksphere.png",
    shortDescription:
      "Scalable social network backend with secure authentication, real-time chat, and advanced user interactions.",
    description:
      "LinkSphere is a production-ready backend system for a modern social networking platform, built with Node.js and MongoDB. It features JWT-based authentication with Two-Factor Authentication (2FA) and Google OAuth, real-time messaging using Socket.IO, media uploads via AWS S3, and a complete social graph system including friends, posts, comments, likes, and search. The project follows a clean, feature-based architecture with strong focus on security, scalability, and maintainability, and includes admin moderation tools and role-based access control.",
    links: {
      documentation:
        "https://documenter.getpostman.com/view/40056651/2sB3HqGdFW",
      github: "https://github.com/dev-mahmoud-zain/LinkSphere",
    },
  },

  // =============================== E-Commerce ===============================

  {
    name: "NestJS E-Commerce Backend",
    image: "./projects/E-Commerce.png",
    shortDescription:
      "Robust e-commerce backend API with authentication, payments, orders, and real-time features.",
    description:
      "A scalable and production-ready e-commerce backend built with NestJS and MongoDB. The system supports secure JWT-based authentication with role-based access control, full user and product management, cart and wishlist functionality, order processing, and coupon handling. It integrates Stripe for secure payments, Cloudinary for media uploads, Nodemailer for automated emails, and WebSockets for real-time updates. The project is structured with clean modular architecture, strong validation, and best practices for scalability and maintainability.",
    links: {
      documentation:
        "https://documenter.getpostman.com/view/40056651/2sB3WjzPTJ",
      github: "https://github.com/dev-mahmoud-zain/E-Commerce",
    },
  },

  // =============================== Jovio ===============================

  {
    name: "Jovio",
    image: "./projects/Jovio.png",
    shortDescription:
      "Modern recruitment platform backend with secure authentication, user profiles, and company-job workflows.",
    description:
      "Jovio is a scalable recruitment platform backend built with NestJS and MongoDB. It provides a secure authentication system using JWT with access and refresh tokens, OTP-based email verification, Google OAuth, and advanced session management. The platform supports comprehensive user profile management, secure password and email update workflows, media uploads via Cloudinary, and account freezing/restoration. It also includes company management and job posting workflows, built using clean repository-based architecture, event-driven services, centralized error handling, and scheduled cron jobs. The project is actively under development with a strong focus on security, scalability, and maintainability.",
    links: {
      documentation:
        "https://documenter.getpostman.com/view/40056651/2sBXVfiArC",
      github: "https://github.com/dev-mahmoud-zain/Jovio",
    },
  },
];

export const frontendProjects = [
  {
    name: "Bookmarker App",
    image: "./projects/Bookmarker.png",
    shortDescription:
      "Simple and efficient bookmark manager with CRUD operations and local storage support.",
    description:
      "Bookmarker App is a front-end JavaScript project developed during training at Route Training Center. The application allows users to save, manage, and organize website bookmarks using full CRUD operations. Bookmarks are persisted using the browser's localStorage, ensuring data is retained across sessions. The project includes URL validation using regular expressions to prevent invalid entries, and demonstrates solid understanding of DOM manipulation, event handling, and client-side data persistence using vanilla JavaScript with HTML, CSS, and Bootstrap.",
    links: {
      github: "https://github.com/dev-mahmoud-zain/Bookmarker",
      live: "https://adham-zain.github.io/Bookmarker",
    },
  },

  {
    name: "Game Reviews App",
    image: "./projects/GameReviews.png",
    shortDescription:
      "Dynamic web app that fetches and displays real-time game reviews using an external API.",
    description:
      "Game Reviews App is a front-end JavaScript project developed as a final assignment at Route Training Center before transitioning to React. The application consumes a public games API to fetch and display up-to-date game reviews dynamically. It demonstrates practical experience with asynchronous JavaScript, API integration using fetch, and handling JSON responses. Built with HTML, CSS, Bootstrap, and vanilla JavaScript, the project strengthened core concepts such as async programming, dynamic UI rendering, and working with external data sources in real-world scenarios.",
    links: {
      github: "https://github.com/dev-mahmoud-zain/Game-Reviews",
      live: "https://adham-zain.github.io/Game-Reviews/",
    },
  },

  {
  name: "E-Commerce App",
  image: "./projects/E-commerce-front.png",
  shortDescription:
    "Modern and responsive e-commerce front-end with smooth user interactions and cart management.",
  description:
    "E-Commerce App is a front-end web application that delivers a complete online shopping experience with a strong focus on performance and usability. Users can browse products, view details, add items to their cart, and manage orders through a clean and responsive interface optimized for different screen sizes. The project emphasizes smooth UI interactions, efficient state handling on the client side, and fast rendering. Built using modern front-end technologies, it reflects solid understanding of user experience principles and professional e-commerce interface design.",
  links: {
    github: "https://github.com/your-username/ecommerce-app",
    live: "https://e-commerce-16465.web.app/"
  },
}



];
