import React from 'react';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';

import {
  Advantages,
  Articles,
  AskExpert,
  FeaturedProperties,
  Hero,
  Partners,
  Places,
  Reviews,
  Features,
  Search,
  Teaser,
} from './components';

const Rental = () => {
  return (
    <Main colorInvert={true}>
      <Hero />
      {/* <Box bgcolor={'alternate.main'}>
        <Container>
          <Search />
        </Container>
      </Box> */}
      {/* <Container>
        <Teaser />
      </Container> */}
      {/* <Container sx={{ paddingTop: '0 !important' }}>
        <Articles />
      </Container> */}
      <Box bgcolor={'alternate.main'}>
        <Container>
          <FeaturedProperties />
        </Container>
        <Container>
          <Features />
        </Container>
      </Box>
      {/* <Container>
        <Places />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Reviews />
        </Container>
      </Box>
      <Container>
        <Partners />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Advantages />
        </Container>
      </Box>
      <Container>
        <AskExpert />
      </Container> */}
    </Main>
  );
};

export default Rental;
