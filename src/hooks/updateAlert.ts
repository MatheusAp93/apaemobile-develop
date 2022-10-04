import { useEffect } from "react";
import * as Updates from "expo-updates";
import { UpdateEventType } from "expo-updates";
import { Alert } from "react-native";

export function useUpdateAlert() {
  useEffect(() => {
    const subscription = Updates.addListener((event) => {
      if (event.type === UpdateEventType.UPDATE_AVAILABLE) {
        Alert.alert("Atualização disponível", "Deseja reiniciar?", [
          { text: "Sim", onPress: () => Updates.reloadAsync() },
          { text: "Não", style: "cancel" },
        ]);
      }
    });

    return () => subscription.remove();
  }, []);
}
