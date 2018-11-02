import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent'
import { DISHES } from '../shared/dishes'

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
        this.onSelectedDish = this.onSelectedDish.bind(this);
    }

    onSelectedDish(dishId) {
        this.setState({
            selectedDish: dishId
        });
    };

    render() {
        return (
            <div className='App'>
                <Navbar dark color="primary">
                    <div className="container">
                        Anastasias restaraunt
                    </div >
                </Navbar>
                <Menu
                    dishes={this.state.dishes}
                    onClick={this.onSelectedDish}
                />
                <Dishdetail
                    dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
            </div >

        );
    }
}

export default Main;
