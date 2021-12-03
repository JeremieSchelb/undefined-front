import React from 'react'

let navItems = [
  { name: 'accueil', link: 'home' },
  { name: 'sauveteurs', link: 'rescuer' },
  { name: 'sorties en mer', link: 'rescue' },
  { name: 'stations', link: 'stations' },
  { name: 'naufragés', link: 'castaway' },
  { name: 'bateaux', link: 'boats' },
  { name: 'glossaire', link: 'glossaire' },
]
const NavigationContext = React.createContext(navItems)

export { navItems, NavigationContext }
