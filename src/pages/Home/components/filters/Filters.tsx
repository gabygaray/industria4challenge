import { ChangeEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks";
import { setBluetoothConnection } from "../../../../app/store/slices/appStateSlice";
import Checkbox from "../../../../components/checkbox/Checkbox";
import {
  CheckboxsContainer,
  Container,
  FiltersContainer,
  StyledInput,
  Title,
} from "./styles";

export const Filters: React.FC = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { bluetoothConnection } = useAppSelector((state) => state.appState);
  const { filters } = bluetoothConnection;

  useEffect(() => {
    if (Boolean(filters.filterByName) || filters.getBatteryPercent) {
      dispatch(
        setBluetoothConnection({
          ...bluetoothConnection,
          filters: {
            ...filters,
            acceptAllDevices: false,
          },
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.getBatteryPercent, filters.filterByName]);

  const handleFilterByNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    dispatch(
      setBluetoothConnection({
        ...bluetoothConnection,
        filters: { ...filters, filterByName: value },
      })
    );
  };

  const handleCheckboxChange = (
    isChecked: boolean,
    checkboxName: "acceptAllDevices" | "getBatteryPercent"
  ) => {
    dispatch(
      setBluetoothConnection({
        ...bluetoothConnection,
        filters: {
          ...filters,
          [checkboxName]: isChecked,
        },
      })
    );
  };

  return (
    <Container>
      <Title>Selecciona los filtros:</Title>
      <FiltersContainer>
        <StyledInput
          type="text"
          name="filtername"
          placeholder="Filtra por nombre de dispositivo"
          value={filters.filterByName}
          onChange={handleFilterByNameChange}
        />
        <CheckboxsContainer>
          <Checkbox
            name="acceptAllDevices"
            label={"Buscar todos los dispositivos"}
            checked={filters.acceptAllDevices}
            onChange={handleCheckboxChange}
            disabled={
              Boolean(filters.filterByName) || filters.getBatteryPercent
            }
          />
          <Checkbox
            name="getBatteryPercent"
            label={"Solo dispositivos con Servicio de Batería"}
            checked={filters.getBatteryPercent}
            onChange={handleCheckboxChange}
          />
        </CheckboxsContainer>
      </FiltersContainer>
    </Container>
  );
};
