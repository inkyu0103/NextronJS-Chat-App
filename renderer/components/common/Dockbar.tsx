import styled from "@emotion/styled";
import { COLOR } from "../../constants/color";

export default function Dockbar() {
  return <DockbarContainer></DockbarContainer>;
}

const DockbarContainer = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  background-color: ${COLOR.blue1};
`;
