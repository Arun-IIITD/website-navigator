# Website Navigator (React)

A simple React application that allows users to browse multiple websites inside a single interface using an iframe navigator.

---

## Features

* Navigate between multiple URLs (Next / Prev)
* Displays website inside iframe
* Detects blocked websites (like Google, StackOverflow)
* Option to open blocked sites in a new tab
* Loading indicator for better UX
* Shows current website name dynamically

---

## Tech Stack

* React (Hooks: useState, useEffect)
* Node and express

---


## ⚙️ Installation & Setup

1. Clone the repository:

```
git clone https://github.com/Arun-IIITD/website-navigator
```

2. Navigate to project folder:

```
cd website-navigator
```

3. Install dependencies:

```
npm install 
```

4. Run the project:

```
npm run dev
```

---

## Usage
* Use **Next** and **Prev** buttons to navigate
* If a site is blocked, click **Open in New Tab**

---

## Limitations

* Some websites block iframe embedding (due to security headers like X-Frame-Options)
* These sites will show a blocked message

---

## Future Improvements

* Add website favicon
* Add search bar for custom URLs
* Save history of visited websites
* Dark mode UI

---

## LIVE LINK
https://website-navigator-gamma.vercel.app/