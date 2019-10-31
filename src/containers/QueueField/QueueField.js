import React from 'react';

import Cross from '../../components/Cross/Cross';
import Zero from '../../components/Zero/Zero';

import './style.css';

import { connect } from 'react-redux';

const QueueField = (props) => {
    return(
        <div className='queue-field'>
            <div className='queue-field__cell' 
                style={{border: `3px solid ${props.icon === 'X' ? 'green' : 'red'}`}}>
                <Cross/>
            </div>
            <div className='queue-field__cell'
                style={{
                    border: `3px solid ${props.icon === 'O' ? 'green' : 'red'}`,
                    marginLeft: '2px'
                    }}>
                <Zero/>
            </div>
        </div>
    );
};

const mapStateToProps = state => (
    {icon: state.icon,}
)

export default connect(mapStateToProps)(QueueField) ;