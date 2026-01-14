export const backendProjects = [
  // =============================== LinkSphere ===============================
  {
    name: "LinkSphere",
    image: "./projects/Linksphere.png",
    shortDescription:
      "Backend for a modern social network with secure authentication, real-time chat, and rich social interactions.",
    description:
      "LinkSphere is a production-ready backend for a social networking platform, built with Node.js and MongoDB. It provides robust JWT-based authentication with optional Two-Factor Authentication (2FA) and Google OAuth login. Real-time messaging is powered by Socket.IO, and media uploads are securely handled via AWS S3. The system includes a full social graph with friends, posts, comments, likes, and advanced search capabilities. Designed following clean, feature-based architecture principles, the backend includes role-based access control, admin moderation tools, and strong security practices. Scalability and maintainability were central in the design, making it suitable for growing user bases.",
    links: {
      documentation:
        "https://documenter.getpostman.com/view/40056651/2sB3HqGdFW",
      github: "https://github.com/dev-mahmoud-zain/LinkSphere",
    },
    status: "done",

  },

  // =============================== Marketa ===============================
  {
    name: "Marketa",
    image: "./projects/E-Commerce.png",
    shortDescription:
      "Comprehensive e-commerce backend with authentication, product management, order processing, and secure payments.",
    description:
      "Marketa is a scalable e-commerce backend built with NestJS and MongoDB, designed for production. It implements secure JWT-based authentication with role-based access control, and full user and product management. Features include cart and wishlist functionality, order processing, coupon handling, and integration with Stripe for secure payment processing. Cloudinary is used for media uploads, Nodemailer for automated emails, and WebSockets provide real-time updates for users. The system follows a modular architecture, with strong validation and coding best practices, ensuring maintainability, high performance, and readiness for scaling as business grows.",
    links: {
      documentation:
        "https://documenter.getpostman.com/view/40056651/2sB3WjzPTJ",
      github: "https://github.com/dev-mahmoud-zain/E-Commerce",
    },
    status: "done",

  },

  // =============================== Jovio ===============================
  {
    name: "Jovio",
    image: "./projects/Jovio.png",
    shortDescription:
      "Backend for a recruitment platform with secure authentication, user profiles, and structured company-job workflows.",
    description:
      "Jovio is a modern backend system for recruitment platforms, built with NestJS and MongoDB. The platform provides secure authentication using JWT with access and refresh tokens, OTP-based email verification, and Google OAuth login. It features advanced session management and supports account freezing and restoration. Users have fully manageable profiles, with secure workflows for password and email updates, and media uploads through Cloudinary. Companies can manage their profiles and post jobs using structured workflows. The backend follows clean repository-based architecture, employs event-driven services, centralized error handling, and scheduled cron jobs, focusing on security, scalability, and maintainability for long-term production use.",
    links: {
      documentation:
        "https://documenter.getpostman.com/view/40056651/2sBXVfiArC",
      github: "https://github.com/dev-mahmoud-zain/Jovio",
    },
    status: "done",

  },

  // =============================== Travello ===============================
  {
    name: "Travello",
    image: "./projects/Travello.png",
    shortDescription:
      "All-in-one travel platform backend supporting tours, hotels, car bookings, secure payments, and cloud media management.",
    description:
      "Travello is a production-ready backend system built with TypeScript, Node.js, and MongoDB, developed as part of a Back-End Developer training program. The platform supports tour, hotel, and car bookings, with secure payment integration through Stripe. Cloudinary is used for efficient media and asset management. The system leverages MongoDB geospatial queries for location-based searches, and implements Zod validation to ensure robust data handling. Following clean architecture principles, Travello is designed for scalability, maintainability, and high security. The backend demonstrates strong coding practices, structured module separation, and readiness for real-world deployment.",
    links: {
      documentation:
        "https://documenter.getpostman.com/view/40056651/2sBXVhCASL",
      github: "https://github.com/dev-mahmoud-zain/Travel-System",
    },
    status: "done",

  }
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
    status: "done",
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
    status: "done",
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
    status: "done",
  }

];


export const fullstackProjects = [
  // =============================== Marketa  ===============================
  {
    name: "Marketa",
    image: "./projects/E-Commerce.png",
    shortDescription:
      "Fullstack e-commerce platform currently under development (Coming Soon).",
    description:
      "Marketa is being developed as a fullstack e-commerce platform, combining a robust NestJS & MongoDB backend with a modern frontend interface. The project will feature secure authentication, role-based access control, product & user management, cart and wishlist functionality, order processing, and integrated payment solutions. Frontend development is in progress, aiming to deliver a responsive, user-friendly, and interactive shopping experience. Stay tuned—this fullstack project will showcase end-to-end capabilities once complete.",
    links: {
      documentation: "https://documenter.getpostman.com/view/40056651/2sB3WjzPTJ",
      github: "https://github.com/dev-mahmoud-zain/Marketa",
    },
    status: "soon",
  }
];