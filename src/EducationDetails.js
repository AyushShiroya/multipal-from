import React, { Component } from 'react'

export default class EducationDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // educationDetails: {
      //   firstname: "",
      //   gradsubject: "",
      //   Fromyear: "",
      //   Toyear: "",
      //   gradexamtype: "",
      //   email: "",
      //   gradduration: "",

      // }
    }
  }

  // educationDetails = (e) => {
  //   this.setState({
  //     educationDetails: { ...this.state.educationDetails, [e.target.name]: e.target.value }
  //   })
  // }

  render() {

    // console.log("::::::::::::::::::::::::::>>>>", this.state.educationDetails);
    return (
      <>
        <div className="container">
          <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 edit_information">
            <form action="" method="POST">
              <h3 className="text-center">Education Details</h3>
              <div className="row mt-5">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">School/Collage Name:</label>
                    <input type="text" name="firstname" className="form-control" required onChange={(e) => this.props.educationDetails(e)} value={this.props?.educationdata?.firstname} />
                    <span className='personal'>{this.props.educationerroe.firstname}</span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Course: </label>
                    <select name="gradsubject" id="gradsubject" className="form-control" onChange={(e) => this.props.educationDetails(e)} value={this.props?.educationDetails?.gradsubject} >
                      <option>Select One</option>
                      <option value="COMPUTER SCIENCE (CS)">Computer Science (CS)</option>
                      <option value="COMPUTER ENGINEERING (CE)">Computer Engineering (CE)</option>
                      <option value="COMPUTER SCIENCE AND ENGINEERING (CSE)">Computer Science and Engineering (CSE)</option>
                      <option value="ELECTRONICS AND COMPUTER SCIENCE (ECS)">Electronics and Computer Science (ECS)</option>
                      <option value="COMPUTER AND INFORMATION TECHNOLOGY (CIT)">Computer and Information Technology (CIT)</option>
                      <option value="INFORMATION AND COMMUNICATION TECHNOLOGY (ICT)">Information and Communication Technology (ICT)</option>
                      <option value="INFORMATION TECHNOLOGY (IT)">Information Technology (IT)</option>
                      <option value="SOFTWARE ENGINEERING (SE)">Software Engineering (SE)</option>
                      <option value="Textile Engineering">Textile Engineering</option>
                      <option value="ELECTRICAL AND ELECTRONICS ENGINEERING (EEE)">Electrical and Electronics Engineering (EEE)</option>
                      <option value="ELECTRONICS AND TELECOMMUNICATION ENGINEERING (ETE)">Electronics and Telecommunication Engineering (ETE)</option>
                      <option value="ELECTRONICS AND COMMUNICATION ENGINEERING (ECE)">Electronics and Communication Engineering (ECE)</option>
                      <option value="CIVIL ENGINEERING (CE)">Civil Engineering (CE)</option>
                      <option value="MECHANICAL ENGINEERING (ME)">Mechanical Engineering (ME)</option>
                      <option value="INDUSTRIAL AND PRODUCTION ENGINEERING (IPE)">Industrial and Production Engineering (IPE)</option>
                      <option value="ARCHITECTURE">Architecture</option>
                      <option value="MATHEMATICS">Mathematics</option>
                      <option value="PHYSICS">Physics</option>
                      <option value="CHEMISTRY">Chemistry</option>
                      <option value="STATISTICS">Statistics</option>
                      <option value="GEOLOGICAL SCIENCES">Geological Sciences</option>
                      <option value="ENVIRONMENTAL SCIENCES">Environmental Sciences</option>
                      <option value="PGD IN COMPUTER SCIENCE (CS)">PGD in Computer Science (CS)</option>
                      <option value="PGD IN COMPUTER ENGINEERING (CE)">PGD in Computer Engineering (CE)</option>
                      <option value="PGD IN COMPUTER SCIENCE AND ENGINEERING (CSE)">PGD in Computer Science and Engineering (CSE)</option>
                      <option value="PGD IN ELECTRONICS AND COMPUTER SCIENCE (ECS)">PGD in Electronics and Computer Science (ECS)</option>
                      <option value="PGD IN COMPUTER AND INFORMATION TECHNOLOGY (CIT)">PGD in Computer and Information Technology (CIT)</option>
                      <option value="PGD IN INFORMATION AND COMMUNICATION TECHNOLOGY (ICT)">PGD in Information and Communication Technology (ICT)</option>
                      <option value="PGD IN INFORMATION TECHNOLOGY (IT)">PGD in Information Technology (IT)</option>
                      <option value="PGD IN SOFTWARE ENGINEERING (SE)">PGD in Software Engineering (SE)</option>
                    </select>
                    <span className='personal'>{this.props.educationerroe.gradsubject}</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">From year:</label>
                    <input type="date" name="Fromyear" className="form-control" required onChange={(e) => this.props.educationDetails(e)} value={this.props?.educationdata?.Fromyear} />
                    <span className='personal'>{this.props.educationerroe.Fromyear}</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">To year:</label>
                    <input type="date" name="Toyear" className="form-control" required onChange={(e) => this.props.educationDetails(e)} value={this.props?.educationdata?.Toyear} />
                    <span className='personal'>{this.props.educationerroe.Toyear}</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Branch:</label>
                    <select name="gradexamtype" id="gradexamtype" className="form-control"onChange={(e) => this.props.educationDetails(e)} value={this.props?.educationdata?.gradexamtype}>
                      <option>Select One</option>
                      <option value="B.SC (ENGINEERING/ARCHITECTURE)">B.Sc (Engineering/Architecture)</option>
                      <option value="B.SC (AGRICULTURAL SCIENCE)">B.Sc (Agricultural Science)</option>
                      <option value="B.SC (Textile Engineering)">B.Sc (Textile Engineering)</option>
                      <option value="HONOURS">Honours</option>
                      <option value="OTHERS">Others</option>
                    </select>
                    <span className='personal'>{this.props.educationerroe.gradexamtype}</span>
                  </div>
                </div>
              </div>
              {/* <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Email Address:</label>
                    <input type="email" name="email" className="form-control" required onChange={(e) => this.props.educationDetails(e)} value={this.props?.educationdata?.email}/>
                    <span className='personal'>{this.props.educationerroe.email}</span>
                  </div>
                </div>
              </div> */}
              <label className="control-label col-sm-2">Course Duration</label>
              <div className="col-sm-4">
                <select name="gradduration" id="grad_duration" className="form-control"onChange={(e) => this.props.educationDetails(e)} value={this.props?.educationdata?.gradduration}>
                  <option>Select One</option>
                  <option value="1">1 Year</option>
                  <option value="2">2 Years</option>
                  <option value="3">3 Years</option>
                  <option value="4">4 Years</option>
                  <option value="5">5 Years</option>
                </select>
                <span className='personal'>{this.props.educationerroe.gradduration}</span>
              </div>
            </form>
          </div >
        </div >
      </>
    )
  }
}



