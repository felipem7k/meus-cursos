
import React from 'react'
import style from './Calendario.module.scss';
import ptBR from './localizacao/ptBR.json'
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from 'kalend'
import 'kalend/dist/styles/index.css';
import useAtualizarEvento from '../../state/hooks/useAtualizarEvento';
import useListaDeEventos from '../../state/hooks/useListaDeEventos';

interface IKalendEvento {
  id?: number
  startAt: string
  endAt: string
  summary: string
  color: string
}

const Calendario: React.FC = () => {

  const eventosKalend = new Map<string, IKalendEvento[]>();

  const eventos = useListaDeEventos();

  eventos.forEach(evento => {
    const chave = evento.inicio.toISOString().slice(0, 10)
    if (!eventosKalend.has(chave)) {
      eventosKalend.set(chave, [])
    }
    eventosKalend.get(chave)?.push({
      id: evento.id,
      startAt: evento.inicio.toISOString(),
      endAt: evento.fim.toISOString(),
      summary: evento.descricao,
      color: 'blue'
    })
  })

  const atualizarEvento = useAtualizarEvento();

  const onEventDragFinish: OnEventDragFinish = (
    eventoAnterior: CalendarEvent,
    eventoAtualizado: CalendarEvent
  ) => {
    const evento = eventos.find(evento => evento.descricao === eventoAnterior.summary);
    if (evento) {
      const novoEvento = {
        ...evento
      };
      novoEvento.inicio = new Date(eventoAtualizado.startAt);
      novoEvento.fim = new Date(eventoAtualizado.endAt);

      atualizarEvento(novoEvento);
    }
  };

  return (
    <div className={style.Container}>
      <Kalend
        events={Object.fromEntries(eventosKalend)}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        timeFormat={'24'}
        weekDayStart={'Monday'}
        calendarIDsHidden={['work']}
        language={'customLanguage'}
        customLanguage={ptBR}
        onEventDragFinish={onEventDragFinish}
      />
    </div>
  );
}

export default Calendario