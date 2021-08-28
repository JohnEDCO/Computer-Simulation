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
        background: 'linear-gradient(45deg, #0dbfa4 30%, #2262a0 90%)',
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

function Exercise2() {
    const classes = useStyles();
    const stuff = ["cara", "sello"]
    const initialState = [
        ["cara", 0],
        ["sello", 0],
    ]
    const [frequency, setFrequency] = useState(0)
    const [generateBool, setGenerateBool] = useState(false)
    const [datos, setDatos] = useState(initialState)
    const [open, setOpen] = useState(false)
    const [openDialog, setOpenDialog] = useState(false)

    const saveReleases = (key) => {
        switch (key) {
            case "cara":
                setDatos([...datos, datos[0][1] += 1])
                break;
            case "sello":
                setDatos([...datos, datos[1][1] += 1])
                break;
            default:
                console.log("ninguno es opcion")
                break;
        }
    }
    const loadCurrency = () => {
        let indice = Math.floor(Math.random() * stuff.length)
        return stuff[indice]
    }

    const generateFrequency = (frequency) => {
        setOpenDialog(true)
        for (let i = 1; i < frequency + 1; i++) {
            let moneda = loadCurrency()
            saveReleases(moneda)
        }
        console.log("Lanzamientos-->", datos)

    }

    return (
        <>
            <Dialog onClose={() => setOpenDialog(false)} aria-labelledby="simple-dialog-title" open={openDialog} style={{ width: "100%", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <DialogTitle id="simple-dialog-title" >
                    {   
                        Math.abs(datos[0][1]-datos[1][1]) >=3?
                        "Felicitaciones usted ha ganado $8 dolares"
                        :"Lo siento debe pagar $"+frequency+" dolares"
                    }
                </DialogTitle>
                <Button color="inherit"
                    className={classes.buttonsClose}
                    onClick={() => {
                        setOpenDialog(false)
                    }}>
                    Close
                </Button>
            </Dialog>

            <Container style={{ flexDirection: "row", flex: "wrap", marginTop: 20, textAlign: "center" }}>
                <TextField
                    id="outlined-basic"
                    label="Frequency"
                    variant="outlined"
                    type="number"
                    onChange={(event) => { setFrequency(event.target.value) }}
                />
                <Button color="inherit"
                    className={classes.buttons}
                    onClick={() => {
                        setGenerateBool(true)
                        generateFrequency(parseInt(frequency))
                    }}>
                    Throw Dice
                </Button>
                <Button color="inherit"
                    className={classes.buttons2}
                    onClick={() => {
                        setDatos(initialState)
                        setGenerateBool(false)
                        setOpen(!open)
                    }}>
                    Clean
                </Button>
            </Container>

            {generateBool &&
                    <Grid container spacing={2} className={classes.containerResults}>
                        <Grid item xs={2} className={classes.grid}>
                            <Paper className={classes.paper}>Options</Paper>
                            {<>
                                <h2>Cara</h2>
                                <Divider />
                                <h2>Sello</h2>
                                <Divider />
                            </>
                            }
                        </Grid>
                        <Divider orientation="vertical" flexItem />

                        <Grid item xs={2} className={classes.grid}>
                            <Paper className={classes.paper}>Frequency</Paper>
                            {
                                Object.keys(datos).map(key => {
                                    if (!isNaN(datos[key][1] / frequency)) {
                                        return (
                                            <>
                                                <h2>{datos[key][1]}</h2>
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

export default Exercise2
