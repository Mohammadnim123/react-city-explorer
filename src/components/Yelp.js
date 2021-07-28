import React, { Component } from 'react'
import { ToggleButtonGroup, Card ,ToggleButton} from 'react-bootstrap'

export class Yelp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    render() {
        console.log(this.props.yelpData);
        return (
            <div id='yelp'>
                <h1>Yelp</h1>
                {this.props.yelpData.map(elem => {
                    return <Card style={{ width: '18rem' , height: '30rem'}}>
                        <Card.Img variant="top" src={elem.image_url} />
                        <Card.Body>
                            <Card.Title>{elem.name}</Card.Title>
                            <Card.Text>
                                <p>URL : <a href={elem.url} target="_blank" rel="noopener noreferrer">{elem.name}</a></p>
                                <p>rating: {elem.rating}</p>
                                <p>price: {elem.price}</p>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                })}
                <ToggleButtonGroup type="checkbox" >
                    <ToggleButton id="tbg-btn-1" value={1} onClick={this.props.yelpPrevPageHandler}>
                        Previous
                    </ToggleButton>
                    <ToggleButton id="tbg-btn-2" value={2} onClick={this.props.yelpNextPageHandler}>
                    Next
                    </ToggleButton>

                </ToggleButtonGroup>

            </div>
        )
    }
}

export default Yelp
