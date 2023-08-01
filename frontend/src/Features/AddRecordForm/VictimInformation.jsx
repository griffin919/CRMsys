import { Box, FormControl, TextField, Typography, Button } from "@mui/material";

const victimInformation = ({ formData, setForm }) => {
  const { victimInformation } = formData;

  let index = 0;

  const handleInputChange = (index, key, value) => {
    setForm((prevData) => ({
      ...prevData,
      victimInformation: prevData.victimInformation.map((record, i) =>
        i === index ? { ...record, [key]: value } : record
      ),
    }));
  };

  return (
    <Box>
      <Typography sx={{ textAlign: "center", m: "40px", fontSize: "1.5rem" }}>
        Criminal Offense Details
      </Typography>
      <Box sx={{ mr: "20px" }} display="flex" justifyContent="center">
        <FormControl fullWidth sx={{ m: "10px" }}>
          <TextField
            id="standard-basic"
            variant="standard"
            label="Victim Name"
            name="name"
            value={victimInformation[index].name}
            onChange={(e) => handleInputChange(index, "name", e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: "10px" }}>
          <TextField
            id="standard-basic"
            variant="standard"
            type="text"
            label="Victim Details"
            name="victimDetails"
            value={victimInformation[index].victimDetails}
            onChange={(e) =>
              handleInputChange(index, "victimDetails", e.target.value)
            }
          />
        </FormControl>
      </Box>
      <Box sx={{ ml: "20px" }}></Box>
      <FormControl fullWidth sx={{ m: "10px" }}>
        <TextField
          id="standard-basic"
          variant="standard"
          label="Victim Support Services"
          name="victimSupportServices"
          value={victimInformation[index].victimSupportServices}
          onChange={(e) =>
            handleInputChange(index, "victimSupportServices", e.target.value)
          }
        />
      </FormControl>
    </Box>
  );
};

export default victimInformation;
