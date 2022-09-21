import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const SideBarContainer = styled.div`
  height: 100%;
  width: 200px;
  background-color: ${({ theme }) => theme.palette.grey[900]};
  box-shadow: ${({ theme }) => theme.shadows[5]};
`;

export const SideBarHeader = styled.div`
  height: 60px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.text.primary};
  color: ${({ theme }) => theme.palette.common.white};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[700]};
    transition: all 0.2s ease-in-out;
  }
`;

export const SideBarContent = styled.div`
  height: calc(100% - 144px);
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const SideBarFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 16px;

  height: 76px;
  width: 100%;
`;

export const Route = styled(Button)`
  height: 40px;
  display: flex;
  color: ${({ theme }) => theme.palette.common.white};
  gap: 8px;
  justify-content: start;
  padding: 0px 8px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[900]};
  }
`;
