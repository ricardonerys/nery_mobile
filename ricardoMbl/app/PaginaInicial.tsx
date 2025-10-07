import { ScrollView,View,Text,Image } from "react-native";
import { styles } from "../constants/theme";

export default function ModalScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View > 
        <Image
          source={require("../assets/images/foto.jpg")}
          style={styles.foto}
        />

        <Text style={styles.nome}>RICARDO NERY DE BRITO JUNIOR</Text>

        <Text style={styles.subtitulo}>Graduando em Ciência da Computação</Text>
        <Text style={styles.subtitulo}>Aficionado por Robótica</Text>
        <Text style={styles.subtitulo}>Gente boa demais!</Text>
      </View>
    </ScrollView>

  );
}


