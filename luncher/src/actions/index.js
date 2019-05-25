export const DISP_SCHOOL_GRID = 'DISP_SCHOOL_GRID';

export const dispSchoolGrid = schools => {
    return {
        type: 'DISP_SCHOOL_GRID',
        payload: schools
    }
}