import React from 'react'
import{Modal,Box,Grid,Button, TextField} from '@mui/material'
import{AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
 export const Events = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formValues,setFormValues]=React.useState({
    image:"",
    location:"",
    name:"",
    startedAt:"",
    endsAt:null
  })

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("submit", formValues);

  }
  const handleFormChange=(e)=>{
    setFormValues({...formValues,[e.target.name]:e.target.value})
  }
  const handleDateChange=(date,dateType)=>{
    const formatedDate=dayjs(date).format("MMMM DD, YYYY hh:mm A");
    setFormValues({...formValues,[dateType]:formatedDate})
  }
  return (
    <div>
      <div className='p-5'>
        <Button onClick={handleOpen}  variant='contained'>
          Create New Event
        </Button>


        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                name="image"
                label="Image URL"
                variant='outlined'
                fullWidth
                value={formValues.image}
                onChange={handleFormChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                name="Location"
                label="Location"
                variant='outlined'
                fullWidth
                value={formValues.image}
                onChange={handleFormChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                name="event"
                label="Event Name"
                variant='outlined'
                fullWidth
                value={formValues.image}
                onChange={handleFormChange}
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>

                      <DateTimePicker
                       renderInput={(props)=> <TextField {...props}/> }
                       label="Start Date and Time"
                       value={formValues.startedAt}
                       onChange={(newValue) =>
                      handleDateChange(newValue,"startedAt")
                    }
                    inputFormat="MM/dd/yyyy hh:nn a"
                    className='w-full'
                    sx={{width:"100%"}}
                    />            
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateTimePicker
                       renderInput={(props)=> <TextField {...props}/> }
                       label="End Date and Time"
                       value={formValues.startedAt}
                       onChange={(newValue) =>
                      handleDateChange(newValue,"endsAt")
                    }
                    inputFormat="MM/dd/yyyy hh:nn a"
                    className='w-full'
                    sx={{width:"100%"}}
                    />            
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Box mt={2}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
      </div>
    </div>
  )
}
