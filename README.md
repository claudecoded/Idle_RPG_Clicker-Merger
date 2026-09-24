# 🧰 Dungeon Idle Clicker & Merger

<img width="1376" height="768" alt="image" src="https://github.com/user-attachments/assets/9fb9cf55-b370-4a58-97ea-67e9b1563763" />

An ultra-addictive, browser-based Idle RPG clicker game built using pure web technologies (**HTML5, CSS3, and JavaScript**). The visual reward mechanics and progression loops are inspired by classic pixel/vector RPG item sheets, focusing on high engagement, rapid dopamine loops, and automated scaling.

Live deployment and hosting handled entirely via **GitHub Pages**.

---

## 🎮 Features & Core Mechanics

* **Active Progression (The Clicker Core):** Click the central mysterious chest to instantly generate Gold Coins and trigger randomized gacha-style loot drops.
* **Passive Economy (The Idle Engine):** Purchase and scale auto-miners to consistently generate gold over time, even when not actively clicking.
* **Smart Grid Inventory:** Manage items dropped from chest openings. Sell redundant items instantly to accumulate rare **Gems**.
* **Auto-Save State Management:** Uses browser `localStorage` to automatically cache user statistics, item indexes, levels, and progress every 10 seconds. Keep your progress safe across page refreshes!
* **Clean Dark Mode UX:** Mobile-responsive interface styled with a modern, cyber-fantasy dark color palette.

---

## 🛠️ File Structure

The entire game runs seamlessly out of three lightweight, decoupled files located in the root directory:
* `index.html` - Architecture, dashboard layouts, layout containers, and viewport parameters.
* `styles.css` - Custom styling, color definitions, button scaling, animations, and typography.
* `script.js` - Global game engine loop, upgrade validation formulas, rendering systems, and persistency functions.

---

## 🚀 How to Run and Play

### Play it Live
Since this repository utilizes **GitHub Pages**, you can play the live production build instantly inside your browser! Just visit the deployment URL generated in your repository settings under the Pages tab.

### Local Development / Offline Play
If you want to tweak the game locally on your computer:
1. Clone this repository or download the files.
2. Ensure `index.html`, `styles.css`, and `script.js` are saved in the same directory.
3. Double-click `index.html` to instantly launch the game inside any modern desktop or mobile browser.

---

## 📈 Future Roadmap Ideas

* [ ] **Item Fusion (Merge Loop):** Combine matching item types directly in the grid to upgrade tiers (e.g., 🍞 + 🍞 = Tier 2 Food) and multiply passive yields.
* [ ] **Automated Combat / Mob Waves:** Utilize the Magic Books in your inventory to cast automated spells against dungeon boss stages.
* [ ] **Prestige System:** Sacrifice total levels and items for permanent ancient relics that speed up early-game progression.
