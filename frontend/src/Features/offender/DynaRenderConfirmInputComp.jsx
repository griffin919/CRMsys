import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import NestedDataDisplay from "./NestedDataDisplay";

const ConfirmInput = ({ formData, uploadedPhoto, sections }) => {
  const renderPersonalInformation = (name, value) => {
    return (
      <div style={{ display: "block" }}>
        <strong>{name}: </strong> {value}
      </div>
    );
  };

  const NestedDataDisplay = ({ data }) => {
    return (
      <div>
        {Object.entries(data).map(([name, value]) => (
          <div key={name}>
            <strong>{name}: </strong>
            {typeof value === "object" ? (
              <NestedDataDisplay data={value} />
            ) : (
              value.toString()
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {sections.map((section) => (
        <Grid container key={section.name}>
          <Grid item>
            <Typography>{section.title}</Typography>
            {section.name === "personalInformation" ? (
              <div>
                {Object.entries(formData[section.name]).map(([name, value]) => (
                  // console.log("name, value", name, value)
                  <React.Fragment key={name}>
                    {renderPersonalInformation(name, value.toString())}
                  </React.Fragment>
                ))}
              </div>
            ) : (
              <div>
                {Object.entries(formData[section.name]).map(([name, value]) => (
                  <React.Fragment key={name}>
                    {console.log(
                      "name, value, typeOfValue",
                      name,
                      value,
                      typeof value
                    )}
                    {Object.entries(value).map(([innerName, innerValue]) => (
                      <React.Fragment key={innerName}>
                        {/* {console.log(
                          "innerName",
                          innerName,
                          "innerValue",
                          innerValue
                        )} */}
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            )}
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default ConfirmInput;
