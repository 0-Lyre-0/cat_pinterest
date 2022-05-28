import {ICat} from "../../models/ICat";
import React, {FC} from "react";
import {Grid} from "@mui/material";
import CatCard from "../CatCard/CatCard";
import {makeStyles} from "tss-react/mui";

interface Props {
  data: ICat[]
  favCats: ICat[]
  loading?: Boolean
}

const CatsList: FC<Props> = ({data, favCats, loading = false}) => {
  const {classes: c, cx} = useStyles();
  return (
    <>
      {data.length > 0 && (
        <Grid container my={2} justifyContent={"center"}>
          {data.map(cat => (
            <Grid item key={cat.id} className={cx(c.item)}>
              <CatCard data={cat} isLiked={Boolean(favCats.find(favCat => favCat.id === cat.id))}/>
            </Grid>
          ))}
        </Grid>
      )}
      {loading && (<div>Loading...</div>)}
    </>
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

export default CatsList;