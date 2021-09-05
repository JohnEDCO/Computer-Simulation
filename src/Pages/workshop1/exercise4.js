import React, { useState } from 'react'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Fab from '@material-ui/core/Fab';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

import '../../Styles/exercise1.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    buttons: {
        background: 'linear-gradient(45deg, #db4016 30%, #b58213 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginInline: 20,
        marginTop: 2
    },
    buttons2: {
        background: 'linear-gradient(45deg, #4966F3 30%, #25BCF5 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginInline: 5,
        marginTop: 2
    },
    buttonsClose: {
        background: 'black',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginInline: 5,
        marginTop: 25,
        width: "20%",
        marginInline: "40%",
        marginBottom: "5%"
    },
    cardContainerInfo: {
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(50, 50, 50, .3)',
        height: 48,
        width: "50%"
    },
    containerResults: {
        justifyContent: "center",
        textAlign: "center",
        background: "white",
        borderRadius: 10,
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(50, 50, 50, .3)',
        background: 'linear-gradient(45deg, #CCD1D9 30%, #AAB2BD 90%)',
        padding: 10,
        marginTop: 20,
        marginBottom: 30,
        fontSize: 10,
        width: "90%",
        marginInline: "5%"
    },
    paper: {
        fontSize: 14,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: "white",
        background: "transparent",
        boxShadow: '0 3px 5px 2px rgba(50, 50, 50, .3)',
        background: 'black',

    },
    title: {
        fontSize: 14,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: "white",
        background: "transparent",
        boxShadow: '0 3px 5px 2px rgba(50, 50, 50, .3)',
        background: 'black',
        width: "17%",
        marginInline: "41%",
        marginBottom: 20
    },
    grid: {
        background: "transparent",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "10%"
    },
    fab: {
        color: "white",
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        backgroundColor: "black",
        '&:hover': {
            backgroundColor: "gray",
        },
    }
}));

function Exercise4() {
    const classes = useStyles();
    const cola2 = []
    const [cola, setCola] = useState([])

    const [frequency, setFrequency] = useState(0)
    const [generateBool, setGenerateBool] = useState(false)
    const [open, setOpen] = useState(false)
    const [max, setMax] = useState(0)
    const [min, setMin] = useState(0)
    const [timeTick, setTimeTick] = useState(0)
    const [timeProm, setTimeProm] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const [openDialog2, setOpenDialog2] = useState(false)

    const convertSeconds = (seconds) => {
        let segundo = seconds % 60
        segundo = (segundo < 10) ? '0' + segundo : segundo
        let minutos = Math.floor((seconds / 60) % 60)
        minutos = (minutos < 10) ? '0' + minutos : minutos;
        let horas = Math.floor(seconds / 3600)
        horas = (horas < 10) ? '0' + horas : horas;

        return horas + ':' + minutos + ':' + segundo;
    }
    const generateRandomPersons = () => {
        // let random = Math.floor(Math.random() * (71 - 30) + 30)
        let random = Math.floor(Math.random() * ((120 + 1) - 0) + 0)
        return random
    }
    const generateRandom = () => {
        // let random = Math.floor(Math.random() * (71 - 30) + 30)
        let random = Math.floor(Math.random() * ((max + 1) - min) + min)
        return random
    }

    const timeTicket = () => {
        let segundosPersons = 0
        let segundos = 0
        let conteo = 0
        for (let i = 0; i < frequency; i++) {
            if (i > 0) {
                segundosPersons += generateRandomPersons()
            }
            segundos += generateRandom()
            if (segundosPersons < segundos) {
                conteo++
                console.log("i->", i)
            } else {
                if (conteo !== 0 && conteo !== 1) {
                    console.log("Push--->", conteo)

                    cola.push(conteo)
                }
                console.log("no->", i)
                conteo = 0
            }
        }

        let promedio = segundos / frequency
        setTimeTick(convertSeconds(segundos))
        setTimeProm(convertSeconds(promedio))
        console.log("tiempo--> ", convertSeconds(segundos), segundos)
        console.log("Promedio--> ", convertSeconds(promedio), promedio)
        console.log("En ", convertSeconds(segundosPersons), " Entraron ", frequency, " personas")
        console.log("hubo una cola de ", conteo, " personas", cola)
    }

    return (
        <>
            <Fab aria-label="add" className={classes.fab} color="white"
                onClick={() => setOpenDialog2(true)}>
                <HelpOutlineOutlinedIcon />
            </Fab>
            <Dialog onClose={() => setOpenDialog2(false)} aria-labelledby="simple-dialog-title" open={openDialog2} style={{ width: "100%", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <DialogTitle id="simple-dialog-title" >
                    ¿Tiempo que se demoraron?
                </DialogTitle>
                <DialogContent>
                    El tiempo que tardaron se ve reflejado en la tabla al terminar el proceso. 
                    Es una suma de los tiempos de atencion de cada cliente en taquilla.
                </DialogContent>
                <DialogTitle id="simple-dialog-title" >
                    ¿Se forman colas?
                </DialogTitle>
                <DialogContent>
                    Si. En la tabla de datos nos muestra las colas que se generan junto con el tamaño de cada
                    cola, cabe mencionar que cada cola se genera en determinado momento, por eso mostramos la cantidad y cuantas
                    colas se generaron.
                </DialogContent>


                <DialogTitle id="simple-dialog-title" >
                    ¿Que es el tiempo promedio en cola?
                </DialogTitle>

                <DialogContent>
                    Es el tiempo promedio que espera cada persona en la cola
                </DialogContent>
                <Button color="inherit"
                    className={classes.buttonsClose}
                    onClick={() => {
                        setOpenDialog2(false)
                    }}>
                    Close
                </Button>
            </Dialog>
            <Container style={{ flex: "wrap", marginTop: 20, textAlign: "center" }}>
                <TextField
                    id="outlined-basic"
                    label="Number of People"
                    variant="outlined"
                    type="number"
                    onChange={(event) => { setFrequency(event.target.value) }}
                />


                <Container style={{ flexDirection: "row", flex: "wrap", marginTop: 20, textAlign: "center" }}>
                    <Paper className={classes.title}>Ballot control time</Paper>
                    <TextField
                        id="outlined-basic"
                        label="Seg(s)"
                        variant="outlined"
                        type="number"
                        fullWidth={false}
                        size="medium"
                        style={{ width: 100, marginInline: 10 }}
                        onChange={(event) => { setMax(parseInt(event.target.value)) }}

                    />
                    <TextField
                        id="outlined-basic"
                        label="Seg(s)"
                        variant="outlined"
                        type="number"
                        style={{ width: 100, marginInline: 5 }}
                        onChange={(event) => { setMin(parseInt(event.target.value)) }}

                    />
                </Container>
                <Container style={{ flexDirection: "row", flex: "wrap", marginTop: 20, textAlign: "center" }}>

                    <Button color="inherit"
                        disabled={disabled}
                        className={classes.buttons}
                        onClick={() => {
                            timeTicket()
                            setGenerateBool(true)
                            setDisabled(true)
                        }}>
                        Estimate
                    </Button>
                    <Button color="inherit"
                        className={classes.buttons2}
                        onClick={() => {
                            setGenerateBool(false)
                            setOpen(!open)
                            setTimeTick(0)
                            setTimeProm(0)
                            setCola([])
                            setDisabled(false)
                        }}>
                        Clean
                    </Button>

                </Container>

            </Container>

            {generateBool &&
                <Grid container spacing={2} className={classes.containerResults}>
                    <Grid item xs={2} className={classes.grid}>
                        <Paper className={classes.paper}>Persons</Paper>
                        {generateBool &&
                            <>
                                <h2>{frequency}</h2>
                                <Divider />
                            </>
                        }
                    </Grid>
                    <Divider orientation="vertical" flexItem />

                    <Grid item xs={3} className={classes.grid}>
                        <Paper className={classes.paper}>Time At Ticket Office</Paper>
                        {
                            <>
                                <h2>{timeTick}</h2>
                                <Divider />
                            </>

                        }
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>Average time in queue</Paper>

                        {
                            <>
                                <h2>{timeProm}</h2>
                                <Divider />
                            </>

                        }
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>Queue Size</Paper>

                        {(generateBool && cola.length !== 0) ?

                            Object.keys(cola).map(key => {

                                return (
                                    <>
                                        <h2 key={key}>{cola[key]}</h2>
                                        <Divider />
                                    </>
                                )
                            })
                            :
                            <>
                                <h2>0</h2>
                                <Divider />
                            </>
                        }
                    </Grid>
                </Grid>
            }
        </>
    )
}

export default Exercise4
