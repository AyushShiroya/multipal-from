import React, { Component } from 'react'
import { Radio } from 'antd';
// import { connect } from 'react-redux';



export default class PersonalDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }


    render() {
        // console.log(">>>>>>>>>>>>>>>>>>>>>>>>", this.state.personalDetails);
        // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>",this.props.personal);
        // this.props.personal(this.state.personalDetails)
        console.log(">>>>>>>>>>error", this.props.error);
        return (
            <div>
                <div className="container">
                    <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 edit_information">
                        <form action="" method="POST">
                            <h3 className="text-center">Personal Details </h3>
                            <div className="row mt-5">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <label className="profile_details_text">First Name:</label>

                                        <input type="text" name="firstname" className="form-control" required onChange={(e) => this.props.handleDetails(e)} value={this.props?.allDetails?.firstname} />
                                        <span className='personal'>{this.props.error.firstname}</span>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <label className="profile_details_text">Last Name: </label>

                                        <input type="text" name="lastname" className="form-control" required onChange={(e) => this.props.handleDetails(e)} value={this.props?.allDetails?.lastname} />
                                        <span className='personal'>{this.props.error.lastname}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label className="profile_details_text">Email Address:</label>

                                        <input type="email" name="email" className="form-control" required onChange={(e) => this.props.handleDetails(e)} value={this.props?.allDetails?.email} />
                                        <span className='personal'>{this.props.error.email}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label className="profile_details_text">Mobile Number:</label>

                                        <input type="tel" name="phone" placeholder="123-45-678" className="form-control" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required onChange={(e) => this.props.handleDetails(e)} value={this.props?.allDetails?.phone} />
                                        <span className='personal'>{this.props.error.phone}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label className="profile_details_text">Date Of Birth:</label>

                                        <input type="date" name="birthday" className="form-control" required onChange={(e) => this.props.handleDetails(e)} value={this.props?.allDetails?.birthday} />
                                        <span className='personal'>{this.props.error.birthday}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label className="profile_details_text mt-3">State:</label><br></br>

                                        <select id="country-state" name="countrystate" onChange={(e) => this.props.handleDetails(e)} value={this.props?.allDetails?.countrystate} >
                                            <option>select state</option>
                                            <option value="AN">Andaman and Nicobar Islands</option>
                                            <option value="AP">Andhra Pradesh</option>
                                            <option value="AR">Arunachal Pradesh</option>
                                            <option value="AS">Assam</option>
                                            <option value="BR">Bihar</option>
                                            <option value="CH">Chandigarh</option>
                                            <option value="CT">Chhattisgarh</option>
                                            <option value="DN">Dadra and Nagar Haveli</option>
                                            <option value="DD">Daman and Diu</option>
                                            <option value="DL">Delhi</option>
                                            <option value="GA">Goa</option>
                                            <option value="GJ">Gujarat</option>
                                            <option value="HR">Haryana</option>
                                            <option value="HP">Himachal Pradesh</option>
                                            <option value="JK">Jammu and Kashmir</option>
                                            <option value="JH">Jharkhand</option>
                                            <option value="KA">Karnataka</option>
                                            <option value="KL">Kerala</option>
                                            <option value="LA">Ladakh</option>
                                            <option value="LD">Lakshadweep</option>
                                            <option value="MP">Madhya Pradesh</option>
                                            <option value="MH">Maharashtra</option>
                                            <option value="MN">Manipur</option>
                                            <option value="ML">Meghalaya</option>
                                            <option value="MZ">Mizoram</option>
                                            <option value="NL">Nagaland</option>
                                            <option value="OR">Odisha</option>
                                            <option value="PY">Puducherry</option>
                                            <option value="PB">Punjab</option>
                                            <option value="RJ">Rajasthan</option>
                                            <option value="SK">Sikkim</option>
                                            <option value="TN">Tamil Nadu</option>
                                            <option value="TG">Telangana</option>
                                            <option value="TR">Tripura</option>
                                            <option value="UP">Uttar Pradesh</option>
                                            <option value="UT">Uttarakhand</option>
                                            <option value="WB">West Bengal</option>
                                        </select>
                                        <span className='personal'>{this.props.error.countrystate}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label className="profile_details_text mt-3">city:</label><br></br>

                                        <select id="city" name="city" onChange={(e) => this.props.handleDetails(e)} value={this.props?.allDetails?.city} >
                                            <option value="">Select City</option>
                                            <option value="Abrama">Abrama</option>
                                            <option value="Adalaj">Adalaj</option>
                                            <option value="Ahmedabad">Ahmedabad</option>
                                            <option value="Ahwa">Ahwa</option>
                                            <option value="Amod">Amod</option>
                                            <option value="Amreli">Amreli</option>
                                            <option value="Amroli">Amroli</option>
                                            <option value="Anand">Anand</option>
                                            <option value="Anjar">Anjar</option>
                                            <option value="Ankleshwar">Ankleshwar</option>
                                            <option value="Babra">Babra</option>
                                            <option value="Bagasara">Bagasara</option>
                                            <option value="Bagasra">Bagasra</option>
                                            <option value="Banas Kantha">Banas Kantha</option>
                                            <option value="Bantva">Bantva</option>
                                            <option value="Bardoli">Bardoli</option>
                                            <option value="Bedi">Bedi</option>
                                            <option value="Bhachau">Bhachau</option>
                                            <option value="Bhanvad">Bhanvad</option>
                                            <option value="Bharuch">Bharuch</option>
                                            <option value="Bhavnagar">Bhavnagar</option>
                                            <option value="Bhayavadar">Bhayavadar</option>
                                            <option value="Bhuj">Bhuj</option>
                                            <option value="Bilimora">Bilimora</option>
                                            <option value="Bilkha">Bilkha</option>
                                            <option value="Borsad">Borsad</option>
                                            <option value="Botad">Botad</option>
                                            <option value="Chaklasi">Chaklasi</option>
                                            <option value="Chalala">Chalala</option>
                                            <option value="Chanasma">Chanasma</option>
                                            <option value="Chhala">Chhala</option>
                                            <option value="Chhota Udepur">Chhota Udepur</option>
                                            <option value="Chikhli">Chikhli</option>
                                            <option value="Chotila">Chotila</option>
                                            <option value="Dabhoi">Dabhoi</option>
                                            <option value="Dahegam">Dahegam</option>
                                            <option value="Dahod">Dahod</option>
                                            <option value="Dakor">Dakor</option>
                                            <option value="Damnagar">Damnagar</option>
                                            <option value="Dangs (India)">Dangs (India)</option>
                                            <option value="Dayapar">Dayapar</option>
                                            <option value="Delvada">Delvada</option>
                                            <option value="Delwada">Delwada</option>
                                            <option value="Devbhumi Dwarka">Devbhumi Dwarka</option>
                                            <option value="Devgadh Bariya">Devgadh Bariya</option>
                                            <option value="Dhandhuka">Dhandhuka</option>
                                            <option value="Dhanera">Dhanera</option>
                                            <option value="Dharampur">Dharampur</option>
                                            <option value="Dhari">Dhari</option>
                                            <option value="Dhola">Dhola</option>
                                            <option value="Dholka">Dholka</option>
                                            <option value="Dhoraji">Dhoraji</option>
                                            <option value="Dhrangadhra">Dhrangadhra</option>
                                            <option value="Dhrol">Dhrol</option>
                                            <option value="Dhuwaran">Dhuwaran</option>
                                            <option value="Disa">Disa</option>
                                            <option value="Dohad">Dohad</option>
                                            <option value="Dungarpur">Dungarpur</option>
                                            <option value="Dwarka">Dwarka</option>
                                            <option value="Gadhada">Gadhada</option>
                                            <option value="Gandevi">Gandevi</option>
                                            <option value="Gandhidham">Gandhidham</option>
                                            <option value="Gandhinagar">Gandhinagar</option>
                                            <option value="Gariadhar">Gariadhar</option>
                                            <option value="Ghogha">Ghogha</option>
                                            <option value="Gir Somnath">Gir Somnath</option>
                                            <option value="Godhra">Godhra</option>
                                            <option value="Gondal">Gondal</option>
                                            <option value="Halol">Halol</option>
                                            <option value="Halvad">Halvad</option>
                                            <option value="Hansot">Hansot</option>
                                            <option value="Harij">Harij</option>
                                            <option value="Himatnagar">Himatnagar</option>
                                            <option value="Jalalpore">Jalalpore</option>
                                            <option value="Jalalpur">Jalalpur</option>
                                            <option value="Jambusar">Jambusar</option>
                                            <option value="Jamnagar">Jamnagar</option>
                                            <option value="Jasdan">Jasdan</option>
                                            <option value="Jetalsar">Jetalsar</option>
                                            <option value="Jetpur">Jetpur</option>
                                            <option value="Jhulasan">Jhulasan</option>
                                            <option value="Jodhpur">Jodhpur</option>
                                            <option value="Jodia">Jodia</option>
                                            <option value="Jodiya Bandar">Jodiya Bandar</option>
                                            <option value="Junagadh">Junagadh</option>
                                            <option value="Kachchh">Kachchh</option>
                                            <option value="Kadi">Kadi</option>
                                            <option value="Kadod">Kadod</option>
                                            <option value="Kalavad">Kalavad</option>
                                            <option value="Kalol">Kalol</option>
                                            <option value="Kandla">Kandla</option>
                                            <option value="Kanodar">Kanodar</option>
                                            <option value="Kapadvanj">Kapadvanj</option>
                                            <option value="Karamsad">Karamsad</option>
                                            <option value="Kathor">Kathor</option>
                                            <option value="Katpur">Katpur</option>
                                            <option value="Kavant">Kavant</option>
                                            <option value="Kawant">Kawant</option>
                                            <option value="Keshod">Keshod</option>
                                            <option value="Khambhalia">Khambhalia</option>
                                            <option value="Khambhat">Khambhat</option>
                                            <option value="Kheda">Kheda</option>
                                            <option value="Khedbrahma">Khedbrahma</option>
                                            <option value="Kheralu">Kheralu</option>
                                            <option value="Kodinar">Kodinar</option>
                                            <option value="Kosamba">Kosamba</option>
                                            <option value="Kundla">Kundla</option>
                                            <option value="Kutch district">Kutch district</option>
                                            <option value="Kutiyana">Kutiyana</option>
                                            <option value="Lakhtar">Lakhtar</option>
                                            <option value="Lalpur">Lalpur</option>
                                            <option value="Lathi">Lathi</option>
                                            <option value="Limbdi">Limbdi</option>
                                            <option value="Lunavada">Lunavada</option>
                                            <option value="Mahemdavad">Mahemdavad</option>
                                            <option value="Mahesana">Mahesana</option>
                                            <option value="Mahudha">Mahudha</option>
                                            <option value="Malpur">Malpur</option>
                                            <option value="Manavadar">Manavadar</option>
                                            <option value="Mandal">Mandal</option>
                                            <option value="Mandvi">Mandvi</option>
                                            <option value="Mandvi (Surat)">Mandvi (Surat)</option>
                                            <option value="Mangrol">Mangrol</option>
                                            <option value="Mansa">Mansa</option>
                                            <option value="Meghraj">Meghraj</option>
                                            <option value="Mehsana">Mehsana</option>
                                            <option value="Mendarda">Mendarda</option>
                                            <option value="Modasa">Modasa</option>
                                            <option value="Morbi">Morbi</option>
                                            <option value="Morva (Hadaf)">Morva (Hadaf)</option>
                                            <option value="Morwa">Morwa</option>
                                            <option value="Mundra">Mundra</option>
                                            <option value="Nadiad">Nadiad</option>
                                            <option value="Naliya">Naliya</option>
                                            <option value="Narmada">Narmada</option>
                                            <option value="Naroda">Naroda</option>
                                            <option value="Navsari">Navsari</option>
                                            <option value="Okha">Okha</option>
                                            <option value="Olpad">Olpad</option>
                                            <option value="Paddhari">Paddhari</option>
                                            <option value="Padra">Padra</option>
                                            <option value="Palanpur">Palanpur</option>
                                            <option value="Palitana">Palitana</option>
                                            <option value="Paliyad">Paliyad</option>
                                            <option value="Panch Mahals">Panch Mahals</option>
                                            <option value="Panchmahal district">Panchmahal district</option>
                                            <option value="Pardi">Pardi</option>
                                            <option value="Parnera">Parnera</option>
                                            <option value="Patan">Patan</option>
                                            <option value="Pavi Jetpur">Pavi Jetpur</option>
                                            <option value="Petlad">Petlad</option>
                                            <option value="Porbandar">Porbandar</option>
                                            <option value="Radhanpur">Radhanpur</option>
                                            <option value="Rajkot">Rajkot</option>
                                            <option value="Rajpipla">Rajpipla</option>
                                            <option value="Rajula">Rajula</option>
                                            <option value="Ranavav">Ranavav</option>
                                            <option value="Rapar">Rapar</option>
                                            <option value="Roha">Roha</option>
                                            <option value="Sabar Kantha">Sabar Kantha</option>
                                            <option value="Sachin">Sachin</option>
                                            <option value="Salaya">Salaya</option>
                                            <option value="Sanand">Sanand</option>
                                            <option value="Sankheda">Sankheda</option>
                                            <option value="Sarkhej">Sarkhej</option>
                                            <option value="Savarkundla">Savarkundla</option>
                                            <option value="Sayla">Sayla</option>
                                            <option value="Shahpur">Shahpur</option>
                                            <option value="Shivrajpur">Shivrajpur</option>
                                            <option value="Siddhpur">Siddhpur</option>
                                            <option value="Sihor">Sihor</option>
                                            <option value="Sikka">Sikka</option>
                                            <option value="Sinor">Sinor</option>
                                            <option value="Sojitra">Sojitra</option>
                                            <option value="Songadh">Songadh</option>
                                            <option value="Surat">Surat</option>
                                            <option value="Surendranagar">Surendranagar</option>
                                            <option value="Talaja">Talaja</option>
                                            <option value="Tankara">Tankara</option>
                                            <option value="Tapi">Tapi</option>
                                            <option value="Than">Than</option>
                                            <option value="Thangadh">Thangadh</option>
                                            <option value="Tharad">Tharad</option>
                                            <option value="Thasra">Thasra</option>
                                            <option value="The Dangs">The Dangs</option>
                                            <option value="Umrala">Umrala</option>
                                            <option value="Umreth">Umreth</option>
                                            <option value="Un">Un</option>
                                            <option value="Una">Una</option>
                                            <option value="Unjha">Unjha</option>
                                            <option value="Upleta">Upleta</option>
                                            <option value="Utran">Utran</option>
                                            <option value="Vadnagar">Vadnagar</option>
                                            <option value="Vadodara">Vadodara</option>
                                            <option value="Vaghodia">Vaghodia</option>
                                            <option value="Vallabh Vidyanagar">Vallabh Vidyanagar</option>
                                            <option value="Vallabhipur">Vallabhipur</option>
                                            <option value="Valsad">Valsad</option>
                                            <option value="Vansda">Vansda</option>
                                            <option value="Vapi">Vapi</option>
                                            <option value="Vartej">Vartej</option>
                                            <option value="Vasa">Vasa</option>
                                            <option value="Vaso">Vaso</option>
                                            <option value="Vejalpur">Vejalpur</option>
                                            <option value="Veraval">Veraval</option>
                                            <option value="Vijapur">Vijapur</option>
                                            <option value="Vinchhiya">Vinchhiya</option>
                                            <option value="Vinchia">Vinchia</option>
                                            <option value="Virpur">Virpur</option>
                                            <option value="Visavadar">Visavadar</option>
                                            <option value="Visnagar">Visnagar</option>
                                            <option value="Vyara">Vyara</option>
                                            <option value="Wadhai">Wadhai</option>
                                            <option value="Wadhwan">Wadhwan</option>
                                            <option value="Waghai">Waghai</option>
                                            <option value="Wankaner">Wankaner</option>
                                        </select>
                                        <span className='personal'>{this.props.error.city}</span>
                                    </div>
                                </div>
                            </div>
                            <label className='mt-3'>Gender:</label><br></br>

                            <Radio.Group buttonStyle="solid" name="gender" onChange={(e) => this.props.handleDetails(e)} value={this.props?.allDetails?.gender} >
                                <Radio.Button value="MALE">MALE</Radio.Button>
                                <Radio.Button value="FEMALE">FEMALE</Radio.Button>
                                <Radio.Button value="OTHER">OTHER</Radio.Button>

                            </Radio.Group>
                            <span className='personal'>{this.props.error.gender}</span>
                            <div>
                                <label className='mt-3'>Physicaly Handicape:</label><br></br>

                                <Radio.Group name="handicape" onChange={(e) => this.props.handleDetails(e)} value={this.props?.allDetails?.handicape} >
                                    <Radio value="YES">YES</Radio>
                                    <Radio value="NO">NO</Radio>
                                </Radio.Group>
                                <span className='personal'>{this.props.error.handicape}</span>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group mt-3">
                                        <label>Parent's phone number:</label><br></br>

                                        <input type="tel" id="phone" name="parentsphone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required onChange={(e) => this.props.handleDetails(e)} value={this.props?.allDetails?.parentsphone} />
                                        <span className='personal'>{this.props.error.parentsphone}</span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}



// export default connect(null, mapDispatchToProps)(PersonalDetails)