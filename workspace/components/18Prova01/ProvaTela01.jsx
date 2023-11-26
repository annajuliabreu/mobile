import { View, Button, Text, SectionList } from "react-native";
import { useState, useEffect } from "react";
import dados from "./dados";
import estilos from "./estilos";


const ProvaTela01 = ({route, navigation}) => {
    const [minhaFatura, setMinhaFatura] = useState([]);

    useEffect(
        () => {
            //onde eu carregaria a api
            setMinhaFatura(dados)
        },
        []
    )

    return (
        <View>
            <SectionList
                sections={minhaFatura}
                keyExtractor={(item, index => "aabbcc" + index)}
                renderSectionHeader={
                    ({ section }) => {
                        return (
                            <View>
                                <Text style={estilos.header}>{section.title}</Text>
                            </View>
                        )
                    }
                }
                renderItem={
                    ({ item, section }) => {
                        return (
                            <View style={{
                                flexDirection: 'row',
                            }}>

                                <View>
                                    <Button
                                        color="white"
                                        onPress={
                                            () => navigation.navigate("ProvaTela02", {secao:section.title, icone:section.icone, nome:section.nome, valor:section.valor, hora:section.hora })
                                        }
                                    />
                                </View>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        flex: 1,
                                        marginTop: 5,
                                    }}
                                >
                                    <View style={{
                                        flex: 1,
                                    }}>
                                        <View>
                                            <View>
                                                <Text style={estilos.texto}>{item.nome}</Text>
                                            </View>
                                            <View>
                                                <Text style={estilos.texto}>{item.hora}</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View
                                        style={{
                                            flex: 2.5,
                                            alignItems: "flex-end",
                                        }}
                                    >
                                        <Text style={estilos.texto}>R$ {item.valor}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    }
                }
            />
        </View>
    )
}

export default ProvaTela01;