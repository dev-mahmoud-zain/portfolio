export const backendProjects = [

  // =============================== Secure Access ===============================
  {
    name: "Secure Access",
    image: "./projects/Secure_Access.png",
    shortDescription:
      "A secure, enterprise-ready backend for event, attendee, and gate management — built for real-world deployment.",
    description:
      "Secure-Access is a production-ready backend platform built for secure event and attendee management. It provides multi-layer authentication, 2FA, event lifecycle control, bulk attendee imports, automated QR generation, and device-bound gate validation. Developed with TypeScript, NestJS, and MongoDB, the system follows clean architecture principles, offering high scalability, strong security practices, and real-world readiness for enterprise use and commercial deployment.",
    links: {
      documentation: "https://drive.google.com/file/d/1msFiNBmKM6udFCo2OuY_fOqIGqOrU9wh/view?usp=sharing",
    },
    status: "done",
  },

  // =============================== Police department case management system ===============================
  {
    name: "Police department management system",
    image: "./projects/Police-department.png",
    shortDescription:
      "Secure internal case management platform for police departments with defendant tracking, case workflows, and role-based access control.",
    description:
      "Secure and scalable backend system built with NestJS, TypeScript, and PostgreSQL for managing defendants, legal cases, movement records, and case status workflows inside police departments. The platform provides role-based access control to ensure secure multi-user operations across different departments and administrative roles. It includes advanced filtering, structured record retrieval, audit-oriented workflows, and relational database modeling optimized for operational reliability and long-term maintainability. The system follows modular architecture principles with clean service separation, DTO validation, secure authentication flows, and extensible API design, making it suitable for enterprise-grade internal government systems."
    ,
    links: {
      documentation:
        "",
      github: "",
    },
    status: "done",
  },

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