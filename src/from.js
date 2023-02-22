import React, { Component } from 'react';
import { Button, Steps } from 'antd';
import PersonalDetails from './PersonalDetails';
import EducationDetails from './EducationDetails';
import WorkExperiance from './WorkExperiance';
import { connect } from 'react-redux';
import { userDetails, educationDetails, workDetails } from './Action';

const steps = [
    {
        title: 'First',

    },
    {
        title: 'Second',

    },
    {
        title: 'Last',

    },
];
class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: {},
            educationerroe: {},
            workerroe: {},
            allDetails: {
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                birthday: "",
                countrystate: "",
                city: "",
                gender: "",
                handicape: "",
                parentsphone: "",

            },

            educationdata: {
                firstname: "",
                gradsubject: "",
                Fromyear: "",
                Toyear: "",
                gradexamtype: "",
                gradduration: "",

            },
            ExperianceData: {
                firstname: "",
                Address: "",
                Fromyear: "",
                Toyear: "",

            },

            current: 0,
            // allData: []
        }
    }

    next = () => {
        debugger
        if (this.state.current === 0) {
            let ereor = {}
            const displayObject = this.state.allDetails
            Object.keys(displayObject).forEach((key) => {
                const Erro = this.personalDataValid(key, displayObject[key])
                if (Erro.length > 0) {
                    ereor[key] = Erro
                }
            });
            if (Object.keys(ereor).length > 0) {
                this.setState({
                    error: ereor
                })
                return;
            }

            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>", this.state.allDetails);
            this.setState({
                current: this.state.current + 1,
            })
            this.props.personal(this.state.allDetails)
        }

        if (this.state.current === 1) {
            let ereor1 = {}
            const displayObject = this.state.educationdata
            Object.keys(displayObject).forEach((key) => {
                const Erro = this.educationvalidation(key, displayObject[key])
                if (Erro.length > 0) {
                    ereor1[key] = Erro
                }
            });
            if (Object.keys(ereor1).length > 0) {
                this.setState({
                    educationerroe: ereor1
                })
                return;
            }
            this.setState({
                current: this.state.current + 1,
            })
            this.props.education(this.state.educationdata)

            // console.log("<<<<<<<<<<<<<<<<<<<<<<<<<", this.state.educationdata);
        }
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            allDetails: nextProps.personalData,
            educationdata: nextProps.educationdata,
            ExperianceData: nextProps.expriencedata
        })
    }
    prev = () => {
        this.setState({
            current: this.state.current - 1,
        })
    };

    fromDone = () => {
        let ereor2 = {}
        const displayObject = this.state.ExperianceData
        Object.keys(displayObject).forEach((key) => {
            const Erro = this.educationvalidation(key, displayObject[key])
            if (Erro.length > 0) {
                ereor2[key] = Erro
            }
        });
        if (Object.keys(ereor2).length > 0) {
            this.setState({
                workerroe: ereor2
            })
            return;
        }
        this.props.work(this.state.ExperianceData)
        console.log(("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%ExperianceData", this.state.ExperianceData));
    }

    personalDataValid = (name, value) => {
        const numRegx = /^[0-9\b]+$/;
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        switch (name) {
            case "firstname":
                if (!value) {
                    return "In valid firstname"
                }
                else {
                    return "";
                }
            case "lastname":
                if (!value) {
                    return "In valid lastname"
                }
                else {
                    return "";
                }
            case "email":
                if (!regex.test(value)) {
                    return "In valid email"
                }
                else {
                    return "";
                }
            case "phone":
                if (!numRegx.test(value)) {
                    return "In valid phone"
                }
                else {
                    return "";
                }
            case "birthday":
                if (!value) {
                    return "In valid birthday"
                }
                else {
                    return "";
                }
            case "countrystate":
                if (!value) {
                    return "In valid countrystate"
                }
                else {
                    return "";
                }
            case "city":
                if (!value) {
                    return "In valid city"
                }
                else {
                    return "";
                }
            case "gender":
                if (!value) {
                    return "In valid gender"
                }
                else {
                    return "";
                }
            case "handicape":
                if (!value) {
                    return "In valid handicape"
                }
                else {
                    return "";
                }

            case "parentsphone":
                if (!numRegx.test(value)) {
                    return "In valid parentsphone"
                }
                else {
                    return "";
                }
            default:
                return ""
        }
    }

    educationvalidation = (name, value) => {


        switch (name) {
            case "firstname":
                if (!value) {
                    return "In valid firstname"
                }
                else {
                    return "";
                }
            case "gradsubject":
                if (!value) {
                    return "In valid gradsubject"
                }
                else {
                    return "";
                }
            case "Fromyear":
                if (!value) {
                    return "In valid Fromyear"
                }
                else {
                    return "";
                }

            case "Toyear":
                if (!value) {
                    return "In valid Toyear"
                }
                else {
                    return "";
                }
            case "gradexamtype":
                if (!value) {
                    return "In valid gradexamtype"
                }
                else {
                    return "";
                }
            case "gradduration":
                if (!value) {
                    return "In valid gradduration"
                }
                else {
                    return "";
                }


            default:
                return ""
        }
    }

    workhandle = (name, value) => {

        switch (name) {
            case "firstname":
                if (!value) {
                    return "In valid firstname"
                }
                else {
                    return "";
                }
            case "Address":
                if (!value) {
                    return "In valid Address"
                }
                else {
                    return "";
                }
            case "Fromyear":
                if (!value) {
                    return "In valid Fromyear"
                }
                else {
                    return "";
                }

            case "Toyear":
                if (!value) {
                    return "In valid Toyear"
                }
                else {
                    return "";
                }

            default:
                return ""
        }
    }



    handleDetails = (e) => {

        this.setState({
            allDetails: { ...this.state.allDetails, [e.target.name]: e.target.value },
        })
    }

    educationDetails = (e) => {
        this.setState({
            educationdata: { ...this.state.educationdata, [e.target.name]: e.target.value }
        })
    }

    workExperiance = (e) => {
        this.setState({
            ExperianceData: { ...this.state.ExperianceData, [e.target.name]: e.target.value }
        })
    }

    render() {
        const items = steps.map((item) => ({
            key: item.title,
            title: item.title,
        }));

        const { current } = this.state;
        return (
            <>
                <Steps current={current} items={items} className="mt-5" />
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                </div>
                {current === 0 && <PersonalDetails allDetails={this.state.allDetails} handleDetails={(e) => this.handleDetails(e)} error={this.state.error} personalDataValid={(e) => this.state.personalDataValid(e)} />}
                {current === 1 && <EducationDetails educationdata={this.state.educationdata} educationDetails={(e) => this.educationDetails(e)} educationerroe={this.state.educationerroe} educationvalidation={(e) => this.state.educationvalidation(e)} />}
                {current === 2 && <WorkExperiance ExperianceData={this.state.ExperianceData} workExperiance={(e) => this.workExperiance(e)} workerroe={this.state.workerroe} workhandle={(e) => this.state.workhandle(e)} />}
                <div>
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                            Next
                        </Button>

                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => this.fromDone()}>
                            Done
                        </Button>

                    )}
                    {current > 0 && (
                        <Button
                            style={{
                                margin: '0 8px',
                            }}
                            onClick={() => this.prev()}
                        >
                            Previous
                        </Button>

                    )}
                </div>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        personal: (data) => dispatch(userDetails(data)),
        education: (data) => dispatch(educationDetails(data)),
        work: (data => dispatch(workDetails(data))),

    }
}

const mapStateTOprops = (state) => {
    return {
        personalData: state.personalData,
        educationdata: state.educationdata,

    }

}

export default connect(mapStateTOprops, mapDispatchToProps)(Form)