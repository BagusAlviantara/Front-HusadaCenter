import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { Container } from 'react-bootstrap'

export default class Kalendar extends React.Component {
  render() {
    return (
        <Container className='mt-5 mb-5'>
            <h1 className='text-center'>Kalendar</h1>
            <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
        </Container>
      
    )
  }
}