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
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
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
        marginTop: 2,
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
    grid: {
        background: "transparent",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "10%"
    }
}));

function Exercise1() {
    const classes = useStyles();
    const stuff = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6]
    const initialState = [
        [2, 0],
        [3, 0],
        [4, 0],
        [5, 0],
        [6, 0],
        [7, 0],
        [8, 0],
        [9, 0],
        [10, 0],
        [11, 0],
        [12, 0],
    ]
    const [frequency, setFrequency] = useState(0)
    const [generateBool, setGenerateBool] = useState(false)
    const [datos, setDatos] = useState(initialState)
    const [open, setOpen] = useState(false)
    const [openDialog, setOpenDialog] = useState(false)
    const [sumaMayor, setSumaMayor] = useState(0)
    const [loadedDice, setLoadedDice] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const saveSumDados = (key) => {
        switch (key) {
            case 2:
                setDatos([...datos, datos[0][1] += 1])
                break;
            case 3:
                setDatos([...datos, datos[1][1] += 1])
                break;
            case 4:
                setDatos([...datos, datos[2][1] += 1])
                break;
            case 5:
                setDatos([...datos, datos[3][1] += 1])
                break;
            case 6:
                setDatos([...datos, datos[4][1] += 1])
                break;
            case 7:
                setDatos([...datos, datos[5][1] += 1])
                break;
            case 8:
                setDatos([...datos, datos[6][1] += 1])
                break;
            case 9:
                setDatos([...datos, datos[7][1] += 1])
                break;
            case 10:
                setDatos([...datos, datos[8][1] += 1])
                break;
            case 11:
                setDatos([...datos, datos[9][1] += 1])
                break;
            case 12:
                setDatos([...datos, datos[10][1] += 1])
                break;
            default:
                console.log("ninguno es opcion")
                break;
        }
    }
    const loadDice = () => {
        let indice = Math.floor(Math.random() * stuff.length)
        return stuff[indice]
    }
    //funcion que me retorna un numero aleatorio
    const generateRandom = () => {
        let random = Math.floor(Math.random() * (7 - 1) + 1)
        return random
    }
    const generateProbability = () => {
        let mayor = 0
        let sumaMayor = 0
        Object.keys(datos).map(key => {
            if (!isNaN(datos[key][1] / frequency)) {
                if (datos[key][1] > mayor) {
                    mayor = datos[key][1]
                    setSumaMayor(datos[key][0])
                    console.log("Mayor", datos[key][0], ': ', (datos[key][1]), mayor)

                } else {
                    console.log("No mayor", datos[key][0], ': ', (datos[key][1]))
                }
                // console.log(datos[key][0], ': ', (datos[key][1] / frequency))
                // console.log(datos[key][0], ': ', (datos[key][1]))
            }
        })
    }
    const generateFrequency = (frequency) => {
        setDatos(initialState)
        let sumita =0
        for (let i = 1; i < frequency + 1; i++) {
            if(loadedDice){
                sumita = generateRandom() + loadDice()
            }else{
                sumita = generateRandom() + generateRandom()
            }
            saveSumDados(sumita)
        }
        generateProbability()
        setOpenDialog(true)
    }

    return (
        <>
            <Dialog onClose={() => setOpenDialog(false)} aria-labelledby="simple-dialog-title" open={openDialog} style={{ width: "100%", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <DialogTitle id="simple-dialog-title" >
                    La suma de los dados con mayor frecuencia ha sido el {sumaMayor}
                </DialogTitle>
                <Button color="inherit"
                    className={classes.buttonsClose}
                    onClick={() => {
                        setOpenDialog(false)
                    }}>
                    Close
                </Button>
            </Dialog>

            <Container style={{ flexDirection: "row", flex: "wrap", marginTop: 20, textAlign: "center", marginInline: 40}}>
                <TextField
                    id="outlined-basic"
                    label="Frequency"
                    variant="outlined"
                    type="number"
                    onChange={(event) => { 
                        setFrequency(event.target.value) 
                        setDatos(initialState)
                        setGenerateBool(false)
                        setDisabled(false)
                    }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={loadedDice}
                            name="checkedA"
                            onChange={() => {
                                setLoadedDice(!loadedDice)
                                setDatos(initialState)
                                setGenerateBool(false)
                                setDisabled(false)
                            }}
                            
                        />
                    }
                    label="Loaded dice"
                    style={{marginInline: 20, marginTop: 5}}
                />
                

            </Container>
            <Container style={{ flexDirection: "row", flex: "wrap", marginTop: 20, textAlign: "center" }}>

                <Button color="inherit"
                    disabled={disabled}
                    className={classes.buttons}
                    onClick={() => {
                        generateFrequency(parseInt(frequency))
                        setGenerateBool(!generateBool)
                        setDisabled(true)
                    }}>
                    Generate Frequency
                </Button>
                <Button color="inherit"
                    className={classes.buttons2}
                    onClick={() => {
                        setDatos(initialState)
                        setGenerateBool(false)
                        setOpen(!open)
                        setDisabled(false)
                    }}>
                    Clean
                </Button>

            </Container>
            {generateBool &&
                <Grid container spacing={2} className={classes.containerResults}>
                    <Grid item xs={2} className={classes.grid}>
                        <Paper className={classes.paper}>Sum</Paper>
                        {<>
                            <h2>2</h2>
                            <Divider />
                            <h2>3</h2>
                            <Divider />
                            <h2>4</h2>
                            <Divider />
                            <h2>5</h2>
                            <Divider />
                            <h2>6</h2>
                            <Divider />
                            <h2>7 </h2>
                            <Divider />
                            <h2>8</h2>
                            <Divider />
                            <h2>9</h2>
                            <Divider />
                            <h2>10</h2>
                            <Divider />
                            <h2>11</h2>
                            <Divider />
                            <h2>12</h2>
                            <Divider />
                        </>
                        }
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={4} className={classes.grid}>
                        <Paper className={classes.paper}>Events</Paper>
                        {<>
                            <h2>(1,1)</h2>
                            <Divider />
                            <h2>(1,2), (2,1)</h2>
                            <Divider />
                            <h2>(1,3), (2,2), (3,1)</h2>
                            <Divider />
                            <h2>(1,4), (2,3), (3,2), (4,1)</h2>
                            <Divider />
                            <h2>(1,5), (2,4), (3,3), (4,2), (5,1) </h2>
                            <Divider />
                            <h2>(1,6), (2,5), (3,4), (4,3), (5,2), (6,1) </h2>
                            <Divider />
                            <h2>(2,6), (3,5), (4,4), (5,3), (6,2) </h2>
                            <Divider />
                            <h2>(2,6), (3,5), (4,4), (5,3), (6,2) </h2>
                            <Divider />
                            <h2>(4,6), (5,5), (6,4)</h2>
                            <Divider />
                            <h2>(5,6), (6,5)</h2>
                            <Divider />
                            <h2>(6,6)</h2>
                            <Divider />
                        </>
                        }
                    </Grid>
                    <Divider orientation="vertical" flexItem />

                    <Grid item xs={2} className={classes.grid}>
                        <Paper className={classes.paper}>Frequency</Paper>
                        {
                            Object.keys(datos).map((key, i) => {
                                if (!isNaN(datos[key][1] / frequency)) {
                                    return (
                                        <>
                                            <h2 key={i}>{datos[key][1]}</h2>
                                            <Divider />
                                        </>

                                    )
                                }

                            })
                        }
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={2}>
                        <Paper className={classes.paper}>Probability</Paper>

                        {
                            Object.keys(datos).map(key => {
                                if (!isNaN(datos[key][1] / frequency)) {
                                    return (
                                        <>
                                            <h2>{datos[key][1] / frequency}</h2>
                                            <Divider />
                                        </>

                                    )
                                }

                            })
                        }
                    </Grid>
                </Grid>
            }
        </>
    )
}

export default Exercise1
