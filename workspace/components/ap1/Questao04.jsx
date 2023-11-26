import { View, Text, Button } from "react-native";
import { useState, useEffect } from "react";
import Estilizando from "./Estilizando";

const Questao04 = () => {
    const [paises, setPaises] = useState([]);
    const [continente, setContinente] = useState("africa");

    useEffect(() => {
        fetch(
            `https://restcountries.com/v2/region/${continente}?fields=name,population`
        ).then((response) => response.json().then((res) => setPaises(res)));
    }, [continente]);

    paises.sort((pais1, pais2) => {
        if (continente == "asia") {
            return pais1.population - pais2.population;
        } else {
            return pais2.population - pais1.population;
        }
    });

    const listaPaises = paises.map((pais, key) => {
        return (
            <Text key={key}>
                {pais.name} | {pais.population}
            </Text>
        );
    });

    return (
        <View style={Estilizando.container}>
            <Text style={Estilizando.header}>Países da(s) {continente}</Text>

            <View style={Estilizando.listagemDePaisesContainer}>
                <View style={{ margin: 16 }}>
                    <Button
                        color='#ea50a1'
                        title="Países africanos"
                        onPress={() => {
                            setContinente("africa");
                        }}
                    />
                </View>
                <View style={{ margin: 16 }}>
                    <Button
                        color='#ea50a1'
                        title="Países americanos"
                        onPress={() => {
                            setContinente("americas");
                        }}
                    />
                </View>
                <View style={{ margin: 16 }}>
                    <Button
                        color='#ea50a1'
                        title="Países asiáticos"
                        onPress={() => {
                            paises.sort((pais1, pais2) => {
                                return pais1.population - pais2.population;
                            });
                            setContinente("asia");
                        }}
                    />
                </View>
            </View>
            <View style={Estilizando.paisContainer}>{listaPaises}</View>
        </View>
    );
}

export default Questao04;