import {AppBar, Box, Toolbar, Typography} from "@mui/material";

const AppToolbar = () => {
  return (
    <Box sx={{flexGrow: 1}} component={"nav"}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Test
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppToolbar;