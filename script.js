// Reference items loosely matching the asset grid provided
const ITEM_POOL = [
    "🍞", "🥩", "🥖", "🍳", "🍪", // Food row items
    "📕", "📙", "📘", "🔮", // Magic / Skill Books row items
    "🤎", "💙", "💛", "💜", // Jewels / Hearts row items
    "🥕", "🍒", "🦴", "🪦"  // Harvest & Graveyard assets
];

// Global Game Architecture State
let gameState = {
    gold: 0,
    gems: 0,
    level: 1,
    clickPower: 1,
    idlePower: 0,
    upgradeClickCost: 10,
    upgradeIdleCost: 50,
    inventory: Array(16).fill(null) // 16 Grid Inventory slots
};

// Application Loop Initialization
document.addEventListener("DOMContentLoaded", () => {
    loadGame();
    renderInventory();
    updateUI();
    
    // Core Idle Reward Engine Loop (Dopamine stability interval)
    setInterval(() => {
        if (gameState.idlePower > 0) {
            gameState.gold += gameState.idlePower;
            updateUI();
        }
    }, 1000);

    // Persistent Local Storage Save Cycle
    setInterval(saveGame, 10000);

    // Active Engine Click Event
    document.getElementById("main-clicker").addEventListener("click", () => {
        gameState.gold += gameState.clickPower;
        
        // Dynamic Drop System (Gacha mechanism: 15% item drop chance on interactions)
        if (Math.random() < 0.15) { 
            addItemToInventory();
        }
        
        updateUI();
    });
});

// Interface Redraw Function
function updateUI() {
    document.getElementById("gold-count").innerText = Math.floor(gameState.gold);
    document.getElementById("gem-count").innerText = gameState.gems;
    document.getElementById("player-level").innerText = gameState.level;
    document.getElementById("btn-upgrade-click").innerText = `Cost: ${gameState.upgradeClickCost} 🪙`;
    document.getElementById("btn-upgrade-idle").innerText = `Cost: ${gameState.upgradeIdleCost} 🪙`;
}

// Graphic Inventory Pipeline
function renderInventory() {
    const grid = document.getElementById("inventory-grid");
    grid.innerHTML = "";

    gameState.inventory.forEach((item, index) => {
        const slot = document.createElement("div");
        slot.classList.add("inventory-slot");
        slot.innerText = item ? item : "";
        
        // Item Interaction Process (Liquidation mechanic)
        slot.addEventListener("click", () => {
            if (gameState.inventory[index]) {
                // Instantly trade active items for gem currency to clear slots
                gameState.gems += 5;
                gameState.inventory[index] = null;
                renderInventory();
                updateUI();
            }
        });
        
        grid.appendChild(slot);
    });
}

// Grid Allocation System
function addItemToInventory() {
    const emptyIndex = gameState.inventory.findIndex(slot => slot === null);
    if (emptyIndex !== -1) {
        const randomItem = ITEM_POOL[Math.floor(Math.random() * ITEM_POOL.length)];
        gameState.inventory[emptyIndex] = randomItem;
        renderInventory();
        
        // Progression Milestones
        if (Math.random() < 0.3) {
            gameState.level += 1;
        }
    }
}

// Progression Multiplier Handler
function buyUpgrade(type) {
    if (type === 'click' && gameState.gold >= gameState.upgradeClickCost) {
        gameState.gold -= gameState.upgradeClickCost;
        gameState.clickPower += 1;
        gameState.upgradeClickCost = Math.floor(gameState.upgradeClickCost * 1.5);
    } else if (type === 'idle' && gameState.gold >= gameState.upgradeIdleCost) {
        gameState.gold -= gameState.upgradeIdleCost;
        gameState.idlePower += 2;
        gameState.upgradeIdleCost = Math.floor(gameState.upgradeIdleCost * 1.6);
    }
    updateUI();
    saveGame();
}

// Storage State Engine
function saveGame() {
    localStorage.setItem("idle_rpg_save", JSON.stringify(gameState));
}

function loadGame() {
    const saved = localStorage.getItem("idle_rpg_save");
    if (saved) {
        gameState = JSON.parse(saved);
    }
}

function resetGame() {
    if (confirm("Are you sure you want to completely erase your progress?")) {
        localStorage.removeItem("idle_rpg_save");
        location.reload();
    }
}
