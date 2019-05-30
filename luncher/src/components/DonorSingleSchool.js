import React from 'react';


const DonorSingleSchool = (props) => {
    const {...props} = props.school;
    return (
        <div>
            <h1>{props.school.schoolName}</h1>
            <h3>{props.school.state},{props.school.zip}</h3>
            <h4>Contact: {props.school.contact}</h4>
            <h2>This school is in need of {props.school.fundsNeeded}</h2>
            {/*  donor form to go here
            <form></form>
            */}
        </div>
    )
}

export default DonorSingleSchool;