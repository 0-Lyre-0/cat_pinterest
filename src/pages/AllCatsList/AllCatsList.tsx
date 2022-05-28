import {Container, Grid} from "@mui/material";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {fetchCats} from "../../store/thunkActions/catsThunkActions";
import CatCard from "../../components/CatCard/CatCard";
import {makeStyles} from "tss-react/mui";
import {clearCatsArr} from "../../store/slices/catsSlice";

const AllCatsList = () => {
  const {fetchLoading, cats} = useAppSelector(state => state.cats)
  const dispatch = useAppDispatch();
  const {classes: c, cx} = useStyles();

  //console.log(cats)

  useEffect(() => {
    dispatch(fetchCats())
    return () => {
      dispatch(clearCatsArr())
    }
  }, [dispatch])
  return (
    <Container>
      {cats.length > 0 && (
        <Grid container my={2} justifyContent={"center"}>
          {cats.map(cat => (
            <Grid item key={cat.id} className={cx(c.item)}>
              <CatCard data={cat}/>
            </Grid>
          ))}
        </Grid>
      )}
      {fetchLoading && (<div>Loading...</div>)}
    </Container>
  );
};

const useStyles = makeStyles()(
  () => ({
    item: {
      "& > div": {
        margin: 24,
      },
      "& > div:hover": {
        boxShadow: "-1px 5px 15px 1px rgba(0,0,0,0.7)",
        transition: "all 0.2s",
        transform: "scale(1.1)"
      },
    }
  })
);

export default AllCatsList;