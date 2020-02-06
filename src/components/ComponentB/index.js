import React, { Component } from 'react';

import ComponentA from 'Components/ComponentA';

class ComponentB extends Component{
    render(){
        return (
            <div>
                <ComponentA />
            </div>
        )
    }
}

export default ComponentB;