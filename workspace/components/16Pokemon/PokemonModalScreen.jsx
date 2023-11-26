import { View, Text, Button } from 'react-native';
import { useState, useEffect } from 'react';

const PokemonModalScreen = ({ navigation, route }) => {
    const { url } = route.params

    const [dados, setDados] = useState({})

    useEffect(
        () => {
            fetchPokemons()
        },
        []
    )

    const fetchPokemon = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const pokemon = {
                    id: data.id,
                    name: data.name,
                    height: data.height,
                    order: data.order,
                    weight: data.weight,
                }
                setDados(pokemon)
            })
            .catch(error => { console.log(error) })
    }

    return (
        <View>
            <Text>Tela Modal</Text>
            <Text style={{ fontSize: 25 }}>{dados.weight}</Text>
            <Button
                title="Fechar modal"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default PokemonModalScreen;