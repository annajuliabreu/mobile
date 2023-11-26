import { StyleSheet, View, Text } from 'react-native';
// import HelloRN from './components/01HelloRNV1';
import LoginMCU from './components/MeuCalendarioUniversitario/login';

export default function App() {
  return (
    <View>
      {/* <HelloRN /> */}
      <LoginMCU />
    </View>
  );
}



// anotações:

// npx expo start - comando para inicializar no terminal

// n existe arquivo css em aplicacao nativa!!
// existe o objeto stylesheet (classe/biblioteca) "emulação do css"
// ele recebe como parametro um objeto {} JSON / objeto Js
// dentro eu defino o que for equivalente a uma classe css
// "uma propriedade num objeto cujo valor recebe outro objeto"