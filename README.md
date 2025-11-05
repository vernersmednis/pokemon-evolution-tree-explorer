# Release v0.9

Simple release notes for the first public-ish release.

Summary
-------
v0.9 focuses on UI screens and polish: a responsive dashboard, a detailed Pokémon screen with evolution tree, improved search, and a unified typography/ui system.

Key screens & features
----------------------
- Dashboard
	- Featured & recommended Pokémon panels
	- Tips & Tricks card
	- Quick navigation to Pokémon detail pages

- Pokémon Detail
	- Evolution tree visualization (horizontal desktop / vertical mobile)
	- Compact and full Pokemon cards with images, types, height/weight
	- Responsive overflow detection for layout switching

- Search
	- Header search with direct navigation to detail pages and the home (dashboard) page
	- `Search` component accepts a `className` so it can be placed or sized by parent

UI / Components
---------------
- Central `Typography` component used across the app (replaces ad-hoc text classes)
- Shadcn/UI primitives included:
    - `Badge`, `Input`, `Separator`, `Tooltip`, `Dialog`,  `Item` (ItemGroup / ItemMedia / ItemContent)
    - `Card` (many custom themed variants: pokeball, greatball, ghost, outline, etc.)
    - `Button` (many custom themed variants: pokeball, greatball, ghost, outline, etc.)
    - `Carousel` (custom features: `CarouselProgressIndicator`, automatic width and height detection for `CarouselItem` content list, secondary positioning for "Next" and "Previous" buttons)
    - `Typography` (entirely custom component with centralized text variants)
- Custom / feature components:
    - Evolution tree pieces: `EvolutionChainNode`, `CompactEvolutionChainNode`, `EvolutionChainNodeArrow`
    - Pokemon cards: `PokemonCard`, `CompactPokemonCard`
    - Search component (pluggable for header or in-page usage)

Data & hooks
------------
- TanStack Query (hooks) used for data fetching and caching
- Hooks: `useGetEvolutionChain`, `useSearchPokemon` (search integration)
- Data source: PokéAPI (third-party public API)

Developer notes (short)
-----------------------
- How to run: install deps (npm install) and start dev server (npm run dev)

Credits
-------
Data provided by PokéAPI (https://pokeapi.co/)
