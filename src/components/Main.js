import axios from 'axios';
import React, { Component } from 'react'
import { Form, Button, Card, ListGroup, Alert } from 'react-bootstrap'
import Weather from './Weather'
import Movies from './Movies'
import Loading from './Loading';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formVal: '',
            locationData: {},
            weatherData: [],
            moviesData:[],
            danger: false,
            checkData: false,
            loading: false

        }
    }

    cityHandler = (e) => {
        this.setState({
            formVal: e.target.value
        })
    }

    submitHandler = async (e) => {
        e.preventDefault();
        try {

            this.setState({
                loading:true
            })

            let locationData = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.formVal}&format=json`)
            let weatherData = await axios.get(`${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.formVal}&lat=${locationData.data[0].lat}&lon=${locationData.data[0].lon}`)
            let moviesData = await axios.get(`${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.formVal}`)
            this.setState({
                locationData: locationData.data[0],
                weatherData: weatherData.data,
                moviesData: moviesData.data,
                danger: false,
                checkData: true,
                loading:false
            })

        }
        catch {

            this.setState({
                checkData: false,
                danger: true
            })
        }
    }


    render() {
        return (
            <main>
                <Form style={{ width: '18rem' }} onSubmit={this.submitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter city</Form.Label>
                        <Form.Control type="text" placeholder="add any city ..." onChange={this.cityHandler} />

                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Explore!
                    </Button>
                </Form>

                {this.state.loading?<Loading/>:null}

                {this.state.checkData ?
                    <>
                        <Card style={{ width: '18rem' }}>

                            <ListGroup variant="flush">
                                <ListGroup.Item>Name: {this.state.locationData.display_name}</ListGroup.Item>
                                <ListGroup.Item>Lat: {this.state.locationData.lat}</ListGroup.Item>
                                <ListGroup.Item>Lon: {this.state.locationData.lon}</ListGroup.Item>
                            </ListGroup>
                        </Card>


                        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.locationData.lat},${this.state.locationData.lon}`} alt={this.state.locationData.display_name} />
                        <Weather weatherData={this.state.weatherData} />
                        <Movies moviesData={this.state.moviesData}/>
                    </>
                    : null
                }

                {
                    this.state.danger ?
                        <Alert variant='danger' style={{ width: '25rem' }}>
                            please enter correct city name ... no city like this.
                        </Alert> : null
                }

            </main >
        )
    }
}

export default Main
