import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReactComp extends Component {
    render() {
        return (
            <div>
                <button>{this.props.title}</button>
            </div>
        );
    }
}

ReactComp.propTypes = {
    title:PropTypes.string
};

export default ReactComp;