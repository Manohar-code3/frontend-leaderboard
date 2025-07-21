# 🏆 Leaderboard Frontend

This is the ReactJS frontend for the dynamic Leaderboard app. It lets users:
- View a real-time leaderboard podium and full ranking table
- Add new users
- Claim random points for a user
- View point claim history

**Live App:** [YOUR FRONTEND URL HERE]

---

## 🚀 Features

- **Three-tier podium** for top 3 users with modern responsive UI
- **User management**: add/select user and claim points
- **Leaderboard table** updated in real-time
- **Claim history log**
- **Works perfectly with backend API**

---

## 📦 Getting Started

### 1. Clone This Repo

git clone https://github.com/YOUR_USERNAME/leaderboard-frontend.git
cd leaderboard-frontend

### 2. Install Dependencies

npm install


### 3. Configure API URL

Set the backend API in `src/api.js`:

export const api = axios.create({
baseURL: process.env.REACT_APP_API_URL || 'https://leaderbackend-22ds.onrender.com/api'
});

Or, create a `.env` file:

REACT_APP_API_URL=https://leaderbackend-22ds.onrender.com/api

### 4. Run Development Server

npm start

The app will run on [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Deployment

1. Build the app for production:
    ```
    npm run build
    ```
2. Deploy to [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or your host of choice.
3. Set `REACT_APP_API_URL` as an environment variable to point your frontend to your deployed backend.

---

## 📂 Project Structure

src/
components/
UserSelector.js
ClaimButton.js
Podium.js
LeaderboardList.js
ClaimHistory.js
Leaderboard.css
api.js


---

## 🔒 Environment Variables

Do **not** commit `.env` files or sensitive data. Always add `.env` to `.gitignore`.

---

## 📝 License

MIT – Use this project freely, but please give credit if you find it useful!

---

## 🤝 Contributing

Pull requests welcome! For major changes, open an issue first.

---

## 🧑‍💻 Author

[Manohar K] – [k3manohar@gmail.com]

