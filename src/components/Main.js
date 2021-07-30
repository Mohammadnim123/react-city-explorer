import axios from 'axios';
import React, { Component } from 'react'
import { Form, Button, Card, ListGroup, Alert } from 'react-bootstrap'
import Weather from './Weather'
import Movies from './Movies'
import Loading from './Loading';
import Yelp from './Yelp'
import './css/main.css'

let locationStorage = {};

const setLocalStorage = function(){
    
    localStorage.setItem('location', JSON.stringify(locationStorage));
}

let retrievedObject = localStorage.getItem('location');
if(retrievedObject){
    locationStorage = JSON.parse(retrievedObject)
}


export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yelpPage:1,
            formVal: '',
            locationData: {},
            weatherData: [],
            moviesData:[],
            yelpData:[],
            
            danger: false,
            checkData: false,
            loading: false

        }
    }
    yelpNextPageHandler = async()=>{
        this.setState({
            yelpPage : this.state.yelpPage + 1
        })
        let yelpData = await axios.get(`${process.env.REACT_APP_SERVER}/yelp?searchQuery=${this.state.formVal}&page=${this.state.yelpPage + 1}`);
        this.setState({
            yelpData: [...this.state.yelpData, ...yelpData.data]
        })

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
                loading:true,
                checkData: false
            })

            document.getElementById('loading').scrollIntoView({behavior: "smooth"});

            let locationUrl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.formVal}&format=json`;
            let locationData;
            if(locationStorage[this.state.formVal] !== undefined){
                console.log('catched');
                locationData = locationStorage[this.state.formVal];
            }
            else{
                console.log('not catched');
                locationData = await axios.get(locationUrl);
                locationStorage[this.state.formVal] = locationData;
                setLocalStorage();
            }

            
            let weatherData = await axios.get(`${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.formVal}&lat=${locationData.data[0].lat}&lon=${locationData.data[0].lon}`)
            let moviesData = await axios.get(`${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.formVal}`)
            let yelpData = await axios.get(`${process.env.REACT_APP_SERVER}/yelp?searchQuery=${this.state.formVal}&page=1`)
            this.setState({
                locationData: locationData.data[0],
                weatherData: weatherData.data,
                moviesData: moviesData.data,
                yelpData: yelpData.data,
                danger: false,
                checkData: true,
                loading:false
            })

        }
        catch {

            this.setState({
                loading:false,
                checkData: false,
                danger: true
            })
        }
    }


    render() {

        return (
            <main>


                <div className="main-hero">
                    <div className='main-overlay'></div>
                    <div className='main-form-title-container'>
                    <h1>City Explorer</h1>
                <Form className='main-form'  onSubmit={this.submitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter City</Form.Label>
                        <Form.Control type="text" placeholder="add any city ..." onChange={this.cityHandler} />

                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Explore!
                    </Button>
                </Form>
                </div>
                </div>

                <div id='loading'></div>
                {this.state.loading?<Loading/>:null}

                

                <div id='result' className='main-result'>

                {this.state.checkData ?
                    <>
                    <div className="main-to-margin"></div>
                        <h1 className='dynamic-text-shadow'>Location</h1>
                    <div className='main-location'>
                        <Card style={{ width: '18rem' }}>

                            <ListGroup variant="flush">
                                <ListGroup.Item>Name: {this.state.locationData.display_name}</ListGroup.Item>
                                <ListGroup.Item>Lat: {this.state.locationData.lat}</ListGroup.Item>
                                <ListGroup.Item>Lon: {this.state.locationData.lon}</ListGroup.Item>
                            </ListGroup>
                        </Card>


                        <div><img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.locationData.lat},${this.state.locationData.lon}`} alt={this.state.locationData.display_name} /></div>
                        </div>
                        <Weather weatherData={this.state.weatherData} />
                        <Movies moviesData={this.state.moviesData}/>
                        <Yelp yelpData={this.state.yelpData} yelpNextPageHandler={this.yelpNextPageHandler} yelpPrevPageHandler={this.yelpPrevPageHandler} />
                    </>
                    : null
                }

                {
                    this.state.danger ?
                        <Alert variant='danger' style={{ width: '25rem' }}>
                            please enter correct city name ... no city like this.
                        </Alert> : null
                }
                </div>

            </main >
        )
    }
}

export default Main
