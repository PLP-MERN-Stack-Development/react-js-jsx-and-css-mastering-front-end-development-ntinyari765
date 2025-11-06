# React JS, JSX, and CSS - Front-end Development

This is a modern React application showcasing front-end development best practices using React, JSX, and CSS. Built with Vite for optimal development experience and performance.

## Project Overview

This project demonstrates:
- Modern React components and hooks
- Context API for state management
- Custom hooks for local storage
- Responsive layouts and styling
- API integration for posts
- Component-based architecture

## Project Structure

```
src/
├── api/
│   └── posts.js         # API integration for posts
├── components/
│   ├── Button.jsx      # Reusable button component
│   ├── Card.jsx        # Card component
│   ├── Footer.jsx      # Footer component
│   ├── Layout.jsx      # Main layout wrapper
│   └── Navbar.jsx      # Navigation component
├── context/
│   └── ThemeContext.jsx # Theme context
├── hooks/
│   └── useLocalStorage.js # Custom hook
└── pages/
    ├── Home.jsx        # Home page
    ├── Posts.jsx       # Posts page
    └── Tasks.jsx       # Tasks page
```

## Technologies Used

- React with JSX
- Vite for build tooling
- Modern JavaScript (ES6+)
- CSS for styling
- ESLint for code quality

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the local server address shown in the terminal

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features

- **Theme Context**: Global theme management using React Context
- **Local Storage Hook**: Custom hook for persistent data storage
- **Component Library**: Reusable components like Button and Card
- **Responsive Layout**: Consistent layout with Navbar and Footer
- **Posts Integration**: API integration for posts management
- **Task Management**: Dedicated tasks page with state management

## Best Practices

- Organized project structure
- Component reusability
- Custom hooks for logic abstraction
- Context-based state management
- ESLint for code quality
- Modern React patterns
