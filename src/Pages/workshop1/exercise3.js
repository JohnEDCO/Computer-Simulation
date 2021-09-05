import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
        background: 'linear-gradient(45deg, #c72525 30%, #7e29dd 90%)',
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
    },
}));

function Exercise3() {
    const classes = useStyles();
    const [path, setPath] = useState([1, 2, 3, 4, 5, 6, 7, 8])
    const [matriz, setMatriz] = useState([
        [0, 7.0, 5.1, 4.5, 7.3, 5.1, 8.5, 7.6],
        [7.0, 0, 2.2, 6.4, 11.4, 9.4, 3.2, 3.0],
        [5.1, 2.2, 0, 4.2, 9.2, 7.2, 3.6, 2.8],
        [4.5, 6.4, 4.2, 0, 5.0, 3.2, 6.1, 5.1],
        [7.3, 11.4, 9.2, 5.0, 0, 2.2, 10.8, 9.8],
        [5.1, 9.4, 7.2, 3.2, 2.2, 0, 9.2, 8.2],
        [8.5, 3.2, 3.6, 6.1, 10.8, 9.2, 0, 1.0],
        [7.6, 3.0, 2.8, 5.1, 9.8, 8.2, 1.0, 0],
    ])
    const [strategy, setStrategy] = useState(0)
    const [best, setBest] = useState(0)
    const [bestPath, setBestPath] = useState([])
    const [frequency, setFrequency] = useState(0)
    const [generateBool, setGenerateBool] = useState(false)
    const [open, setOpen] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [openDialog2, setOpenDialog2] = useState(false)

    let best2 = 0
    let bestPath2 = []
    const change = (val1, val2, array) => {
        let indexVal1 = path.indexOf(val1)
        let indexVal2 = path.indexOf(val2)
        path[indexVal1] = val2
        path[indexVal2] = val1
        return path
    }
    const generateRandom = () => {
        // let random = Math.floor(Math.random() * (71 - 30) + 30)
        let random = Math.floor(Math.random() * ((8 + 1) - 1) + 1)
        return random
    }
    const pairRandom = () => {
        let pairRandom1 = generateRandom()
        let pairRandom2 = generateRandom()
        let copiArray = [...path]
        if (pairRandom1 !== pairRandom2) {
            let changead = change(pairRandom1, pairRandom2, path)
            return changead
        } else {
            return path
        }
    }
    const generatePaths = () => {
        for (let i = 0; i < frequency; i++) {
            costPath()

        }

    }
    const costPath = () => {

        let suma = 0
        let pathCito = pairRandom()
        if (strategy == 1) {
            pathCito = pairRandom()
        }
        for (let i = 0; i < pathCito.length; i++) {
            let ruta = pathCito[i]
            let next = pathCito[i + 1]
            if (i !== pathCito.length - 1) {
                suma += matriz[ruta - 1][next - 1]
            } else {
                suma += matriz[ruta - 1][pathCito[0] - 1]
            }
        }
        if (best2 == 0) {
            best2 = suma.toFixed(2)
            bestPath2 = pathCito

            console.log("optima -->", best2, suma, pathCito, bestPath2)
            localStorage.setItem("path", JSON.stringify(pathCito))
            setBest(best2)
            // setBestPath(bestPath2)
        } else if (best2 > suma) {
            best2 = suma.toFixed(2)
            bestPath2 = pathCito

            setBest(best2)
            // setBestPath(bestPath2)
            localStorage.setItem("path", JSON.stringify(pathCito))
            console.log("nuevo best", best2, suma, pathCito, bestPath2)
        }

        // console.log("sumaaa-->", suma, "best-->", best2, "Path2--->", bestPath2)
        // console.log("--------------------------------")

    }
    useEffect(() => {
        console.log("-------bestPath set-------------", bestPath,
        )
        localStorage.setItem("path", "")
    }, [bestPath])
    return (
        <>
            <Fab aria-label="add" className={classes.fab} color="white"
                onClick={() => setOpenDialog2(true)}>
                <HelpOutlineOutlinedIcon />
            </Fab>
            <Dialog onClose={() => setOpenDialog2(false)} aria-labelledby="simple-dialog-title" open={openDialog2} style={{ width: "100%", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <DialogTitle id="simple-dialog-title" >
                    ¿Que es la bondad de estas estrategias?
                </DialogTitle>
                <DialogContent>
                        Entendemos que es los recursos que necesita el algoritmo para funcionar de forma correcta y eficiente.
                </DialogContent>
                <DialogTitle id="simple-dialog-title" >
                    ¿Que se puede decir sobre la convergencia?
                </DialogTitle>
                <DialogContent>
                        Las dos estrategias llegan al mismo resultado en determinadas iteraciones
                </DialogContent>


                <DialogTitle id="simple-dialog-title" >
                    ¿Que pasa con los minimos locales?
                </DialogTitle>

                <DialogContent>
                        Sucede que entre mas pequeños sean estos los resultados no seran los esperados ya que
                        las parejas aleatorias que se generan son menores y por ende la ruta sera modificada
                        menos veces, produciendo esto que la respuesta del camino no sea la mas conveniente o la
                        de menor valor                    
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
                    label="Number of attempts"
                    variant="outlined"
                    type="number"
                    onChange={(event) => { setFrequency(event.target.value) }}
                />


                <Container style={{ flexDirection: "row", flex: "wrap", marginTop: 20, textAlign: "center" }}>
                    <Paper className={classes.title}>Solution type</Paper>

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={strategy == 0 ? true : false}
                                onChange={() => {
                                    setStrategy(0)
                                    setGenerateBool(false)
                                    setOpen(!open)
                                    setPath([1, 2, 3, 4, 5, 6, 7, 8])
                                    setBest(0)
                                    setDisabled(false)

                                }}
                                name="checkedA"
                            />
                        }
                        label="Strategy 1"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={strategy == 1 ? true : false}
                                onChange={() => {
                                    setStrategy(1)
                                    setGenerateBool(false)
                                    setOpen(!open)
                                    setPath([1, 2, 3, 4, 5, 6, 7, 8])
                                    setBest(0)
                                    setDisabled(false)

                                }}
                                name="checkedA"
                            />
                        }
                        label="Strategy 2"
                    />

                </Container>
                <Container style={{ flexDirection: "row", flex: "wrap", marginTop: 20, textAlign: "center" }}>

                    <Button color="inherit"
                        disabled={disabled}
                        className={classes.buttons}
                        onClick={() => {
                            setGenerateBool(true)
                            generatePaths()
                            setDisabled(true)
                        }}>
                        Estimate
                    </Button>
                    <Button color="inherit"
                        className={classes.buttons2}
                        onClick={() => {
                            setGenerateBool(false)
                            setOpen(!open)
                            setPath([1, 2, 3, 4, 5, 6, 7, 8])
                            setBest(0)
                            setDisabled(false)

                        }}>
                        Clean
                    </Button>

                </Container>

            </Container>

            {generateBool &&
                <Grid container spacing={2} className={classes.containerResults}>
                    <Grid item xs={2} className={classes.grid}>
                        <Paper className={classes.paper}>Cost</Paper>
                        {generateBool &&
                            <>
                                <h2>{best}</h2>
                                <Divider />
                            </>
                        }
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={2} className={classes.grid}>
                        <Paper className={classes.paper}>Best Route</Paper>
                        {
                            <>
                                <h2>{localStorage.getItem("path")}</h2>
                                <Divider />
                            </>
                        }
                    </Grid>

                </Grid>
            }
        </>
    )
}

export default Exercise3
