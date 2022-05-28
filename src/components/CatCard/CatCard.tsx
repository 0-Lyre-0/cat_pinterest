import {ICat} from "../../models/ICat";
import {FC, useCallback, useState} from "react";
import {makeStyles} from "tss-react/mui";
import {IconButton, Skeleton} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useAppDispatch} from "../../hooks/hooks";
import {toggleLikedCat} from "../../store/slices/catsSlice";

interface Props {
  data: ICat
  isLiked?: boolean
}

const CatCard: FC<Props> = ({data, isLiked = false}) => {
  const dispatch = useAppDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isActiveLikedIcon, setIsActiveLikedIcon] = useState(isLiked);
  const {classes: c, cx} = useStyles({isLoaded, isShown: isShown});

  const onImgLoad = useCallback(() => setIsLoaded(true), [])
  const onMouseCardEnter = useCallback(() => setIsShown(true), [])
  const onMouseCardLeave = useCallback(() => setIsShown(false), [])
  const onClickIconBtn = useCallback(() => dispatch(toggleLikedCat(data)), [data, dispatch])

  const onMouseIconEnter = useCallback(() => {
    if (isLiked) return;
    setIsActiveLikedIcon(true);
  }, [isLiked])

  const onMouseIconLeave = useCallback(() => {
    if (isLiked) return;
    setIsActiveLikedIcon(false);
  }, [isLiked])

  return (
    <div className={cx(c.root)}
         onMouseEnter={onMouseCardEnter}
         onMouseLeave={onMouseCardLeave}
    >
      {!isLoaded && (
        <Skeleton variant="rectangular" width={225} height={225}/>
      )}
      <img src={data.url} alt="pic" onLoad={onImgLoad}/>
      <IconButton className={isLiked ? cx(c.icon, c.activeIcon) :cx(c.icon)}
                  color={"default"}
                  onMouseEnter={onMouseIconEnter}
                  onMouseLeave={onMouseIconLeave}
                  onClick={onClickIconBtn}
      >
        {isActiveLikedIcon ? (
          <FavoriteIcon/>
        ) : (
          <FavoriteBorderIcon/>
        )}
      </IconButton>
    </div>
  );
};

const useStyles = makeStyles<{ isLoaded: boolean, isShown: boolean }>()(
  (theme, {isLoaded, isShown}) => ({
    root: {
      position: "relative",
      "& img": {
        display: isLoaded ? "block" : "none",
        width: 225,
        height: 225,
        objectFit: "cover",
        objectPosition: "center bottom"
      }
    },
    icon: {
      display: isShown ? "inline-flex" : "none",
      position: "absolute",
      right: '10px',
      bottom: "10px",
      "& .MuiSvgIcon-root": {
        fontSize: "34px",
        color: theme.palette.error.light
      }
    },
    activeIcon: {
      "& .MuiSvgIcon-root": {
        color: theme.palette.error.main,
      }
    }
  })
);

export default CatCard;