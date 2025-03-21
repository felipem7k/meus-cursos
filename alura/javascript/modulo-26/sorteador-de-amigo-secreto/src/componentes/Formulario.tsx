import { useRef, useState } from "react";
import styled from "styled-components"
import { useAdicionarParticipante } from "../state/hooks/useAdcionarParticipante";
import { useMensagemDeErro } from "../state/hooks/useMensagemDeErro";

const Form = styled.form`
    justify-content: center;
    display: flex;
`;

export default function Formulario() {

    const [nome, setNome] = useState('');
    const adicionarNomeNaLista = useAdicionarParticipante();

    const mensagemDeErro = useMensagemDeErro();

    const inputRef = useRef<HTMLInputElement>(null);

    function adicionarParticipante(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        adicionarNomeNaLista(nome);
        setNome('');
        inputRef.current?.focus();
    }

    return (
        <Form
            onSubmit={adicionarParticipante}
        >
            <input
                ref={inputRef}
                value={nome}
                onChange={(evento) => setNome(evento.target.value)}
                type="text"
                placeholder="Insira os nomes dos participantes" 
            />
            <button disabled={!nome}>Adicionar</button>
            {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
        </Form>
    )
}