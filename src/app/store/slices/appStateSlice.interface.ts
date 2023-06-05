export interface AppStateSliceInitialState {
  user: object;
  isLogin: boolean;
  bluetoothConnection: BluetoothConnection;
  bluetoothDeviceData: BluetoothDeviceData;
}

export interface BluetoothDeviceData {
  name: string;
  id: string | number;
  connected: boolean | string;
  batteryPercent: string | number;
}

export interface BluetoothConnection {
  filters: Filters;
  isLoading: boolean;
}

export interface Filters {
  acceptAllDevices: boolean;
  getBatteryPercent: boolean;
  filterByName: string;
}
