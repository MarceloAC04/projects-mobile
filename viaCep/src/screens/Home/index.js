import { BoxInput } from "../../components/BoxInput";
import { ScrollForm, ContainerForm, ContainerInput } from "./style";
import axios from "axios";
import { useEffect, useState } from "react";

export function Home() {

    //hooks - states
    const [cep, setCep] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    const [uf, setUf] = useState("")

    useEffect(() => {
    }, []);

    //hooks - effect
    //chamada da api
    async function buscaCep() {
        try {
            const respose = await axios.get(`https://brasilaberto.com/api/v1/zipcode/${cep}`)
            setLogradouro(respose.data.result.street)
            setBairro(respose.data.result.district)
            setCidade(respose.data.result.city)
            setEstado(respose.data.result.state)
            setUf(respose.data.result.stateShortname)
        } catch (error) {
            alert('Erro ao buscar o cep');
        }

    }

    function clearCep() {
        setCep("")
        setLogradouro("")
        setBairro("")
        setCidade("")
        setEstado("")
        setUf("")
    }
    return (

        //ScrollForm
        //ContainerForm
        //BoxInput
        //Label
        //Input

        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel="Informe o CEP:"
                    placeholder="Cep..."
                    keyType="numeric"
                    fieldValue={cep}
                    editable={true}
                    maxLength={9}
                    onChangeText={setCep}
                    onBlur={cep ? buscaCep : clearCep}
                />
                <BoxInput
                    textLabel="Logradouro"
                    placeholder="Logradouro..."
                    fieldValue={logradouro}
                />
                <BoxInput
                    textLabel="Bairro"
                    placeholder="Bairro..."
                    fieldValue={bairro}
                />
                <BoxInput
                    textLabel="Cidade"
                    placeholder="Cidade..."
                    fieldValue={cidade}
                />
                <ContainerInput>
                    <BoxInput
                        textLabel="Estado"
                        placeholder="Estado..."
                        fieldWidth={70}
                        fieldValue={estado}
                    />
                    <BoxInput
                        textLabel="UF"
                        placeholder="UF"
                        fieldWidth={25}
                        fieldValue={uf}
                    />
                </ContainerInput>
            </ContainerForm>
        </ScrollForm>
    )
}