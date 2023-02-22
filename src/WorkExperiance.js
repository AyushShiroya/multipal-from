import React, { Component } from 'react'
import { withRouter } from './wapper'
import { connect } from 'react-redux'

class WorkExperiance extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleSubmit = () => {
    this.props.navigate("/Data")
  }


  render() {

    return (
      <>
        <div className="container">
          <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 edit_information">
            <form action="" method="POST">
              <h3 className="text-center"> Work Exprience</h3>
              <div className="row mt-5">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Company Name:</label>
                    <input type="text" name="firstname" className="form-control" required onChange={(e) => this.props.workExperiance(e)} value={this.props?.workExperiance?.firstname} />
                    <span className='personal'>{this.props.workerroe.firstname}</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Company Address:</label>
                    <input type="text" name="Address" className="form-control" required onChange={(e) => this.props.workExperiance(e)} value={this.props?.workExperiance?.Address} />
                    <span className='personal'>{this.props.workerroe.Address}</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">From year:</label>
                    <input name="Fromyear" className="form-control" required onChange={(e) => this.props.workExperiance(e)} value={this.props?.workExperiance?.Fromyear} />
                    <span className='personal'>{this.props.workerroe.Fromyear}</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">To year:</label>
                    <input name="Toyear" className="form-control" required onChange={(e) => this.props.workExperiance(e)} value={this.props?.workExperiance?.Toyear} />
                    <span className='personal'>{this.props.workerroe.Toyear}</span>
                  </div>
                </div>
              </div>
            </form>
            <button type="button" class="btn btn-info" onClick={() => this.handleSubmit()}>SUBMIT</button>
          </div>
        </div>
      </>
    )
  }
}

const mapStateTOprops = (state) => {
  return {
    personalData: state.personalData,
    educationdata: state.educationdata,
   
  }

}

export default withRouter(connect(mapStateTOprops, null)(WorkExperiance))