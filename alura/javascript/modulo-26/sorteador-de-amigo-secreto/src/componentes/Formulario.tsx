import styled from "styled-components"

export default function Formulario() {
    const Form = styled.form`
        justify-content: center;
        display: flex;
    `;

    return (
        <Form>
            <input type="text" placeholder="Insira os nomes dos participantes" />
            <button disabled={true}>Adicionar</button>
        </Form>
    )
}