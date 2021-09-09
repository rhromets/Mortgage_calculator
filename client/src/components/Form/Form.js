import React, {useState} from "react";
import {TextField, Button, Typography, Paper} from "@material-ui/core";
import {useDispatch} from "react-redux";

import useStyles from "./styles.js";
import {createPost} from "../../actions/posts";

const Form = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    name: "",
    interestRate: "",
    maxLoan: "",
    minLoan: "",
    minDownPayment: "",
    loanTerm: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(createPost(postData));
  };
  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        className={classes.form}
        autoComplete='off'
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant='h6'>Creating a Bank</Typography>

        <TextField
          name='creator'
          variant='outlined'
          label='Creator'
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({...postData, creator: e.target.value})}
          className={classes.textField}
        />

        <TextField
          name='name'
          variant='outlined'
          label='Bank Name'
          fullWidth
          value={postData.name}
          onChange={(e) => setPostData({...postData, name: e.target.value})}
          className={classes.textField}
        />

        <TextField
          name='interestRate'
          variant='outlined'
          label='Interest Rate'
          fullWidth
          value={postData.interestRate}
          onChange={(e) =>
            setPostData({...postData, interestRate: e.target.value})
          }
          className={classes.textField}
        />

        <TextField
          name='maxLoan'
          variant='outlined'
          label='Max Loan'
          fullWidth
          value={postData.maxLoan}
          onChange={(e) => setPostData({...postData, maxLoan: e.target.value})}
          className={classes.textField}
        />

        <TextField
          name='minLoan'
          variant='outlined'
          label='Min Loan'
          fullWidth
          value={postData.minLoan}
          onChange={(e) => setPostData({...postData, minLoan: e.target.value})}
          className={classes.textField}
        />

        <TextField
          name='minDownPayment'
          variant='outlined'
          label='Min Down Payment'
          fullWidth
          value={postData.minDownPayment}
          onChange={(e) =>
            setPostData({...postData, minDownPayment: e.target.value})
          }
          className={classes.textField}
        />

        <TextField
          name='loanTerm'
          variant='outlined'
          label='Loan Term'
          fullWidth
          value={postData.loanTerm}
          onChange={(e) => setPostData({...postData, loanTerm: e.target.value})}
          className={classes.textField}
        />

        <Button
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant='contained'
          color='default'
          size='small'
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
