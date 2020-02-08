import React, { Component } from 'react';

import ComponentB from 'components/ComponentB';

class ComponentA extends Component{
    render(){
        return (
            <div>
                <p>ComponentA import </p>
                <ComponentB />
            </div>
        )
    }
}

export default ComponentA;