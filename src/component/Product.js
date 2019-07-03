import React, { Component } from 'react';
import { Col, Card, CardImg, CardBody, CardText, CardTitle, Button } from 'reactstrap';

class Product extends Component {
    render() {

        const styleTitle = {
            fontSize: '30px',
            fontWeight: 'bold'
        }

        return (
            <Col xs="3">
                <Card>
                    <CardImg top width="100%" height="100%" src={this.props.images} alt={this.props.title} />
                    <CardBody>
                        <CardTitle style={styleTitle}>{this.props.title}</CardTitle>
                        <CardText>{this.props.text}</CardText>
                        <Button color="info">Nhap</Button>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default Product;