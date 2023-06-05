import { BluetoothIcon } from "../../../../assets/icons/BluetoothIcon";
import { BluetoothConnectionProps } from "./bluetoothConnection.interface";

import {
  BackButton,
  BackButtonContainer,
  BluetoothConnectionButton,
  Container,
  DataList,
  IconContainer,
  InfoTitle,
  ItemName,
  ItemValue,
  ListItem,
  LoadingIcon,
  LoadingLabel,
  Title,
} from "./styles";

export const BluetoothConnection: React.FC<BluetoothConnectionProps> = ({
  handleDeviceSearch,
  isLoading,
  successfulConnection,
  bluetoothDeviceData,
  disabled,
  handleBackButton,
}): React.ReactElement => {
  const { batteryPercent, connected, id, name } = bluetoothDeviceData;
  return (
    <Container $disabled={disabled}>
      {!successfulConnection ? (
        <>
          <Title>Inicia tu búsqueda</Title>
          <BluetoothConnectionButton onClick={handleDeviceSearch}>
            <IconContainer>
              <BluetoothIcon />
            </IconContainer>
          </BluetoothConnectionButton>

          <LoadingLabel $isVisible={isLoading}>
            <LoadingIcon>⏳</LoadingIcon>
            Realizando conexión...
          </LoadingLabel>
        </>
      ) : (
        <>
          <DataList>
            <InfoTitle>Información del Dispositivo</InfoTitle>
            <ListItem>
              <ItemName>Nombre:</ItemName>
              <ItemValue>{name || ""}</ItemValue>
            </ListItem>
            <ListItem>
              <ItemName>Id:</ItemName>
              <ItemValue>{id || ""}</ItemValue>
            </ListItem>
            <ListItem>
              <ItemName>Estado de conexión:</ItemName>
              <ItemValue>{connected ? "Conectado" : "Sin Conexión"}</ItemValue>
            </ListItem>
            {batteryPercent && (
              <ListItem>
                <ItemName>Nivel de Batería:</ItemName>
                <ItemValue>
                  {batteryPercent
                    ? batteryPercent + "%"
                    : "No se pudo obtener este dato"}
                </ItemValue>
              </ListItem>
            )}
            <BackButtonContainer>
              <BackButton onClick={handleBackButton}>Volver</BackButton>
            </BackButtonContainer>
          </DataList>
        </>
      )}
    </Container>
  );
};
