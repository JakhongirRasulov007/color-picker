import { SortableElement } from "react-sortable-hoc";
import { makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  root: (props) => ({
    backgroundColor: props.color,
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)",
    },
  }),
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",
  },
});

const DraggableColorBox = SortableElement(({ color, name, deleteColor }) => {
  const classes = useStyles({ color });

  const handleDeleteColor = (name) => {
    deleteColor(name);
    console.log(name);
  };

  return (
    <div className={classes.root}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={() => handleDeleteColor(name)}
        />
      </div>
    </div>
  );
});

export default DraggableColorBox;
