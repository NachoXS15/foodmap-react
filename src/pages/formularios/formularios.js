import React, {useEffect, useState} from "react";
import {
Grid,
Paper,
Box,
TextField,
Typography,
Card,
CardContent,
CardHeader,
Button,
Stack,
Checkbox,
FormControl,
FormHelperText
} from '@mui/material';
import {useSelector, useDispatch} from "react-redux";
import { appSelector, appActions } from '../../redux/appRedux';

const Formularios = () => {

    const initialData = {
        name: '',
        age: '',
    }
    const initialErrors = {
        name: '',
        age: '',
    }
    const dispatch = useDispatch()
    const [data, setData] = useState(initialData)
    const [errors, setErrors] = useState(initialErrors)
    const [hasErr, setHasErr] = useState(false)
    

    useEffect(()=>{
        dispatch(appActions.setPageTitle('TABLERO'))
    
    },[])

    const handleChange = (e) => {

        setData(prev=>{
            return({
               ...prev,
                [e.target.name]: e.target.value 
            })
            
        })
    }
    

    const handleSubmit = async () => {
        await dispatch(appActions.loading(true))
    
            

    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Card>
                    <CardHeader title="Formulario" />
                    <CardContent>
                        <Typography>{data.name}</Typography>
                        <Stack spacing={2}>
                            <Stack sx={{justifyContent:'space-around'}} direction='row'>
                                <Grid item md={6}>
                                <FormControl required = {true} error={data.name}>
                                    <TextField initialValue={data.name} name={'name'} label="Nombre" variant="outlined" onChange={handleChange} />
                                    {
                                        errors.name && (<FormHelperText id="my-helper-text">{errors.name}</FormHelperText>)
                                    }
                                    
                                </FormControl>
                                </Grid>
                            </Stack>
                            <Stack sx={{justifyContent:'space-around'}} direction='row'>
                                <Grid item md={6}>
                                <FormControl required = {true} error={data.name}>
                                    <TextField initialValue={data.age} name={'age'} label="Edad" variant="outlined" onChange={handleChange} />
                                    {
                                        errors.age && (<FormHelperText id="my-helper-text">{errors.age}</FormHelperText>)
                                    }
                                    
                                </FormControl>
                                </Grid>
                            </Stack>
                        </Stack>    
                        
                        <Grid item md={6}>
                                <Button variant="contained" onClick={()=>handleSubmit()}>Agregar</Button>
                        </Grid>
                        
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};
export default Formularios;