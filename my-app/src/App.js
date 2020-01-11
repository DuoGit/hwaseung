import React, {View} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [item, setItem] = React.useState('');
  const [operation, setOperation] = React.useState('');

  const [openItem, setOpenItem] = React.useState(false);
  const [openOperation, setOpenOperation] = React.useState(false);

  const [openTimer, setOpenTimer] = React.useState("hidden");

  const handleItemChange = event => {
    // setItem(event.target.value);
    setItem(event.target.value);
  };

  const handleOperationChange = event => {
    setOperation(event.target.value);
    
    if ((item != '') && (event.target.value != '')) {
      setOpenTimer("visible")
    }
    
  };

  const handleItemClose = () => {
    setOpenItem(false);
  };

  const handleOperationClose = () => {
    setOpenOperation(false);
  };

  const handleItemOpen = () => {
    setOpenItem(true);
  };

  const handleOperationOpen = () => {
    setOpenOperation(true);
    
  };

  const showBtn = () => {
    setOpenTimer("visible")
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleItemOpen}>
        Items here
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Item</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={openItem}
          onClose={handleItemClose}
          onOpen={handleItemOpen}
          value={item}
          onChange={handleItemChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <Button className={classes.button} onClick={handleOperationOpen}>
        Operations here
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Operation</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={openOperation}
          onClose={handleOperationClose}
          onOpen={handleOperationOpen}
          value={operation}
          onChange={handleOperationChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={50}>Ten</MenuItem>
          <MenuItem value={60}>Twenty</MenuItem>
          <MenuItem value={70}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <br/>
      
      <Button style={{visibility: openTimer}} >Start</Button>

    </div>
  );
}
