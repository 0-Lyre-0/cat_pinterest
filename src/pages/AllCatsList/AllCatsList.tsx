import {Button, Container} from "@mui/material";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {decrement, increment} from "../../store/slices/catsSlice";

const AllCatsList = () => {
  const {value} = useAppSelector(state => state.cats)
  const dispatch = useAppDispatch();
    return (
      <Container>
        <div>
          AllCatsList
        </div>
        <div>
          {value}
        </div>
        <Button onClick={() => dispatch(increment())}>+</Button>
        <Button onClick={() => dispatch(decrement())}>-</Button>
      </Container>
    );
};

export default AllCatsList;