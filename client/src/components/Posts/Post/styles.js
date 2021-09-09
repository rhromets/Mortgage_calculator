import {makeStyles} from "@material-ui/core/styles";

export default makeStyles(() => ({
  card: {
    minWidth: 275,
    display: "flex",
    justifyContent: "space-between",
  },
  content: {
    marginBottom: 12,
  },
  actions: {
    display: "flex",
    justifyContent: "center",
  },
}));
