import { StyleSheet, View, Text } from 'react-native';
// import ProvaApp from './components/18Prova01/ProvaApp';
// import Questao04 from './components/ap1/Questao04';
// import Questao03 from './components/ap1/Questao03';
// import Questao02 from './components/ap1/Questao02';
// import Questao01 from './components/ap1/Questao01/Questao01';
// import Main from './components/tarefa02/Main';
// import Home from './components/tarefa02/Home';
// import MainScreen from './components/15Navigation/15NavStack/MainScreen';
// import MyNetworking from './components/14MyNetworking/14MyNetworking';
// import MyFlexBoxB from './components/13MyFlexbox/13FlexboxB';
// import MyFlexBoxC from './components/13MyFlexbox/13FlexboxC';
// import MyFlexBox from './components/13MyFlexbox/13FlexboxA';
// import MyScrollView from './components/10MyScrollView';
// import MyFlatList from './components/11MyFlatList';
// import MySectionList from './components/12MySectionList';
// import Calculadora from './components/09Calculadora/09Calculadora';
// import BeHealthy from './components/00OneBitCode/Projeto01/BeHealthy';
// import PokemonApp from './components/16Pokemon/PokemonApp';
// import MyTextInput from './components/07TextInput';
// import JuntarFrases from './components/08JuntarFrases';
// import Questao01 from './components/tarefa01/questao01';
// import Questao03 from './components/tarefa01/questao03';
// import State from './components/06State';
// import HelloRN from './components/01HelloRNV1';
// import HelloRNV2 from './components/02HelloRNV2';
// import MyCat from './components/03MyCat';
// import Parent from './components/05Nested/05Parent';


export default function App() {
  return (
    <View>
      {/* {>>>>>>>> ap1} */}
      {/* <Questao01 /> */}
      {/* <Questao02 /> */}
      {/* <Questao03 /> */}
      {/* <Questao04 /> */}
      {/* <ProvaApp /> */}

      {/* >>>>> tarefa 01 */}
      {/* <Questao01 /> */}
      {/* <Questao03 cor='blue'/> */}

      {/* ------------------ */}

      {/* >>>>>>> sala de aula */}
      {/* <Text style={styles.title}>Made for Jesus - John Pantana</Text> */}
      {/* <HelloRN /> */}
      {/* <HelloRNV2 /> */}
      {/* <MyCat /> */}
      {/* <Parent/> */}
      {/* <State /> */}
      {/* <MyTextInput /> */}
      {/* <JuntarFrases /> */}
      {/* <Calculadora /> */}
      {/* <MyScrollView /> */}
      {/* <MyFlatList /> */}
      {/* <MySectionList /> */}
      {/* <MyFlexBox /> */}
      {/* <MyFlexBoxB /> */}
      {/* <MyFlexBoxC /> */}
      {/* <MyNetworking /> */}
      {/* <MainScreen /> */}
      {/* <Home /> */}
      {/* <Main /> */}
      {/* <PokemonApp /> */}

      {/* ------------------ */}

      {/* >>>>>>>> projetos do curso React Native do One Bit Code */}
      <BeHealthy />
      {/* <Text>Oi</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //usar tela toda 1=100%
    flexDirection: 'column', //justifyContent obedece a coluna e 
    // backgroundColor: '#fff',
    // backgroundColor: '#c0c0c0',
    color:'black',
    alignItems: 'center', //alignItens obedece a linha 
    justifyContent: 'center',
    // marginTop: 50
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "pink"
  }
});


// anotações:

// npx expo start - comando para inicializar no terminal

// n existe arquivo css em aplicacao nativa!!
// existe o objeto stylesheet (classe/biblioteca) "emulação do css"
// ele recebe como parametro um objeto {} JSON / objeto Js
// dentro eu defino o que for equivalente a uma classe css
// "uma propriedade num objeto cujo valor recebe outro objeto"