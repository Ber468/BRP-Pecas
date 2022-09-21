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
        Bem vindo ao dashboard
      </Typography>
      <Typography>Aqui podemos testar os componentes do material-ui</Typography>
    </div>
  );
};

export { Dashboard };
