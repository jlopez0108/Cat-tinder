import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Navbar, NavItem } from 'reactstrap'

import Cats from './pages/Cats'
import NewCat from './pages/NewCat'
import Header from './pages/Header'
import Catinfo from './pages/Catinfo'
import Adoption from './pages/Adoption'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cats:[
            //   {
            //     id: 1,
            //     name: 'Morris',
            //     age: 2,
            //     enjoys: "Long walks on the beach.",
            //     image: "/cat1.png",
            //   },
            //   {
            //     id: 2,
            //     name: 'Paws',
            //     age: 4,
            //     enjoys: "Snuggling by the fire.",
            //     image: "/cat2.jpeg",
            //   },
            //   {
            //     id: 3,
            //     name: 'Mr. Meowsalot',
            //     age: 12,
            //     enjoys: "Being in charge.",
            //     image: "/cat3.jpeg",
            //   }
        ],
        adopter:[{
                id: '',
                name: '',
                email: '',
                phone: '',
            }]
      }
        this.getCats()
    }

    componentWillMount(){
    	this.getCats();
    }

    getCats = ()=>{
      fetch("http://localhost:3000/cats")
        //Fetch returns a promise
      .then((response)=>{
        if(response.status === 200){ //Make sure we get a successfull response back
          return(response.json()) //We need to convert the response to json.  This also returns a promise
          console.log(response.json())
        }
      })
      .then((catsArray)=>{
        this.setState({cats: catsArray}) //Finally, we can assign the cats to state, and they will render.
      })
      .then(console.log(this.state.cats))
    }

    createCat = (cat)=>{
      return fetch('http://localhost:3000/cats', {
      	body: JSON.stringify(cat),  // <- we need to stringify the json for fetch
      	headers: {  // <- We specify that we're sending JSON, and expect JSON back
      		'Content-Type': 'application/json'
      	},
      	method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
      })
      .then((response) => {
        if(response.ok){
          return this.getCats()
        }
      })
    }

    submitNewCat = (form) =>{
        const { cats } = this.state
        let catid = cats.length
        catid++
        cats.push({ id: catid,
                        name: form.name,
                        age: form.age,
                        enjoys: form.enjoys
                    })
        this.setState({cats : cats})

    }

    submitAdoption = (form) =>{
        const { adopter } = this.state
        const { cats } = this.state
        let id = adopter.length
        id++
        adopter.push({ id:id,
                        name: form.name,
                        email: form.email,
                        phone: form.phone
                    })
        this.setState({adopter : adopter})

    }



    render() {
        return (
            <div>
                <Router>
                    <Navbar>
                        <NavItem>
                        <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                        <Link to="/pages/cats">Cats</Link>
                        </NavItem>
                        <NavItem>
                        <Link to="/pages/newcat">New Cat</Link>
                        </NavItem>
                    </Navbar>

                    <Header />

                    <Switch>
                        <Route
                            exact path="/pages/cats"
                            render={(props) =>
                                <Cats cats={ this.state.cats } />
                            }
                        />

                        <Route
                            exact path="/pages/newcat"
                            render={(props) =>
                                <NewCat newcat={ this.state.newcats } submitNewCat={this.submitNewCat}
                                onSubmit={this.createCat}/>
                            }
                        />
                        <Route
                            exact path="/pages/catinfo/:id"
                            render={(props) =>                               <Catinfo {...props} cats={ this.state.cats} submitAdoption={this.submitAdoption}/>
                            }
                            />
                        <Route
                            exact path="/pages/adoption/:id"
                            render={(props) =>                               <Adoption {...props}
                            cats={ this.state.cats }
                            adopter={ this.state.adopter }/>
                            }
                            />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
