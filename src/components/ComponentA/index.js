import React, { Component } from 'react';

import ComponentB from 'Components/ComponentB';

class ComponentB extends Component{
    render(){
        return (
            <div>
                <ComponentB />
            </div>
        )
    }
}

export default ComponentB;