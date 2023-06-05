import { Navbar } from "../navbar/Navbar";
import { LayoutProps } from "./layout.interface";

import { LayoutContainer, MainComponent } from "./styles";

export const Layout: React.FC<LayoutProps> = ({
  children,
}): React.ReactElement => {
  return (
    <LayoutContainer>
      <Navbar />
      <MainComponent>{children}</MainComponent>
    </LayoutContainer>
  );
};
