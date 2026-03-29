# 🔐 Password Generator (React + Vite)

A simple and modern password generator built using React. This app allows users to generate secure passwords with customizable options like length, numbers, and special characters.

---

## 🚀 Features

* Generate random secure passwords
* Customize password length
* Include/exclude:

  * Numbers (0–9)
  * Special characters (!, @, #, etc.)
* Copy password to clipboard
* Clean and responsive UI

---

## 🛠️ Tech Stack

* **React** (Functional Components + Hooks)
* **Vite** (Fast build tool)
* **JavaScript (ES6+)**
* **Tailwind CSS** (for styling)

---

## 📂 Project Structure

```
password-generator/
│
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone <your-repo-url>
```

2. Navigate to the project folder:

```bash
cd password-generator
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

---

## 💡 How It Works

* The app uses `useState` to manage:

  * Password length
  * Inclusion of numbers and special characters
* `useCallback` is used to optimize the password generation function
* `useEffect` automatically regenerates the password when options change
* Clipboard API is used to copy the password

---

## 📸 Screenshots

<img width="959" height="322" alt="image" src="https://github.com/user-attachments/assets/252bd41f-ad18-454c-b347-d6a2ff3aaec1" />


---

## 🔮 Future Improvements

* Add strength indicator (Weak / Medium / Strong)
* Add toggle for uppercase/lowercase control
* Improve UI/UX with animations
* Add password history

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙌 Acknowledgements

* Built as a learning project for practicing React Hooks and UI design
* Inspired by real-world password generator tools

---

## ⭐ If you like this project

Give it a star ⭐ on GitHub and share it with others!
