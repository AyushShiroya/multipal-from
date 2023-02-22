import React, { Component } from 'react'
import { withRouter } from './wapper'
import { connect } from 'react-redux'

class DataReport extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handleBack = () => {
        this.props.navigate("/")
    }

    render() {



        return (
            <div className="container ">
                <h1>Personal Details</h1>
                <h4>First Name :<span className='mx-5'>{this.props?.personalData?.firstname}</span></h4>
                <h4>Last name :<span className='mx-5'>{this.props?.personalData?.lastname}</span></h4>
                <h4>Email :<span className='mx-5'>{this.props?.personalData?.email}</span></h4>
                <h4>Phone :<span className='mx-5'>{this.props?.personalData?.phone}</span></h4>
                <h4>Birth Date :<span className='mx-5'>{this.props?.personalData?.birthday}</span></h4>
                <h4>Countrystate :<span className='mx-5'>{this.props?.personalData?.countrystate}</span></h4>
                <h4>City :<span className='mx-5'>{this.props?.personalData?.city}</span></h4>
                <h4>Gender :<span className='mx-5'>{this.props?.personalData?.gender}</span></h4>
                <h4>Handicape :<span className='mx-5'>{this.props?.personalData?.handicape}</span></h4>
                <h4>Parentsphone :<span className='mx-5'>{this.props?.personalData?.parentsphone}</span></h4>
                <h1>Education Details</h1>
                <h4>School/Collage Name :<span className='mx-5'>{this.props?.educationdata?.firstname}</span></h4>
                <h4>Course :<span className='mx-5'>{this.props?.educationdata?.gradsubject}</span></h4>
                <h4>From year :<span className='mx-5'>{this.props?.educationdata?.Fromyear}</span></h4>
                <h4>To year :<span className='mx-5'>{this.props?.educationdata?.Toyear}</span></h4>
                <h4>Branch :<span className='mx-5'>{this.props?.educationdata?.gradexamtype}</span></h4>
                <h4>Course Duration :<span className='mx-5'>{this.props?.personaleducationdataData?.gradduration}</span></h4>
                <h1>Work Exprience</h1>
                <h4>Company Name:<span className='mx-5'>{this.props?.expriencedata?.firstname}</span></h4>
                <h4>Company Address:<span className='mx-5'>{this.props?.expriencedata?.Address}</span></h4>
                <h4>From year:<span className='mx-5'>{this.props?.expriencedata?.Fromyear}</span></h4>
                <h4>To year:<span className='mx-5'>{this.props?.expriencedata?.Toyear}</span></h4>
                <div className='container'>
                    <button type="button" class="btn btn-dark btn1" onClick={() => this.handleBack()}>BACK !</button>
                </div>
            </div>

        )
    }
}

const mapStateTOprops = (state) => {
    return {
        personalData: state.personalData,
        educationdata: state.educationdata,
        expriencedata: state.expriencedata
    }

}

export default withRouter(connect(mapStateTOprops, null)(DataReport))