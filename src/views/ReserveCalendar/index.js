import React from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import koLocale from '@fullcalendar/core/locales/ko';

import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';

const ReserveCalendar = () => {
  const getCalendarData = async (fetchInfo, successCallback) => {
    console.log(fetchInfo);
    try {
      successCallback([
        { title: 'event1', date: '2022-05-15', color: '#e65cae' },
        { title: 'event2', date: '2022-05-15', color: '#76b04f' },
        { title: 'event2', date: '2022-05-17', color: '#c4d134' },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <Container>
          <FullCalendar
            locale={koLocale}
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin]}
            // events={[{ title: 'event 1', date: '2022-05-15' }]}
            events={(fetchInfo, successCallback, failureCallback) =>
              getCalendarData(fetchInfo, successCallback, failureCallback)
            }
            eventColor="#378006"
          />
        </Container>
      </Main>
    </Box>
  );
};

export default ReserveCalendar;
