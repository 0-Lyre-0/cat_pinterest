import CatsList from "../../components/CatsList/CatsList";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {useCallback, useEffect, useState} from "react";
import {clearCatsArr, restoreFavCats} from "../../store/slices/catsSlice";
import {fetchCats} from "../../store/thunkActions/catsThunkActions";
import {Container} from "@mui/material";

const AllCatsPage = () => {
  const {fetchLoading, cats, favCats} = useAppSelector(state => state.cats)
  const [page, setPage] = useState(0);
  const [fetchMore, setFetchMore] = useState(true);
  const dispatch = useAppDispatch();

  const scrollHandler = useCallback((e: Event) => {
    // @ts-ignore
    const bool = e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
    if (bool) {
      setFetchMore(true)
    }
  }, [])

  useEffect(() => {
    if (fetchMore) {
      dispatch(fetchCats(page))
        .then(() => {
          setPage(prevState => prevState + 1);
          setFetchMore(false)
        })
    }
    // eslint-disable-next-line
  }, [fetchMore])

  useEffect(() => {
    dispatch(restoreFavCats())
    return () => {
      dispatch(clearCatsArr())
    }
  }, [dispatch])

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler)
    return () => {
      document.removeEventListener("scroll", scrollHandler)
    }
  }, [scrollHandler])

  return (
    <Container>
      <CatsList data={cats} favCats={favCats} loading={fetchLoading}/>
    </Container>
  );
};

export default AllCatsPage;