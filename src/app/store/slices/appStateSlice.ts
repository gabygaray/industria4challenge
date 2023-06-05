import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import {
  AppStateSliceInitialState,
  BluetoothConnection,
  BluetoothDeviceData,
} from "./appStateSlice.interface";

const initialState: AppStateSliceInitialState = {
  user: {},
  isLogin: false,
  bluetoothConnection: {
    filters: {
      getBatteryPercent: true,
    },
    isLoading: false,
  },
  bluetoothDeviceData: {
    id: null,
    name: null,
    connected: null,
    batteryPercent: null,
  },
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<object>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = initialState.user;
    },
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setBluetoothConnection: (
      state,
      action: PayloadAction<BluetoothConnection>
    ) => {
      state.bluetoothConnection = action.payload;
    },
    setBluetoothDeviceData: (
      state,
      action: PayloadAction<BluetoothDeviceData>
    ) => {
      state.bluetoothDeviceData = action.payload;
    },
  },
});

export const {
  setUser,
  clearUser,
  setIsLogin,
  setBluetoothConnection,
  setBluetoothDeviceData,
} = appStateSlice.actions;

export default appStateSlice.reducer;
