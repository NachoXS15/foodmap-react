import React, {useEffect, useState} from "react";
import {
Grid,
Paper,
Box,
Card,
CardContent,
CardHeader,
TextField,
Button,
Stack,
Checkbox,
Typography,

} from '@mui/material';
import {useSelector, useDispatch} from "react-redux"
import { appSelector, appActions } from "../../redux/appRedux";
import { v4 as uuid } from 'uuid';



const Todo = () => {
    const dispatch = useDispatch()
    const todo = useSelector (appSelector.todo)
    const [text, setText] = useState(null)
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleChecked = (e, id) => {
        dispatch(appActions.setCompletedTodo({id, completed:e.target.checked}))
    }

    useEffect(()=>{
        dispatch(appActions.setPageTitle('To-Do'))
    },[])



    const addTask = () => {
        dispatch(appActions.addTodo({text: text, id: uuid() }))
        setText(null)
    }

    const delTask = (id) => {
        dispatch (appActions.deleteTodo(id))
    }

    return (
        // ///espacio para agregar tareas
        <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
                <Card>
                    <CardHeader title="Agrega una tarea" />
                    <CardContent>
                        <Stack sx={{justifyContent:'space-around'}} direction='row'>
                            <Grid item md={6}>
                                <TextField value={text} label="Tarea" variant="outlined" onChange={handleChange} />
                            </Grid>
                            <Grid item md={6}>
                                <Button disabled={!text} variant="contained" onClick={()=>addTask()}>Agregar</Button>
                            </Grid>
                        </Stack>
                    </CardContent>
                </Card>
           </Grid>
        

        {/* ///espacio donde se mostrará la tarea agregada */}

            <Grid item md={12} xs={12}>
                <Card>
                    <CardHeader title="Tareas" />
                    <CardContent>
                
                        {todo.map((t, index)=>
                        (
                        <Stack key={t.id} sx={{justifyContent:'space-between'}} direction='row'>
                            <Grid item md={1}>
                                <Checkbox onChange={e=>handleChecked(e,t.id)} />
                            </Grid>
                            <Grid item md={9} sx={{pt: 1}}>
                                <Typography sx={{fontSize:18, fontWeight:700}}>{t.text}</Typography>
                            </Grid>
                            <Grid item md={2}>
                                <Button variant="contained" onClick={()=>delTask(t.id)}>Eliminar</Button>
                            </Grid>
                        </Stack>
                        )
                        )}
                    </CardContent>
                </Card>
            </Grid>
            
            {/* ///espacio donde se mapeará los elementos y se mostrarán los que no estan marcados con Checkbox */}
            <Grid item md={12} xs={12}>
                <Typography sx={{fontSize:18,fontWeight:700}}>{todo.filter((todo)=>!todo.completed).length} tareas restantes</Typography>
            </Grid>
        </Grid>
        
    );
};
export default Todo;