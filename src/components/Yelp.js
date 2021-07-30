import React, { Component } from 'react'
import { ToggleButtonGroup, Card ,ToggleButton,Container, Row ,Col} from 'react-bootstrap'


export class Yelp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    render() {
        console.log(this.props.yelpData);
        return (
            <>
            <div id='yelp'>
            <div className="main-to-margin"></div>
        
            {this.props.yelpData.length && <h1 className='dynamic-text-shadow'>Yelp</h1>}
                <Container>
                    <Row>

                
                {this.props.yelpData.map(elem => {
                    return <Col lg={4}><Card style={{ width: '18rem', height: '35rem' , marginTop: '1rem'}}>
                        <Card.Img variant="top" src={elem.image_url} style={{width: '18rem' , height: '18rem'}} />
                        <Card.Body>
                            <Card.Title>{elem.name}</Card.Title>
                            <Card.Text>
                                <p>URL : <a href={elem.url} target="_blank" rel="noopener noreferrer">{elem.name}</a></p>
                                <p>rating: {elem.rating}</p>
                                <p>price: {elem.price}</p>
                            </Card.Text>

                        </Card.Body>
                    </Card></Col>
                })}
                    </Row>
                </Container>
                {this.props.yelpData.length && 
                <ToggleButtonGroup type="checkbox" style={{margin: '2rem 0px'}} >

                    <ToggleButton id="tbg-btn-2" value={2} onClick={this.props.yelpNextPageHandler}>
                    See more ...
                    </ToggleButton>

                </ToggleButtonGroup>}

            </div>
            </>
        )
    }
}

export default Yelp
