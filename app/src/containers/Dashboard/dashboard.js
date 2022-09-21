import { Typography } from "@mui/material";
import { center } from "../../styles/shared.styles";

const Dashboard = () => {
  return (
    <div
      style={{
        ...center,
        height: "100%",
        flexDirection: "column",
        padding: 16,
      }}
    >
      <Typography variant="h4" fontWeight="600">
        BRP Pecas
      </Typography>
      <Typography>Gerenciamento de entrada e saída dos produtos </Typography>
    </div>
  );
};

export { Dashboard };