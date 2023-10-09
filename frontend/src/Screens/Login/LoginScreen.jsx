import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  FormControl,
  Button,
  useTheme,
  Typography,
  Grid,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { setCredentials } from "../../Features/user/authSlice";
import { useLoginMutation } from "../../Features/user/userApiSlice";
import CircularProgress from "@mui/material/CircularProgress";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [renderError, setRenderError] = useState("");

  const theme = useTheme();
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    if (userInfo) {
      navigate("/welcome");
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
      console.log("renderError", renderError);
      setRenderError(error.data.message);
      console.log(error);
    }
  };

  return (
    <div>
      <Grid container>
        <Grid item md={7} xs={12}>
          <Box
            minHeight="100vh"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box width="300px">
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "2rem",
                  mb: "30px",
                  color: "secondary",
                  fontWeight: "light",
                }}
              >
                Galloway CRMS
              </Typography>
              <Typography sx={{ color: "red", textAlign: "center", m: "20px" }}>
                {renderError ? renderError : ""}
              </Typography>
              <form onSubmit={handleSubmit}>
                <FormControl fullWidth>
                  <TextField
                    label="Username"
                    variant="standard"
                    value={username}
                    color="secondary"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </FormControl>

                <FormControl fullWidth sx={{ marginTop: "20px" }}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="standard"
                    color="secondary"
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
                    color="secondary"
                    endIcon={<SendIcon />}
                  >
                    {isLoading && (
                      <CircularProgress
                        size={30}
                        color="secondary"
                        sx={{ mr: "10px" }}
                      />
                    )}
                    Login
                  </Button>
                </div>
                <Typography
                  sx={{ marginTop: "30px", opacity: "0.8", fontSize: "0.8rem" }}
                >
                  Forgotten username or password? Contact admin.
                </Typography>
              </form>
            </Box>
          </Box>
        </Grid>
        <Grid item md={5} xs={12} sx={{ overflow: "hidden" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: `${theme.palette.background.alt}`,
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* <div>
              <Typography
                sx={{
                  lineHeight: "0.8",
                  fontSize: "15rem",
                  fontWeight: "bold",
                  color: "grey",
                  // textAlign: "center",
                }}
              >
                On <br />
                Rec
                <br />
                ord
              </Typography>
            </div> */}
            <img
              src="/handcuffed.jpg"
              alt="Judge Hammer"
              style={{ objectFit: "cover" }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginScreen;
