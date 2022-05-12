import React from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';

const SchedulesCal = () => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <Container>
          <FullCalendar
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin]}
            events={[{ title: 'event 1', date: '2022-05-15' }]}
          />
        </Container>
      </Main>
    </Box>
  );
};

export default SchedulesCal;
