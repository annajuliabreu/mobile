import { View, Text, FlatList, Button } from "react-native";
import { useState, useEffect } from "react";
import Estilizando from './Estilizando';


const Questao03 = () => {
    const [nomes, setNomes] = useState("");
    const [offset, setOffset] = useState("");

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                setNomes(responseJson.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [offset]);
    return (
        <View style={Estilizando.box}>
            <Text style={Estilizando.header}>Meus Pokemons</Text>
            <View>
                <FlatList
                    style={Estilizando.flatlist}
                    data={nomes}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <Text style={Estilizando.texto}>
                                    {" "}
                                    {item.name}
                                </Text>
                            </View>
                        );
                    }}
                />
            </View>
            <View style={{ width: "100%" }}>
                <Button
                    title="Mostrar os próximos 10 Pokemons"
                    color='#ea50a1'
                    onPress={
                        () => {
                            setOffset(offset + 10);
                        }
                    }
                />
            </View>
        </View>
    );
}

export default Questao03;