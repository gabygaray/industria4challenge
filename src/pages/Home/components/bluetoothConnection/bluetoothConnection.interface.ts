import { BluetoothDeviceData } from "../../../../app/store/slices/appStateSlice.interface";

export interface BluetoothConnectionProps {
  handleDeviceSearch: () => void;
  isLoading: boolean;
  successfulConnection: boolean;
  bluetoothDeviceData: BluetoothDeviceData;
}
