import React, {useEffect} from "react";
import {
Grid,
Paper,
Box,
Typography
} from '@mui/material';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import { ManageSearch } from '@mui/icons-material';
import {useSelector, useDispatch} from "react-redux";
import { appSelector, appActions } from '../../redux/appRedux';
import Todo from '../../pages/todo/Todo'

const Dashboard = () => {
    const todo = useSelector (appSelector.todo)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(appActions.setPageTitle('INICIO'))
    },[])

    return (
        <Grid container spacing={3}>  
            {/* ///tarjeta para mostrar elementos sin completar */}
            <Grid item md={6} xs={12}>
                <Paper sx={{p: 2}}>
                    <Box>
                        <Typography sx={{fontSize:18,fontWeight:700}}>{todo.filter((todo)=>!todo.completed).length} tareas restantes</Typography>
                    </Box>
                </Paper>
            </Grid>

            {/* ///tarjeta para mostrar elementos completados */}
            <Grid item md={6} xs={12}>
                <Paper sx={{p: 2}}>
                    <Box>
                        <Typography sx={{fontSize:18,fontWeight:700}}>{todo.filter((todo)=>todo.completed).length} tareas completadas</Typography>
                    </Box>
                </Paper>
            </Grid>


            <Grid item md={6} xs={12}>
                <Paper sx={{p: 2}}>
                    <Box>
                        <Button component={Link} to="/todo">
                        <ManageSearch/>
                        ToDo
                        </Button>
                    </Box>
                </Paper>
            </Grid>
            <Grid item md={6} xs={12}>
                <Paper sx={{p: 2}}>
                    <Box>
                        <Button component={Link} to="/fetch-list">
                        <ManageSearch/>
                        Pokemons
                    </Button>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
};
export default Dashboard;