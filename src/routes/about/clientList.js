import React from "react";
import styled from "styled-components";
import vergeLogo from "../../assets/logo-the-verge.png";
import jakartaLogo from "../../assets/logo-jakarta-post.png";
import guardianLogo from "../../assets/logo-the-guardian.png";
import techRadarLogo from "../../assets/logo-tech-radar.png";
import gadgetsNow from "../../assets/logo-gadgets-now.png";

const ClientImage = styled.img`
  margin: 40px;
`;

const ClientList = [
  vergeLogo,
  jakartaLogo,
  guardianLogo,
  techRadarLogo,
  gadgetsNow,
].map((item, i) => <ClientImage height={25} src={item} key={i} />);

export default ClientList;
