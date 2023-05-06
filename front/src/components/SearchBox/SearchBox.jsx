import React, { useState } from 'react'
import classes from './SearchBox.module.css'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'
import { setQuery } from '../../redux/slices/query'
import { fetchBuses, fetchFlights, fetchTrains } from '../../redux/slices/routes'

const SearchBox = () => {
  
  const dispatch = useDispatch()
  const [vehicles, setVehicles] = useState([])

  const allVehicles = [fetchFlights, fetchTrains, fetchBuses]

  const addVehicle = (vehicle) => {
    if (vehicles.includes(vehicle)) {
      setVehicles(vehicles.filter(item => item !== vehicle))
    }
    else {
      setVehicles([...vehicles, vehicle])
    }
  }

  const origin = useRef()
  const destination = useRef()
  const departure_at = useRef()
  const return_at = useRef()

  const search = (event) => {
    event.preventDefault()
    dispatch(setQuery({
      origin: origin.current.value,
      destination: destination.current.value,
      departure_at: departure_at.current.value,
      return_at: return_at.current.value,
      vehicles: vehicles
    }))
  }
  

  return (
    <div className={classes.searchbox}>
      <div className={classes.vehicles}>
        <button style={{
          outline: (vehicles.sort().toString() === allVehicles.sort().toString() ? "5px solid #00AA00" : "0")
          }}
          onClick={() => {setVehicles(vehicles.sort().toString() === allVehicles.sort().toString() ? [] : [...allVehicles])}}
          >Все билеты</button>
        <button style={{
          outline: (vehicles.includes(fetchFlights) ? "5px solid #00AA00" : "0")
          }}
          onClick={() => {addVehicle(fetchFlights)}}
          >Самолеты</button>
        <button style={{
          outline: (vehicles.includes(fetchTrains) ? "5px solid #00AA00" : "0")
          }}
          onClick={() => {addVehicle(fetchTrains)}}
          >Поезда</button>
        <button style={{
          outline: (vehicles.includes(fetchBuses) ? "5px solid #00AA00" : "0")
          }}
          onClick={() => {addVehicle(fetchBuses)}}
          >Автобусы</button>
      </div>
      <form className={classes.moveinf}>
        <input ref={origin} placeholder='Откуда' type='text'/>
        <input ref={destination} placeholder='Куда' type='text'/>
        <input ref={departure_at} type='date'/>
        <input ref={return_at} type='date'/>
        <button className={classes.send_query} onClick={(event) => {search(event)}}>Найти билеты</button>
      </form>
    </div>
  )
}

export default SearchBox