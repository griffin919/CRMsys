import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  FormControl,
  Container,
  Button,
  useTheme,
  InputBase,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { themeSettings } from "../../theme";
import FlexBetween from "../../components/FlexBetween";
import { setCredentials } from "../../Features/user/authSlice";
import ToastNotification from "../../components/Alerts";
import { useLoginMutation } from "../../Features/user/userApiSlice";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const theme = useTheme();
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ username, password }).unwrap();
      // console.log(res.data);
      dispatch(setCredentials({ ...res }));
      navigate("/dashboard");
    } catch (error) {
      // ToastNotification(error);
      console.log(error);
    }
  };

  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Box width="300px">
          <Typography
            sx={{ textAlign: "center", fontSize: "2rem", mb: "50px" }}
          >
            OnRecord
          </Typography>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <TextField
                label="Username"
                variant="standard"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </FormControl>

            <FormControl fullWidth sx={{ marginTop: "20px" }}>
              <TextField
                label="Password"
                variant="standard"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormControl>
            <div style={{ textAlign: "right" }}>
              <Button
                sx={{ marginTop: "10px" }}
                type="submit"
                variant="text"
                size="large"
                endIcon={<SendIcon />}
              >
                Login
              </Button>
            </div>
            <Typography sx={{ marginTop: "30px" }}>
              Forgotten username or password? Contact admin.
            </Typography>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginScreen;
