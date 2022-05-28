import {Container} from "@mui/material";
import CatsList from "../../components/CatsList/CatsList";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {useEffect} from "react";
import {restoreFavCat} from "../../store/slices/catsSlice";

const FavoriteCatsPage = () => {
  const {fetchLoading, favCats} = useAppSelector(state => state.cats)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(restoreFavCat())
  }, [dispatch])

  return (
    <Container>
      <CatsList data={favCats} favCats={favCats} loading={fetchLoading}/>
    </Container>
  );
};

export default FavoriteCatsPage;