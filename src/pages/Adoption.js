import React from 'react';

class Adoption extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            catId: props.match.params.id
        }
    }

    render(){
        const { catId } = this.state
        const { cats } = this.props
        const cat = cats.find((c)=> c.id === parseInt(catId))
    return (
        <div>
            <h1>Congratulations!!</h1>
            <h2>We'll be reaching out to you shortly about {cat.name}</h2>
        </div>
        )
    }
}


export default Adoption
