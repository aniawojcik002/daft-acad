import { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Input } from "@mui/material";

import { Button } from "@mui/material";

const localStorageKey = "inputValue";

export const InputForm = (props) => {
  const [displayError, setDisplayError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const messageLength = event.target.value.length;
    setInputValue(event.target.value);
    if (messageLength < 3 || messageLength > 20) {
      if (messageLength < 3) {
        setErrorMessage("User name are to short");
      }
      if (messageLength > 20) {
        setErrorMessage("User name are to long");
      }
      setDisplayError(true);
    } else {
      setDisplayError(false);
      setErrorMessage("");
    }
  };
  const handleSubmit = () => {
    if (!(displayError || !inputValue)) {
      localStorage.setItem(localStorageKey, inputValue);
    }
  };
  useEffect(() => {
    let valueToSet = "";
    const localStorageData = localStorage.getItem(localStorageKey);
    if (!!localStorageData) {
      valueToSet = localStorageData;
    } else {
      if (!!props.defaultProps) {
        valueToSet = props.defaultProps;
      }
    }

    setInputValue(valueToSet);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ariaLabel = { "aria-label": "description" };
  return (
    <Container maxWidth="lg">
      <Box
        component="form"
        sx={{
          marginTop: "5rem",
          height: "6rem",
        }}
        autoComplete="off"
      >
        <Typography>User name</Typography>
        <Input
          placeholder="Type your name"
          inputProps={ariaLabel}
          onInput={handleInputChange}
          value={inputValue}
          type="text"
        />
          <Button
            sx ={{
              ml: {xs: '5px', md: '10px' },
              mt: {xs:'10px'}
            }}
            variant="contained"
            onClick={handleSubmit}
            disabled={displayError || !inputValue}
            defaultValue=''
          >
            Submit
          </Button>
        {displayError && <div>{errorMessage}</div>}
        {/* <button className={'submitButton'} onClick={handleSubmit} disabled={(displayError || !inputValue)}>Submit</button> */}
      </Box>
    </Container>
  );
};
