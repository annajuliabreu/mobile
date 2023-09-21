import { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import estilos from './14Estilos'

const MyNetworking = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [movies, setMovies] = useState([]);


    useEffect(
        () => {
            getMovies()
        },
        []
    )

    const getMovies = () => {
        fetch('https://reactnative.dev/movies.json')
            .then(response => response.json())
            .then(
                // (resposta) => {console.log(resposta)}
                ({ title, description, movies }) => {
                    setTitle(title)
                    setDescription(description)
                    setMovies(movies)
                }
            )
            .catch(error => console.log(error))
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.header}>{title}</Text>
            <Text style={estilos.description}>{description}</Text>
            <FlatList
                data={movies}
                renderItem={
                    ({ item }) => {
                        return (
                            <View style={estilos.box}>
                                <View> 
                                <Text style={estilos.id}>{item.id}</Text>
                                </View>
                                <View style={estilos.info}>
                                    <Text>{item.title}</Text>
                                    <Text>{item.releaseYear}</Text>
                                </View>
                            </View>
                        )
                    }
                }
            />
        </View>
    )
}

export default MyNetworking;