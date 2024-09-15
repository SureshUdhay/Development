import React, { Fragment, Dispatch } from "react";
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '50ch',
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  buttonField: {
    marginLeft: theme.spacing(30),
    marginRight: theme.spacing(30),
  
  },
}));
const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className="row ml-5">
        <div className="col-xl-11 col-lg-11">
          <div className="card shadow mb-4">
     
      <div className="row card-body">
      <form className={classes.root} noValidate autoComplete="off" style={{marginLeft:'50px'}} >
      <TextField id="standard-required" label="Vehicle Location" type="text" />
      <TextField id="standard-required" label="Vehicle"  type="text"/><br/>
      <TextField id="standard-required" label="Vehicle Make"  type="text"/>
      <TextField id="standard-required" label="Vehicle Model"  type="text"/><br/>
      <TextField id="standard-required" label="License Plate"  type="text"/>
      <TextField id="standard-required" label="Employee Performing Inspection Name"  type="text"/><br/><br/>
      <TextField id="datetime-local"  label="Date of Inspection" type="datetime-local" defaultValue="2024-09-09T12:30"
        className={classes.textField}  InputLabelProps={{ shrink: true}} />
         <TextField id="datetime-local"  label="Registration Expiration Date" type="datetime-local" defaultValue="2024-09-09T12:30"
        className={classes.textField}  InputLabelProps={{ shrink: true}} /> <br/><br/>
      <Button  style={{alignItems:'center', marginLeft:'20px'}} variant="contained" color="primary" component="label"> Upload VIN<input type="file" hidden /></Button> <br/><br/><br/>
      <Button  className={classes.buttonField} style={{marginLeft:'20px' }} variant="contained" color="primary" component="label"> Upload LICENSE PLATE<input type="file" hidden /></Button>
      <div style={{alignItems:'center', marginLeft:'500px'}}>
      <button type="button" className="btn btn-success btn-lg">Submit</button>
      </div>
     </form>
      </div>
      </div>     
      </div>
      </div>
    </Fragment>
  );
};

export default Home;
