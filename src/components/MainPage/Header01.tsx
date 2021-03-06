import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const Header01 = () => {
  const classes = useStyles();

  return (
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Education
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Education application on analizing data.
            This application help students communicate each other.
            <br />
            The Concept is Online x Education x Communication
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Link to="/appPage" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary">
                    TEST USER
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
  );
};

export default Header01;
