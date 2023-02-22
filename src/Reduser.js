
const INITIALSTATE = {
    personalData: {},
    expriencedata: {},
    educationdata: {}

};

const theuserdetails = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case "USER_DETAILS":
            return { ...state, personalData: { ...action.payload } }
        case "EDUCATION_DETAILS":

            return { ...state, educationdata: { ...action.payload } }
        case "WORK_EXPERIANCE":

            return { ...state, expriencedata: { ...action.payload } }
        default:
            return {
                state
            }
    }
}
export default theuserdetails