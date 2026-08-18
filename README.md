<p align="center">
  <img src="\assets\images\ui\ui_logo.png" alt="Great Wilderness Logo" width="500">
</p>

# Great Wilderness

**Great Wilderness** is an experimental **open-world, text-based survival RPG and life simulation** built with **Twine (SugarCube)**.

The game is centered around creating a character, living through their lifetime, exploring an unforgiving world, developing their abilities, making choices, and dealing with the consequences of those choices.

Rather than following a single predetermined storyline, **Great Wilderness** is designed around systems and player-driven experiences. Character traits, titles, stats, inventory, time, events, and eventually NPCs, skills, combat, and other world systems are intended to interact with one another to create unique experiences for each character.

A character's life is not necessarily permanent. **Aging and lifespan are part of the core design**, meaning that a character can eventually die, creating the possibility for multiple lives and long-term progression between characters.

<br>

## Project Goals

Great Wilderness is primarily a **personal programming and game-development project**.

The main goal is to experiment with and improve programming skills by designing and implementing increasingly complex and interconnected game systems.

The project places a strong emphasis on:

* Modular system design
* Data-driven architecture
* Reusable functions and systems
* Extensible game mechanics
* Maintainable code
* Experimentation with procedural and dynamic content
* Building systems that can interact with one another

Because the project is primarily intended as a learning and development project, features may change significantly as development progresses.

<br>

## Core Gameplay

The long-term gameplay direction includes:

* **Open-world exploration**
* **Character creation and development**
* **Survival and resource management**
* **Traits and titles**
* **Skills and professions**
* **Inventory and equipment**
* **Dynamic events and choices**
* **World time and aging**
* **NPC interactions**
* **Combat**
* **Resource gathering and crafting**
* **Character death and permadeath**
* **Persistent progression between characters**

The goal is to allow different characters to experience very different lives depending on their choices, abilities, circumstances, and interactions with the world.

<br>

## Design Philosophy

### **System-Driven Gameplay**

Great Wilderness is being designed around interconnected systems rather than relying entirely on scripted content.

For example:

```text
Character
   ↓
Traits / Titles / Stats
   ↓
Actions & Choices
   ↓
Events
   ↓
World Changes
   ↓
Future Events & Consequences
```

The intention is for systems to influence one another so that gameplay can emerge from the player's actions rather than always following a predetermined sequence.

### **Data-Driven Content**

Much of the game's content is represented as structured data rather than being directly hard-coded into individual passages.

This approach is currently being used for systems such as:

* Character data
* Traits
* Titles
* Items
* Events
* Scenes
* Choices
* Event conditions
* Event functions

This makes it easier to add or modify content without having to rewrite the underlying systems.

### **Modularity**

Systems are being developed as independently as possible so that they can be expanded, replaced, or reused without requiring major changes throughout the project.

The long-term goal is to make adding new content relatively straightforward:

```text
New Item
New Trait
New NPC
New Area
New Event
New Quest
New Mechanic
```

without requiring the entire game to be rewritten around it.

<br>

# Development Progress

## Implemented

### **Structured Player Character (PC) Data**

The PC data structure is partially complete and provides a centralized way of organizing character-related information such as:

* Attributes and statistics
* Traits
* Titles
* Inventory
* Character-related data

The structure is still being expanded as additional gameplay systems are developed.

### **Basic Inventory System**

The inventory system currently supports adding and removing items from the PC's inventory.

A basic inventory UI has also been implemented for displaying the player's current items.

### **Trait and Title System**

The trait and title system allows traits and titles to be added to and removed from the PC.

Traits and titles can also apply effects that modify the PC's statistics.

### **World Time, Natural Regeneration, and Aging**

A basic world-time system has been implemented.

As time passes:

* The PC ages
* Health naturally regenerates
* Stamina naturally regenerates
* The PC progresses toward the end of their lifespan

The system provides the foundation for a larger world simulation based around the passage of time.

### **Event System**

A data-driven event system has been implemented in which each event is represented as its own structured object.

The current event framework supports:

* Custom text parsing
* Multiple text tags
* Parameterized text tags
* Conditional choices
* Scene navigation
* Choice navigation
* Functions executed when entering a scene
* Functions executed when selecting a choice
* Structured event data
* Event-specific flags
* A dedicated event UI

**Event-specific data and flags are currently implemented at the framework level but still require more extensive testing.**

### **Area Navigation**

A basic area navigation system has been implemented for moving between locations.

The system also keeps track of navigation history, providing a foundation for more complex world and location mechanics.

### **Dynamic UI Rendering**

The UI can respond to changes in game data and update relevant elements dynamically.

This provides a foundation for displaying changing character statistics, inventory information, and other gameplay data without rebuilding the entire interface manually.

### **Main Menu UI**

The main menu has a developed UI with an animated shifting background and a structured interface.

### **Universal Feats Data**

A universal feats data structure has been prepared for progression that can persist between different characters.

This is intended to support the game's eventual multi-character/permadeath progression system, where certain achievements or unlocks can remain available after a character dies.

<br>

## In Progress

### **Character Creation System**

The character creation system is currently in the early stages of development.

The system is intended to handle the initial creation of a PC, including choices such as:

* Race
* Fate
* Traits
* Titles
* Starting characteristics
* Other character information

The underlying character data structures are already being developed alongside this system, but character creation itself is not yet complete.

### **Event System Testing**

The core event framework is functional, but additional testing is required for more advanced features, particularly:

* Event-specific data
* Event-specific flags
* Complex conditional events
* Interactions between event state and other game systems

<br>

# Planned Systems

The following systems are planned but are not yet fully implemented:

* **Skills**
* **Combat**
* **NPC generation and management**
* **World simulation**
* **Professions**
* **Equipment**
* **Resource gathering**
* **Crafting**
* **Shops**
* **Quests**
* **More advanced character progression**
* **Expanded world and area systems**
* **More complex event interactions**
* **Persistent progression between characters**

These systems may change or be redesigned as development continues.

<br>

# Technical Direction

Great Wilderness is built using:

* **Twine**
* **SugarCube**
* **JavaScript**
* **HTML**
* **CSS**

The project increasingly relies on JavaScript-based systems and structured data to keep gameplay logic separate from individual passages.

The long-term technical goal is to maintain a **modular and extensible architecture** where new content can be added through data definitions and reusable systems instead of duplicating large amounts of game logic.

<br>

# Current Development Stage

Great Wilderness is currently in an **early development / framework-building stage**.

The foundational systems are being developed before large amounts of gameplay content are created. As a result, the project currently contains more underlying systems and infrastructure than actual playable content.

The immediate development focus is on:

1. Completing the character creation system.
2. Testing and stabilizing the event system.
3. Connecting existing systems together.
4. Expanding the world and navigation systems.
5. Building the foundations for NPCs, skills, combat, and other gameplay systems.
6. Creating a small playable gameplay loop that demonstrates how the systems interact.

<br>

# Long-Term Vision

The long-term goal of Great Wilderness is to create a **system-driven open-world text RPG where a character's life can unfold differently from one playthrough to another**.

Instead of simply progressing through a fixed storyline, players should be able to create characters, make decisions, explore the world, develop their characters, encounter unexpected events, and eventually experience the consequences of the lives they created.

The project is also an opportunity to experiment with **game architecture, data-driven design, JavaScript programming, and large-scale interconnected systems**.

Ultimately, Great Wilderness is both a game and a programming experiment: a project for exploring how far a complex, modular RPG framework can be developed within Twine and SugarCube.
