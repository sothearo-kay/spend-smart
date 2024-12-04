# Next.js 15 Boilerplate

A feature-rich boilerplate built with the latest Next.js 15, designed to speed up your development workflow. This project is pre-configured with essential tools and libraries to provide a scalable, efficient, and modern development experience.

## Technologies Used

- **[Next.js 15](https://nextjs.org/)**: The React framework for building performant web applications with server-side rendering (SSR) and static site generation (SSG).
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for creating custom designs quickly.
- **[Framer Motion](https://www.framer.com/motion/)**: A library for creating animations and interactions for React components.
- **[NextAuth.js](https://next-auth.js.org/)**: A complete open-source authentication solution for Next.js applications.
- **[Drizzle ORM](https://github.com/drizzle-team/drizzle-orm)**: A lightweight TypeScript-first ORM for working with SQL databases like Neon Postgres.
- **[Neon Postgres](https://neon.tech/)**: A serverless PostgreSQL database for scalable and low-latency applications.
- **[Lucide React](https://lucide.dev/docs/lucide-react)**: A collection of beautifully crafted and customizable icons for React applications.

## Features

- **Modern UI/UX** with Tailwind CSS and animations powered by Framer Motion.
- **Authentication**: Pre-configured NextAuth.js with customizable providers.
- **Database Integration**: Connected to a Neon Postgres database via Drizzle ORM.
- **Iconography**: Leverage Lucide React for a rich set of icons.
- **Optimized for Performance**: Built with the latest Next.js optimizations for lightning-fast performance.
- **Scalable Architecture**: Well-structured project setup for ease of scaling and maintenance.

```plaintext
├── public/                # Static assets (images, fonts, etc.)
├── src/
│   ├── actions/           # Business logic, API calls
│   ├── app/               # Next.js App Router (pages, layouts, templates)
│   ├── auth/              # Authentication logic (next-auth)
│   ├── components/        # Reusable UI components
│   ├── db/                # Database logic (models, queries, migrations)
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # API logic, database interaction
│   ├── types/             # TypeScript types and interfaces
│   ├── middleware.ts      # Custom middlewares
├── .env.local             # Environment variables
├── drizzle.config.ts      # Drizzle ORM configuration
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
```

---

Happy coding! 🎉
