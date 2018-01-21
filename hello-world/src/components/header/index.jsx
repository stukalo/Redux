import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    items: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
    submit: PropTypes.func,
    title: PropTypes.string,
    type: PropTypes.oneOf(['news', 'photos']),
    user: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
    }),
    users: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number
        })
    )
};

class Header extends Component {
    render(){
        return <div>
            <ul>
                {this.props.items.map((item, index) =>
                    <li key={index}>
                        <a href={item.link}>
                            {item.label}
                        </a>
                    </li>
                )}
            </ul>
        </div>
    }
}

Header.propTypes = propTypes;

export default Header;