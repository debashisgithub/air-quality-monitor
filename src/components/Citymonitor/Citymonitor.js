import { Card, Row, Col } from 'react-bootstrap'
import { Line } from 'react-chartjs-2'

import './Citymonitor.scss'

function Citymonitor({ aqiData }) {
    const liveData = !!aqiData && aqiData.liveData ? aqiData.liveData : []
    const historyData = !!aqiData && aqiData.historyData ? aqiData.historyData : {}
    const getHistoryData = (city) => {
        const ahd = {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            datasets: [
                {
                    label: '',
                    data: historyData[city] || [],
                    fill: false,
                    lineTension: 0,
                    backgroundColor: '#ccc',
                    borderColor: '#000',
                }
            ]
        }
        return ahd;
    }
    const options = {
        animation: false,
        interaction: {
            intersect: false
        },
        plugins: {
            legend: false
        }
    };

    const generateAQICell = !!liveData && Array.isArray(liveData) && liveData.length ? liveData.map(ad => (
        <Col sm="4" key={ad.city} className="CardContainer">
            <Card style={{ backgroundColor: ad?.bgColor, color: "inherit" }}>
                <Card.Body>
                    <Row>
                        <Col sm="5">
                            <Card.Title>{ad.city}</Card.Title>
                            <Card.Subtitle><small>{ad?.lups}</small></Card.Subtitle>
                            <Card.Text><strong>{parseFloat(ad.aqi).toFixed(2)}</strong></Card.Text>
                        </Col>
                        <Col sm="7">
                            <Line data={() => getHistoryData(ad.city)} options={options} height="200px" />
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>{ad?.category || "Loading..."}</Card.Footer>
            </Card>
        </Col>
    )) : (<Col><p className="text-center">Please wait...</p></Col>)

    return <Row className="Citymonitor">{generateAQICell}</Row>
}
export default Citymonitor
