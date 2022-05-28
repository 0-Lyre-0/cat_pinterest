import CatsList from "../../components/CatsList/CatsList";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {useEffect} from "react";
import {clearCatsArr, restoreFavCat} from "../../store/slices/catsSlice";
import {fetchCats} from "../../store/thunkActions/catsThunkActions";
import {Container} from "@mui/material";

const AllCatsPage = () => {
  const {fetchLoading, cats, favCats} = useAppSelector(state => state.cats)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(restoreFavCat())
    dispatch(fetchCats())
    return () => {
      dispatch(clearCatsArr())
    }
  }, [dispatch])

  return (
    <Container>
      <CatsList data={cats} favCats={favCats} loading={fetchLoading}/>
    </Container>
  );
};

export default AllCatsPage;