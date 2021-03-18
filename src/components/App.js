import '../App.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import BicycleList from './BicycleList/BicycleList';

const useStyles = makeStyles({
  app_title: {
    textAlign: "center"
  }
})

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h3" className={classes.app_title}>Pandabize Shop App</Typography>
        <BicycleList />
      </header>
    </div>
  );
}

export default App;