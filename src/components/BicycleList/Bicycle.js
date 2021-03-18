import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  root: {
    maxWidth: 900,
  },
  media: {
    height: 400,
  },
});

export default function Bicycle(props) {
  const classes = useStyles();

  function handleDelete() {
    props.deleteBike(props.bike);
  }

  return (
    <Grid container spacing={0}>
      <Grid bike xs={1}></Grid>
        <Grid bike xs={8} className="main-card">
          <Card className={classes.root} id="card-margin">
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={props.bike.image_url}
                title={props.bike.full_name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.bike.full_name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.bike.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Wheel Size: <em>{props.bike.wheel_size}</em>
              </Button>
              <Button size="small" color="primary">
                Rim Color: <em>{props.bike.rim_color}</em>
              </Button>
              <Button size="small" color="primary">
                Saddle Color: <em>{props.bike.saddle_color}</em>
              </Button>
            </CardActions>
            <CardActions>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                startIcon={<DeleteIcon />}
                onClick={handleDelete}
              >
                Delete Bicycle
              </Button>
            </CardActions>
          </Card>
      </Grid>
    </Grid>
  );
}