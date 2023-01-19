import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  mixins: {
    toolbar: {
      minHeight: 60,
    },
  },
});
