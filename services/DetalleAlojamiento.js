import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function DetalleHabitacion() {
  const params = useLocalSearchParams();

  return (
    <View>
      <Text>Habitación: {params.nombre}</Text>
      <Text>Precio: ${params.precio}</Text>
      <Text>Descripción: {params.descripcion}</Text>
    </View>
  );
}
