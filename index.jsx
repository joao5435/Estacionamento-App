import { Pressable, TextInput, View, Text } from "react-native";
import { useState } from "react";


export default function Cep() {
    const [cep, setCep] = useState('')
    const [data, setData] = useState(null)


    function buscarCep() {
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log("Erro" + err)
            })
    }

    return(
    <View>
        <TextInput
            placeholder="Digite o seu Cep"
            keyboardType="numeric"
            onChangeText={setCep}
            value={cep}
        />
        <Pressable onPress={buscarCep}>
            <Text>Buscar Cep</Text>
        </Pressable>

        {
            data && <Text>{data.localidade}</Text>
        }


    </View>
    )
}