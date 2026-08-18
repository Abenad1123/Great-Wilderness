<p align="center">
  <img src="\assets\images\ui\ui_logo.png" alt="Great Wilderness Logo" width="500">
</p>

# Great Wilderness

**Great Wilderness** is an open-world, text-based survival RPG built with **Twine (SugarCube)**.

Set in a vast and unforgiving wilderness, the game places players in a world where survival is earned through careful planning, exploration, and perseverance. Every journey presents new opportunities and dangers, encouraging players to adapt, learn, and carve their own path.

Rather than following a single predetermined story, Great Wilderness emphasizes player freedom. How you survive, the skills you develop, the professions you pursue, and the choices you make shape your experience in the wilderness.

<br>

## Core Gameplay

* Open-world exploration
* Survival-focused progression
* Character development through **Traits** and **Skills**
* Profession-based progression
* Resource gathering and crafting
* High-risk, high-reward gameplay

<br>

## Development

Great Wilderness is currently focused on building a robust and extensible gameplay framework rather than delivering a complete story-driven experience.

The project's development emphasizes modular systems that are designed to be easily expanded and maintained. Core mechanics such as character progression, inventory management, world interactions, events, and data-driven content are being developed with flexibility in mind.

Future development aims to provide support for:

* A modular content structure.
* Community-created mods and custom content.
* Easy addition of new items, locations, NPCs, quests, and mechanics.
* A scalable foundation for future storylines and world expansions.

The long-term vision is for Great Wilderness to serve not only as a game, but also as a flexible framework for creating rich text-based RPG experiences.

## Progress

### **Structured Player Character (PC) Data**

The Player Character's data structure is now partially complete. The system is designed to organize and manage the PC's attributes, stats, traits, titles, inventory, and other character-related data.

### **Basic Inventory System**

The inventory system allows items to be added to and removed from the PC's inventory. It also includes a basic inventory UI for viewing the player's current items.

### **Basic Trait and Title System**

The trait and title system allows traits and titles to be granted to or removed from the PC. Each trait and title can apply effects that modify the PC's stats.

### **World Time, Natural Regeneration, and Aging**

A basic world-time system has been implemented. As time passes, the PC ages and naturally regenerates health and stamina. The PC also has a lifespan, meaning they can eventually die of old age when their lifespan is exhausted.

### **Event System**

A data-driven event system has been implemented, where each event is stored as its own object. The system currently supports:

* Custom text parsing with multiple tags and parameters
* Conditional choices
* Functions that can be executed when navigating to a scene
* Functions that can be executed when selecting a choice
* Event-specific data and flags
* A structured event UI
* Scene and choice navigation

### **Character Creation System** [IN PROGRESS]

A basic character creation system is being developed to handle the player's initial character setup, including choices such as race, fate, traits, titles, and other starting characteristics.

### **Universal Feats Data**

A universal feats system has been prepared for use across multiple characters. This is intended to allow certain achievements, feats, or unlocks to persist when creating a new character, particularly in a system where characters can die and be recreated.

### **Main Menu UI**

The main menu now has a more developed UI, including a shifting animated background and a more structured layout.

### **Area Navigation**

The world navigation system includes area-to-area movement and keeps track of the player's navigation history. This provides a foundation for expanding the game's world and location systems.

### **Dynamic UI Rendering**

The UI can dynamically update when certain player data changes, allowing elements such as stats, inventory information, and other character-related information to be refreshed without manually rebuilding the entire interface.

### **Data-Driven and Modular Architecture**

The game's systems are increasingly built around structured data and reusable functions rather than hard-coded scenes. This makes systems such as events, traits, titles, items, and character data easier to expand and modify as development continues.
