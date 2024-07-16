import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './entities/Genre';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './entities/Platform';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';
import useGameQueryStore from './store';

// undefined: the absence of a value
// null: the intenational absence of a value

function App() {
  return <div></div>;
}

export default App;
