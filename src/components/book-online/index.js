import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import async from 'async';
import moment from 'moment';
import Dialog from 'material-ui/Dialog';
import MenuItem from 'material-ui/MenuItem';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import SnackBar from 'material-ui/Snackbar';
import {
  RadioButton,
  RadioButtonGroup
} from 'material-ui/RadioButton'
import FlatButton from 'material-ui/FlatButton';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button,
         Step, 
         Stepper, 
         StepContent, 
         StepButton } from '@material-ui/core';
import './styles/index.css';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  disabled: {
    backgroundColor: 'grey',
    color:'white',
  },
});

const logger = require('heroku-logger');
config.logger = Logger.new(STDOUT);
const HOST = PRODUCTION ? '/' : 'http://localhost:3000/';
// const HOST = '/';

export default function BookOnline() {
  const [loading, setLoading]  = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [confirmationTextVisible, setConfirmationTextVisible] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [appointmentDateSelected, setAppointmentDateSelected] = useState(false);
  const [appointmentMeridiem, setAppointmentMeridiem] = useState(0);
  const [validEmail, setValidEmail] = useState(true);
  const [validPhone, setValidPhone] = useState(true);
  const [smallScreen, setSmallScreen] = useState(window.innerWidth < 768);
  const [confirmationSnackbarOpen, setConfirmationSnackbarOpen] = useState(false);
  const [schedule, setSchedule] = useState({}); //otherwise errors calling schedule undefined
  const [bookedAppointments, setBookedAppointments] = useState([]); //used to disable already booked slots
  const [fullDays, setFullDays] = useState([]); //tracks full days
  const [filledSlots, setFilledSlots] = useState([]);
  const [bookedDatesObj, setBookedDatesObj] = useState({});

  const [confirmationSnackbarMessage, setConfirmationSnackbarMessage] = useState("");
  const [appointmentDate, setAppointmentDate] = useState();
  const [appointmentSlot, setAppointmentSlot] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [processed, setProcessed] = useState(false);
 
  const handleNavToggle = () => {
    return setNavOpen(!navOpen )
  }

  const handleNextStep = () => {
    return (stepIndex < 3) ? setStepIndex( stepIndex + 1) : null
  }

  const handleSetAppointmentDate = (date) => {
    handleNextStep();
    setAppointmentDate(date);
    setConfirmationTextVisible(true);
  }

  const handleSetAppointmentSlot = (slot)=> {
    handleNextStep();
    setAppointmentSlot(slot);
  }

  const handleSetAppointmentMeridiem = (meridiem) => {
    setAppointmentMeridiem(meridiem);
  }

  const handleFetch = (response) => {
    const { configs, appointments } = response
    const initSchedule = {}
    const today = moment().startOf('day')
    initSchedule[today.format('YYYY-DD-MM')] = true
    const schedule = !appointments.length ? initSchedule : appointments.reduce((currentSchedule, appointment) => {
      const { date, slot, slotsfull } = appointment
      const dateString = moment(date, 'YYYY-DD-MM').format('YYYY-DD-MM')
      !currentSchedule[date] ? currentSchedule[dateString] = Array(8).fill(false) : null
      Array.isArray(currentSchedule[dateString]) ?
        currentSchedule[dateString][slot] = true : null
      return currentSchedule
    }, initSchedule)

    //Imperative x 100, but no regrets
    for (let day in schedule) {
      let slots = schedule[day]
      slots.length ? (slots.every(slot => slot === true)) ? schedule[day] = true : null : null
    }

    this.setState({
      schedule,
      siteTitle: configs.site_title,
      aboutPageUrl: configs.about_page_url,
      contactPageUrl: configs.contact_page_url,
      homePageUrl: configs.home_page_url,
      loading: false
    })
  }

  const handleFetchError = (err) => {
    console.log(err);
    setConfirmationSnackbarOpen('Error fetching data');
    setConfirmationSnackbarMessage(true);
  }

  const handleSubmit = () => {
    const appointment = {
      date: moment(appointmentDate).format('YYYY-DD-MM'),
      slot: appointmentSlot,
      name: firstName + ' ' + lastName,
      email: email,
      phone: phone
    }
    axios.post(HOST + 'api/appointments', appointment)
    .then(response=>(setConfirmationSnackbarMessage("Appointment succesfully added!"), 
                     setConfirmationSnackbarOpen(true)), 
                     setProcessed(true))
    .then(()=>setConfirmationModalOpen(false))
    .then(()=> resetState())
    .catch(err => {
      console.log(err)
      return (setConfirmationSnackbarMessage("Appointment failed to save."),
              setConfirmationSnackbarOpen("false")
      );
    });
  }

  const resetState = () => {
    window.location.reload();
  }

  const validateEmail = (email) => {
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    return regex.test(email) ? (setEmail(email), setValidEmail(true)) : setValidEmail(false)
  }

  const validatePhone = (phoneNumber) => {
    const regex = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/
    return regex.test(phoneNumber) ? (setPhone(phoneNumber), setValidPhone(true)): setValidPhone(false);
  }

  const checkDisableDate = (day) => {
    const dateString = moment(day).format('YYYY-DD-MM')
    return fullDays.includes(dateString);
  }

  const renderConfirmationString = () => {
    const spanStyle = {color: 'red'}
    return confirmationTextVisible ? <h2 style={{ textAlign: smallScreen ? 'center' : 'left', color: '#bdbdbd', lineHeight: 1.5, padding: '0 10px', fontFamily: 'Roboto'}}>
      { <span>
        Scheduling a
          <span style={spanStyle}> 1 hour </span>
        appointment {appointmentDate && <span>
          on <span style={spanStyle}>{moment(appointmentDate).format('dddd[,] MMMM Do')}</span>
      </span>} {Number.isInteger(appointmentSlot) && <span>at <span style={spanStyle}>{moment().hour(9).minute(0).add(appointmentSlot, 'hours').format('h:mm a')}</span></span>}
      </span>}
    </h2> : null
  }

  const renderAppointmentTimes = () => {
    if (!loading) {
      const slots = [...Array(8).keys()]
      return slots.map(slot => {
        const appointmentDateString = moment(appointmentDate).format('YYYY-DD-MM')
        const t1 = moment().hour(9).minute(0).add(slot, 'hours')
        const t2 = moment().hour(9).minute(0).add(slot + 1, 'hours')
        const scheduleDisabled = schedule[appointmentDateString] ? schedule[moment(appointmentDate).format('YYYY-DD-MM')][slot] : false
        const meridiemDisabled = appointmentMeridiem ? t1.format('a') === 'am' : t1.format('a') === 'pm';
        
        const filledSlotsNumbers = filledSlots.map(Number);
        let slotFilled;
        // for (let i=0; i<bookedAppointments.length; i++) {
        //   if(bookedAppointments[i].date === appointmentDateString) {
        //     slotFilled = filledSlotsNumbers.includes(slot);
        //   }
        // }
        //bookedAppointments.map(bookedAppointment => { (bookedAppointment.date === appointmentDateString) && (slotFilled = filledSlotsNumbers.includes(slot)) })
       // console.log("***slotFilled", slotFilled);
        for (let bookedDay in bookedDatesObj) {
          let obj = bookedDatesObj[bookedDay];
          (bookedDay === appointmentDateString) && (slotFilled = Object.values(obj).map(Number).includes(slot));
        }
          // (obj.length === 8) && setFullDays(fullDays => [...fullDays, bookedDay]);
          // setFilledSlots(Object.values(obj)); 
        // }
        console.log("***slotFilled", slotFilled);
        console.log("***obj values", bookedDatesObj)
        return <RadioButton
          label={t1.format('h:mm a') + ' - ' + t2.format('h:mm a')}
          key={slot}
          value={slot}
          style={{marginBottom: 15, display: meridiemDisabled ? 'none' : 'inherit'}}
          disabled={scheduleDisabled || meridiemDisabled || slotFilled}/>
      })
    } else {
      return null
    }
  }

  const renderAppointmentConfirmation = () => {
    const spanStyle = { color: 'red' }
    return <section>
      <p>Name: <span style={spanStyle}>{firstName} {lastName}</span></p>
      <p>Number: <span style={spanStyle}>{phone}</span></p>
      <p>Email: <span style={spanStyle}>{email}</span></p>
      <p>Appointment: <span style={spanStyle}>{moment(appointmentDate).format('dddd[,] MMMM Do[,] YYYY')}</span> at <span style={spanStyle}>{moment().hour(9).minute(0).add(appointmentSlot, 'hours').format('h:mm a')}</span></p>
    </section>
  }

  const resize = () => {
    setSmallScreen( window.innerWidth < 768 )
  }

  useEffect(()=>{
    const saveResults = async() => {
      const appointments = await axios.get(HOST + 'api/appointments');
      const appointmentData = appointments.data.data;
      setBookedAppointments(appointmentData);

      //added logic to exclude booked slots and fully booked dates.
      let bookedDates=[];
      let bookedDatesObj = {};
      let bookedSlots = []
      appointmentData.map(appointment=>{return (!bookedDates.includes(appointment.date)) && (bookedDates.push(appointment.date),bookedSlots.push(appointment.slot))})
      bookedDates.map(bookedDate => {
        let newArray=[]
        appointmentData.map(appointment=>{ return (appointment.date === bookedDate) && newArray.push(appointment.slot)})
        return bookedDatesObj[bookedDate] = newArray
      })
      for (let bookedDay in bookedDatesObj) {
        let obj = bookedDatesObj[bookedDay];
        (obj.length === 8) && setFullDays(fullDays => [...fullDays, bookedDay]);
        setFilledSlots(Object.values(obj)); 
      }
      setBookedDatesObj(bookedDatesObj);
          console.log("***bookedDatesObj", bookedDatesObj);
      const config = await axios.get(HOST + 'api/config');
      const configData = config.data.data;      
      return {appointmentData, configData};
    }

    saveResults()
    .then(result => {handleFetch(result)})
    .catch(err=>handleFetchError(err));

    addEventListener('resize', resize);
    return removeEventListener('resize', resize);
  },[])
console.log("****bookedAppointments", bookedAppointments);
console.log('****filledSlots', filledSlots);
console.log("*****fullDays", fullDays);
logger.info("****bookedAppointments", bookedAppointments)
  const contactFormFilled = firstName && lastName && phone && email && validPhone && validEmail
  const labelColor={color: 'red'}
  const classes = useStyles();
  const modalActions = [
    <FlatButton
      label="Cancel"
      labelStyle={labelColor}
      primary={false}
      onClick={() => setConfirmationModalOpen(false)}/>,
    <FlatButton
      label="Confirm"
      labelStyle={labelColor}
      primary={true}
      onClick={() => (handleSubmit())} />
  ]
  return (
    <div id="book-online" >
      <h1 className="main-book-h1"> Or Book An Appointment Below! </h1>
      <section className="book-section"
          style={{
          // maxWidth: !smallScreen ? '50%' : '90%',
          margin: 'auto',
          marginTop: !smallScreen ? 20 : 0
        }}>
        {renderConfirmationString()}
        <Card style={{
            padding: '10px 10px 25px 10px',
            height: smallScreen ? 'auto' : null,
            margin: '0 auto'
          }}>
          <Stepper
            activeStep={stepIndex}
            orientation="vertical">
            <Step disabled={loading}
            style={{paddingTop:20}}>
              <StepButton
                onClick={() => setStepIndex(0)}>
                Choose an available day for your appointment
              </StepButton>
              <StepContent>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Select a date"
                    format="MM/dd/yyyy"
                    value={appointmentDate}
                    onChange={(n, date) => handleSetAppointmentDate(date)}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                    shouldDisableDate={(day)=>checkDisableDate(day)}
                    minDate={new Date()}
                    mode={smallScreen ? 'portrait' : 'landscape'}
                  />
                </MuiPickersUtilsProvider>
                </StepContent>
            </Step>
            <Step disabled={ !appointmentDate } style={{paddingTop:20}}>
              <StepButton onClick={() => setStepIndex(1)}>
                Choose an available time for your appointment
              </StepButton>
              <StepContent>
                <SelectField
                  floatingLabelText="AM or PM"
                  value={appointmentMeridiem}
                  onChange={(evt, key, payload) => handleSetAppointmentMeridiem(payload)}
                  selectionRenderer={value => value ? 'PM' : 'AM'}>
                  <MenuItem value={0}>AM</MenuItem>
                  <MenuItem value={1}>PM</MenuItem>
                </SelectField>
                <RadioButtonGroup
                  style={{ marginTop: 15,
                            marginLeft: 15
                          }}
                  name="appointmentTimes"
                  defaultSelected={appointmentSlot}
                  onChange={(evt, val) => handleSetAppointmentSlot(val)}>
                  {renderAppointmentTimes()}
                </RadioButtonGroup>
              </StepContent>
            </Step>
            <Step disabled={ !Number.isInteger(appointmentSlot) } style={{paddingTop:20}}>
              <StepButton onClick={() => setStepIndex(2)}>
                Share your contact information with us and we'll send you a reminder
              </StepButton>
              <StepContent>
                <section>
                  <TextField
                    style={{ display: 'block' }}
                    name="first_name"
                    hintText="First Name"
                    floatingLabelText="First Name"
                    onChange={(evt, newValue) => setFirstName( newValue )}/>
                  <TextField
                    style={{ display: 'block' }}
                    name="last_name"
                    hintText="Last Name"
                    floatingLabelText="Last Name"
                    onChange={(evt, newValue) => setLastName( newValue )}/>
                  <TextField
                    style={{ display: 'block' }}
                    name="email"
                    hintText="name@mail.com"
                    floatingLabelText="Email"
                    errorText={validEmail ? null : 'Enter a valid email address'}
                    onChange={(evt, newValue) => validateEmail(newValue)}/>
                  <TextField
                    style={{ display: 'block' }}
                    name="phone"
                    hintText="(888) 888-8888"
                    floatingLabelText="Phone"
                    errorText={validPhone ? null: 'Enter a valid phone number'}
                    onChange={(evt, newValue) => validatePhone(newValue)} />
                  <Button
                    className='Button'
                    classes={{
                      root: classes.root, // class name, e.g. `classes-nesting-root-x`
                      label: classes.label, // class name, e.g. `classes-nesting-label-x`
                      disabled: classes.disabled
                    }}
                    labelPosition="before"
                    primary={true}
                    fullWidth={true}
                    onClick={() => setConfirmationModalOpen(!confirmationModalOpen)}
                    disabled={!contactFormFilled || processed }
                    >
                      {contactFormFilled ? 'Schedule' : 'Fill out your information to schedule'}
                  </Button>
                </section>
              </StepContent>
            </Step>
          </Stepper>
        </Card>
        <Dialog
          modal={true}
          open={confirmationModalOpen}
          actions={modalActions}
          title="Confirm your appointment">
          {renderAppointmentConfirmation()}
        </Dialog>
        <SnackBar
          open={confirmationSnackbarOpen || loading}
          message={loading ? 'Loading... ' : confirmationSnackbarMessage || ''}
          autoHideDuration={10000}
          onRequestClose={() => setConfirmationSnackbarOpen(false)} />
      </section>
    </div>
  )
}


  
  