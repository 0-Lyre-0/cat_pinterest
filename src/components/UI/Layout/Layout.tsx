import {CssBaseline} from "@mui/material";
import {FC, ReactNode} from "react";
import AppToolbar from "../AppToolbar/AppToolbar";
import {makeStyles} from "tss-react/mui";

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({children}) => {
  const {classes: c, cx} = useStyles();
  return (
    <div className={cx(c.root)}>
      <CssBaseline/>
      <AppToolbar/>
      <main>{children}</main>
    </div>
  );
};

const useStyles = makeStyles()(
  () => ({
    root: {
      minHeight: "100vh",
    }
  })
);

export default Layout;