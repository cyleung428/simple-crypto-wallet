import React from 'react';
import Web3 from 'web3';
import { mergeStyles, Stack, PrimaryButton } from '@fluentui/react';


function App() {
  const web3 = new Web3("http://localhost:9545");
  return (
    <div className={pageStyle}>
      <Stack
        tokens={stackTokens}
        styles={stackStyles}
      >
        <Stack {...columnProps}>
          <div className={columnStyles}>
            Address
          </div>
        </Stack>
        <Stack {...columnProps}>
          <div className={columnStyles}>
            Balance
          </div>
        </Stack>
      </Stack>
    </div>
  );
}

export default App;


const pageStyle = mergeStyles({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  background: "#f7f7f7",
  height: "100vh",
  overflowX: "hidden",
  flexDirection: "column",
});


const stackTokens = { childrenGap: 30 };
const stackStyles = {
  root: {
    boxShadow: "0 0 7px 0 rgba(0, 0, 0, 0.08)",
    background: "white",
    width: "62vw",
    padding: "30px",
    background: "white",
  },
};

const columnStyles = mergeStyles({
  margin: "0 auto",
});

const columnProps = {
  tokens: { childrenGap: 15 },
  styles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: "0 0 auto"
  }
};

