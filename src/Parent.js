import React from 'react';
import Child from './Child';

function Parent(props) {
    return (
        <div>
            I am Parent
            <Child num={props.num} />
        </div>
    );
}

export default Parent;