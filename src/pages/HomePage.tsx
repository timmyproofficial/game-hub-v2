import { Box, Grid, Show, GridItem, HStack } from '@chakra-ui/react';

import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`, // wider than 1024px
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      {/* <GridItem area="nav">
    <Navbar />
  </GridItem> */}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          {/* <GenreList
        selectedGenre={selectedGenre}
        onSelectGenre={(genreId) => setSelectedGenre(genreId)}
      /> */}
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          {/* <PlatformSelector
      selectedPlatform={selectedPlatform}
      onSelectPlatform={(platformId) => setSelectedPlatform(platformId)}
    />
    <GameGrid
      selectedGenre={selectedGenre}
      selectedPlatform={selectedPlatform}
    /> */}

          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
