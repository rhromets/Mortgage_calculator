import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";

import useStyles from "./styles.js";

const Post = ({post}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} fullWidth>
      <CardContent className={classes.content}>
        <Typography variant='h5' component='h2'>
          {post.name}
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          Created by: {post.creator}
          <br />
          {moment(post.createdAt).fromNow()}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <IconButton size='small' color='primary' onClick={() => {}}>
          <EditIcon fontSize='small' />
        </IconButton>
        <IconButton color='default' size='small' onClick={() => {}}>
          <DeleteIcon fontSize='small' />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
