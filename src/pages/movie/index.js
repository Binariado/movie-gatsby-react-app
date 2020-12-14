import React, { useState } from "react"
import PropTypes from "prop-types";
import withLocation from "../../withLocation";
import Layout from "../../components/Layaout";
import styled, { createGlobalStyle } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import {
  CardMedia, 
  Box, 
  Container, 
  Button, 
  IconButton, 
  CssBaseline, 
  AppBar, 
  Toolbar
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import { rhythm } from "../../utils/typography";
import { navigate } from "gatsby";
import Carousel from '../../components/Caroulser';
import { useSelector } from 'react-redux';
import Checkout from "../../components/checkout/Checkout";


const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    alignSelf: "start",
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

const ConteViewMovie = styled(Box)`
  display: flex;
  // position: fixed;
  height: 100%;
  width: 100%;
  max-height: 100%;
  max-width: 100%;
  flex-direction: row;
`;

const ConteViewImg = styled(CardMedia)`
  height: 100%;
  width: 100%;
  max-height: 100%;
  max-width: 40%;
  flex-direction: row;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ConteView = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-height: 100%;
  max-width: 100%;
  flex-direction: column;
  padding: ${rhythm(0.5)};
  overflow: auto;
`;

const ConteTagts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ConteScenes = styled.div`
  width: 100%;
  margin-top: ${rhythm(0.5)};
`;

const TitleTypography = styled(Typography)`
  width: 100%;
`;

const Content = styled(Container)`
  height: 100%;
  display:flex;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  height: 100%;
`;

const FooterContainer = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonTicket = styled(Button)`
    border-radius: 3px;
    border: 0;
    color: white;
    height: 48px;
    padding: 0 30px;
    background: linear-gradient(45deg, #2196F3 30%, #21CBF3 90%);
    box-shadow: 0 3px 5px 2px rgba(33, 203, 243, .3);
`;


const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby {
    height: 100%;
    // overflow: hidden;
  }
  #gatsby-focus-wrapper {
    height: 100%;
  }
  *, ::after, ::before {
    box-sizing: border-box;
  }
  .main-layout, .root-layout{
    height: 100%;
  }
`;

const Movie = ({ search }) => {
  const classes = useStyles();
  console.log(search);

  const auth = useSelector(state => state.auth);
  console.log(auth, 'authMovie');

  const { isAuthenticated } = auth;

  const [ticket, setTicket] = useState(false);

  const handleTicket = () => {
    setTicket(!ticket);
  }

  //navigate("/")
  return (
    <Layout>
      <GlobalStyle />
      <ConteViewMovie>
        <ConteViewImg
          image="https://www.eloccidental.com.mx/incoming/yjlhq1-guason-2.jpg/ALTERNATES/LANDSCAPE_1140/Guason%202.jpg"
          title="Contemplative Reptile"
        >
          img
        </ConteViewImg>
        <ConteView>
          {ticket && (
            <>
              <CssBaseline />
              <AppBar position="static" color="default" className={classes.appBar}>
                <Toolbar>
                  <IconButton onClick={handleTicket}>
                    <ChevronLeftIcon />
                  </IconButton>
                  <Typography variant="h6" color="inherit" noWrap>
                    Volver
                  </Typography>
                </Toolbar>
              </AppBar>
            </>
          )}
          {!ticket ?
            <Content>
              <BodyContainer>
                <TitleTypography variant="h5" gutterBottom>
                  Synosis
                      </TitleTypography>
                <Typography variant="body1" gutterBottom>
                  body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                  unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                      </Typography>

                <ConteTagts>
                  <TitleTypography variant="subtitle1" gutterBottom>
                    Director: Fernando
                      </TitleTypography>

                  <TitleTypography variant="subtitle1" gutterBottom>
                    Genero: Humor
                      </TitleTypography>
                </ConteTagts>

                <ConteScenes>
                  <TitleTypography variant="subtitle1" gutterBottom>
                    Escenas
                      </TitleTypography>
                  <Carousel />
                </ConteScenes>
              </BodyContainer>

              <FooterContainer>
                <ButtonTicket onClick={handleTicket}>
                  Solicitar ticket
                      </ButtonTicket>
              </FooterContainer>
            </Content> :
            <Checkout />
          }
        </ConteView>
      </ConteViewMovie>
    </Layout>
  )
}

Movie.propTypes = {
  search: PropTypes.object,
}

export default withLocation(Movie);