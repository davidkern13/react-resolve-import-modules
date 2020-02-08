import React, { Component } from 'react';

import ComponentB from 'Components/ComponentB';
import Child3 from 'Parent';

class ComponentA extends Component{
    render(){
        return (
            <div>
                <p>ComponentA import </p>
                <ComponentB />
                <Child3 />
            </div>
        )
    }
}

export default ComponentA;