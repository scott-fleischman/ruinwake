Middle-earth Voxel Survival RPG — Product Specification v1

1. Document Purpose

This document defines a build-ready specification for a single-player voxel survival RPG set in a far-future version of Tolkien’s Middle-earth. It is written so that an AI coding agent or a small development team can implement a playable v1 in multiple disciplined passes without needing to invent the core design while building.

This is a true Lord of the Rings fan game concept. That means the project should be treated as a noncommercial fan prototype unless properly licensed. If commercial release is ever desired, the same mechanical structure can be reused with original names, lore, factions, creatures, and map regions.

⸻

2. High Concept

A first-person, block-based survival sandbox RPG set in a distant future of Middle-earth, where the player chooses a race and class, survives in a harsh but accessible world, explores ruined landmarks from The Hobbit region, restores a small number of broken settlements and ancient ward-sites, and uncovers a rising dark power awakened by the reactivation of lost Elven, Dwarven, and Númenórean technologies.

Reference feel:
	•	Minecraft for editable voxel terrain, gathering, crafting, and building
	•	Vintage Story for deeper survival texture, grounded materials, and world immersion
	•	Breath of the Wild / Tears of the Kingdom for open exploration with a main quest always present but never overbearing

⸻

3. Design Pillars

3.1 Editable World First

The player must be able to mine, place, and reshape the world almost anywhere, within sensible restrictions near protected landmarks and quest-critical structures.

3.2 Survival With Friction, Not Punishment

v1 should feel deeper than Minecraft but less punishing than Vintage Story. Survival matters, but the player should rarely feel soft-locked or crushed by complexity.

3.3 Ruins, Restoration, and Discovery

The world should feel ancient, broken, and meaningful. The player is not rebuilding all of Middle-earth, but is restoring selected settlements, roads, beacons, halls, and workshops that matter to the main quest and world progression.

3.4 Guided Freedom

The player always has a visible main quest thread, but can ignore it for long stretches to build, explore, gather, craft, hunt, or restore.

3.5 Race and Class Matter

Race and class must create real differences in playstyle, stats, faction reactions, crafting strengths, exploration advantages, and magical affinity.

3.6 Tolkien-Flavored Magic, Not Generic Spell Spam

Magic exists, but should feel like relic-use, runes, songs, blessings, ward-light, nature influence, healing, and old power—not endless projectile wizard combat.

⸻

4. Scope Boundary for Version 1

4.1 Launch Scope

v1 is a single-player only game with:
	•	one large handcrafted/procedurally detailed map
	•	four playable races
	•	three classes per race
	•	one main questline with 6–8 major chapters
	•	a limited but deep set of survival, crafting, combat, magic, restoration, and exploration systems
	•	3–5 restorable settlements/outposts
	•	6–10 major landmark regions
	•	first-person view with toggle to third-person

4.2 Explicitly Out of Scope for v1

Do not include these in v1:
	•	multiplayer or co-op
	•	PvP
	•	full political kingdom simulation
	•	fully dynamic NPC cities everywhere
	•	all of Middle-earth at full scale
	•	siege armies with hundreds of units
	•	complex nutrition micromanagement
	•	breeding genetics for crops or animals
	•	mount breeding systems
	•	shipbuilding or naval simulation
	•	fully procedural quest generation as a core dependency

⸻

5. Intended Player Experience

5.1 The First 15 Minutes

The player creates a new world, chooses tutorial on/off, chooses race and class, spawns with a map and minimal supplies, learns to gather branches, stones, fiber, and food, and makes a temporary shelter before night danger increases.

5.2 The First 1–3 Hours

The player:
	•	gathers wood, stone, plant fiber, and food
	•	crafts primitive tools and a camp
	•	survives the first night
	•	learns the map and fog-of-war system
	•	encounters the first corrupted or hostile zone
	•	reaches the first ruined settlement or watch-post
	•	activates the first ancient beacon/ward fragment
	•	unlocks the restoration loop and first persistent safe base

5.3 The Long-Term Experience

The player explores iconic regions from The Hobbit corridor, gains new tools and relic powers, restores ancient sites, improves faction standing, develops skills, uncovers lost lore and technology, and eventually pushes into the heart of the new darkness to stop the awakening from becoming another age of ruin.

⸻

6. Setting and Timeline

The game takes place in a far future age of Middle-earth, long after the main events of The Hobbit and The Lord of the Rings. The great stories are old history. Most ancient powers have faded. Only a few of the oldest Elves remain from earlier ages, and many once-great places are empty, broken, or inhabited by lesser remnants.

Ancient systems of warding, craft, and preservation created by Elves, Dwarves, and Númenórean descendants lie buried, dormant, or forgotten. When fragments of these systems begin to awaken, they also stir a dark counter-force that had long slept in the ruined places of the world.

Tone:
	•	ancient but explorable
	•	wistful, lonely, and beautiful
	•	dangerous but not nihilistic
	•	hopeful through restoration and stewardship

⸻

7. World Structure

7.1 World Model

The geography is fixed to Middle-earth locations used in this project. The terrain, resource nodes, foliage density, ruin states, dungeon details, weather patterns, and loot distribution are deterministic — every playthrough uses the same world.

In other words:
	•	the map is not random
	•	the world is not infinite
	•	the world is large and seamless
	•	the landmark geography is authored
	•	local detail is procedural but deterministic

7.2 Map Scope for v1

v1 covers a compressed but traversable region inspired by The Hobbit travel corridor:
	•	The Shire
	•	East Road / frontier routes
	•	Bree-lands or equivalent western travel junction area
	•	Trollshaws and Rivendell region
	•	Misty Mountains passes and delves
	•	western Anduin vale / Beorning region
	•	Mirkwood
	•	Long Lake / Lake-town outskirts
	•	Erebor foothills and approach
	•	Dol Guldur or another late-game corrupted stronghold tied to the main quest

This is a compressed Middle-earth for game purposes, not a lore-accurate walking-time simulation.

7.3 Major Zone Types

Each region should contain:
	•	wilderness traversal space
	•	harvestable resources unique to the biome
	•	at least one landmark or dungeon
	•	enemy/ecology identity
	•	one faction, ruin, or restoration hook

Example biome identities:
	•	Shire: gentle fields, farms, hedges, streams, safe-ish starter food resources
	•	Rivendell region: forests, cliffs, lore sites, relic fragments, skilled NPCs
	•	Misty Mountains: ore, cold, vertical traversal, goblins, delves
	•	Mirkwood: corruption, dense canopy, spiders, old ward ruins, poison and light mechanics
	•	Erebor approach: dwarven remnants, advanced smithing unlocks, late-mid-game materials

⸻

8. New Game Flow

8.1 New World Screen

The player selects:
	•	world name
	•	tutorial: on/off
	•	difficulty: Story / Standard / Harsh
	•	race
	•	class
	•	optional character name

8.2 Camera Mode

Default camera is first-person.
A key toggles:
	•	first-person
	•	third-person behind
	•	third-person front (optional if easy to support)

8.3 Starter Map

The player begins with a simple world map showing only major named landmarks and broad routes. Terrain detail is hidden by fog-of-war until explored.

Quest guidance appears as:
	•	map pings for main quest targets
	•	subtle world markers or beacon-light in the distance when appropriate
	•	optional compass indicator for active main quest only

⸻

9. Playable Races

9.1 Race Design Rules

Each race affects:
	•	base stats
	•	starting reputation modifiers
	•	movement traits
	•	crafting tendencies
	•	magical affinity
	•	corruption resistance
	•	architectural style preference for restoration and decorative bonuses

Races should be asymmetrical but viable.

9.2 Man

Theme: adaptable survivor, leader, generalist

Strengths
	•	balanced stats
	•	faster reputation gain with Men and frontier settlements
	•	flexible skill growth
	•	better recovery from exhaustion than Elf or Hobbit

Weaknesses
	•	no extreme specialization at start

Base tendencies
	•	medium health
	•	medium-high stamina
	•	medium corruption resistance
	•	medium magic affinity
	•	medium crafting bonuses

Style identity
	•	timber halls, road camps, ranger outposts, practical fortifications

9.3 Elf

Theme: precise, perceptive, graceful, attuned

Strengths
	•	high perception
	•	superior bow handling
	•	greater relic and nature affinity
	•	stronger stealth in wild terrain
	•	faster movement through forests

Weaknesses
	•	slightly lower raw carrying capacity and blunt-force durability than Dwarf or Man

Base tendencies
	•	medium health
	•	high focus/attunement
	•	medium stamina
	•	high magic affinity
	•	medium corruption resistance

Style identity
	•	elegant wood, stone, light, song-halls, preserved groves

9.4 Dwarf

Theme: endurance, craft, delving, stone mastery

Strengths
	•	highest mining efficiency
	•	best smithing and armor repair
	•	strongest resistance to corruption from artifacts and underground blight
	•	best underground navigation bonuses
	•	highest tool durability bonuses

Weaknesses
	•	slightly slower sprint speed
	•	lower nature affinity
	•	lower stealth in open terrain

Base tendencies
	•	high health
	•	medium stamina
	•	low-medium magic affinity
	•	high corruption resistance
	•	high crafting aptitude

Style identity
	•	stone halls, forges, vaults, arches, mechanical doors, carved supports

9.5 Hobbit

Theme: stealth, resilience of spirit, comfort, fieldcraft

Strengths
	•	highest stealth
	•	strong foraging and food efficiency
	•	excellent corruption resistance of the will
	•	smaller profile for detection
	•	superior cooking buffs and camp quality bonuses

Weaknesses
	•	lowest melee reach and raw weapon damage
	•	lower heavy armor efficiency

Base tendencies
	•	low-medium health
	•	medium stamina
	•	medium magic affinity
	•	high corruption resistance
	•	high comfort/rest bonuses

Style identity
	•	cozy earthworks, kitchens, low-beam interiors, gardens, hidden storage

⸻

10. Classes

10.1 Class Design Rules

Classes define:
	•	starting gear
	•	starting passive perk
	•	one starting active ability or technique
	•	early crafting knowledge
	•	suggested playstyle

Each race has three launch classes.

10.2 Man Classes

Ranger
	•	Starts with short bow, knife, bedroll, trail rations
	•	Passive: easier tracking of beasts and hostile footprints
	•	Active: Focused Shot or Trail Sense
	•	Bonuses: stealth, ranged combat, route survival

Soldier
	•	Starts with spear or sword, shield, heavier tunic/armor pieces
	•	Passive: improved block stability
	•	Active: Guard Stance or Shield Bash
	•	Bonuses: melee, defense, settlement defense missions

Scholar
	•	Starts with lore kit, knife, reading tools, relic fragment, simple lantern
	•	Passive: identifies ruins and relics faster
	•	Active: Sense Ward / Reveal Script
	•	Bonuses: relic use, lore translation, support crafting

10.3 Elf Classes

Archer
	•	Starts with refined bow, light blade, fletching supplies
	•	Passive: reduced bow sway
	•	Active: Quickdraw or Keen Eye
	•	Bonuses: ranged precision, scouting

Warden
	•	Starts with spear or longsword, cloak, ward-token
	•	Passive: stronger resistance near allied beacons
	•	Active: Light Ward or Counterstep
	•	Bonuses: hybrid melee and attunement

Gatherer
	•	Starts with gathering knife, herb pouch, sling or light bow
	•	Passive: better yield from plants and rare herbs
	•	Active: Nature Sense
	•	Bonuses: medicine, food, light crafting, nature-linked magic

10.4 Dwarf Classes

Miner
	•	Starts with pick, hammer, torch bundle, rope
	•	Passive: faster extraction of ore and stone
	•	Active: Delver’s Strike
	•	Bonuses: mining, tunnel work, ore discovery

Blacksmith
	•	Starts with hammer, tongs, repair kit, basic furnace plans
	•	Passive: gear wears slower
	•	Active: Field Repair
	•	Bonuses: weapons, armor, tools, metalworking

Delver
	•	Starts with short axe, lantern, climbing spikes, trap tools
	•	Passive: reduced underground detection and fall damage
	•	Active: Stone Sense
	•	Bonuses: ruins, dungeons, traps, relic chambers

10.5 Hobbit Classes

Burglar
	•	Starts with dagger, sling, lock tools, food pouch
	•	Passive: reduced enemy detection while crouched
	•	Active: Distract / Slip Away
	•	Bonuses: stealth, infiltration, caches, light combat

Cook
	•	Starts with pan, firestarter, provisions, herb pouch
	•	Passive: meals give longer buffs
	•	Active: Hearth Meal or Quick Brew
	•	Bonuses: camp quality, morale buffs, healing food

Forager
	•	Starts with walking stick, small blade, satchel, map notes
	•	Passive: improved berry, mushroom, and root yields
	•	Active: Find Water / Wild Sense
	•	Bonuses: traversal, gathering, early survival ease

⸻

11. Stats and Progression

11.1 Primary Stats

Use a small stat set to keep the system legible:
	•	Health: life total
	•	Stamina: sprinting, climbing, melee exertion, blocking
	•	Focus: relic use, healing, ward effects, perception abilities
	•	Corruption Resistance: resistance to blight zones, cursed relics, fear effects
	•	Perception: tracking, detection, hidden objects, lore markers
	•	Craft: efficiency in crafting and repair

11.2 Experience Sources

The player gains progression from:
	•	exploration discoveries
	•	quest completion
	•	restoring sites
	•	defeating major threats
	•	crafting milestones
	•	gathering rare materials
	•	lore discoveries

11.3 Skill Tree Structure

v1 uses six small skill trees, not one giant RPG tree:
	•	Survival
	•	Combat
	•	Craft
	•	Exploration
	•	Fellowship
	•	Attunement

Each tree has 8–12 nodes in v1. Race and class grant 1–3 starting unlocks.

Examples:
	•	Survival: better camp warmth, slower hunger drain, better bandages
	•	Combat: parry window, ranged stability, stronger heavy attacks
	•	Craft: better repair efficiency, higher material yield, advanced recipes
	•	Exploration: faster map reveal, safer climbing, better treasure detection
	•	Fellowship: better faction rewards, cheaper restoration costs, companion trust bonuses if companions are added later
	•	Attunement: stronger healing, reduced focus cost, better relic stabilization

11.4 Soft Caps

To preserve race identity, use soft caps rather than hard exclusions. Any race can improve any tree, but certain paths are more efficient for some races/classes.

⸻

12. Survival Systems

12.1 Survival Complexity Target

v1 should feel more grounded than Minecraft but intentionally less punishing than Vintage Story.

12.2 Included in v1
	•	hunger
	•	stamina drain and recovery
	•	rest/sleep quality
	•	day/night danger escalation
	•	temperature by biome and weather
	•	simple injuries: bleeding, poison, fracture-like movement penalty, corruption sickness
	•	food cooking and meal buffs
	•	tool durability
	•	shelter value

12.3 Excluded or Simplified in v1
	•	thirst
	•	body-part temperature simulation
	•	complex nutrition micromanagement
	•	crop genetics
	•	detailed spoilage simulation beyond simple freshness bands
	•	disease simulation

12.4 Shelter System

Temporary early shelter types:
	•	bedroll under cover
	•	lean-to
	•	thatch tent
	•	stone ring camp

Shelter quality affects:
	•	warmth
	•	sleep recovery
	•	corruption recovery rate
	•	risk of nighttime interruption

12.5 Food Model

Food categories:
	•	raw forage
	•	cooked basics
	•	meals
	•	preserved food
	•	restorative food

Meals can give temporary bonuses such as:
	•	stamina recovery
	•	cold resistance
	•	focus regeneration
	•	corruption resistance
	•	mining endurance

⸻

13. Crafting and Building

13.1 Core Building Loop

The player can:
	•	break blocks
	•	place blocks
	•	craft from gathered materials
	•	build shelters, camps, houses, walls, bridges, stairs, and repair structures

13.2 Material Tiers

Example launch tiers:
	•	gathered primitive: sticks, loose stone, fiber, hides, clay
	•	worked wood and stone
	•	copper/bronze/iron equivalent progression or lore-appropriate metallurgy tiers
	•	dwarven-crafted high tier
	•	relic-infused materials for endgame structures or ward devices

13.3 Crafting Stations

Launch stations include:
	•	campfire
	•	workbench
	•	chopping block
	•	kiln or primitive furnace
	•	forge
	•	loom or cloth station
	•	kitchen/hearth
	•	rune or relic worktable

13.4 Building Styles

Pure freeform building is allowed, but certain restoration and comfort bonuses are awarded when building with materials and forms aligned to regional/racial styles.

Examples:
	•	Elf-style structures gain beauty/light bonuses in groves
	•	Dwarf-style builds gain durability/temperature bonuses underground
	•	Hobbit-style interiors gain comfort and food bonuses
	•	Man-style outposts gain practical storage and defense bonuses

13.5 Restoration System

Only selected ruins are fully restorable in v1.

Restoration uses a hybrid system:
	•	anchor points define key required structures
	•	resource bundles repair major civic features
	•	freeform building allows player creativity within the settlement footprint

Restoring a site can unlock:
	•	safe beds
	•	storage
	•	merchants/crafters
	•	recipes
	•	beacon travel or fast-travel node
	•	stronger local patrols or reduced corruption nearby

⸻

14. Map, Navigation, and Discovery

14.1 Fog of War

The map begins partially known and gradually reveals as the player explores nearby terrain.

14.2 Visible From Start

The player’s initial map should show broad icons for major places, such as:
	•	Shire
	•	Rivendell
	•	Misty Mountains
	•	Mirkwood
	•	Erebor

The player knows these exist, but does not know all roads, caves, side ruins, and resources.

14.3 Quest Guidance

Guidance should be lighter than modern full-map icon spam.

Allowed guidance methods:
	•	one active main objective marker
	•	beacon-like distant visual cues
	•	NPC directions written in quest log
	•	map circles or broad regions instead of exact pinpoints for some objectives

14.4 Discoverables

The world should reward wandering with:
	•	hidden caches
	•	buried ruins
	•	relic fragments
	•	old roadstones
	•	recipe tablets
	•	songs, scripts, inscriptions, and lore books

⸻

15. Combat

15.1 Combat Feel

Combat in v1 is deliberate and readable, not twitchy spectacle combat.

15.2 Supported Weapon Types

Launch weapons:
	•	dagger
	•	short sword / sword
	•	spear
	•	axe
	•	hammer
	•	bow
	•	sling
	•	throwable utility items

15.3 Core Actions
	•	light attack
	•	heavy attack
	•	block
	•	parry or timed guard
	•	aim and fire
	•	crouch
	•	sprint
	•	jump/climb basics
	•	quick-use consumable
	•	active class/relic ability

15.4 Enemy Families in v1
	•	wolves and wild beasts
	•	goblins/orcs
	•	spiders, especially in Mirkwood
	•	trolls as rare heavy threats
	•	corrupted wights/shadows in ruined sites
	•	awakened guardians or dark-forged constructs tied to ancient technology

15.5 Night Danger Model

Night increases the risk of:
	•	roving enemy groups
	•	corruption seep
	•	fear effects in certain zones
	•	camp interruption if shelter quality is poor

The first night should feel dangerous but survivable.

⸻

16. Magic, Relics, and Attunement

16.1 Magic Philosophy

Magic in this game sits between subtle Tolkien flavor and game-legible abilities. It should feel ancient, costly, meaningful, and tied to artifacts, words, song, lineage, or places of power.

16.2 Player Magic Categories

v1 magic is primarily delivered through:
	•	relics
	•	runes
	•	ward stones
	•	healing arts
	•	nature influence
	•	light and protection effects

16.3 Example v1 Abilities
	•	Ward Light: create a light source that weakens corruption and some shadow creatures
	•	Heal Wound: remove a moderate injury or restore some health over time
	•	Sense Corruption: reveal blighted ground, cursed objects, or hidden paths
	•	Root Snare: briefly hinder an enemy in natural terrain
	•	Stone Ward: temporary protection bonus or structure reinforcement
	•	Rune Mend: improve repair or stabilize a relic device
	•	Calm Fear: reduce terror/corruption buildup

16.4 Costs and Limits

Magic uses Focus and should often require one or more of:
	•	an equipped relic
	•	a rune item
	•	a warded location
	•	cooldown
	•	specific materials or charges

No class should be an unrestricted fireball caster in v1.

16.5 Corruption Interaction

Magic and relic use near corrupted sites may be stronger, less stable, or risky. Improper use of awakened technology can accelerate corruption spread, trigger enemies, or weaken protective wards.

⸻

17. Main Questline

17.1 Quest Premise

Ancient Elven, Dwarven, and Númenórean technologies—long dormant and half-buried across the old lands—begin awakening. Their reactivation stirs a new dark power that rises through the broken strongholds and forgotten wards of the world, echoing the sudden catastrophe feel of the Calamity in Breath of the Wild.

The player’s role is not simply to fight monsters, but to understand what is waking, restore the right sites in the right order, prevent the old systems from being turned to darkness, and confront the reborn power at its source.

17.2 Main Quest Themes
	•	old power is not automatically good
	•	restoration must be wise, not blind
	•	knowledge and stewardship matter
	•	corruption spreads through neglected places
	•	ancient beauty can be renewed, but at cost

17.3 Main Quest Structure

Use 6–8 chapters in v1.

Chapter 1: Embers in the Wild
	•	survive first days
	•	reach first ruined outpost
	•	activate first ward fragment
	•	learn that ancient systems are reawakening

Chapter 2: Broken Roads
	•	restore a frontier route or small settlement
	•	meet first major lore NPC
	•	discover signs of spreading corruption

Chapter 3: The Hidden Records
	•	travel to Rivendell region or another lore center
	•	learn of the ward network and the buried technologies
	•	obtain first true relic tool

Chapter 4: Beneath the Mountains
	•	enter Misty Mountains delves
	•	retrieve or stabilize a dwarven mechanism
	•	fight underground corrupted threats or goblin factions

Chapter 5: The Dark Wood Stirs
	•	travel through Mirkwood
	•	deal with poison, spiders, and ward failures
	•	restore a forest beacon or sacred grove

Chapter 6: The Sleeping Forge
	•	reach dwarven or ancient craft center near Erebor approach
	•	unlock final crafting or relic stabilization tier
	•	learn the location of the awakening source

Chapter 7: The Rekindled Shadow
	•	assault the core corrupted stronghold, such as Dol Guldur or a related ruin
	•	disable its link to the ancient network
	•	face the new dark power’s champion or manifestation

Chapter 8: After the Night (short epilogue)
	•	restored world-state changes
	•	settled sites improve
	•	post-game exploration continues

17.4 Main Quest Design Rules
	•	the main quest must always be available
	•	the player can leave and return at almost any time
	•	quest progression should unlock mechanics naturally
	•	every chapter should send the player to a landmark region

⸻

18. Side Content

v1 side content should include:
	•	ruin-clearing tasks
	•	herb, ore, or relic hunts
	•	settlement restoration requests
	•	crafting commissions
	•	beast threat hunts
	•	hidden lore chains
	•	map fragment or song fragment collection

Avoid infinite procedural filler as the main side-content identity. Use authored content with light procedural dressing.

⸻

19. Factions and Reputation

19.1 Faction Purpose

Factions give social texture and reinforce race/class differences.

Possible v1 factions:
	•	frontier Men / road wardens
	•	Rivendell remnant lorekeepers
	•	dwarven hold remnants or craft enclaves
	•	woodland guardians / surviving elves
	•	Beorning-like wardens of the wild
	•	goblin/orc hostile factions

19.2 Reputation Effects

Reputation influences:
	•	prices
	•	recipes
	•	quests
	•	restoration help
	•	housing access
	•	safe passage
	•	rare gear

19.3 Race Interaction Examples
	•	Dwarves gain easier trust with dwarven crafters
	•	Hobbits gain friendlier starts in peaceful settlements
	•	Elves gain unique dialogue and lore access in ancient sites
	•	Men gain broader neutrality across mixed communities

⸻

20. Restorable Sites

v1 should include 3–5 major restorable locations.

Each restorable site needs:
	•	a story reason to matter
	•	visible before/after state
	•	resource requirements
	•	at least one unlocked utility
	•	reduced nearby danger or improved regional quality after restoration

Suggested launch sites:
	1.	Starter watch-post or ruined hamlet — unlocks first safe base
	2.	Roadside hall or ranger outpost — improves travel and trade
	3.	Mountain workshop or dwarven annex — unlocks high-tier smithing
	4.	Forest beacon/grove — stabilizes Mirkwood region and corruption resistance
	5.	Late-game ward bastion — tied directly to the final quest

⸻

21. NPCs and Story Delivery

21.1 NPC Style

NPCs should be used sparingly but meaningfully. The world should still feel spacious and partially empty.

21.2 Story Delivery Methods
	•	dialogue
	•	journals and inscriptions
	•	environmental storytelling
	•	relic visions or echoes
	•	songs or fragments of old records

21.3 Quest NPC Types
	•	lorekeeper
	•	craft master
	•	scout/ranger
	•	settlement elder or steward
	•	surviving ancient elf
	•	suspicious relic-seeker or antagonist agent

⸻

22. Audio-Visual Direction

22.1 Visual Style

The world should not aim for photorealism. It should use a stylized but atmospheric voxel presentation with:
	•	readable silhouettes
	•	strong biome mood
	•	attractive night lighting
	•	warm hearth light versus cold corruption glow
	•	distinct racial architectural motifs

22.2 Color and Light Language
	•	safe places: warm gold, hearth orange, soft green
	•	ancient preserved places: silver, blue-white, leaf-filtered light
	•	corruption: sickly green, shadow violet, ashen black, unsettling red accents

22.3 Music and Ambient Goals
	•	sparse, melancholic, beautiful exploration music
	•	stronger percussion or threat layers in caves and corruption zones
	•	faction/region motifs
	•	noticeable silence in ruins

⸻

23. Difficulty Modes

Story
	•	lighter survival penalties
	•	weaker night danger
	•	more forgiving combat
	•	tutorial strongly encouraged

Standard
	•	default intended experience
	•	meaningful hunger, fatigue, and corruption
	•	night danger matters
	•	combat readable but not trivial

Harsh
	•	faster hunger and fatigue drain
	•	more severe corruption zones
	•	stronger weather impact
	•	reduced recovery and scarcer resources

⸻

24. Technical Implementation Guidance

24.1 Recommended Technology Stack

Preferred prototype engine: Godot 4.x

Reasoning:
	•	approachable for AI-assisted development
	•	faster iteration for single-player gameplay
	•	manageable project structure
	•	good support for first-person and third-person cameras, UI, quests, saves, and world interaction

24.2 Architecture Principles

Build the game in modular systems:
	•	world/chunk system
	•	block/material system
	•	player controller
	•	item/inventory system
	•	crafting system
	•	survival system
	•	combat system
	•	AI/navigation system
	•	quest/state machine system
	•	restoration/site state system
	•	map/fog-of-war system
	•	save/load system

24.3 World Technology

Use a chunked voxel world with:
	•	fixed world bounds
	•	chunk streaming around the player
	•	block metadata for durability, variant, and interactable state
	•	separate authored landmark layers for major structures and dungeons

24.4 Data-Driven Content

Whenever possible, define content in external data files or resources:
	•	block definitions
	•	item definitions
	•	recipes
	•	enemy stats
	•	quest stages
	•	faction data
	•	skill tree nodes
	•	restoration requirements

This allows AI agents to add content without rewriting core code.

24.5 Save System

Must save:
	•	world modifications
	•	player stats and inventory
	•	quest progress
	•	restored sites
	•	discovered map tiles
	•	faction reputation
	•	relic states
	•	defeated bosses/events

⸻

25. AI Build Order / Development Passes

Pass 1: Core Traversal and Voxel Interaction

Deliver:
	•	player movement
	•	first/third person toggle
	•	basic terrain blocks
	•	chunk loading
	•	mine/place blocks
	•	simple inventory
	•	save/load

Acceptance criteria:
	•	player can spawn, move, mine, place, and save world state reliably

Pass 2: Survival Starter Loop

Deliver:
	•	branches, stone, fiber, food items
	•	basic crafting
	•	campfire
	•	shelter rating
	•	hunger, stamina, day/night
	•	first-night enemy spawns

Acceptance criteria:
	•	a new player can survive the first day and night by gathering and crafting

Pass 3: Race/Class/New Game Flow

Deliver:
	•	new world UI
	•	race/class selection
	•	starter kits
	•	tutorial on/off prompt
	•	map and fog-of-war prototype

Acceptance criteria:
	•	different starts feel distinct and alter early play

Pass 4: Combat and Enemies

Deliver:
	•	melee, ranged, block/parry
	•	wolves, goblins/orcs, spiders
	•	simple dungeon encounters
	•	loot drops

Acceptance criteria:
	•	player can fight, kite, defend, and clear a small hostile site

Pass 5: Crafting Stations and Restoration

Deliver:
	•	workbench, forge, cooking station
	•	building materials tiers
	•	first restorable settlement
	•	before/after visual states

Acceptance criteria:
	•	player can claim and restore a ruined location and gain a tangible reward

Pass 6: Main Quest Vertical Slice

Deliver:
	•	first 2 main quest chapters
	•	first lore NPCs
	•	first beacon/ward activation
	•	first relic ability

Acceptance criteria:
	•	player can move from raw survival into story-driven exploration

Pass 7: Landmark Regions

Deliver:
	•	Rivendell region
	•	Misty Mountains delves
	•	Mirkwood segment
	•	one late-game region

Acceptance criteria:
	•	map feels like a real journey through iconic territory

Pass 8: Full Main Quest and Endgame

Deliver:
	•	all major chapters
	•	final stronghold
	•	final boss encounter or multi-phase climax
	•	post-game state changes

Acceptance criteria:
	•	player can finish the main story and continue sandbox play

Pass 9: Polish

Deliver:
	•	UI cleanup
	•	balancing
	•	accessibility settings
	•	improved audio and visual readability
	•	bug fixing
	•	performance pass

⸻

26. Minimum Content Targets for v1

At launch, target at least:
	•	40–60 block/material types
	•	80–120 craftable items
	•	20–30 recipes that matter
	•	15–20 enemy variants across core families
	•	3–5 restorable sites
	•	6–10 major landmarks/regions
	•	6 skill trees with 8–12 nodes each
	•	1 main questline with 6–8 chapters
	•	25–40 authored side quests or side activities

⸻

27. UX Rules

27.1 UI Philosophy

The UI should be readable and modest, not overloaded.

27.2 Must-Have HUD Elements
	•	health
	•	stamina
	•	focus
	•	hunger
	•	active status effects
	•	hotbar
	•	active quest title
	•	optional compass

27.3 Menu Requirements
	•	map screen
	•	inventory and equipment
	•	crafting screen
	•	skill tree
	•	quest log
	•	settings including camera and tutorial options

27.4 Accessibility

Include:
	•	remappable keys
	•	subtitle support
	•	camera sensitivity options
	•	field of view slider
	•	reduced motion option if possible
	•	tutorial reminders toggle

⸻

28. Success Criteria for v1

v1 succeeds if a player can truthfully say:
	•	“I could choose a race and class and it changed how I played.”
	•	“I survived, built a shelter, and made a real base.”
	•	“I explored recognizable Middle-earth places.”
	•	“The world felt ancient and worth restoring.”
	•	“The main quest pulled me forward without trapping me.”
	•	“Magic felt special and Tolkien-like enough for the setting.”
	•	“I could keep playing after the main story because building and exploration still mattered.”

⸻

29. Open Decisions for Later Iteration

These do not block v1 implementation, but can be refined later:
	•	exact late-game villain identity and visual design
	•	exact final boss structure
	•	exact block palette and texture language
	•	whether front-facing third-person camera is included at launch
	•	whether companions are added in v2
	•	whether mounts are added in v2
	•	whether settlement NPC schedules become more complex later
	•	whether all protected LOTR names remain in prototype or are abstracted for a commercial-ready fork

⸻

30. One-Sentence Implementation Summary

Build a single-player, first-person voxel survival RPG set in a far-future Middle-earth, where race/class choice, survival crafting, ruin restoration, attunement-based magic, and an open but persistent main quest carry the player from a fragile campfire start to the defeat of a newly awakened dark power in the old lands of The Hobbit corridor.