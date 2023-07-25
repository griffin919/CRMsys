import {
  InputBase,
  Box,
  useTheme,
  IconButton,
  Typography,
  Link,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import FlexBetween from "../../components/FlexBetween";
import RecordsScreen from "../../Features/AddRecordForm/AddRecord";
import { useNavigate } from "react-router-dom";
import OffenderQueryScreen from "../../Features/offender/OffenderQueryScreen";

const DashScreen = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box display="flex" alignItems="start" justifyContent="center">
        <FlexBetween
          backgroundColor={theme.palette.background.alt}
          borderRadius="20px"
          p="0.1rem 1rem"
          gap="3rem"
        >
          <InputBase placeholder="Search record..." />
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>
        <FlexBetween m="0px 50px ">
          <Link href="#" underline="none">
            Add Record
          </Link>
          <IconButton onClick={() => navigate("/records/add")}>
            <AddIcon />
          </IconButton>
        </FlexBetween>
      </Box>
      <Box>
        <OffenderQueryScreen />
      </Box>
    </Box>
  );
};

export default DashScreen;
