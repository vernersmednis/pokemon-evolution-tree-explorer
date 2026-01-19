import type { EvolutionChainNode } from '@/types/evolutionChainNode';

// ===== WURMPLE FAMILY POKEMON API RESPONSES =====
// These match the actual PokeAPI response structure

export const mockWurmpleApiResponse = {
  data: {
    abilities: [
      {
        ability: {
          name: 'shield-dust',
          url: 'https://pokeapi.co/api/v2/ability/19/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'run-away',
          url: 'https://pokeapi.co/api/v2/ability/50/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 56,
    cries: {
      latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/265.ogg',
      legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/265.ogg',
    },
    forms: [
      {
        name: 'wurmple',
        url: 'https://pokeapi.co/api/v2/pokemon-form/265/',
      },
    ],
    game_indices: [
      {
        game_index: 290,
        version: {
          name: 'ruby',
          url: 'https://pokeapi.co/api/v2/version/7/',
        },
      },
      {
        game_index: 290,
        version: {
          name: 'sapphire',
          url: 'https://pokeapi.co/api/v2/version/8/',
        },
      },
      {
        game_index: 290,
        version: {
          name: 'emerald',
          url: 'https://pokeapi.co/api/v2/version/9/',
        },
      },
      {
        game_index: 290,
        version: {
          name: 'firered',
          url: 'https://pokeapi.co/api/v2/version/10/',
        },
      },
      {
        game_index: 290,
        version: {
          name: 'leafgreen',
          url: 'https://pokeapi.co/api/v2/version/11/',
        },
      },
      {
        game_index: 290,
        version: {
          name: 'diamond',
          url: 'https://pokeapi.co/api/v2/version/12/',
        },
      },
      {
        game_index: 290,
        version: {
          name: 'pearl',
          url: 'https://pokeapi.co/api/v2/version/13/',
        },
      },
      {
        game_index: 290,
        version: {
          name: 'platinum',
          url: 'https://pokeapi.co/api/v2/version/14/',
        },
      },
      {
        game_index: 290,
        version: {
          name: 'heartgold',
          url: 'https://pokeapi.co/api/v2/version/15/',
        },
      },
      {
        game_index: 290,
        version: {
          name: 'soulsilver',
          url: 'https://pokeapi.co/api/v2/version/16/',
        },
      },
      {
        game_index: 290,
        version: {
          name: 'black',
          url: 'https://pokeapi.co/api/v2/version/17/',
        },
      },
      {
        game_index: 290,
        version: {
          name: 'white',
          url: 'https://pokeapi.co/api/v2/version/18/',
        },
      },
      {
        game_index: 290,
        version: {
          name: 'black-2',
          url: 'https://pokeapi.co/api/v2/version/21/',
        },
      },
      {
        game_index: 290,
        version: {
          name: 'white-2',
          url: 'https://pokeapi.co/api/v2/version/22/',
        },
      },
      {
        game_index: 290,
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        game_index: 290,
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        game_index: 290,
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        game_index: 290,
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
    ],
    height: 3,
    held_items: [],
    id: 265,
    is_default: true,
    location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/265/encounters',
    moves: [
      {
        move: {
          name: 'tackle',
          url: 'https://pokeapi.co/api/v2/move/33/',
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: 'level-up',
              url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            },
            version_group: {
              name: 'ruby-sapphire',
              url: 'https://pokeapi.co/api/v2/version-group/5/',
            },
          },
        ],
      },
      {
        move: {
          name: 'string-shot',
          url: 'https://pokeapi.co/api/v2/move/81/',
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: 'level-up',
              url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            },
            version_group: {
              name: 'ruby-sapphire',
              url: 'https://pokeapi.co/api/v2/version-group/5/',
            },
          },
        ],
      },
      {
        move: {
          name: 'poison-sting',
          url: 'https://pokeapi.co/api/v2/move/40/',
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: 'level-up',
              url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            },
            version_group: {
              name: 'ruby-sapphire',
              url: 'https://pokeapi.co/api/v2/version-group/5/',
            },
          },
        ],
      },
    ],
    name: 'wurmple',
    order: 290,
    past_types: [],
    species: {
      name: 'wurmple',
      url: 'https://pokeapi.co/api/v2/pokemon-species/265/',
    },
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/265.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/265.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/265.png',
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/265.svg',
          front_female: null,
        },
        home: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/265.png',
          front_female: null,
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/265.png',
          front_shiny_female: null,
        },
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/265.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/265.png',
        },
      },
      versions: {
        'generation-i': {
          'red-blue': {
            back_default: null,
            back_gray: null,
            back_transparent: null,
            front_default: null,
            front_gray: null,
            front_transparent: null,
          },
          yellow: {
            back_default: null,
            back_gray: null,
            back_transparent: null,
            front_default: null,
            front_gray: null,
            front_transparent: null,
          },
        },
        'generation-ii': {
          crystal: {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
            front_transparent: null,
          },
          gold: {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
            front_transparent: null,
          },
          silver: {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
            front_transparent: null,
          },
        },
        'generation-iii': {
          emerald: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/265.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/265.png',
          },
          'firered-leafgreen': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/265.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/265.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/265.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/265.png',
          },
          'ruby-sapphire': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/265.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/265.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/265.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/265.png',
          },
        },
        'generation-iv': {
          'diamond-pearl': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/265.png',
            back_female: null,
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/265.png',
            back_shiny_female: null,
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/265.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/265.png',
            front_shiny_female: null,
          },
          'heartgold-soulsilver': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/265.png',
            back_female: null,
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/265.png',
            back_shiny_female: null,
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/265.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/265.png',
            front_shiny_female: null,
          },
          platinum: {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/265.png',
            back_female: null,
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/265.png',
            back_shiny_female: null,
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/265.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/265.png',
            front_shiny_female: null,
          },
        },
        'generation-v': {
          'black-white': {
            animated: {
              back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/265.gif',
              back_female: null,
              back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/265.gif',
              back_shiny_female: null,
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/265.gif',
              front_female: null,
              front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/265.gif',
              front_shiny_female: null,
            },
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/265.png',
            back_female: null,
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/265.png',
            back_shiny_female: null,
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/265.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/265.png',
            front_shiny_female: null,
          },
        },
        'generation-vi': {
          'omegaruby-alphasapphire': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/265.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/265.png',
            front_shiny_female: null,
          },
          'x-y': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/265.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/265.png',
            front_shiny_female: null,
          },
        },
        'generation-vii': {
          icons: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/265.png',
            front_female: null,
          },
          'ultra-sun-ultra-moon': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/265.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/265.png',
            front_shiny_female: null,
          },
        },
        'generation-viii': {
          icons: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/265.png',
            front_female: null,
          },
        },
      },
    },
    stats: [
      {
        base_stat: 45,
        effort: 1,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 20,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 30,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 20,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
    ],
    weight: 36,
  },
};

export const mockSilcoonApiResponse = {
  data: {
    abilities: [
      {
        ability: {
          name: 'shed-skin',
          url: 'https://pokeapi.co/api/v2/ability/61/',
        },
        is_hidden: false,
        slot: 1,
      },
    ],
    base_experience: 72,
    cries: {
      latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/266.ogg',
      legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/266.ogg',
    },
    forms: [
      {
        name: 'silcoon',
        url: 'https://pokeapi.co/api/v2/pokemon-form/266/',
      },
    ],
    game_indices: [
      {
        game_index: 291,
        version: {
          name: 'ruby',
          url: 'https://pokeapi.co/api/v2/version/7/',
        },
      },
      {
        game_index: 291,
        version: {
          name: 'sapphire',
          url: 'https://pokeapi.co/api/v2/version/8/',
        },
      },
      {
        game_index: 291,
        version: {
          name: 'emerald',
          url: 'https://pokeapi.co/api/v2/version/9/',
        },
      },
      {
        game_index: 291,
        version: {
          name: 'firered',
          url: 'https://pokeapi.co/api/v2/version/10/',
        },
      },
      {
        game_index: 291,
        version: {
          name: 'leafgreen',
          url: 'https://pokeapi.co/api/v2/version/11/',
        },
      },
      {
        game_index: 291,
        version: {
          name: 'diamond',
          url: 'https://pokeapi.co/api/v2/version/12/',
        },
      },
      {
        game_index: 291,
        version: {
          name: 'pearl',
          url: 'https://pokeapi.co/api/v2/version/13/',
        },
      },
      {
        game_index: 291,
        version: {
          name: 'platinum',
          url: 'https://pokeapi.co/api/v2/version/14/',
        },
      },
      {
        game_index: 291,
        version: {
          name: 'heartgold',
          url: 'https://pokeapi.co/api/v2/version/15/',
        },
      },
      {
        game_index: 291,
        version: {
          name: 'soulsilver',
          url: 'https://pokeapi.co/api/v2/version/16/',
        },
      },
      {
        game_index: 291,
        version: {
          name: 'black',
          url: 'https://pokeapi.co/api/v2/version/17/',
        },
      },
      {
        game_index: 291,
        version: {
          name: 'white',
          url: 'https://pokeapi.co/api/v2/version/18/',
        },
      },
      {
        game_index: 291,
        version: {
          name: 'black-2',
          url: 'https://pokeapi.co/api/v2/version/21/',
        },
      },
      {
        game_index: 291,
        version: {
          name: 'white-2',
          url: 'https://pokeapi.co/api/v2/version/22/',
        },
      },
      {
        game_index: 291,
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        game_index: 291,
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        game_index: 291,
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        game_index: 291,
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
    ],
    height: 6,
    held_items: [],
    id: 266,
    is_default: true,
    location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/266/encounters',
    moves: [
      {
        move: {
          name: 'harden',
          url: 'https://pokeapi.co/api/v2/move/106/',
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: 'level-up',
              url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            },
            version_group: {
              name: 'ruby-sapphire',
              url: 'https://pokeapi.co/api/v2/version-group/5/',
            },
          },
        ],
      },
    ],
    name: 'silcoon',
    order: 291,
    past_types: [],
    species: {
      name: 'silcoon',
      url: 'https://pokeapi.co/api/v2/pokemon-species/266/',
    },
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/266.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/266.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/266.png',
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/266.svg',
          front_female: null,
        },
        home: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/266.png',
          front_female: null,
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/266.png',
          front_shiny_female: null,
        },
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/266.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/266.png',
        },
      },
      versions: {
        'generation-i': {
          'red-blue': {
            back_default: null,
            back_gray: null,
            back_transparent: null,
            front_default: null,
            front_gray: null,
            front_transparent: null,
          },
          yellow: {
            back_default: null,
            back_gray: null,
            back_transparent: null,
            front_default: null,
            front_gray: null,
            front_transparent: null,
          },
        },
        'generation-ii': {
          crystal: {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
            front_transparent: null,
          },
          gold: {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
            front_transparent: null,
          },
          silver: {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
            front_transparent: null,
          },
        },
        'generation-iii': {
          emerald: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/266.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/266.png',
          },
          'firered-leafgreen': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/266.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/266.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/266.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/266.png',
          },
          'ruby-sapphire': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/266.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/266.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/266.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/266.png',
          },
        },
        'generation-iv': {
          'diamond-pearl': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/266.png',
            back_female: null,
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/266.png',
            back_shiny_female: null,
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/266.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/266.png',
            front_shiny_female: null,
          },
          'heartgold-soulsilver': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/266.png',
            back_female: null,
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/266.png',
            back_shiny_female: null,
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/266.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/266.png',
            front_shiny_female: null,
          },
          platinum: {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/266.png',
            back_female: null,
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/266.png',
            back_shiny_female: null,
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/266.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/266.png',
            front_shiny_female: null,
          },
        },
        'generation-v': {
          'black-white': {
            animated: {
              back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/266.gif',
              back_female: null,
              back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/266.gif',
              back_shiny_female: null,
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/266.gif',
              front_female: null,
              front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/266.gif',
              front_shiny_female: null,
            },
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/266.png',
            back_female: null,
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/266.png',
            back_shiny_female: null,
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/266.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/266.png',
            front_shiny_female: null,
          },
        },
        'generation-vi': {
          'omegaruby-alphasapphire': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/266.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/266.png',
            front_shiny_female: null,
          },
          'x-y': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/266.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/266.png',
            front_shiny_female: null,
          },
        },
        'generation-vii': {
          icons: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/266.png',
            front_female: null,
          },
          'ultra-sun-ultra-moon': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/266.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/266.png',
            front_shiny_female: null,
          },
        },
        'generation-viii': {
          icons: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/266.png',
            front_female: null,
          },
        },
      },
    },
    stats: [
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 55,
        effort: 2,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 15,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
    ],
    weight: 100,
  },
};

export const mockBeautiflyApiResponse = {
  data: {
    abilities: [
      {
        ability: {
          name: 'swarm',
          url: 'https://pokeapi.co/api/v2/ability/68/',
        },
        is_hidden: false,
        slot: 1,
      },
    ],
    base_experience: 178,
    cries: {
      latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/267.ogg',
      legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/267.ogg',
    },
    forms: [
      {
        name: 'beautifly',
        url: 'https://pokeapi.co/api/v2/pokemon-form/267/',
      },
    ],
    game_indices: [
      {
        game_index: 292,
        version: {
          name: 'ruby',
          url: 'https://pokeapi.co/api/v2/version/7/',
        },
      },
      {
        game_index: 292,
        version: {
          name: 'sapphire',
          url: 'https://pokeapi.co/api/v2/version/8/',
        },
      },
      {
        game_index: 292,
        version: {
          name: 'emerald',
          url: 'https://pokeapi.co/api/v2/version/9/',
        },
      },
      {
        game_index: 292,
        version: {
          name: 'firered',
          url: 'https://pokeapi.co/api/v2/version/10/',
        },
      },
      {
        game_index: 292,
        version: {
          name: 'leafgreen',
          url: 'https://pokeapi.co/api/v2/version/11/',
        },
      },
      {
        game_index: 292,
        version: {
          name: 'diamond',
          url: 'https://pokeapi.co/api/v2/version/12/',
        },
      },
      {
        game_index: 292,
        version: {
          name: 'pearl',
          url: 'https://pokeapi.co/api/v2/version/13/',
        },
      },
      {
        game_index: 292,
        version: {
          name: 'platinum',
          url: 'https://pokeapi.co/api/v2/version/14/',
        },
      },
      {
        game_index: 292,
        version: {
          name: 'heartgold',
          url: 'https://pokeapi.co/api/v2/version/15/',
        },
      },
      {
        game_index: 292,
        version: {
          name: 'soulsilver',
          url: 'https://pokeapi.co/api/v2/version/16/',
        },
      },
      {
        game_index: 292,
        version: {
          name: 'black',
          url: 'https://pokeapi.co/api/v2/version/17/',
        },
      },
      {
        game_index: 292,
        version: {
          name: 'white',
          url: 'https://pokeapi.co/api/v2/version/18/',
        },
      },
      {
        game_index: 292,
        version: {
          name: 'black-2',
          url: 'https://pokeapi.co/api/v2/version/21/',
        },
      },
      {
        game_index: 292,
        version: {
          name: 'white-2',
          url: 'https://pokeapi.co/api/v2/version/22/',
        },
      },
      {
        game_index: 292,
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        game_index: 292,
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        game_index: 292,
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        game_index: 292,
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
    ],
    height: 10,
    held_items: [],
    id: 267,
    is_default: true,
    location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/267/encounters',
    moves: [
      {
        move: {
          name: 'absorb',
          url: 'https://pokeapi.co/api/v2/move/71/',
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: 'level-up',
              url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            },
            version_group: {
              name: 'ruby-sapphire',
              url: 'https://pokeapi.co/api/v2/version-group/5/',
            },
          },
        ],
      },
      {
        move: {
          name: 'gust',
          url: 'https://pokeapi.co/api/v2/move/16/',
        },
        version_group_details: [
          {
            level_learned_at: 12,
            move_learn_method: {
              name: 'level-up',
              url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            },
            version_group: {
              name: 'ruby-sapphire',
              url: 'https://pokeapi.co/api/v2/version-group/5/',
            },
          },
        ],
      },
    ],
    name: 'beautifly',
    order: 292,
    past_types: [],
    species: {
      name: 'beautifly',
      url: 'https://pokeapi.co/api/v2/pokemon-species/267/',
    },
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/267.png',
      back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/267.png',
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/267.png',
      back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/267.png',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png',
      front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/267.png',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/267.png',
      front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/267.png',
      other: {
        dream_world: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/267.svg',
          front_female: null,
        },
        home: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/267.png',
          front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/female/267.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/267.png',
          front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/female/267.png',
        },
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/267.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/267.png',
        },
      },
      versions: {
        'generation-i': {
          'red-blue': {
            back_default: null,
            back_gray: null,
            back_transparent: null,
            front_default: null,
            front_gray: null,
            front_transparent: null,
          },
          yellow: {
            back_default: null,
            back_gray: null,
            back_transparent: null,
            front_default: null,
            front_gray: null,
            front_transparent: null,
          },
        },
        'generation-ii': {
          crystal: {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
            front_transparent: null,
          },
          gold: {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
            front_transparent: null,
          },
          silver: {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
            front_transparent: null,
          },
        },
        'generation-iii': {
          emerald: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/267.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/267.png',
          },
          'firered-leafgreen': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/267.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/267.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/267.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/267.png',
          },
          'ruby-sapphire': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/267.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/267.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/267.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/267.png',
          },
        },
        'generation-iv': {
          'diamond-pearl': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/267.png',
            back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/female/267.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/267.png',
            back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/female/267.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/267.png',
            front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/female/267.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/267.png',
            front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/female/267.png',
          },
          'heartgold-soulsilver': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/267.png',
            back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/female/267.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/267.png',
            back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/female/267.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/267.png',
            front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/female/267.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/267.png',
            front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/female/267.png',
          },
          platinum: {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/267.png',
            back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/female/267.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/267.png',
            back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/female/267.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/267.png',
            front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/female/267.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/267.png',
            front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/female/267.png',
          },
        },
        'generation-v': {
          'black-white': {
            animated: {
              back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/267.gif',
              back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/female/267.gif',
              back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/267.gif',
              back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/female/267.gif',
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/267.gif',
              front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/female/267.gif',
              front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/267.gif',
              front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/female/267.gif',
            },
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/267.png',
            back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/female/267.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/267.png',
            back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/female/267.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/267.png',
            front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/female/267.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/267.png',
            front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/female/267.png',
          },
        },
        'generation-vi': {
          'omegaruby-alphasapphire': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/267.png',
            front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/female/267.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/267.png',
            front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/female/267.png',
          },
          'x-y': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/267.png',
            front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/female/267.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/267.png',
            front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/female/267.png',
          },
        },
        'generation-vii': {
          icons: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/267.png',
            front_female: null,
          },
          'ultra-sun-ultra-moon': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/267.png',
            front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/female/267.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/267.png',
            front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/female/267.png',
          },
        },
        'generation-viii': {
          icons: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/267.png',
            front_female: null,
          },
        },
      },
    },
    stats: [
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 100,
        effort: 3,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    weight: 285,
  },
};

export const mockCascoonApiResponse = {
  data: {
    abilities: [
      {
        ability: {
          name: 'shed-skin',
          url: 'https://pokeapi.co/api/v2/ability/61/',
        },
        is_hidden: false,
        slot: 1,
      },
    ],
    base_experience: 72,
    cries: {
      latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/268.ogg',
      legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/268.ogg',
    },
    forms: [
      {
        name: 'cascoon',
        url: 'https://pokeapi.co/api/v2/pokemon-form/268/',
      },
    ],
    game_indices: [
      {
        game_index: 293,
        version: {
          name: 'ruby',
          url: 'https://pokeapi.co/api/v2/version/7/',
        },
      },
      {
        game_index: 293,
        version: {
          name: 'sapphire',
          url: 'https://pokeapi.co/api/v2/version/8/',
        },
      },
      {
        game_index: 293,
        version: {
          name: 'emerald',
          url: 'https://pokeapi.co/api/v2/version/9/',
        },
      },
      {
        game_index: 293,
        version: {
          name: 'firered',
          url: 'https://pokeapi.co/api/v2/version/10/',
        },
      },
      {
        game_index: 293,
        version: {
          name: 'leafgreen',
          url: 'https://pokeapi.co/api/v2/version/11/',
        },
      },
      {
        game_index: 293,
        version: {
          name: 'diamond',
          url: 'https://pokeapi.co/api/v2/version/12/',
        },
      },
      {
        game_index: 293,
        version: {
          name: 'pearl',
          url: 'https://pokeapi.co/api/v2/version/13/',
        },
      },
      {
        game_index: 293,
        version: {
          name: 'platinum',
          url: 'https://pokeapi.co/api/v2/version/14/',
        },
      },
      {
        game_index: 293,
        version: {
          name: 'heartgold',
          url: 'https://pokeapi.co/api/v2/version/15/',
        },
      },
      {
        game_index: 293,
        version: {
          name: 'soulsilver',
          url: 'https://pokeapi.co/api/v2/version/16/',
        },
      },
      {
        game_index: 293,
        version: {
          name: 'black',
          url: 'https://pokeapi.co/api/v2/version/17/',
        },
      },
      {
        game_index: 293,
        version: {
          name: 'white',
          url: 'https://pokeapi.co/api/v2/version/18/',
        },
      },
      {
        game_index: 293,
        version: {
          name: 'black-2',
          url: 'https://pokeapi.co/api/v2/version/21/',
        },
      },
      {
        game_index: 293,
        version: {
          name: 'white-2',
          url: 'https://pokeapi.co/api/v2/version/22/',
        },
      },
      {
        game_index: 293,
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        game_index: 293,
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        game_index: 293,
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        game_index: 293,
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
    ],
    height: 7,
    held_items: [],
    id: 268,
    is_default: true,
    location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/268/encounters',
    moves: [
      {
        move: {
          name: 'harden',
          url: 'https://pokeapi.co/api/v2/move/106/',
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: 'level-up',
              url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            },
            version_group: {
              name: 'ruby-sapphire',
              url: 'https://pokeapi.co/api/v2/version-group/5/',
            },
          },
        ],
      },
    ],
    name: 'cascoon',
    order: 293,
    past_types: [],
    species: {
      name: 'cascoon',
      url: 'https://pokeapi.co/api/v2/pokemon-species/268/',
    },
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/268.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/268.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/268.png',
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/268.svg',
          front_female: null,
        },
        home: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/268.png',
          front_female: null,
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/268.png',
          front_shiny_female: null,
        },
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/268.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/268.png',
        },
      },
      versions: {
        'generation-i': {
          'red-blue': {
            back_default: null,
            back_gray: null,
            back_transparent: null,
            front_default: null,
            front_gray: null,
            front_transparent: null,
          },
          yellow: {
            back_default: null,
            back_gray: null,
            back_transparent: null,
            front_default: null,
            front_gray: null,
            front_transparent: null,
          },
        },
        'generation-ii': {
          crystal: {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
            front_transparent: null,
          },
          gold: {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
            front_transparent: null,
          },
          silver: {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
            front_transparent: null,
          },
        },
        'generation-iii': {
          emerald: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/268.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/268.png',
          },
          'firered-leafgreen': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/268.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/268.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/268.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/268.png',
          },
          'ruby-sapphire': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/268.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/268.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/268.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/268.png',
          },
        },
        'generation-iv': {
          'diamond-pearl': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/268.png',
            back_female: null,
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/268.png',
            back_shiny_female: null,
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/268.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/268.png',
            front_shiny_female: null,
          },
          'heartgold-soulsilver': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/268.png',
            back_female: null,
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/268.png',
            back_shiny_female: null,
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/268.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/268.png',
            front_shiny_female: null,
          },
          platinum: {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/268.png',
            back_female: null,
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/268.png',
            back_shiny_female: null,
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/268.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/268.png',
            front_shiny_female: null,
          },
        },
        'generation-v': {
          'black-white': {
            animated: {
              back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/268.gif',
              back_female: null,
              back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/268.gif',
              back_shiny_female: null,
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/268.gif',
              front_female: null,
              front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/268.gif',
              front_shiny_female: null,
            },
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/268.png',
            back_female: null,
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/268.png',
            back_shiny_female: null,
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/268.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/268.png',
            front_shiny_female: null,
          },
        },
        'generation-vi': {
          'omegaruby-alphasapphire': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/268.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/268.png',
            front_shiny_female: null,
          },
          'x-y': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/268.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/268.png',
            front_shiny_female: null,
          },
        },
        'generation-vii': {
          icons: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/268.png',
            front_female: null,
          },
          'ultra-sun-ultra-moon': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/268.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/268.png',
            front_shiny_female: null,
          },
        },
        'generation-viii': {
          icons: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/268.png',
            front_female: null,
          },
        },
      },
    },
    stats: [
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 55,
        effort: 2,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 25,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 15,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
    ],
    weight: 115,
  },
};

export const mockDustoxApiResponse = {
  data: {
    abilities: [
      {
        ability: {
          name: 'shield-dust',
          url: 'https://pokeapi.co/api/v2/ability/19/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'compound-eyes',
          url: 'https://pokeapi.co/api/v2/ability/14/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 173,
    cries: {
      latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/269.ogg',
      legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/269.ogg',
    },
    forms: [
      {
        name: 'dustox',
        url: 'https://pokeapi.co/api/v2/pokemon-form/269/',
      },
    ],
    game_indices: [
      {
        game_index: 294,
        version: {
          name: 'ruby',
          url: 'https://pokeapi.co/api/v2/version/7/',
        },
      },
      {
        game_index: 294,
        version: {
          name: 'sapphire',
          url: 'https://pokeapi.co/api/v2/version/8/',
        },
      },
      {
        game_index: 294,
        version: {
          name: 'emerald',
          url: 'https://pokeapi.co/api/v2/version/9/',
        },
      },
      {
        game_index: 294,
        version: {
          name: 'firered',
          url: 'https://pokeapi.co/api/v2/version/10/',
        },
      },
      {
        game_index: 294,
        version: {
          name: 'leafgreen',
          url: 'https://pokeapi.co/api/v2/version/11/',
        },
      },
      {
        game_index: 294,
        version: {
          name: 'diamond',
          url: 'https://pokeapi.co/api/v2/version/12/',
        },
      },
      {
        game_index: 294,
        version: {
          name: 'pearl',
          url: 'https://pokeapi.co/api/v2/version/13/',
        },
      },
      {
        game_index: 294,
        version: {
          name: 'platinum',
          url: 'https://pokeapi.co/api/v2/version/14/',
        },
      },
      {
        game_index: 294,
        version: {
          name: 'heartgold',
          url: 'https://pokeapi.co/api/v2/version/15/',
        },
      },
      {
        game_index: 294,
        version: {
          name: 'soulsilver',
          url: 'https://pokeapi.co/api/v2/version/16/',
        },
      },
      {
        game_index: 294,
        version: {
          name: 'black',
          url: 'https://pokeapi.co/api/v2/version/17/',
        },
      },
      {
        game_index: 294,
        version: {
          name: 'white',
          url: 'https://pokeapi.co/api/v2/version/18/',
        },
      },
      {
        game_index: 294,
        version: {
          name: 'black-2',
          url: 'https://pokeapi.co/api/v2/version/21/',
        },
      },
      {
        game_index: 294,
        version: {
          name: 'white-2',
          url: 'https://pokeapi.co/api/v2/version/22/',
        },
      },
      {
        game_index: 294,
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        game_index: 294,
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        game_index: 294,
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        game_index: 294,
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
    ],
    height: 12,
    held_items: [],
    id: 269,
    is_default: true,
    location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/269/encounters',
    moves: [
      {
        move: {
          name: 'gust',
          url: 'https://pokeapi.co/api/v2/move/16/',
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: 'level-up',
              url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            },
            version_group: {
              name: 'ruby-sapphire',
              url: 'https://pokeapi.co/api/v2/version-group/5/',
            },
          },
        ],
      },
      {
        move: {
          name: 'poison-powder',
          url: 'https://pokeapi.co/api/v2/move/77/',
        },
        version_group_details: [
          {
            level_learned_at: 12,
            move_learn_method: {
              name: 'level-up',
              url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            },
            version_group: {
              name: 'ruby-sapphire',
              url: 'https://pokeapi.co/api/v2/version-group/5/',
            },
          },
        ],
      },
    ],
    name: 'dustox',
    order: 294,
    past_types: [],
    species: {
      name: 'dustox',
      url: 'https://pokeapi.co/api/v2/pokemon-species/269/',
    },
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/269.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/269.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/269.png',
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/269.svg',
          front_female: null,
        },
        home: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/269.png',
          front_female: null,
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/269.png',
          front_shiny_female: null,
        },
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/269.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/269.png',
        },
      },
      versions: {
        'generation-i': {
          'red-blue': {
            back_default: null,
            back_gray: null,
            back_transparent: null,
            front_default: null,
            front_gray: null,
            front_transparent: null,
          },
          yellow: {
            back_default: null,
            back_gray: null,
            back_transparent: null,
            front_default: null,
            front_gray: null,
            front_transparent: null,
          },
        },
        'generation-ii': {
          crystal: {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
            front_transparent: null,
          },
          gold: {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
            front_transparent: null,
          },
          silver: {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
            front_transparent: null,
          },
        },
        'generation-iii': {
          emerald: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/269.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/269.png',
          },
          'firered-leafgreen': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/269.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/269.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/269.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/269.png',
          },
          'ruby-sapphire': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/269.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/269.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/269.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/269.png',
          },
        },
        'generation-iv': {
          'diamond-pearl': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/269.png',
            back_female: null,
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/269.png',
            back_shiny_female: null,
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/269.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/269.png',
            front_shiny_female: null,
          },
          'heartgold-soulsilver': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/269.png',
            back_female: null,
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/269.png',
            back_shiny_female: null,
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/269.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/269.png',
            front_shiny_female: null,
          },
          platinum: {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/269.png',
            back_female: null,
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/269.png',
            back_shiny_female: null,
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/269.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/269.png',
            front_shiny_female: null,
          },
        },
        'generation-v': {
          'black-white': {
            animated: {
              back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/269.gif',
              back_female: null,
              back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/269.gif',
              back_shiny_female: null,
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/269.gif',
              front_female: null,
              front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/269.gif',
              front_shiny_female: null,
            },
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/269.png',
            back_female: null,
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/269.png',
            back_shiny_female: null,
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/269.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/269.png',
            front_shiny_female: null,
          },
        },
        'generation-vi': {
          'omegaruby-alphasapphire': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/269.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/269.png',
            front_shiny_female: null,
          },
          'x-y': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/269.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/269.png',
            front_shiny_female: null,
          },
        },
        'generation-vii': {
          icons: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/269.png',
            front_female: null,
          },
          'ultra-sun-ultra-moon': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/269.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/269.png',
            front_shiny_female: null,
          },
        },
        'generation-viii': {
          icons: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/269.png',
            front_female: null,
          },
        },
      },
    },
    stats: [
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 90,
        effort: 3,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      },
    ],
    weight: 316,
  },
};

// ===== SPECIES API RESPONSE =====

export const mockWurmpleSpeciesResponse = {
  data: {
    base_happiness: 70,
    capture_rate: 255,
    color: {
      name: 'red',
      url: 'https://pokeapi.co/api/v2/pokemon-color/8/',
    },
    egg_groups: [
      {
        name: 'bug',
        url: 'https://pokeapi.co/api/v2/egg-group/3/',
      },
    ],
    evolution_chain: {
      url: 'https://pokeapi.co/api/v2/evolution-chain/135/',
    },
    evolves_from_species: null,
    flavor_text_entries: [
      {
        flavor_text: 'Using the spikes on its rear end, WURMPLE peels\nthe bark off trees and feeds on the sap that oozes\nout. This POKéMON\'s feet are tipped with suction\npads that allow it to cling to glass without\nslipping.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'ruby',
          url: 'https://pokeapi.co/api/v2/version/7/',
        },
      },
      {
        flavor_text: 'WURMPLE is targeted by SWELLOW as prey. This\nPOKéMON will try to resist by pointing the spikes\non its rear at the attacking predator. It will\nweaken the foe by leaking poison from the spikes.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'sapphire',
          url: 'https://pokeapi.co/api/v2/version/8/',
        },
      },
      {
        flavor_text: 'It sticks to tree branches and eats leaves. The\nthread it spits from its mouth, which becomes gooey\nwhen it touches air, slows the movement of its foes.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'emerald',
          url: 'https://pokeapi.co/api/v2/version/9/',
        },
      },
      {
        flavor_text: 'It lives amidst tall grass and in forests. When\nattacked, it resists by pointing its venomous\nspikes at the foe.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'firered',
          url: 'https://pokeapi.co/api/v2/version/10/',
        },
      },
      {
        flavor_text: 'It lives amidst tall grass and in forests. When\nattacked, it resists by pointing its venomous\nspikes at the foe.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'leafgreen',
          url: 'https://pokeapi.co/api/v2/version/11/',
        },
      },
      {
        flavor_text: 'It loves to eat leaves. If it is attacked by a\nSTARLY, it will defend itself with its spiked rear.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'diamond',
          url: 'https://pokeapi.co/api/v2/version/12/',
        },
      },
      {
        flavor_text: 'It spits a white silk that turns sticky when it\ncontacts air. It is used to immobilize foes.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'pearl',
          url: 'https://pokeapi.co/api/v2/version/13/',
        },
      },
      {
        flavor_text: 'Often targeted by bird Pokémon, it desperately\nresists by releasing poison from its tail spikes.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'platinum',
          url: 'https://pokeapi.co/api/v2/version/14/',
        },
      },
      {
        flavor_text: 'It lives among the tall grass and in forests. It\nrepels attacks by raising up the spikes on its rear.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'heartgold',
          url: 'https://pokeapi.co/api/v2/version/15/',
        },
      },
      {
        flavor_text: 'It lives among the tall grass and in forests. It\nrepels attacks by raising up the spikes on its rear.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'soulsilver',
          url: 'https://pokeapi.co/api/v2/version/16/',
        },
      },
      {
        flavor_text: 'Often targeted by bird Pokémon, it desperately\nresists by releasing poison from its tail spikes.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'black',
          url: 'https://pokeapi.co/api/v2/version/17/',
        },
      },
      {
        flavor_text: 'Often targeted by bird Pokémon, it desperately\nresists by releasing poison from its tail spikes.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'white',
          url: 'https://pokeapi.co/api/v2/version/18/',
        },
      },
      {
        flavor_text: 'Often targeted by bird Pokémon, it desperately\nresists by releasing poison from its tail spikes.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'black-2',
          url: 'https://pokeapi.co/api/v2/version/21/',
        },
      },
      {
        flavor_text: 'Often targeted by bird Pokémon, it desperately\nresists by releasing poison from its tail spikes.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'white-2',
          url: 'https://pokeapi.co/api/v2/version/22/',
        },
      },
      {
        flavor_text: 'It loves to eat leaves. If it is attacked by a\nStarly, it will defend itself with its spiked rear.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text: 'It lives among the tall grass and in forests. It\nrepels attacks by raising up the spikes on its rear.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text: 'Using the spikes on its rear end, Wurmple peels\nthe bark off trees and feeds on the sap that oozes\nout. This Pokémon\'s feet are tipped with suction\npads that allow it to cling to glass without\nslipping.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text: 'Wurmple is targeted by Swellow as prey. This\nPokémon will try to resist by pointing the spikes\non its rear at the attacking predator. It will\nweaken the foe by leaking poison from the spikes.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text: 'Likes sap and is abundant in the wild. Why it\nevolves into various different forms is unknown.\nOne cannot tell from a Wurmple\'s appearance\nwhich form it will take when it evolves.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'legends-arceus',
          url: 'https://pokeapi.co/api/v2/version/39/',
        },
      },
    ],
    form_descriptions: [],
    forms_switchable: false,
    gender_rate: 4,
    genera: [
      {
        genus: 'Worm Pokémon',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
      },
    ],
    generation: {
      name: 'generation-iii',
      url: 'https://pokeapi.co/api/v2/generation/3/',
    },
    growth_rate: {
      name: 'medium',
      url: 'https://pokeapi.co/api/v2/growth-rate/2/',
    },
    habitat: {
      name: 'forest',
      url: 'https://pokeapi.co/api/v2/pokemon-habitat/2/',
    },
    has_gender_differences: false,
    hatch_counter: 15,
    id: 265,
    is_baby: false,
    is_legendary: false,
    is_mythical: false,
    name: 'wurmple',
    names: [
      {
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        name: 'ケムッソ',
      },
      {
        language: {
          name: 'roomaji',
          url: 'https://pokeapi.co/api/v2/language/2/',
        },
        name: 'Kemusso',
      },
      {
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        name: '개무소',
      },
      {
        language: {
          name: 'zh-Hant',
          url: 'https://pokeapi.co/api/v2/language/4/',
        },
        name: '刺尾蟲',
      },
      {
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        name: 'Chenipotte',
      },
      {
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        name: 'Waumpel',
      },
      {
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        name: 'Wurmple',
      },
      {
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        name: 'Wurmple',
      },
      {
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        name: 'Wurmple',
      },
      {
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        name: 'ケムッソ',
      },
      {
        language: {
          name: 'zh-Hans',
          url: 'https://pokeapi.co/api/v2/language/12/',
        },
        name: '刺尾虫',
      },
    ],
    order: 290,
    pal_park_encounters: [
      {
        area: {
          name: 'forest',
          url: 'https://pokeapi.co/api/v2/pal-park-area/1/',
        },
        base_score: 30,
        rate: 50,
      },
    ],
    pokedex_numbers: [
      {
        entry_number: 265,
        pokedex: {
          name: 'national',
          url: 'https://pokeapi.co/api/v2/pokedex/1/',
        },
      },
      {
        entry_number: 14,
        pokedex: {
          name: 'hoenn',
          url: 'https://pokeapi.co/api/v2/pokedex/4/',
        },
      },
      {
        entry_number: 48,
        pokedex: {
          name: 'original-sinnoh',
          url: 'https://pokeapi.co/api/v2/pokedex/5/',
        },
      },
      {
        entry_number: 48,
        pokedex: {
          name: 'extended-sinnoh',
          url: 'https://pokeapi.co/api/v2/pokedex/6/',
        },
      },
      {
        entry_number: 14,
        pokedex: {
          name: 'updated-hoenn',
          url: 'https://pokeapi.co/api/v2/pokedex/15/',
        },
      },
      {
        entry_number: 18,
        pokedex: {
          name: 'hisui',
          url: 'https://pokeapi.co/api/v2/pokedex/30/',
        },
      },
    ],
    shape: {
      name: 'armor',
      url: 'https://pokeapi.co/api/v2/pokemon-shape/14/',
    },
    varieties: [
      {
        is_default: true,
        pokemon: {
          name: 'wurmple',
          url: 'https://pokeapi.co/api/v2/pokemon/265/',
        },
      },
    ],
  },
};

// ===== EVOLUTION CHAIN API RESPONSE =====

// Wurmple -> Silcoon/Cascoon -> Beautifly/Dustox (branching + multi-stage)
export const mockWurmpleEvolutionChainResponse = {
  data: {
    baby_trigger_item: null,
    chain: {
      evolution_details: [],
      evolves_to: [
        {
          evolution_details: [
            {
              base_form_id: null,
              gender: null,
              held_item: null,
              item: null,
              known_move: null,
              known_move_type: null,
              location: null,
              min_affection: null,
              min_beauty: null,
              min_happiness: null,
              min_level: 7,
              needs_overworld_rain: false,
              party_species: null,
              party_type: null,
              region_id: null,
              relative_physical_stats: null,
              time_of_day: '',
              trade_species: null,
              trigger: {
                name: 'level-up',
                url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
              },
              turn_upside_down: false,
            },
          ],
          evolves_to: [
            {
              evolution_details: [
                {
                  base_form_id: null,
                  gender: null,
                  held_item: null,
                  item: null,
                  known_move: null,
                  known_move_type: null,
                  location: null,
                  min_affection: null,
                  min_beauty: null,
                  min_happiness: null,
                  min_level: 10,
                  needs_overworld_rain: false,
                  party_species: null,
                  party_type: null,
                  region_id: null,
                  relative_physical_stats: null,
                  time_of_day: '',
                  trade_species: null,
                  trigger: {
                    name: 'level-up',
                    url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
                  },
                  turn_upside_down: false,
                },
              ],
              evolves_to: [],
              is_baby: false,
              species: {
                name: 'beautifly',
                url: 'https://pokeapi.co/api/v2/pokemon-species/267/',
              },
            },
          ],
          is_baby: false,
          species: {
            name: 'silcoon',
            url: 'https://pokeapi.co/api/v2/pokemon-species/266/',
          },
        },
        {
          evolution_details: [
            {
              base_form_id: null,
              gender: null,
              held_item: null,
              item: null,
              known_move: null,
              known_move_type: null,
              location: null,
              min_affection: null,
              min_beauty: null,
              min_happiness: null,
              min_level: 7,
              needs_overworld_rain: false,
              party_species: null,
              party_type: null,
              region_id: null,
              relative_physical_stats: null,
              time_of_day: '',
              trade_species: null,
              trigger: {
                name: 'level-up',
                url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
              },
              turn_upside_down: false,
            },
          ],
          evolves_to: [
            {
              evolution_details: [
                {
                  base_form_id: null,
                  gender: null,
                  held_item: null,
                  item: null,
                  known_move: null,
                  known_move_type: null,
                  location: null,
                  min_affection: null,
                  min_beauty: null,
                  min_happiness: null,
                  min_level: 10,
                  needs_overworld_rain: false,
                  party_species: null,
                  party_type: null,
                  region_id: null,
                  relative_physical_stats: null,
                  time_of_day: '',
                  trade_species: null,
                  trigger: {
                    name: 'level-up',
                    url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
                  },
                  turn_upside_down: false,
                },
              ],
              evolves_to: [],
              is_baby: false,
              species: {
                name: 'dustox',
                url: 'https://pokeapi.co/api/v2/pokemon-species/269/',
              },
            },
          ],
          is_baby: false,
          species: {
            name: 'cascoon',
            url: 'https://pokeapi.co/api/v2/pokemon-species/268/',
          },
        },
      ],
      is_baby: false,
      species: {
        name: 'wurmple',
        url: 'https://pokeapi.co/api/v2/pokemon-species/265/',
      },
    },
    id: 135,
  },
};

// ===== PIKACHU FAMILY API RESPONSES =====

export const mockPichuApiResponse = {
  data: {
    abilities: [
      {
        ability: {
          name: 'static',
          url: 'https://pokeapi.co/api/v2/ability/9/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'lightning-rod',
          url: 'https://pokeapi.co/api/v2/ability/31/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 41,
    cries: {
      latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/172.ogg',
      legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/172.ogg',
    },
    forms: [
      {
        name: 'pichu',
        url: 'https://pokeapi.co/api/v2/pokemon-form/172/',
      },
      {
        name: 'pichu-spiky-eared',
        url: 'https://pokeapi.co/api/v2/pokemon-form/10065/',
      },
    ],
    game_indices: [
      {
        game_index: 172,
        version: {
          name: 'gold',
          url: 'https://pokeapi.co/api/v2/version/4/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'silver',
          url: 'https://pokeapi.co/api/v2/version/5/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'crystal',
          url: 'https://pokeapi.co/api/v2/version/6/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'ruby',
          url: 'https://pokeapi.co/api/v2/version/7/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'sapphire',
          url: 'https://pokeapi.co/api/v2/version/8/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'emerald',
          url: 'https://pokeapi.co/api/v2/version/9/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'firered',
          url: 'https://pokeapi.co/api/v2/version/10/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'leafgreen',
          url: 'https://pokeapi.co/api/v2/version/11/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'diamond',
          url: 'https://pokeapi.co/api/v2/version/12/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'pearl',
          url: 'https://pokeapi.co/api/v2/version/13/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'platinum',
          url: 'https://pokeapi.co/api/v2/version/14/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'heartgold',
          url: 'https://pokeapi.co/api/v2/version/15/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'soulsilver',
          url: 'https://pokeapi.co/api/v2/version/16/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'black',
          url: 'https://pokeapi.co/api/v2/version/17/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'white',
          url: 'https://pokeapi.co/api/v2/version/18/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'black-2',
          url: 'https://pokeapi.co/api/v2/version/21/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'white-2',
          url: 'https://pokeapi.co/api/v2/version/22/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'sun',
          url: 'https://pokeapi.co/api/v2/version/27/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'moon',
          url: 'https://pokeapi.co/api/v2/version/28/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'ultra-sun',
          url: 'https://pokeapi.co/api/v2/version/29/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'ultra-moon',
          url: 'https://pokeapi.co/api/v2/version/30/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        game_index: 172,
        version: {
          name: 'legends-arceus',
          url: 'https://pokeapi.co/api/v2/version/39/',
        },
      },
    ],
    height: 3,
    held_items: [],
    id: 172,
    is_default: true,
    location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/172/encounters',
    moves: [
      {
        move: {
          name: 'thunder-shock',
          url: 'https://pokeapi.co/api/v2/move/84/',
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: 'level-up',
              url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
            },
            version_group: {
              name: 'gold-silver',
              url: 'https://pokeapi.co/api/v2/version-group/3/',
            },
          },
        ],
      },
    ],
    name: 'pichu',
    order: 26,
    past_abilities: [],
    past_types: [],
    species: {
      name: 'pichu',
      url: 'https://pokeapi.co/api/v2/pokemon-species/172/',
    },
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/172.png',
      back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/172.png',
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/172.png',
      back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/172.png',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png',
      front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/172.png',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/172.png',
      front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/172.png',
      other: {
        dream_world: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/172.svg',
          front_female: null,
        },
        home: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/172.png',
          front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/female/172.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/172.png',
          front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/female/172.png',
        },
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/172.png',
        },
      },
      versions: {
        'generation-i': {
          'red-blue': {
            back_default: null,
            back_gray: null,
            back_transparent: null,
            front_default: null,
            front_gray: null,
            front_transparent: null,
          },
          yellow: {
            back_default: null,
            back_gray: null,
            back_transparent: null,
            front_default: null,
            front_gray: null,
            front_transparent: null,
          },
        },
        'generation-ii': {
          crystal: {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/172.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/172.png',
            back_shiny_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/transparent/172.png',
            back_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/transparent/172.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/172.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/172.png',
            front_shiny_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/transparent/172.png',
            front_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/172.png',
          },
          gold: {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/172.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/172.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/172.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/172.png',
          },
          silver: {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/172.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/172.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/172.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/172.png',
          },
        },
        'generation-iii': {
          emerald: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/172.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/172.png',
          },
          'firered-leafgreen': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/172.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/172.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/172.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/172.png',
          },
          'ruby-sapphire': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/172.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/172.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/172.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/172.png',
          },
        },
        'generation-iv': {
          'diamond-pearl': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/172.png',
            back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/female/172.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/172.png',
            back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/female/172.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/172.png',
            front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/female/172.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/172.png',
            front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/female/172.png',
          },
          'heartgold-soulsilver': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/172.png',
            back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/female/172.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/172.png',
            back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/female/172.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/172.png',
            front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/female/172.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/172.png',
            front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/female/172.png',
          },
          platinum: {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/172.png',
            back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/female/172.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/172.png',
            back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/female/172.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/172.png',
            front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/female/172.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/172.png',
            front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/female/172.png',
          },
        },
        'generation-v': {
          'black-white': {
            animated: {
              back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/172.gif',
              back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/female/172.gif',
              back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/172.gif',
              back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/female/172.gif',
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/172.gif',
              front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/female/172.gif',
              front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/172.gif',
              front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/female/172.gif',
            },
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/172.png',
            back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/female/172.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/172.png',
            back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/female/172.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/172.png',
            front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/female/172.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/172.png',
            front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/female/172.png',
          },
        },
        'generation-vi': {
          'omegaruby-alphasapphire': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/172.png',
            front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/female/172.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/172.png',
            front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/female/172.png',
          },
          'x-y': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/172.png',
            front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/female/172.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/172.png',
            front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/female/172.png',
          },
        },
        'generation-vii': {
          icons: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/172.png',
            front_female: null,
          },
          'ultra-sun-ultra-moon': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/172.png',
            front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/female/172.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/172.png',
            front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/female/172.png',
          },
        },
        'generation-viii': {
          icons: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/172.png',
            front_female: null,
          },
        },
      },
    },
    stats: [
      {
        base_stat: 20,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 15,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 60,
        effort: 1,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'electric',
          url: 'https://pokeapi.co/api/v2/type/13/',
        },
      },
    ],
    weight: 20,
  },
};

export const mockPikachuApiResponse = {
  data: {
    abilities: [
      {
        ability: {
          name: 'static',
          url: 'https://pokeapi.co/api/v2/ability/9/',
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: 'lightning-rod',
          url: 'https://pokeapi.co/api/v2/ability/31/',
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 112,
    cries: {
      latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg',
      legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/25.ogg',
    },
    forms: [
      {
        name: 'pikachu',
        url: 'https://pokeapi.co/api/v2/pokemon-form/25/',
      },
    ],
    game_indices: [
      {
        game_index: 25,
        version: {
          name: 'red',
          url: 'https://pokeapi.co/api/v2/version/1/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'blue',
          url: 'https://pokeapi.co/api/v2/version/2/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'yellow',
          url: 'https://pokeapi.co/api/v2/version/3/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'gold',
          url: 'https://pokeapi.co/api/v2/version/4/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'silver',
          url: 'https://pokeapi.co/api/v2/version/5/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'crystal',
          url: 'https://pokeapi.co/api/v2/version/6/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'ruby',
          url: 'https://pokeapi.co/api/v2/version/7/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'sapphire',
          url: 'https://pokeapi.co/api/v2/version/8/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'emerald',
          url: 'https://pokeapi.co/api/v2/version/9/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'firered',
          url: 'https://pokeapi.co/api/v2/version/10/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'leafgreen',
          url: 'https://pokeapi.co/api/v2/version/11/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'diamond',
          url: 'https://pokeapi.co/api/v2/version/12/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'pearl',
          url: 'https://pokeapi.co/api/v2/version/13/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'platinum',
          url: 'https://pokeapi.co/api/v2/version/14/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'heartgold',
          url: 'https://pokeapi.co/api/v2/version/15/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'soulsilver',
          url: 'https://pokeapi.co/api/v2/version/16/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'black',
          url: 'https://pokeapi.co/api/v2/version/17/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'white',
          url: 'https://pokeapi.co/api/v2/version/18/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'black-2',
          url: 'https://pokeapi.co/api/v2/version/21/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'white-2',
          url: 'https://pokeapi.co/api/v2/version/22/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'sun',
          url: 'https://pokeapi.co/api/v2/version/27/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'moon',
          url: 'https://pokeapi.co/api/v2/version/28/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'ultra-sun',
          url: 'https://pokeapi.co/api/v2/version/29/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'ultra-moon',
          url: 'https://pokeapi.co/api/v2/version/30/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        game_index: 25,
        version: {
          name: 'legends-arceus',
          url: 'https://pokeapi.co/api/v2/version/39/',
        },
      },
    ],
    height: 4,
    held_items: [
      {
        item: {
          name: 'oran-berry',
          url: 'https://pokeapi.co/api/v2/item/132/',
        },
        version_details: [
          {
            rarity: 50,
            version: {
              name: 'ruby',
              url: 'https://pokeapi.co/api/v2/version/7/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'sapphire',
              url: 'https://pokeapi.co/api/v2/version/8/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'emerald',
              url: 'https://pokeapi.co/api/v2/version/9/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'firered',
              url: 'https://pokeapi.co/api/v2/version/10/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'leafgreen',
              url: 'https://pokeapi.co/api/v2/version/11/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'diamond',
              url: 'https://pokeapi.co/api/v2/version/12/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'pearl',
              url: 'https://pokeapi.co/api/v2/version/13/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'platinum',
              url: 'https://pokeapi.co/api/v2/version/14/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'heartgold',
              url: 'https://pokeapi.co/api/v2/version/15/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'soulsilver',
              url: 'https://pokeapi.co/api/v2/version/16/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'black',
              url: 'https://pokeapi.co/api/v2/version/17/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'white',
              url: 'https://pokeapi.co/api/v2/version/18/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'black-2',
              url: 'https://pokeapi.co/api/v2/version/21/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'white-2',
              url: 'https://pokeapi.co/api/v2/version/22/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'x',
              url: 'https://pokeapi.co/api/v2/version/23/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'y',
              url: 'https://pokeapi.co/api/v2/version/24/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'omega-ruby',
              url: 'https://pokeapi.co/api/v2/version/25/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'alpha-sapphire',
              url: 'https://pokeapi.co/api/v2/version/26/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'sun',
              url: 'https://pokeapi.co/api/v2/version/27/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'moon',
              url: 'https://pokeapi.co/api/v2/version/28/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'ultra-sun',
              url: 'https://pokeapi.co/api/v2/version/29/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'ultra-moon',
              url: 'https://pokeapi.co/api/v2/version/30/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'lets-go-pikachu',
              url: 'https://pokeapi.co/api/v2/version/31/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'lets-go-eevee',
              url: 'https://pokeapi.co/api/v2/version/32/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'sword',
              url: 'https://pokeapi.co/api/v2/version/33/',
            },
          },
          {
            rarity: 50,
            version: {
              name: 'shield',
              url: 'https://pokeapi.co/api/v2/version/34/',
            },
          },
        ],
      },
      {
        item: {
          name: 'light-ball',
          url: 'https://pokeapi.co/api/v2/item/213/',
        },
        version_details: [
          {
            rarity: 5,
            version: {
              name: 'ruby',
              url: 'https://pokeapi.co/api/v2/version/7/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'sapphire',
              url: 'https://pokeapi.co/api/v2/version/8/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'emerald',
              url: 'https://pokeapi.co/api/v2/version/9/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'firered',
              url: 'https://pokeapi.co/api/v2/version/10/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'leafgreen',
              url: 'https://pokeapi.co/api/v2/version/11/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'diamond',
              url: 'https://pokeapi.co/api/v2/version/12/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'pearl',
              url: 'https://pokeapi.co/api/v2/version/13/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'platinum',
              url: 'https://pokeapi.co/api/v2/version/14/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'heartgold',
              url: 'https://pokeapi.co/api/v2/version/15/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'soulsilver',
              url: 'https://pokeapi.co/api/v2/version/16/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'black',
              url: 'https://pokeapi.co/api/v2/version/17/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'white',
              url: 'https://pokeapi.co/api/v2/version/18/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'black-2',
              url: 'https://pokeapi.co/api/v2/version/21/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'white-2',
              url: 'https://pokeapi.co/api/v2/version/22/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'x',
              url: 'https://pokeapi.co/api/v2/version/23/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'y',
              url: 'https://pokeapi.co/api/v2/version/24/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'omega-ruby',
              url: 'https://pokeapi.co/api/v2/version/25/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'alpha-sapphire',
              url: 'https://pokeapi.co/api/v2/version/26/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'sun',
              url: 'https://pokeapi.co/api/v2/version/27/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'moon',
              url: 'https://pokeapi.co/api/v2/version/28/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'ultra-sun',
              url: 'https://pokeapi.co/api/v2/version/29/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'ultra-moon',
              url: 'https://pokeapi.co/api/v2/version/30/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'lets-go-pikachu',
              url: 'https://pokeapi.co/api/v2/version/31/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'lets-go-eevee',
              url: 'https://pokeapi.co/api/v2/version/32/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'sword',
              url: 'https://pokeapi.co/api/v2/version/33/',
            },
          },
          {
            rarity: 5,
            version: {
              name: 'shield',
              url: 'https://pokeapi.co/api/v2/version/34/',
            },
          },
        ],
      },
    ],
    id: 25,
    is_default: true,
    location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/25/encounters',
    moves: [
      {
        move: {
          name: 'mega-punch',
          url: 'https://pokeapi.co/api/v2/move/5/',
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: 'machine',
              url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
            },
            version_group: {
              name: 'red-blue',
              url: 'https://pokeapi.co/api/v2/version-group/1/',
            },
          },
        ],
      },
    ],
    name: 'pikachu',
    order: 35,
    past_abilities: [],
    past_types: [],
    species: {
      name: 'pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon-species/25/',
    },
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
      back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png',
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png',
      back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png',
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png',
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png',
      front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png',
      other: {
        dream_world: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
          front_female: null,
        },
        home: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png',
          front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/female/25.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/25.png',
          front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/female/25.png',
        },
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/25.png',
        },
      },
      versions: {
        'generation-i': {
          'red-blue': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/25.png',
            back_gray: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/25.png',
            back_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/transparent/25.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/25.png',
            front_gray: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/25.png',
            front_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/25.png',
          },
          yellow: {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/25.png',
            back_gray: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/25.png',
            back_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/transparent/25.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/25.png',
            front_gray: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/25.png',
            front_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/25.png',
          },
        },
        'generation-ii': {
          crystal: {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/25.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/25.png',
            back_shiny_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/transparent/25.png',
            back_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/transparent/25.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/25.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/25.png',
            front_shiny_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/transparent/25.png',
            front_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/25.png',
          },
          gold: {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/25.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/25.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/25.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/25.png',
          },
          silver: {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/25.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/25.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/25.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/25.png',
          },
        },
        'generation-iii': {
          emerald: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/25.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/25.png',
          },
          'firered-leafgreen': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/25.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/25.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/25.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/25.png',
          },
          'ruby-sapphire': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/25.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/25.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/25.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/25.png',
          },
        },
        'generation-iv': {
          'diamond-pearl': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/25.png',
            back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/female/25.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/25.png',
            back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/female/25.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/25.png',
            front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/female/25.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/25.png',
            front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/female/25.png',
          },
          'heartgold-soulsilver': {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/25.png',
            back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/female/25.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/25.png',
            back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/female/25.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/25.png',
            front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/female/25.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/25.png',
            front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/female/25.png',
          },
          platinum: {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/25.png',
            back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/female/25.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/25.png',
            back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/female/25.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/25.png',
            front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/female/25.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/25.png',
            front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/female/25.png',
          },
        },
        'generation-v': {
          'black-white': {
            animated: {
              back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/25.gif',
              back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/female/25.gif',
              back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/25.gif',
              back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/female/25.gif',
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif',
              front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/female/25.gif',
              front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/25.gif',
              front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/female/25.gif',
            },
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/25.png',
            back_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/female/25.png',
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/25.png',
            back_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/female/25.png',
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/25.png',
            front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/female/25.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/25.png',
            front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/female/25.png',
          },
        },
        'generation-vi': {
          'omegaruby-alphasapphire': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/25.png',
            front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/female/25.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/25.png',
            front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/female/25.png',
          },
          'x-y': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/25.png',
            front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/female/25.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/25.png',
            front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/female/25.png',
          },
        },
        'generation-vii': {
          icons: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/25.png',
            front_female: null,
          },
          'ultra-sun-ultra-moon': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/25.png',
            front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/female/25.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/25.png',
            front_shiny_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/female/25.png',
          },
        },
        'generation-viii': {
          icons: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/25.png',
            front_female: null,
          },
        },
      },
    },
    stats: [
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 55,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 90,
        effort: 2,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'electric',
          url: 'https://pokeapi.co/api/v2/type/13/',
        },
      },
    ],
    weight: 60,
  },
};

export const mockPikachuSpeciesResponse = {
  data: {
    base_happiness: 70,
    capture_rate: 190,
    color: {
      name: 'yellow',
      url: 'https://pokeapi.co/api/v2/pokemon-color/10/',
    },
    egg_groups: [
      {
        name: 'ground',
        url: 'https://pokeapi.co/api/v2/egg-group/5/',
      },
      {
        name: 'fairy',
        url: 'https://pokeapi.co/api/v2/egg-group/6/',
      },
    ],
    evolution_chain: {
      url: 'https://pokeapi.co/api/v2/evolution-chain/10/',
    },
    evolves_from_species: {
      name: 'pichu',
      url: 'https://pokeapi.co/api/v2/pokemon-species/172/',
    },
    flavor_text_entries: [
      {
        flavor_text: 'When several of\nthese POKéMON\ngather, their\felectricity could\nbuild and cause\nlightning storms.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'red',
          url: 'https://pokeapi.co/api/v2/version/1/',
        },
      },
      {
        flavor_text: 'When several of\nthese POKéMON\ngather, their\felectricity could\nbuild and cause\nlightning storms.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'blue',
          url: 'https://pokeapi.co/api/v2/version/2/',
        },
      },
      {
        flavor_text: 'It keeps its tail\nraised to monitor\nits surroundings.\fIf you yank its\ntail, it will try\nto bite you.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'yellow',
          url: 'https://pokeapi.co/api/v2/version/3/',
        },
      },
      {
        flavor_text: 'This intelligent\nPOKéMON roasts\nhard BERRIES with\felectricity to\nmake them tender\nenough to eat.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'gold',
          url: 'https://pokeapi.co/api/v2/version/4/',
        },
      },
      {
        flavor_text: 'It raises its tail\nto check its sur­\nroundings. The\ftail is sometimes\nstruck by light­\nning in this pose.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'silver',
          url: 'https://pokeapi.co/api/v2/version/5/',
        },
      },
      {
        flavor_text: 'When it is anger­\ned, it immediately\ndischarges the\fenergy stored in\nthe pouches in\nits cheeks.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'crystal',
          url: 'https://pokeapi.co/api/v2/version/6/',
        },
      },
      {
        flavor_text: 'Whenever PIKACHU comes\nacross something new, it blasts it with a jolt\nof electricity.\fIf you come across a blackened berry,\nit’s evidence that this POKéMON\nmistook the intensity of its charge.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'ruby',
          url: 'https://pokeapi.co/api/v2/version/7/',
        },
      },
      {
        flavor_text: 'This POKéMON has electricity-storing\npouches on its cheeks. These appear to\nbecome electrically charged during the\fight while PIKACHU sleeps.\nIt occasionally discharges electricity\nwhen it is dozy after waking up.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'sapphire',
          url: 'https://pokeapi.co/api/v2/version/8/',
        },
      },
      {
        flavor_text: 'It stores electricity in the electric sacs\non its cheeks. When it releases pent-up\nenergy in a burst, the electric power is\nequal to a lightning bolt.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'emerald',
          url: 'https://pokeapi.co/api/v2/version/9/',
        },
      },
      {
        flavor_text: 'It has small electric sacs on both its\ncheeks. If threatened, it looses electric\ncharges from the sacs.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'firered',
          url: 'https://pokeapi.co/api/v2/version/10/',
        },
      },
      {
        flavor_text: 'When several of these POKéMON gather,\ntheir electricity can build and cause\nlightning storms.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'leafgreen',
          url: 'https://pokeapi.co/api/v2/version/11/',
        },
      },
      {
        flavor_text: 'It lives in forests with others.\nIt stores electricity in the\npouches on its cheeks.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'diamond',
          url: 'https://pokeapi.co/api/v2/version/12/',
        },
      },
      {
        flavor_text: 'If it looses crackling power from\nthe electric pouches on its cheeks,\nit is being wary.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'pearl',
          url: 'https://pokeapi.co/api/v2/version/13/',
        },
      },
      {
        flavor_text: 'It occasionally uses an electric shock\nto recharge a fellow PIKACHU that is in a\nweakened state.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'platinum',
          url: 'https://pokeapi.co/api/v2/version/14/',
        },
      },
      {
        flavor_text: 'This intelligent Pokémon roasts\nhard berries with electricity to\nmake them tender enough to eat.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'heartgold',
          url: 'https://pokeapi.co/api/v2/version/15/',
        },
      },
      {
        flavor_text: 'It raises its tail to check its\nsurroundings. The tail is sometimes\nstruck by lightning in this pose.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'soulsilver',
          url: 'https://pokeapi.co/api/v2/version/16/',
        },
      },
      {
        flavor_text: 'It occasionally uses an electric\nshock to recharge a fellow Pikachu\nthat is in a weakened state.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'black',
          url: 'https://pokeapi.co/api/v2/version/17/',
        },
      },
      {
        flavor_text: 'It occasionally uses an electric\nshock to recharge a fellow Pikachu\nthat is in a weakened state.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'white',
          url: 'https://pokeapi.co/api/v2/version/18/',
        },
      },
      {
        flavor_text: 'It occasionally uses an electric\nshock to recharge a fellow Pikachu\nthat is in a weakened state.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/version/21/',
        },
        version: {
          name: 'black-2',
          url: 'https://pokeapi.co/api/v2/version/21/',
        },
      },
      {
        flavor_text: 'It occasionally uses an electric\nshock to recharge a fellow Pikachu\nthat is in a weakened state.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'white-2',
          url: 'https://pokeapi.co/api/v2/version/22/',
        },
      },
      {
        flavor_text: 'It raises its tail to check its surroundings.\nThe tail is sometimes struck by lightning\nin this pose.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text: 'It has small electric sacs on both its cheeks.\nIf threatened, it looses electric charges from\nthe sacs.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text: 'Whenever Pikachu comes across something new,\nit blasts it with a jolt of electricity. If you come across a\nblackened berry, it’s evidence that this Pokémon mistook the\nintensity of its charge.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text: 'This Pokémon has electricity-storing pouches on its cheeks.\nThese appear to become electrically charged during the night\nwhile Pikachu sleeps. It occasionally discharges electricity\nwhen it is dozy after waking up.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text: 'A plan was recently announced to gather\nmany Pikachu and make an electric power plant.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'sun',
          url: 'https://pokeapi.co/api/v2/version/27/',
        },
      },
      {
        flavor_text: 'It’s in its nature to store up electricity. It feels\nstressed now and then if it’s unable to fully\ndischarge the electricity.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'moon',
          url: 'https://pokeapi.co/api/v2/version/28/',
        },
      },
      {
        flavor_text: 'Its nature is to store up electricity.\nForests where nests of Pikachu live are dangerous,\nsince the trees are so often struck by lightning.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'ultra-sun',
          url: 'https://pokeapi.co/api/v2/version/29/',
        },
      },
      {
        flavor_text: 'While sleeping, it generates electricity in the\nsacs in its cheeks. If it’s not getting enough\nsleep, it will be able to use only weak electricity.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'ultra-moon',
          url: 'https://pokeapi.co/api/v2/version/30/',
        },
      },
      {
        flavor_text: 'This forest-dwelling Pokémon stores electricity\nin its cheeks, so you’ll feel a tingly shock\nif you touch it.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text: 'This forest-dwelling Pokémon stores electricity\nin its cheeks, so you’ll feel a tingly shock\nif you touch it.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text: 'Pikachu that can generate powerful electricity\nhave cheek sacs that are extra soft and\nsuper stretchy.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text: 'When Pikachu meet, they’ll touch their\ntails together and exchange electricity through them\nas a form of greeting.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text: 'Possesses cheek sacs in which it stores electricity. This\nclever forest-dweller roasts tough berries with an electric shock before\nconsuming them.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'legends-arceus',
          url: 'https://pokeapi.co/api/v2/version/39/',
        },
      },
    ],
    form_descriptions: [],
    forms_switchable: false,
    gender_rate: 4,
    genera: [
      {
        genus: 'Mouse Pokémon',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
      },
    ],
    generation: {
      name: 'generation-i',
      url: 'https://pokeapi.co/api/v2/generation/1/',
    },
    growth_rate: {
      name: 'medium',
      url: 'https://pokeapi.co/api/v2/growth-rate/2/',
    },
    habitat: {
      name: 'forest',
      url: 'https://pokeapi.co/api/v2/pokemon-habitat/2/',
    },
    has_gender_differences: true,
    hatch_counter: 10,
    id: 25,
    is_baby: false,
    is_legendary: false,
    is_mythical: false,
    name: 'pikachu',
    names: [
      {
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        name: 'ピカチュウ',
      },
      {
        language: {
          name: 'roomaji',
          url: 'https://pokeapi.co/api/v2/language/2/',
        },
        name: 'Pikachu',
      },
      {
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        name: '피카츄',
      },
      {
        language: {
          name: 'zh-Hant',
          url: 'https://pokeapi.co/api/v2/language/4/',
        },
        name: '皮卡丘',
      },
      {
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        name: 'Pikachu',
      },
      {
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        name: 'Pikachu',
      },
      {
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        name: 'Pikachu',
      },
      {
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        name: 'Pikachu',
      },
      {
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        name: 'Pikachu',
      },
      {
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        name: 'ピカチュウ',
      },
      {
        language: {
          name: 'zh-Hans',
          url: 'https://pokeapi.co/api/v2/language/12/',
        },
        name: '皮卡丘',
      },
    ],
    order: 26,
    pal_park_encounters: [
      {
        area: {
          name: 'forest',
          url: 'https://pokeapi.co/api/v2/pal-park-area/1/',
        },
        base_score: 80,
        rate: 10,
      },
    ],
    pokedex_numbers: [
      {
        entry_number: 25,
        pokedex: {
          name: 'national',
          url: 'https://pokeapi.co/api/v2/pokedex/1/',
        },
      },
      {
        entry_number: 25,
        pokedex: {
          name: 'kanto',
          url: 'https://pokeapi.co/api/v2/pokedex/2/',
        },
      },
      {
        entry_number: 22,
        pokedex: {
          name: 'original-johto',
          url: 'https://pokeapi.co/api/v2/pokedex/3/',
        },
      },
      {
        entry_number: 156,
        pokedex: {
          name: 'hoenn',
          url: 'https://pokeapi.co/api/v2/pokedex/4/',
        },
      },
      {
        entry_number: 104,
        pokedex: {
          name: 'original-sinnoh',
          url: 'https://pokeapi.co/api/v2/pokedex/5/',
        },
      },
      {
        entry_number: 104,
        pokedex: {
          name: 'extended-sinnoh',
          url: 'https://pokeapi.co/api/v2/pokedex/6/',
        },
      },
      {
        entry_number: 22,
        pokedex: {
          name: 'updated-johto',
          url: 'https://pokeapi.co/api/v2/pokedex/7/',
        },
      },
      {
        entry_number: 16,
        pokedex: {
          name: 'conquest-gallery',
          url: 'https://pokeapi.co/api/v2/pokedex/11/',
        },
      },
      {
        entry_number: 36,
        pokedex: {
          name: 'kalos-central',
          url: 'https://pokeapi.co/api/v2/pokedex/12/',
        },
      },
      {
        entry_number: 163,
        pokedex: {
          name: 'updated-hoenn',
          url: 'https://pokeapi.co/api/v2/pokedex/15/',
        },
      },
      {
        entry_number: 25,
        pokedex: {
          name: 'original-alola',
          url: 'https://pokeapi.co/api/v2/pokedex/16/',
        },
      },
      {
        entry_number: 25,
        pokedex: {
          name: 'original-melemele',
          url: 'https://pokeapi.co/api/v2/pokedex/17/',
        },
      },
      {
        entry_number: 32,
        pokedex: {
          name: 'updated-alola',
          url: 'https://pokeapi.co/api/v2/pokedex/21/',
        },
      },
      {
        entry_number: 32,
        pokedex: {
          name: 'updated-melemele',
          url: 'https://pokeapi.co/api/v2/pokedex/22/',
        },
      },
      {
        entry_number: 25,
        pokedex: {
          name: 'lets-go-kanto',
          url: 'https://pokeapi.co/api/v2/pokedex/26/',
        },
      },
      {
        entry_number: 194,
        pokedex: {
          name: 'galar',
          url: 'https://pokeapi.co/api/v2/pokedex/27/',
        },
      },
      {
        entry_number: 85,
        pokedex: {
          name: 'isle-of-armor',
          url: 'https://pokeapi.co/api/v2/pokedex/28/',
        },
      },
      {
        entry_number: 56,
        pokedex: {
          name: 'hisui',
          url: 'https://pokeapi.co/api/v2/pokedex/30/',
        },
      },
      {
        entry_number: 74,
        pokedex: {
          name: 'paldea',
          url: 'https://pokeapi.co/api/v2/pokedex/31/',
        },
      },
      {
        entry_number: 21,
        pokedex: {
          name: 'kitakami',
          url: 'https://pokeapi.co/api/v2/pokedex/32/',
        },
      },
      {
        entry_number: 53,
        pokedex: {
          name: 'lumiose-city',
          url: 'https://pokeapi.co/api/v2/pokedex/34/',
        },
      },
    ],
    shape: {
      name: 'quadruped',
      url: 'https://pokeapi.co/api/v2/pokemon-shape/8/',
    },
    varieties: [
      {
        is_default: true,
        pokemon: {
          name: 'pikachu',
          url: 'https://pokeapi.co/api/v2/pokemon/25/',
        },
      },
      {
        is_default: false,
        pokemon: {
          name: 'pikachu-rock-star',
          url: 'https://pokeapi.co/api/v2/pokemon/10080/',
        },
      },
      {
        is_default: false,
        pokemon: {
          name: 'pikachu-belle',
          url: 'https://pokeapi.co/api/v2/pokemon/10081/',
        },
      },
      {
        is_default: false,
        pokemon: {
          name: 'pikachu-pop-star',
          url: 'https://pokeapi.co/api/v2/pokemon/10082/',
        },
      },
      {
        is_default: false,
        pokemon: {
          name: 'pikachu-phd',
          url: 'https://pokeapi.co/api/v2/pokemon/10083/',
        },
      },
      {
        is_default: false,
        pokemon: {
          name: 'pikachu-libre',
          url: 'https://pokeapi.co/api/v2/pokemon/10084/',
        },
      },
      {
        is_default: false,
        pokemon: {
          name: 'pikachu-cosplay',
          url: 'https://pokeapi.co/api/v2/pokemon/10085/',
        },
      },
      {
        is_default: false,
        pokemon: {
          name: 'pikachu-original-cap',
          url: 'https://pokeapi.co/api/v2/pokemon/10094/',
        },
      },
      {
        is_default: false,
        pokemon: {
          name: 'pikachu-hoenn-cap',
          url: 'https://pokeapi.co/api/v2/pokemon/10095/',
        },
      },
      {
        is_default: false,
        pokemon: {
          name: 'pikachu-sinnoh-cap',
          url: 'https://pokeapi.co/api/v2/pokemon/10096/',
        },
      },
      {
        is_default: false,
        pokemon: {
          name: 'pikachu-unova-cap',
          url: 'https://pokeapi.co/api/v2/pokemon/10097/',
        },
      },
      {
        is_default: false,
        pokemon: {
          name: 'pikachu-kalos-cap',
          url: 'https://pokeapi.co/api/v2/pokemon/10098/',
        },
      },
    ],
  },
};

export const mockPichuEvolutionChainResponse = {
  data: {
    baby_trigger_item: null,
    chain: {
      evolution_details: [],
      evolves_to: [
        {
          evolution_details: [
            {
              base_form_id: null,
              gender: null,
              held_item: null,
              item: null,
              known_move: null,
              known_move_type: null,
              location: null,
              min_affection: null,
              min_beauty: null,
              min_happiness: 220,
              min_level: null,
              needs_overworld_rain: false,
              party_species: null,
              party_type: null,
              region_id: null,
              relative_physical_stats: null,
              time_of_day: '',
              trade_species: null,
              trigger: {
                name: 'level-up',
                url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
              },
              turn_upside_down: false,
            },
          ],
          evolves_to: [
            {
              evolution_details: [
                {
                  base_form_id: null,
                  gender: null,
                  held_item: null,
                  item: {
                    name: 'thunder-stone',
                    url: 'https://pokeapi.co/api/v2/item/83/',
                  },
                  known_move: null,
                  known_move_type: null,
                  location: null,
                  min_affection: null,
                  min_beauty: null,
                  min_happiness: null,
                  min_level: null,
                  needs_overworld_rain: false,
                  party_species: null,
                  party_type: null,
                  region_id: null,
                  relative_physical_stats: null,
                  time_of_day: '',
                  trade_species: null,
                  trigger: {
                    name: 'use-item',
                    url: 'https://pokeapi.co/api/v2/evolution-trigger/3/',
                  },
                  turn_upside_down: false,
                },
              ],
              evolves_to: [],
              is_baby: false,
              species: {
                name: 'raichu',
                url: 'https://pokeapi.co/api/v2/pokemon-species/26/',
              },
            },
          ],
          is_baby: false,
          species: {
            name: 'pikachu',
            url: 'https://pokeapi.co/api/v2/pokemon-species/25/',
          },
        },
      ],
      is_baby: true,
      species: {
        name: 'pichu',
        url: 'https://pokeapi.co/api/v2/pokemon-species/172/',
      },
    },
    id: 10,
  },
};

// ===== EDGE CASES FOR TESTING =====

// Mock API response for a Pokemon with no types (for testing edge cases)
export const mockPokemonWithNoTypesApiResponse = {
  data: {
    id: 999,
    name: 'notypemon',
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/999.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/999.png',
        },
      },
    },
    types: [], // No types
    stats: [
      { base_stat: 50, stat: { name: 'hp' } },
      { base_stat: 50, stat: { name: 'attack' } },
      { base_stat: 50, stat: { name: 'defense' } },
      { base_stat: 50, stat: { name: 'special-attack' } },
      { base_stat: 50, stat: { name: 'special-defense' } },
      { base_stat: 50, stat: { name: 'speed' } },
    ],
    abilities: [],
    height: 10,
    weight: 100,
    base_experience: 100,
    species: {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon-species/1/'
    }
  },
};