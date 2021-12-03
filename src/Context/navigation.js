import React from 'react'

let navItems = [
  { name: 'accueil', link: '/' },
  { name: 'sauveteurs', link: 'rescuers' },
  { name: 'sorties en mer', link: 'rescues' },
  { name: 'stations', link: 'stations' },
  { name: 'naufrages', link: 'castaways' },
  { name: 'bateaux', link: 'boats' },
  //   { name: 'glossaire', link: 'glossaire' },
]
const NavigationContext = React.createContext(navItems)

export { navItems, NavigationContext }
