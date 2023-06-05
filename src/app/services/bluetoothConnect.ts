import { enqueueSnackbar } from "notistack";

import {
  BluetoothDeviceData,
  Filters,
} from "../store/slices/appStateSlice.interface";

export const getBluetoothConnection = async (
  filters: Filters
): Promise<BluetoothDeviceData> => {
  const acceptAllDevices = { acceptAllDevices: true };

  const filtersSelected = filters.getBatteryPercent
    ? {
        filters: [
          {
            name: filters.filterByName,
            services: ["battery_service"],
          },
        ],
      }
    : {
        filters: [
          {
            name: filters.filterByName,
          },
        ],
      };

  const filter =
    filters.getBatteryPercent || Boolean(filters.filterByName)
      ? filtersSelected
      : acceptAllDevices;

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const device = await (navigator as any).bluetooth.requestDevice(filter);

    const deviceName = device.gatt.device.name;
    const deviceId = device.gatt.device.id;
    const deviceConnected = device.gatt.device.connected;

    const getBatteryPercent = async () => {
      const server = await device.gatt.connect();

      const batteryService = await server.getPrimaryService("battery_service");
      const batteryLevelCharacteristic = await batteryService.getCharacteristic(
        "battery_level"
      );
      const batteryLevel = await batteryLevelCharacteristic.readValue();
      const batteryPercent = await batteryLevel.getUint8(0);

      return batteryPercent;
    };
    enqueueSnackbar("La conexión se realizó exitosamente", {
      variant: "success",
    });

    return {
      id: deviceId,
      name: deviceName,
      connected: deviceConnected,
      batteryPercent: filters.getBatteryPercent
        ? await getBatteryPercent()
        : "",
    };
  } catch (e) {
    console.log(e);
    enqueueSnackbar("No se pudo realizar la conexión", {
      variant: "error",
    });
  }
};
