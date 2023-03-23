import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ThemeButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#fed700"),
    backgroundColor: "#fed700",
    '&:hover': {
      backgroundColor: "#fed700",
    },
  }));
export default ThemeButton; 