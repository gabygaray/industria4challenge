import { useState } from "react";
import { getBluetoothConnection } from "../../../../app/services/bluetoothConnect";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks";
import {
  clearBluetoothConnection,
  setBluetoothConnection,
  setBluetoothDeviceData,
} from "../../../../app/store/slices/appStateSlice";
import { BluetoothConnection } from "./BluetoothConnection";

export const BluetoothConnectionContainer: React.FC =
  (): React.ReactElement => {
    const { bluetoothConnection, bluetoothDeviceData } = useAppSelector(
      (state) => state.appState
    );
    const { filters, isLoading } = bluetoothConnection;
    const { acceptAllDevices, filterByName, getBatteryPercent } = filters;

    const [successfulConnection, setSuccessfulConnection] = useState(false);

    const dispatch = useAppDispatch();

    const handleDeviceSearch = async () => {
      dispatch(
        setBluetoothConnection({ ...bluetoothConnection, isLoading: true })
      );

      const bluetoothDeviceData = await getBluetoothConnection(filters);

      if (bluetoothDeviceData) {
        dispatch(setBluetoothDeviceData(bluetoothDeviceData));
        setSuccessfulConnection(true);
      }

      dispatch(
        setBluetoothConnection({ ...bluetoothConnection, isLoading: false })
      );
    };

    const handleBackButton = () => {
      setSuccessfulConnection(false);
      dispatch(clearBluetoothConnection());
    };

    return (
      <BluetoothConnection
        handleDeviceSearch={handleDeviceSearch}
        isLoading={isLoading}
        successfulConnection={successfulConnection}
        bluetoothDeviceData={bluetoothDeviceData}
        disabled={!acceptAllDevices && !filterByName && !getBatteryPercent}
        handleBackButton={handleBackButton}
      />
    );
  };
