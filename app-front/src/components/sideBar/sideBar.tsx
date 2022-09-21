import { useNavigate } from "react-router-dom";
import {
  AiOutlineDashboard,
  AiOutlineFileText,
  AiOutlineRead,
  AiOutlineTable,
} from "react-icons/ai";
import { MdOutlineFeedback } from "react-icons/md";

import {
  Route,
  SideBarContainer,
  SideBarContent,
  SideBarFooter,
  SideBarHeader,
} from "./sideBar.styles";
import { Avatar, Icon, Typography, useTheme } from "@mui/material";

const SideBar = () => {
  const _navigate = useNavigate();
  const { palette } = useTheme();

  return (
    <SideBarContainer>
      <SideBarHeader
        onClick={() =>
          window.open(
            "https://mui.com/pt/material-ui/getting-started/overview/"
          )
        }
      >
        Material UI
      </SideBarHeader>
      <SideBarContent>
        <Route onClick={() => _navigate("/")}>
          <Icon component={AiOutlineDashboard} width={6} height={6} />
          <Typography variant="body2" style={{ color: palette.common.white }}>
            Dashboard
          </Typography>
        </Route>
        <Route onClick={() => _navigate("/modais")}>
          <Icon component={AiOutlineRead} width={6} height={6} />
          <Typography variant="body2" style={{ color: palette.common.white }}>
            Modais
          </Typography>
        </Route>
        <Route onClick={() => _navigate("/feedback")}>
          <Icon component={MdOutlineFeedback} width={6} height={6} />
          <Typography variant="body2" style={{ color: palette.common.white }}>
            Feedback
          </Typography>
        </Route>
        <Route onClick={() => _navigate("/fields")}>
          <Icon component={AiOutlineFileText} width={6} height={6} />
          <Typography variant="body2" style={{ color: palette.grey[300] }}>
            Fields
          </Typography>
        </Route>
        <Route onClick={() => _navigate("/dataTable")}>
          <Icon component={AiOutlineTable} width={6} height={6} />
          <Typography variant="body2" style={{ color: palette.grey[300] }}>
            DataTable
          </Typography>
        </Route>
      </SideBarContent>
      <SideBarFooter>
        <Avatar />
        <Typography variant="subtitle1" style={{ color: palette.common.white }}>
          Ranielli
        </Typography>
      </SideBarFooter>
    </SideBarContainer>
  );
};

export { SideBar };
