import React from 'react';

import Figure from '../../components/Figure/Figure';

import { connect } from 'react-redux';

import './style.css';

const QueueField = props => {
    return(
        <div className='queue-field' style={ {display: props.size === null ? 'none' : 'flex'} }>
            <div className='queue-field__cell' 
                style={{border: `3px solid ${props.icon === 'X' ? 'green' : 'red'}`}}>
                <Figure 
                    figureName={ "fas fa-times" } 
                    fontSize={ 10 }/>
            </div>
            <div className='queue-field__cell'
                style={{
                    border: `3px solid ${props.icon === 'O' ? 'green' : 'red'}`,
                    marginLeft: '2px'
                    }}>
                    <Figure 
                        figureName={ "far fa-circle" }
                        fontSize={ 8 }/>
            </div>
        </div>
    );
};

const mapStateToProps = state => (
    {
        icon: state.reducerMainGame.icon,
        size: state.reducerMainGame.size
    }
)

export default connect(mapStateToProps)(QueueField);