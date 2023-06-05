import { Layout } from "../../components/layout/Layout";
import { BluetoothConnectionContainer } from "./components/bluetoothConnection/BluetoothConnectionContainer";

export const Home: React.FC = (): React.ReactElement => {
  return (
    <Layout>
      <BluetoothConnectionContainer />
    </Layout>
  );
};
