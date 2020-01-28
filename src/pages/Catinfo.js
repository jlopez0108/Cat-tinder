import React from 'react';
import { Row, Col, Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom'

class Catinfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            catId: props.match.params.id,
            form:{
                    name: '',
                    email: '',
                    phone: '',
                    cat_id: ''
                }
        }
    }

    handleChange = (event) => {
      let {form} = this.state
      form[event.target.name] = event.target.value
      this.setState({form: form})
    }

    handleAdoption = () =>{
        let {form} = this.state
        console.log(this.props)
        this.props.submitAdoption(form)
    }

    render(){
        const { catId } = this.state
        const { cats } = this.props
        const cat = cats.find((c)=> c.id === parseInt(catId))
        return (
            <div>
                <h1>Adoption Form for {cat.name}</h1>
                <Form>
                    <FormGroup>
                        <Label for="name">Your Name</Label>
                            <Input
                                id="name"
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                                value={this.state.form.name}
                                placeholder="Your name"
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Your Email</Label>
                            <Input
                                id="email"
                                type="text"
                                name="email"
                                onChange={this.handleChange}
                                value={this.state.form.email}
                                placeholder="Your Email"
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">Your Phone</Label>
                            <Input
                                id="phone"
                                type="text"
                                name="phone"
                                onChange={this.handleChange}
                                value={this.state.form.phone}
                                placeholder="Your Phone number"
                            />
                    </FormGroup>
                </Form>
                <Link to={`/pages/adoption/${cat.id}`} className= "btn btn-primary" onClick={this.handleAdoption}>Submit Adoption Form</Link>
            </div>
        )
    }
}

export default Catinfo
