# Estudos para disciplina de Mobile 2023.1
Repositório de estudos para disciplina de Projeto de Interface para Dispositivos Móveis

##### Referência de escrita: [Sintaxe básica de gravação e formatação no GitHub](https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

Ferramentas: VS Code, Node e Expo

## Introdução
### O que é React Native?
O React Native é um framework criado pelo Facebook, que possibilita a criação de aplicativos nativos para Android e iOS usando JavaScript.

[Documentação React Native](https://reactnative.dev)

#### Função básica JSX

```
import React from 'react';
import {Text} from 'react-native';

const Cat = () => {
    const name = 'Maru';
    return <Text>Hello, I am {name}!</Text>;
};

export default Cat;

```

### O que é Expo? Porque usar o Expo? Quem usa Expo?
É uma ferramenta focada em desenvolvimento de aplicativos com React, para ajudar o desenvolimento de aplicativos usando o React Native, sendo mais rápido e produtivo, ele consegue desde startar um projeto já com um template, até fazer o deploy final desse aplicativo. É uma ferramenta muito importante para o desenvolvimento porque ele permite iniciar de uma forma bem rápida e tranquila, servindo para preparar a estrutura.

[Documentação Expo](https://docs.expo.dev)


### Importação

import React from 'react';
import {Text, View, Image, Button, TextInput} from 'react-native';

### Componentes básicos - [Core Components](https://reactnative.dev/docs/components-and-apis)
- View, Image, ScrollView, Text, Text Input, StylesSheet

```
<ScrollView>
    <View>
        <Text></Text>
        <Image 
            source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{width: 200, height: 200}}
        />
        <TextInput
            style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
            }}
            defaultValue="You can type in me"
            onChangeText={}
            value={}
            <!-- placeholder='' -->
            keyboardType='numeric'
        />
    </View>
</ScrollView>
```

### FlatList

``` 
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default FlatListBasics;

```

### Presseable

```
import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function PokeButton(props) {
  const { onPress, title = 'Skills' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#4B88A2',
  },
  text: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

```

### Componentes de interface do usuário
- Button, Switch

```
<Button
    onPress={}
    title=""
    color=""
    accessibilityLabel=''
/>
```

### Props
- Props é a abreviatura de “propriedades”. Os props permitem personalizar os componentes do React.

```
import React from 'react';
import {Text, View} from 'react-native';

const Cat = (props) => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Cat name="Spot" />
    </View>
  );
};

export default Cafe;
```

### State
 - useState() é um Hook que permite adicionar estado aos componentes da função. Ele declara uma variável de estado que você pode atualizar diretamente.

```
  const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);
  // ...
```

 - Chamar useState faz duas coisas:
    - ele cria uma “variável de estado” com um valor inicial – neste caso a variável de estado é isHungry e seu valor inicial é verdadeiro
    - cria uma função para definir o valor dessa variável de estado—setIsHungry
    - Não importa quais nomes você use. Mas pode ser útil pensar no padrão como [<getter>, <setter>] = useState(<initialValue>)
    - Next you add the Button Core Component and give it an onPress prop:

```
<Button
  onPress={() => {
    setIsHungry(false);
  }}
  //..
/>
```



outros exemplos:

```
import React, {useState} from 'react';

const [dado, setDado] = useState(true); // boleano
const [dado, setDado] = useState(""); // string
const [dado, setDado] = useState([]); // vetor
const [dado, setDado] = useState(0); // number

function ImageGallery() {
  const [index, setIndex] = useState(0);
  // ...
};
```

[Hooks - React Doumentation](https://react.dev/reference/react)

### Entrada de dados
- Entrada de textos via TextInput:
  - TextInput é um componente principal que permite ao usuário inserir texto. Ele tem uma propriedade onChangeText que leva uma função a ser chamada toda vez que o texto é alterado, e uma propriedade onSubmitEditing que leva uma função a ser chamada quando o texto é enviado.

```
import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translateee!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
};

export default PizzaTranslator;
```

### Networking

(Networking - Docs)[https://reactnative.dev/docs/network]

### APIs React Native

## Projeto prático #01 - OneBitHealth