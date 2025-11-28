# Dr. Nibhay Nursing Home 🏥

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

A modern, comprehensive healthcare website for **Dr. Nibhay Nursing Home**, featuring a responsive landing page and an interactive multi-step appointment booking system.

## ✨ Features

- **🏥 Modern Landing Page:**
  - Specialized sections for Services, Doctors, Testimonials, and Emergency Care.
  - Smooth scroll navigation and responsive mobile menu.
  - Visually appealing Hero section with animations.

- **📅 Smart Booking System:**
  - **3-Step Wizard:** Service Selection → Date & Time → Patient Details.
  - **Dynamic Scheduling:** Visual calendar with "Next 7 Days" quick select.
  - **Time Slot Management:** Morning, Afternoon, and Evening filtering.
  - **Confirmation:** Printable booking summary with "Add to Calendar" simulation.

- **📱 Fully Responsive:** Optimized for all devices (Mobile, Tablet, Desktop).
- **🎨 UI/UX:** Built with **Tailwind CSS** for styling and **Framer Motion** for smooth transitions.

## 🛠️ Tech Stack

- **Frontend Framework:** [React](https://react.dev/) (v18+)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

## 🚀 Getting Started

Follow these steps to run the project locally:

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/dr-nibhay-nursing-home.git
   cd dr-nibhay-nursing-home
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit `http://localhost:3000` to view the application.

## 📂 Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Navbar.jsx     # Responsive navigation
│   ├── Hero.jsx       # Landing page banner
│   ├── Doctors.jsx    # Doctor profiles
│   └── ...
├── pages/             # Page views
│   ├── Home.jsx             # Main landing page
│   └── BookAppointment.jsx  # Full booking wizard logic
├── App.jsx            # Main entry point with Routing
└── main.jsx           # React DOM rendering
```

## 📄 License

This project is licensed under the MIT License.

---
*Designed and developed for Dr. Nibhay Nursing Home.*