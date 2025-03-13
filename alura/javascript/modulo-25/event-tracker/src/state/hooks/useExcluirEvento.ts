import { useSetRecoilState } from "recoil";
import { listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

export default function useExcluirEvento() {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

    return (evento: IEvento) => {
        setListaDeEventos(listaAntiga => listaAntiga.filter(evt => evt.id !== evento.id));
    };
}