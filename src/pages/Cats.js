import React from 'react';
import { Link } from 'react-router-dom'
import { CardDeck, Row, Col, Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';

class Cats extends React.Component {


    render(){
        return (
            <Row>
                <Col lrg="12">
                <CardDeck>
                    {/*}{this.props.cats.map((cat) =>
                        <li key={cat.id}>
                        <Link to= {`/pages/catinfo/${cat.id}`} >
                            {cat.name}
                        </Link>
                        </li>
                    )}*/}
                    {this.props.cats.map((cat) =>
                        <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src={cat.image} alt="Cat image"/>
                            <CardBody>
                                <CardTitle> {cat.name}</CardTitle>
                                    <CardText> {cat.age} </CardText>
                                    <CardText> {cat.enjoys} </CardText>
                                    <Link to= {`/pages/catinfo/${cat.id}`} >
                                        Adopt {cat.name}
                                    </Link>
                            </CardBody>
                        </Card>
                        </Col>
                    )}
                </CardDeck>
                </Col>
            </Row>
        )
    }
}

export default Cats
