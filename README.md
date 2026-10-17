<p align="center">
  <img src="assets/images/ui/ui_logo.png" alt="Great Wilderness Logo" width="520">
</p>

<p align="center">
  <strong>An experimental open-world, text-based survival RPG and life simulation.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-InDev%200.26.0-gold?style=flat-square" alt="Version">
  <img src="https://img.shields.io/badge/Format-SugarCube%202.37.3-1f425f?style=flat-square" alt="SugarCube Version">
  <img src="https://img.shields.io/badge/Engine-Twine%202.11.1-blue?style=flat-square" alt="Twine Version">
  <img src="https://img.shields.io/badge/Architecture-Modular%20JS%20%2B%20CSS-success?style=flat-square" alt="Architecture">
</p>

---

## Overview

**The Realm of Great Wilderness** is an open-world, text-based survival RPG and life simulation built on Twine and SugarCube. 

Rather than walking players through a rigid, predetermined storyline, Great Wilderness is engineered around **emergent, interconnected systems**. Players forge an incarnated character, venture across an unforgiving landscape, cultivate stats and abilities, make consequential choices, and navigate an evolving world driven by time and aging.

A mortal life is transient: **aging and mortality are fundamental mechanics**. When a vessel meets its demise, legacy progression and achievements endure, paving the way for future reincarnations across generations.

---

## Key Features

- **Emergent World Simulation**: Dynamic time progression with natural bodily regeneration, seasonal shifts, aging, and eventual mortality.
- **Data-Driven Event Engine**: Branching multi-scene encounters supporting custom BBCode-style parsing, dynamic text effects, requirement gates, action hooks, and keyboard shortcuts (`Space` to reveal, `1`–`9` to select choices).
- **Deep Character Creation & Incarnation**: Choose ancestry, innate traits, karmic fate, gender, and customize physical manifestation with dynamic character portraits.
- **Modular Inventory & Economy**: Dynamic item handling, category management, equipment slots, and localized merchant shops.
- **Tactical Combat Framework**: Real-time / turn-based combat encounters linked directly to story choices and wilderness encounters.
- **Persistent Ancestral Feats**: Account-wide feat and score tracking persisting across character lifetimes and permadeath cycles.
- **Cinematic Atmospheric Interface**: Custom responsive interface featuring GPU-composited rolling fog banks, procedural ambient embers, responsive choice cards, and dark fantasy aesthetics.

---

## System Architecture & Design

Great Wilderness treats Twine passages primarily as presentation templates, delegating complex game logic, state machines, and data structures to a dedicated JavaScript layer.

```
       ┌────────────────────────────────────────────────────────┐
       │                 Player Character (PC)                  │
       │    Attributes  •  Traits  •  Titles  •  Lifespan       │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │                     World Clock                        │
       │       Time Passing  •  Regeneration  •  Aging          │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
       ┌────────────────────────────────────────────────────────┐
       │                  Data-Driven Events                    │
       │     Conditions  •  Branching Scenes  •  Consequences   │
       └───────────────────────────┬────────────────────────────┘
                                   │
                    ┌──────────────┴──────────────┐
                    ▼                             ▼
       ┌────────────────────────┐    ┌────────────────────────┐
       │   Combat / Encounter   │    │  World & Area Changes  │
       └────────────────────────┘    └────────────────────────┘
```

### Architectural Principles

1. **State & Logic Separation**: The SugarCube `State.variables.game` store houses reactive state, while system logic is isolated under global `setup.*` namespaces (`setup.event`, `setup.cardpop`, `setup.battle`, etc.).
2. **Data-Driven Definition**: Items, traits, titles, event scenes, and NPC templates are stored as structured objects rather than hardcoded logic blocks.
3. **Hardware-Accelerated UI**: Visual effects (such as the main menu mist layers and vignette) use CSS `translate3d` and canvas rendering to maintain smooth 60 FPS performance without CPU layout thrashing.

---

## Development Status (InDev 0.26.0)

| System | Status | Highlights / Implementation Details |
| :--- | :---: | :--- |
| **Event Framework** | `Stable` | Multi-scene flow, choice requirements, battle hooks, text parsing, keyboard navigation. |
| **Character Creation** | `Active` | Incarnation point allocation, fate/race cards, dynamic portrait selector, trait binding. |
| **Main Menu & Atmosphere** | `Stable` | Dynamic artwork selector, 3-layer seamless rolling fog, floating embers canvas, responsive UI. |
| **Inventory & Items** | `Functional` | Add/remove API, item definitions, stack tracking, container views. |
| **Traits & Titles** | `Functional` | Dynamic stat modifiers, title application, conditional passive bonuses. |
| **World Time & Aging** | `Functional` | Natural tick loop, HP/SP recovery, lifespan calculation, age increments. |
| **Area Navigation** | `Functional` | Location transitions, navigation history, exploration tracking. |
| **Combat Engine** | `In Progress` | Battle state setup, engagement hooks (`setup.battle.engage`), turn flow. |
| **NPC & World Simulation** | `Planned` | Procedural generation, relationship tracking, world factions. |
| **Crafting & Professions** | `Planned` | Gathering nodes, recipe synthesis, specialized trades. |

---

## Directory Structure

```text
Great Wilderness/
├── assets/
│   ├── fonts/                   # Typography (Alte Haas Grotesk, Roboto)
│   └── images/
│       ├── event/               # Encounter background scenes and vignettes
│       ├── fate/                # Character fate and destiny artwork
│       ├── pc/portrait/         # Player character portraits by race and gender
│       └── ui/                  # UI components, logos, and fog textures
├── css/
│   ├── character_creation.css   # Incarnation interface styling
│   ├── main_menu.css            # Main menu layout, fog animations, buttons
│   ├── navigation_menu.css      # In-game navigation overlays
│   └── text-formatting.css      # Typographic rhythm, scene narrative styling
├── dev/                         # Source module templates (logic references)
│   └── data templates/code/     # Event, battle, inventory, and area logic modules
├── index.html                   # Compiled Twine / SugarCube story release file
└── README.md                    # Project documentation
```

---

## Getting Started

### Playing the Game

No build tools or server environments are required to play:

1. Clone or download this repository:
   ```bash
   git clone https://github.com/Abenad1123/Great-Wilderness.git
   ```
2. Open [`index.html`](index.html) in any modern desktop or mobile web browser (Google Chrome, Firefox, Safari, Microsoft Edge).
3. Click **Start** to enter the character creation rite or load an existing chronicle via **Continue**.

### Development Workflow

- **Editing Story Passages**: Import `index.html` into [Twine 2](https://twinery.org/) (configured with the **SugarCube 2.37+** story format) or edit the passage data nodes directly.
- **Editing Stylesheets**: Stylesheets under `css/` are linked at runtime via `<link rel="stylesheet">`, allowing hot-reloads and rapid CSS iteration without recompiling the entire Twine package.
- **Synchronizing Logic**: Module templates under `dev/data templates/code/` serve as modular logic mirrors. Keep `Event--Logic` and `CreationContent--Logic` synchronized with their source scripts.

---

## Technology Stack

- **Story Engine**: [Twine 2.11+](https://twinery.org/)
- **Story Format**: [SugarCube 2.37.3](https://www.motoslave.net/sugarcube/2/)
- **Core Languages**: Modern JavaScript (ES6+), HTML5 Canvas, CSS3
- **Libraries & Utilities**: jQuery (SugarCube embedded), CSS hardware-accelerated animations

---

## Roadmap

- [x] Initial event narrative engine with keyboard-driven choice selection
- [x] Atmospheric Main Menu overhaul (rolling mist, glowing logo, ember particles)
- [x] Refined character incarnation & portrait selector (InDev 0.26)
- [ ] Complete combat loop integration for wilderness encounters
- [ ] Expand town and wilderness exploration nodes
- [ ] Implement merchant bargaining and specialized trade outposts
- [ ] Implement permadeath inheritance and reincarnation perk tree

---

## License & Credits

*Created by **Abenadi** as a personal game development and systems architecture project.*  
*All original code and gameplay design are proprietary to the project author.*  
*Story format powered by Thomas Michael Edwards' SugarCube engine.*
