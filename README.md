# CoinVerse - Currency Converter

A modern, responsive currency converter built with React and Vite. This application provides real-time currency conversion rates with a clean and intuitive user interface.

![App demo](./public/screenshots/currency.png)

## Features

- 💱 Real-time currency conversion across multiple currencies
- 🔄 Quick currency swap functionality
- 🎨 Modern UI with Tailwind CSS and glassmorphism effects
- 📱 Fully responsive design
- 🌍 Support for 150+ currencies
- ⚡ Fast development with Vite
- 🎯 Custom React hooks for clean API integration

## Tech Stack

- **React** - Frontend library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **ESLint** - Code linting
- **Currency API** - Real-time exchange rates from [@fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api)

## Project Structure
```
02CurrencyConverter/
├── src/
│   ├── components/
│   │   ├── InputBox.jsx
│   │   └── index.js
│   ├── hooks/
│   │   └── useCurrencyInfo.js
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Key Components

### 1. App Component (`App.jsx`)
- Main component managing application state
- Handles currency conversion logic and calculations
- Implements bidirectional currency swap functionality
- Manages amount input and currency selection states

### 2. Custom Hook (`useCurrencyInfo.js`)
- Fetches real-time currency data from CDN API
- Automatically refetches when source currency changes
- Handles API errors gracefully with error logging
- Returns normalized currency conversion rates object

### 3. InputBox Component (`InputBox.jsx`)
- Reusable controlled input component
- Supports amount input with number validation
- Dynamic currency dropdown with all available options
- Configurable disabled states for amount and currency fields
- Uses React's `useId` hook for accessibility

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ashishgupta2707/CoinVerse.git
cd CoinVerse
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Usage

1. **Enter Amount**: Input the amount you want to convert in the "From" field
2. **Select Source Currency**: Choose the source currency from the dropdown (default: USD)
3. **Select Target Currency**: Choose the target currency from the dropdown (default: INR)
4. **Convert**: Click the "Convert" button to see the converted amount
5. **Swap Currencies**: Click the "Swap" button to quickly exchange source and target currencies

## API Reference

This project uses the [@fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api) for fetching real-time currency conversion rates.

**Endpoint:**
```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json
```

**Response Example:**
```json
{
  "date": "2024-01-15",
  "usd": {
    "inr": 83.12,
    "eur": 0.92,
    "gbp": 0.79
  }
}
```

## Key Features Explained

### State Management
- Utilizes React hooks (`useState`, `useEffect`) for efficient state management
- Centralized state in the main App component
- Controlled components pattern for form inputs

### Custom Hook Pattern
- Demonstrates advanced React patterns with `useCurrencyInfo` custom hook
- Separates API logic from UI components
- Reusable and testable code architecture
- Automatic dependency tracking with `useEffect`

### Responsive Design
- Mobile-first approach using Tailwind CSS utilities
- Flexbox layouts for proper alignment
- Backdrop blur and glassmorphism effects for modern aesthetic
- Beautiful background image integration

## Vite Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Building for Production
```bash
npm run build
```

The optimized build artifacts will be stored in the `dist/` directory, ready for deployment.

## Deployment

This project can be deployed to various platforms:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Use `gh-pages` package
- **Railway/Render**: Connect your repository

## Future Enhancements

- [ ] Add currency conversion history with local storage
- [ ] Implement favorite currencies feature
- [ ] Display currency flags and full names
- [ ] Dark mode toggle
- [ ] Historical exchange rate charts
- [ ] Offline support with service workers
- [ ] Multi-step conversions (USD → EUR → GBP)
- [ ] TypeScript migration
- [ ] Unit tests with Vitest
- [ ] E2E tests with Playwright

## Expanding the ESLint Configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io).

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please run `npm run lint` before opening a PR to ensure code quality.

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Currency data from [@fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api)
- Background image from [Pexels](https://www.pexels.com/)

<!-- ## Contact

For any questions or suggestions, please reach out:
- GitHub: [@Ashishgupta2707](https://github.com/Ashishgupta2707)
- Email: your.email@example.com

--- -->

**Note**: This project demonstrates React fundamentals including custom hooks, component composition, API integration, and modern styling practices. Perfect for portfolio projects and learning React with Vite!

⭐ If you found this project helpful, please consider giving it a star on GitHub!