# 📍 Bangalore Pincode Explorer

A premium, full-stack web application to explore postal codes and area details in Bangalore (Bengaluru), India. Built with speed, aesthetics, and user experience in mind.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/frontend-React.js-61DAFB?logo=react)
![Node](https://img.shields.io/badge/backend-Node.js-339933?logo=node.js)
![Tailwind](https://img.shields.io/badge/styling-Tailwind_CSS-38B2AC?logo=tailwind-css)

---

## ✨ Features

- **🔍 Dual-Search Capability**: Search by Pincode or by Area Name.
- **🌓 Dark/Light Mode**: Premium visual experience with system-aware dark mode.
- **📊 Real-time Data**: Proxied requests to India Post API for up-to-date information.
- **🕒 Search History**: Your last 5 searches are stored locally for quick access.
- **⭐ Favorites**: Bookmark your most-used locations.
- **📱 Fully Responsive**: Optimized for Mobile, Tablet, and Desktop.
- **⚡ Performance**: Built with Vite and glassmorphism design for a snappy feel.
- **📋 Copy to Clipboard**: One-click pincode copying.
- **💀 Skeleton Loading**: Smooth UI transitions using skeleton placeholders.

---

## 🛠️ Tech Stack

### Frontend
- **React.js** (Vite)
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animations)
- **React Icons** (Iconography)
- **Axios** (API Client)

### Backend
- **Node.js** (Runtime)
- **Express.js** (Framework)
- **CORS** (Cross-Origin Resource Sharing)
- **Axios** (Proxy Service)

---

## 📂 Project Structure

```text
banglore-pin-code-explorer/
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/     # UI Components
│   │   ├── services/       # API services
│   │   ├── hooks/          # Custom React hooks
│   │   └── App.jsx         # Main Application logic
│   └── tailwind.config.js  # Design Tokens
└── server/                 # Backend (Node + Express)
    ├── routes/             # API Endpoints
    ├── controllers/        # Logic handlers
    ├── services/           # External API integration
    └── index.js            # Server entry point
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/your-username/bangalore-pincode-explorer.git
cd bangalore-pincode-explorer
```

### 2. Setup Backend
```bash
cd server
npm install
npm run dev
```
*The server will run on `http://localhost:5000`.*

### 3. Setup Frontend
```bash
cd ../client
npm install
npm run dev
```
*The app will run on `http://localhost:5173`.*

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/pincode/:pin` | Fetch details for a specific 6-digit pincode |
| `GET` | `/api/area/:name` | Search for pincodes by area/locality name |

---

## 🌍 Deployment

### Frontend (Vercel)
1. Push `client/` to GitHub.
2. Connect Vercel to your repository.
3. Set the build command: `npm run build`.
4. Set the output directory: `dist`.

### Backend (Render)
1. Push `server/` to GitHub.
2. Create a new "Web Service" on Render.
3. Set the start command: `npm start`.
4. Add environment variables (e.g., `PORT=5000`).

---

## 📝 Future Improvements
- [ ] Integration with Google Maps for visual location pinpointing.
- [ ] Advanced filtering (by District/Taluk).
- [ ] Multi-language support (Kannada/Hindi).
- [ ] Progressive Web App (PWA) support.

---

## 👤 Author
**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your Profile](https://linkedin.com/in/your-profile)

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
