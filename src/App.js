import React from 'react'
import './App.scss'
import Header from './components/header/Header'
import Filter from './components/filter/Filter'
import Ticket from './components/ticket/Ticket'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './redux/action/action'
import { useEffect } from 'react'
import Sorter from './components/sorter/Sorter'
import { sorterSelector } from './redux/selectors/selectors'
import { Col, Container, Row } from 'react-grid-system'
import Preloader from './components/preloader/Preloader'

const App = () => {

  const { isFetching } = useSelector(({ tickets }) => tickets)
  const tickets = useSelector(sorterSelector)
  const dispatch = useDispatch()

  const formattedTickets = tickets.map((ticket, index) => {
    return (
      <Ticket
        key={ticket.price + index + ticket.carrier}
        price={ticket.price}
        src={ticket.carrier}
        segment={ticket.segments}
      />
    )
  })

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <Container style={{ maxWidth: '1000px', padding: '50px 15px'}}>
      <Row>
        <Col>
          <Header/>
        </Col>
      </Row>  
      <Row>
        <div className="content">
          <Col style={{ maxWidth: '260px'}}>
            <Filter/>
          </Col>
          <Col style={{ maxWidth: '530px'}}>
            <div className="content__item">
              <div className="content__item__sorting">
                <Sorter/>
              </div>
              {isFetching 
                ? 
                  <Preloader/>
                : 
                  <div className="content__item__tickets">
                    {formattedTickets.length > 0
                      ? 
                        formattedTickets 
                      :
                        <div className="content__item__tickets__empty">Билетов, соответствующих фильтрам, не найдено!</div> 
                    }
                  </div>
              }
            </div>
          </Col>
        </div>
      </Row>  
    </Container>
  )
}

export default App
