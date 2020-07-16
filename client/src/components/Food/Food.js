import React from 'react'
import './Food.css'

class Food extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            arr: []
        }
    }
    componentDidMount(){
        this.setState({
            ...this.state,
            arr: [...Array(parseInt(this.props.restaurants.valoracion_global))]
        })
    }

    goToRestaurant(){
        this.props.history.push(`/restaurant/${this.props.restaurants.id_local}`)
    }

    render(){
        return(
            <section className='food-section' onClick={this.goToRestaurant.bind(this)}>
                <img src='images/restaurant.jpg' alt={this.props.restaurants.nombre_local} className='food-section-img' />
                <p className='food-section-tipo'>{this.props.restaurants.tipo_de_comida}</p>
                <p className='food-section-name'>{this.props.restaurants.nombre_local}</p>
                <figure className='figur-escuditos'>
                    {this.state.arr.map(e => <img src='/images/escuditoCeleste.svg' alt='valoraciones' className='escuditos-valoracion' />)}
                </figure>
                <p className='food-section-address'>{this.props.restaurants.calle}</p>
            </section>
        )
    }
}

export default Food