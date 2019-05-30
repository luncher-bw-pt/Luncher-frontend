import React from 'react';
import { Route } from 'react-router-dom';

const SingleSchool = (props) => {
    return (
        <div>
            <Route exact path="/schools/:id">
                {props}
            </Route>
        </div>
    )
}

export default SingleSchool;