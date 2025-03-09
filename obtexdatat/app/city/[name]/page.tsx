import Link from 'next/link';

interface Bar {
  id: string;
  name: string;
  address: string;
  description: string;
  games: string[];
}

const cityBars: Record<string, Bar[]> = {
  'chicago': [
    {
      id: 'chi1',
      name: 'Emporium Arcade Bar',
      address: '1366 N Milwaukee Ave, Chicago, IL',
      description: 'Spacious arcade bar featuring classic games and craft beers',
      games: ['Pinball', 'Street Fighter II', 'NBA Jam', 'Mortal Kombat']
    },
    {
      id: 'chi2',
      name: 'Headquarters Beercade',
      address: '213 W Institute Pl, Chicago, IL',
      description: 'Free classic arcade games with extensive beer selection',
      games: ['Pac-Man', 'Donkey Kong', 'Galaga', 'Space Invaders']
    }
  ],
  'los-angeles': [
    {
      id: 'la1',
      name: 'Button Mash',
      address: '1391 Sunset Blvd, Los Angeles, CA',
      description: 'Asian fusion restaurant with classic arcade games',
      games: ['Metal Slug', 'Street Fighter III', 'Teenage Mutant Ninja Turtles', 'Puzzle Bobble']
    },
    {
      id: 'la2',
      name: 'EightyTwo',
      address: '707 E 4th Pl, Los Angeles, CA',
      description: 'Vintage arcade games and pinball machines in an artistic space',
      games: ['Pinball', 'Ms. Pac-Man', 'Galaga', 'Donkey Kong']
    }
  ],
  'phoenix': [
    {
      id: 'phx1',
      name: 'Cobra Arcade Bar',
      address: '801 N 2nd St, Phoenix, AZ',
      description: 'Downtown arcade bar with rotating game selection',
      games: ['Mortal Kombat', 'NBA Jam', 'Time Crisis 3', 'Dance Dance Revolution']
    },
    {
      id: 'phx2',
      name: 'The Grid: Games and Growlers',
      address: '525 S Gilbert Rd, Mesa, AZ',
      description: 'Family-friendly arcade with craft beer selection',
      games: ['Mario Kart', 'Street Fighter II', 'Pac-Man', 'Pinball']
    }
  ],
  'philadelphia': [
    {
      id: 'phi1',
      name: 'Barcade Philadelphia',
      address: '1114 Frankford Ave, Philadelphia, PA',
      description: 'Classic arcade games in a retro setting',
      games: ['Asteroids', 'Centipede', 'Defender', 'Dig Dug']
    },
    {
      id: 'phi2',
      name: 'Keystone Mini-Golf & Arcade',
      address: '161 Cecil B Moore Ave, Philadelphia, PA',
      description: 'Indoor mini-golf course with classic arcade games',
      games: ['Pinball', 'Skeeball', 'Air Hockey', 'Racing Games']
    }
  ],
  'san-antonio': [
    {
      id: 'sa1',
      name: 'Slackers Bar',
      address: '126 W Rector St #136, San Antonio, TX',
      description: 'Sports bar with arcade games and gaming consoles',
      games: ['Street Fighter II', 'Mario Kart', 'Soul Calibur', 'Tekken']
    },
    {
      id: 'sa2',
      name: 'Kung Fu Saloon',
      address: '5531 N Loop 1604 W, San Antonio, TX',
      description: 'Asian-themed arcade bar with vintage games',
      games: ['Double Dragon', 'Mortal Kombat', 'NBA Jam', 'Pac-Man']
    }
  ],
  'san-diego': [
    {
      id: 'sd1',
      name: 'Coin-Op Game Room',
      address: '3926 30th St, San Diego, CA',
      description: 'Retro arcade bar with craft cocktails',
      games: ['Pinball', 'Street Fighter II', 'Teenage Mutant Ninja Turtles', 'The Simpsons']
    },
    {
      id: 'sd2',
      name: 'Park & Rec',
      address: '4612 Park Blvd, San Diego, CA',
      description: 'Indoor/outdoor venue with arcade games',
      games: ['Skee-Ball', 'Ms. Pac-Man', 'Galaga', 'Pinball']
    }
  ],
  'dallas': [
    {
      id: 'dal1',
      name: 'Free Play Arcade',
      address: '1730 E Belt Line Rd, Richardson, TX',
      description: 'All-you-can-play classic arcade games',
      games: ['Donkey Kong', 'Galaga', 'Street Fighter II', 'Mortal Kombat']
    },
    {
      id: 'dal2',
      name: 'Cidercade Dallas',
      address: '2777 Irving Blvd, Dallas, TX',
      description: 'Cider brewery with huge arcade collection',
      games: ['Pinball', 'Dance Dance Revolution', 'Mario Kart', 'Guitar Hero']
    }
  ],
  'jacksonville': [
    {
      id: 'jax1',
      name: 'Arcade Bar Jax',
      address: '2220 County Rd 210 W, Jacksonville, FL',
      description: 'Modern arcade bar with classic games',
      games: ['Street Fighter II', 'Mortal Kombat', 'NBA Jam', 'Pac-Man']
    },
    {
      id: 'jax2',
      name: 'Pinball Palace',
      address: '14476 Beach Blvd, Jacksonville, FL',
      description: 'Extensive collection of pinball machines',
      games: ['Pinball', 'Skee-Ball', 'Air Hockey', 'Classic Arcade Games']
    }
  ],
  'austin': [
    {
      id: 'aus1',
      name: 'Pinballz Arcade',
      address: '8940 Research Blvd, Austin, TX',
      description: 'Massive arcade with new and classic games',
      games: ['Pinball', 'Dance Dance Revolution', 'Street Fighter II', 'Time Crisis']
    },
    {
      id: 'aus2',
      name: 'Arcade UFO',
      address: '515 E St Elmo Rd, Austin, TX',
      description: 'Japanese arcade games and fighting game tournaments',
      games: ['Street Fighter III', 'Guilty Gear', 'Initial D', 'Beatmania IIDX']
    }
  ],
  'fort-worth': [
    {
      id: 'fw1',
      name: 'Free Play Fort Worth',
      address: '1311 Lipscomb St, Fort Worth, TX',
      description: 'Retro arcade games with craft beer selection',
      games: ['Donkey Kong', 'Pac-Man', 'Galaga', 'Street Fighter II']
    },
    {
      id: 'fw2',
      name: 'Quarter Lounge',
      address: '114 S Jennings Ave, Fort Worth, TX',
      description: 'Classic arcade atmosphere with modern amenities',
      games: ['Mortal Kombat', 'NBA Jam', 'Teenage Mutant Ninja Turtles', 'The Simpsons']
    }
  ],
  'san-jose': [
    {
      id: 'sj1',
      name: 'AFKgg Gamer Lounge',
      address: '163 W Santa Clara St, San Jose, CA',
      description: 'Modern gaming lounge with classic arcade section',
      games: ['Street Fighter V', 'Dance Dance Revolution', 'Mario Kart', 'Tekken 7']
    },
    {
      id: 'sj2',
      name: 'Miniboss',
      address: '52 E Santa Clara St, San Jose, CA',
      description: 'Retro arcade bar with craft cocktails',
      games: ['Pinball', 'Metal Slug', 'Street Fighter II', 'Teenage Mutant Ninja Turtles']
    }
  ],
  'miami': [
    {
      id: 'mia1',
      name: '1UP Arcade Bar',
      address: '157 NW 24th St, Miami, FL',
      description: 'Modern arcade bar with retro gaming atmosphere',
      games: ['Dance Dance Revolution', 'Mario Kart', 'Time Crisis', 'Tekken']
    },
    {
      id: 'mia2',
      name: 'Arcade Odyssey',
      address: '12045 SW 117th Ave, Miami, FL',
      description: 'Family-friendly arcade with modern and classic games',
      games: ['Street Fighter III', 'Initial D', 'House of the Dead', 'Guitar Hero']
    }
  ],
  'new-york': [
    {
      id: 'ny1',
      name: 'Barcade',
      address: '388 Union Avenue, Brooklyn, NY',
      description: 'Classic arcade games with craft beer selection',
      games: ['Donkey Kong', 'Galaga', 'Frogger', 'Asteroids']
    },
    {
      id: 'ny2',
      name: 'Two-Bits Retro Arcade',
      address: '153 Essex St, New York, NY',
      description: 'Retro gaming paradise with modern twist',
      games: ['Street Fighter II', 'Mortal Kombat', 'NBA Jam', 'Pac-Man']
    }
  ],
  'houston': [
    {
      id: 'hou1',
      name: 'Joystix Classic Games',
      address: '1820 Franklin St, Houston, TX',
      description: 'Classic arcade and pinball paradise',
      games: ['Pinball', 'Street Fighter II', 'Ms. Pac-Man']
    },
    {
      id: 'hou2',
      name: 'The Game Preserve',
      address: '473 Sawdust Rd, Spring, TX',
      description: 'Massive collection of vintage arcade games',
      games: ['Dragon\'s Lair', 'Tron', 'Centipede', 'Defender']
    }
  ],
  'columbus': [
    {
      id: 'col1',
      name: '16-Bit Bar+Arcade',
      address: '254 S 4th St, Columbus, OH',
      description: 'Retro arcade bar with free classic games',
      games: ['Teenage Mutant Ninja Turtles', 'The Simpsons', 'X-Men']
    },
    {
      id: 'col2',
      name: 'Level One Bar + Arcade',
      address: '130 N Hamilton Rd, Columbus, OH',
      description: 'Modern arcade bar with extensive game collection',
      games: ['Mario Kart', 'Dance Dance Revolution', 'Guitar Hero']
    }
  ]
};

type Props = {
  params: { name: string }
}

export default function CityPage({ params }: Props) {
  const cityName = params.name.toLowerCase().replace(/[^a-z-]/g, '');
  const bars = cityBars[cityName] || [];

  if (!bars.length) {
    return (
      <div className="p-4">
        <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-2xl font-bold mb-4">City Not Found</h1>
        <p>Sorry, we don't have any arcade bars listed for this city.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-2xl font-bold mb-4 capitalize">{cityName.replace(/-/g, ' ')} Arcade Bars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bars.map((bar) => (
          <div key={bar.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{bar.name}</h2>
            <p className="text-gray-600 mb-2">{bar.address}</p>
            <p className="text-gray-700 mb-3">{bar.description}</p>
            <div>
              <h3 className="font-semibold mb-1">Featured Games:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {bar.games.map((game, index) => (
                  <li key={index}>{game}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}