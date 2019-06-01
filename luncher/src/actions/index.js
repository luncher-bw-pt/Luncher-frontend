
import axios from 'axios';
export const DISP_SCHOOL_GRID = 'DISP_SCHOOL_GRID';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const DELETE_SCHOOL = 'DELETE_SCHOOL';



export const dispSchoolGrid = () => dispatch => {
    dispatch({ type: DISP_SCHOOL_GRID });
    axios
        .get('https://luncher-backend.herokuapp.com/api/schools')
        .then(res => dispatch({ type: SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FAILURE, payload: err }))

}

/*export const deleteSchool = id => dispatch => {
    return dispatch => {
        console.log(id);
        axios
            .delete(`https://luncher-backend.herokuapp.com/api/schools/${id}`)
            .then(res => dispatch({ type: DELETE_SCHOOL, payload: res.data }))
            .catch(err => dispatch({ type: FAILURE, payload: err }))
    }
}*/

export const deleteSchool = schoolId => {
    return dispatch => {
        console.log(schoolId);
        axios
            .delete(`https://luncher-backend.herokuapp.com/api/schools/${schoolId}`)
            .then(res => {
                dispatch({ type: DELETE_SCHOOL, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FAILURE, payload: err })
            })
    }
}