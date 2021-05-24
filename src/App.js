import { useState, useEffect } from 'react'
import Websocket from 'react-websocket';
import { Container } from 'react-bootstrap'

import { SocketAQIData } from './utils/dataFilters'

import Citymonitor from './components/Citymonitor/Citymonitor'
import './App.scss'


function App() {
  const socketUrl = "wss://city-ws.herokuapp.com"
  const localStoreKey = "aqiData"

  const [aqiData, setAqiData] = useState({ liveData: [], historyData: {} })

  useEffect(() => {
    try {
      const aqiLocalData = JSON.parse(localStorage.getItem(localStoreKey))
      setAqiData(aqiLocalData)
      localStorage.removeItem(localStoreKey)
    } catch (err) { }
  }, [])

  window.onbeforeunload = () => {
    if (!!aqiData) {
      localStorage.setItem(localStoreKey, JSON.stringify(aqiData))
    }
  }

  const handelUpdatedMessage = (data) => {
    try {
      const wData = JSON.parse(data)
      setAqiData(prev => SocketAQIData(prev, wData))
    } catch (err) { }
  }
  return (
    <div>
      <h1 className="text-center AQI-title">Air Quality Monitor</h1>
      <Container fluid>
        <Citymonitor aqiData={aqiData} />
      </Container>
      <Websocket url={socketUrl} onMessage={handelUpdatedMessage} />
    </div>
  );
}

export default App;
