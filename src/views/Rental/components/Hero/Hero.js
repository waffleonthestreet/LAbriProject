/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { alpha, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';
import Background1 from 'assets/bg1.jpg';

const Hero = () => {
  const theme = useTheme();
  let navigate = useNavigate();
  function handleClick() {
    navigate('/ReserveCalendar');
  }

  return (
    <Box
      minHeight={300}
      height={'auto'}
      position={'relative'}
      sx={{
        backgroundColor: theme.palette.alternate.main,
        background:
          'url(https://assets.maccarianagency.com/backgrounds/img26.jpg) no-repeat center',
        backgroundSize: 'cover',
        marginTop: -13,
        paddingTop: 13,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: alpha(theme.palette.primary.dark, 0.3),
          zIndex: 1,
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Box>
          <Box marginBottom={4} data-aos="fade-up">
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: 900,
                color: 'common.white',
              }}
            >
              라브리 펜션에 오신 것을 환영합니다
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.primary"
              sx={{
                fontWeight: 400,
                color: 'common.white',
              }}
            >
              라브리 펜션의 이야기를 둘러보시고
              <br />
              바다가 아름다운 마을 울진에 놀러오세요.
            </Typography>
          </Box>
          {/* <Box
            padding={{ xs: 3, sm: 6 }}
            width={1}
            component={Card}
            boxShadow={1}
            data-aos="fade-up"
          >
            <form noValidate autoComplete="off">
              <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
                <Box
                  width={1}
                  marginRight={{ xs: 0, md: 2 }}
                  marginBottom={{ xs: 2, md: 0 }}
                >
                  <TextField
                    sx={{
                      height: 54,
                    }}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Box
                            component={'svg'}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width={24}
                            height={24}
                            color={'primary.main'}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box>
                  <Button
                    sx={{ height: 54, whiteSpace: 'nowrap' }}
                    variant="contained"
                    color="primary"
                    size="medium"
                    fullWidth
                  >
                    Get srated
                  </Button>
                </Box>
              </Box>
            </form>
            <Box marginY={4} marginX={{ xs: -3, sm: -6 }}>
              <Divider />
            </Box>
            <Box>
              <Typography component="p" variant="body2" align="left">
                By clicking on "Get Started" you agree to our{' '}
                <Box
                  component="a"
                  href=""
                  color={theme.palette.text.primary}
                  fontWeight={'700'}
                >
                  Privacy Policy
                </Box>
                ,{' '}
                <Box
                  component="a"
                  href=""
                  color={theme.palette.text.primary}
                  fontWeight={'700'}
                >
                  Data Policy
                </Box>{' '}
                and{' '}
                <Box
                  component="a"
                  href=""
                  color={theme.palette.text.primary}
                  fontWeight={'700'}
                >
                  Cookie Policy
                </Box>
                .
              </Typography>
            </Box>
          </Box> */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Box
                padding={{ xs: 3, sm: 6 }}
                width={1}
                component={Card}
                boxShadow={4}
                data-aos="fade-up"
              >
                <Box
                  display={'flex'}
                  justifyContent={'space-between'}
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                  flexDirection={{ xs: 'column', sm: 'row' }}
                >
                  <Box>
                    <Typography fontWeight={700} variant={'h6'} gutterBottom>
                      예약 현황 보기
                    </Typography>
                    <Typography>
                      각 호실의 예약 현황을 한 눈에 볼 수 있어요
                    </Typography>
                  </Box>
                  <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
                    <Button
                      variant="contained"
                      size="large"
                      color={'secondary'}
                      onClick={handleClick}
                    >
                      Search
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                padding={{ xs: 3, sm: 6 }}
                width={1}
                component={Card}
                boxShadow={4}
                data-aos="fade-up"
              >
                <Box
                  display={'flex'}
                  justifyContent={'space-between'}
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                  flexDirection={{ xs: 'column', sm: 'row' }}
                >
                  <Box>
                    <Typography fontWeight={700} variant={'h6'} gutterBottom>
                      라브리 이야기
                    </Typography>
                    <Typography>
                      라브리에서는 어떤 일들이 일어나고 있을까요?
                    </Typography>
                  </Box>
                  <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
                    <Button variant="contained" color="primary" size="large">
                      Search
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
