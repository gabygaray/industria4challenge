import { Layout } from "../../components/layout/Layout";
import { BluetoothConnectionContainer } from "./components/bluetoothConnection/BluetoothConnectionContainer";
import { Filters } from "./components/filters/Filters";
import { Container } from "./styles";

export const Home: React.FC = (): React.ReactElement => {
  return (
    <Layout>
      <Container>
        <Filters />
        <BluetoothConnectionContainer />
      </Container>
    </Layout>
  );
};
