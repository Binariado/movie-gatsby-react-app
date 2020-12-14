import React from 'react';
import styled from 'styled-components';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
  },
  media: {
    //height: 340,
  },
  mediaSpacin: {
    height: "100%",
  }
});

const StyledCarmedia = styled(CardMedia)`
  background-repeat: no-repeat;
  background-size: cover;
  height: 300.39px;
  display: flex;
  flex-direction: column;
  /* &:hover {
    .MuiCardContent-root {
      background-color: #5469d4;
      height: 100%;
      .movie-description{
        display: block;
      }
    }
  } */
`;

const CardContentEffec = withStyles((theme) => ({
  root: {
    transition: theme.transitions.create('height', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    })
  }
}))((props) => <CardContent {...props} />);

const StyleCardContent = styled(CardContentEffec)`
  background-color: #4e4d4d59;
  color: white;
  height: 60px;
  &:hover {
    background-color: #5469d4;
    height: 100%;
    .movie-description{
      display: block;
    }
  }
`;

const StyledTypography = styled(Typography)`
  color: rgb(255 255 255 / 66%);
  display: none;
`;

export default function CardMovie() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <StyledCarmedia
          className={classes.media}
          image="https://www.eloccidental.com.mx/incoming/yjlhq1-guason-2.jpg/ALTERNATES/LANDSCAPE_1140/Guason%202.jpg"
          title="Contemplative Reptile"
        >
          <div className={classes.mediaSpacin}></div>
          <StyleCardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
          </Typography>
            <StyledTypography className="movie-description" variant="body2" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
          </StyledTypography>
          </StyleCardContent>
        </StyledCarmedia>

      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}
