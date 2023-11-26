import { View, Text, Button, ScrollView, Image } from 'react-native';
import { useState, useEffect } from 'react';
import PokeButton from './PokeButton';


const PokedexScreen = ({ navigation }) => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(
        () => {
            fetchPokemons()
        },
        []
    )

    const fetchPokemons = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=26")
            .then(response => response.json())
            .then(
                (json) => {
                    let id = 0;
                    const vetorFormatado = json.results.map(
                        ({ name, url }) => {
                            // console.log(pokemonObj.name)
                            // return pokemonObj.name
                            return { id: url.split('/')[6], name: name, url: url }
                        }
                    )//map

                    // console.log(vetorFormatado)
                    setPokemons(vetorFormatado);
                }
            )
            .catch(error => console.log(error))
    }

    const renderPokemons = () => {
        return (
            <ScrollView style={{ width: "90%", height: "90%"}}>
                <View style={{ 
                    flex:1, 
                    flexDirection: "row", 
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                }}>
                    {
                        pokemons.map(
                            (pokemonObj) => {
                                return (
                                    <View style={{ 
                                        margin:8,
                                        padding: 2,
                                        backgroundColor: "#FFF9FB",
                                        alignItems: "center",
                                        width: 125,
                                        borderWidth:2,
                                        borderColor: "#4B88A2",
                                        borderRadius: 8,
                                    }}>
                                        <Text style={{fontWeight: "bold", fontSize: "12",}}>{pokemonObj.name.toUpperCase()}</Text>
                                        <Image 
                                            source={{ uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonObj.id}.png`}}
                                            style={{width:50, height:50}}
                                        />
                                        <View>
                                            {/* <Button
                                                color="#4B88A2"
                                                title="Skills"
                                            /> */}
                                            <PokeButton 
                                                title="Skills"
                                                onPress={() => navigation.navigate("PokemonModal", {url:pokemonObj.url})}
                                            />
                                        </View>
                                    </View>
                                )
                            }
                        )
                    }
                </View>
            </ScrollView>
        )
    }

    return (
        <View style={{ flex: 1, height: '568px', width: '320px', justifyContent: 'center', alignItems: 'center' }}>
            <Text>Pokedex Screen</Text>

            {renderPokemons()}

            {/* <FlatList
                data={pokemons}
                renderItem={
                    ({ item }) => {
                        return (
                            <Text>
                                {item.name}
                            </Text>
                        )
                    }
                }
            /> */}

            {/* <Button
                title="Abrir modal"
                color="#D90368"
                onPress={() => navigation.navigate("PokemonModal")}
            /> */}
        </View>
    )
}

export default PokedexScreen;