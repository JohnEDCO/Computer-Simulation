import React, { useState } from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
        background: 'linear-gradient(45deg, #47e009 30%, #ff2015 90%)',
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
    containerResults2: {
        justifyContent: "center",
        textAlign: "center",
        background: "transparent",
        borderRadius: 10,
        border: 0,
        borderRadius: 3,
        padding: 10,
        marginTop: 20,
        marginBottom: 30,
        fontSize: 10,
        width: "100%",
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
    paper2: {
        fontSize: 14,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: "white",
        background: "transparent",
        boxShadow: '0 3px 5px 2px rgba(50, 50, 50, .3)',
        background: 'black',
        marginTop: 5,
        borderRadius: 5
    },
    title: {
        fontSize: 14,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: "white",
        background: "transparent",
        boxShadow: '0 3px 5px 2px rgba(50, 50, 50, .3)',
        background: 'black',
        width: "22%",
        marginInline: "39%",
        marginBottom: 20
    },
    titleAlgorithm: {
        fontSize: 14,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: "black",
        background: "transparent",
        boxShadow: '0 3px 5px 2px rgba(50, 50, 50, .3)',
        background: '#47e009',
        width: "22%",
        marginInline: "39%",
        marginBottom: 20,
        marginTop: 30,
        fontWeight: "bold"
    },
    titleAlgorithm2: {
        fontSize: 14,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: "black",
        background: "transparent",
        boxShadow: '0 3px 5px 2px rgba(50, 50, 50, .3)',
        background: '#156cff',
        width: "22%",
        marginInline: "39%",
        marginBottom: 20,
        marginTop: 30,
        fontWeight: "bold"
    },
    titleAlgorithm3: {
        fontSize: 14,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: "black",
        background: "transparent",
        boxShadow: '0 3px 5px 2px rgba(50, 50, 50, .3)',
        background: '#e0ab09',
        width: "22%",
        marginInline: "39%",
        marginBottom: 20,
        marginTop: 30,
        fontWeight: "bold"
    },
    titleAlgorithm4: {
        fontSize: 14,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: "black",
        background: "transparent",
        boxShadow: '0 3px 5px 2px rgba(50, 50, 50, .3)',
        background: '#ff5050',
        width: "22%",
        marginInline: "39%",
        marginBottom: 20,
        marginTop: 30,
        fontWeight: "bold"
    },
    titleAlgorithm5: {
        fontSize: 14,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: "black",
        background: "transparent",
        boxShadow: '0 3px 5px 2px rgba(50, 50, 50, .3)',
        background: '#5947ff',
        width: "22%",
        marginInline: "39%",
        marginBottom: 20,
        marginTop: 30,
        fontWeight: "bold"
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
    container: {
        maxHeight: 470,
        background: 'linear-gradient(45deg, #CCD1D9 30%, #AAB2BD 90%)',
    },
}));
const columns = [
    { id: 'id', label: '#', minWidth: 170 },
    { id: 'code', label: 'Codes', minWidth: 100 },
    { id: 'rn', label: 'Rn', minWidth: 100 },

];
function createData(id, code, rn) {
    return { id, code, rn };
}

let rows = [];

function Algorithm2() {
    const classes = useStyles();
    let varia = "solsolecito"
    const [codes, setCodes] = useState("")
    const [seed, setSeed] = useState("5")
    const [a, setA] = useState("106")
    const [m, setM] = useState("6075")
    const [q, setQ] = useState("")
    const [r, setR] = useState("")
    const [generateBool, setGenerateBool] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const [xcalc, setXcalc] = useState(0)
    const [DMcalc, setDMcalc] = useState(0)
    const [xcrit, setXcrit] = useState(16.92)
    const [DMcrit, setDMcrit] = useState(0.043)

    // [0][2]-->FO
    // [0][3]--> (FE-FO)2 / FE
    // [0][4]--> FOA
    // [0][5]--> POA
    // [0][6]--> PEA
    // [0][7]-->| PEA - POA |
    const initialState = [
        [0, 0.1, 0, 0, 0, 0, 0, 0],
        [0.1, 0.2, 0, 0, 0, 0, 0, 0],
        [0.2, 0.3, 0, 0, 0, 0, 0, 0],
        [0.3, 0.4, 0, 0, 0, 0, 0, 0],
        [0.4, 0.5, 0, 0, 0, 0, 0, 0],
        [0.5, 0.6, 0, 0, 0, 0, 0, 0],
        [0.6, 0.7, 0, 0, 0, 0, 0, 0],
        [0.7, 0.8, 0, 0, 0, 0, 0, 0],
        [0.8, 0.9, 0, 0, 0, 0, 0, 0],
        [0.9, 1, 0, 0, 0, 0, 0, 0],
    ]

    //variables pruebas uniformidad
    const [datos, setDatos] = useState(initialState)

    
    const saveRange = (key) => {
        console.log("vea la key-->", key)
        let periodo = key
        switch (true) {
            case (periodo >= 0 && periodo < 0.1):
                setDatos([...datos, datos[0][2] += 1])
                break;
            case (periodo >= 0.1 && periodo < 0.2):
                setDatos([...datos, datos[1][2] += 1])
                break;
            case (periodo >= 0.2 && periodo < 0.3):
                setDatos([...datos, datos[2][2] += 1])
                break;
            case (periodo >= 0.3 && periodo < 0.4):
                setDatos([...datos, datos[3][2] += 1])
                break;
            case (periodo >= 0.4 && periodo < 0.5):
                setDatos([...datos, datos[4][2] += 1])
                break;
            case (periodo >= 0.5 && periodo < 0.6):
                setDatos([...datos, datos[5][2] += 1])
                break;
            case (periodo >= 0.6 && periodo < 0.7):
                setDatos([...datos, datos[6][2] += 1])
                break;
            case (periodo >= 0.7 && periodo < 0.8):
                setDatos([...datos, datos[7][2] += 1])
                break;
            case (periodo >= 0.8 && periodo < 0.9):
                setDatos([...datos, datos[8][2] += 1])
                break;
            case (periodo >= 0.9 && periodo <= 1):
                setDatos([...datos, datos[9][2] += 1])
                break;
            case (periodo > 1):
                console.log("OJO QUE EL PERIODO SE PASO DE 1")
                break;
            default:
                console.log("ninguno es opcion")
                break;
        }
    }
    const calculateChi = () => {
        let fe = codes / 10
        let resultado = 0
        let dato = 0
        for (let i = 0; i < datos.length; i++) {
            dato = Math.pow((fe - datos[i][2]), 2) / fe
            setDatos([...datos, datos[i][3] = dato.toFixed(3)])
            resultado += dato
        }
        setXcalc(resultado.toFixed(3))
    }
    const pseudoAleatorio = (a, m, semilla) => {
        let q = Math.floor(m / a)
        let r = (m % a)

        let op1 = a * (semilla % q) - r * Math.trunc((semilla / q))
        let op2 = a * (semilla % q) - r * Math.trunc((semilla / q)) + m
        let op3 = (a * semilla) % m

        console.log("Valores ops..>", op1, op2, op3)

        return op1 < 0
            ? op2 < 0
                ? op3.toFixed(0) : op2.toFixed(0)
            : op1.toFixed(0)

    }
    const generarCodigos = (a, m, semilla) => {
        let ultimo = semilla

        for (let i = 1; i < codes + 1; i++) {
            if (i == 1) {
                console.log("primera vez", ultimo)
                rows.push(createData(i, ultimo, (ultimo / m).toFixed(4)))
                saveRange((ultimo / m))
            } else {
                ultimo = pseudoAleatorio(a, m, ultimo)
                rows.push(createData(i, ultimo, (ultimo / m).toFixed(4)))
                saveRange((ultimo / m))
            }
        }
        calculateChi()
    }

    return (
        <>

            <Container style={{ flex: "wrap", marginTop: 20, textAlign: "center" }}>
                <TextField
                    value={codes}
                    id="outlined-basic"
                    label="Number of Codes"
                    variant="outlined"
                    type="number"
                    onChange={(event) => {
                        setCodes(parseInt(event.target.value))
                    }}
                />


                <Container style={{ flexDirection: "row", flex: "wrap", marginTop: 20, textAlign: "center" }}>
                    <Paper className={classes.title}>Necessary information</Paper>
                    <TextField
                        value={a}
                        id="outlined-basic"
                        label="a"
                        variant="outlined"
                        type="number"
                        fullWidth={false}
                        size="medium"
                        style={{ width: 140, marginInline: 10 }}
                        onChange={(event) => { setA(parseInt(event.target.value)) }}

                    />

                    <TextField
                        value={m}
                        id="outlined-basic"
                        label="m"
                        variant="outlined"
                        type="number"
                        style={{ width: 140, marginInline: 5 }}
                        onChange={(event) => { setM(parseInt(event.target.value)) }}

                    />
                    <TextField
                        value={seed}
                        id="outlined-basic"
                        label="Seed"
                        variant="outlined"
                        type="number"
                        style={{ width: 140, marginInline: 5 }}
                        onChange={(event) => { setSeed(parseInt(event.target.value)) }}

                    />
                </Container>
                <Container style={{ flexDirection: "row", flex: "wrap", marginTop: 20, textAlign: "center" }}>
                    <Paper className={classes.title}>Calculated (q, r, m) values</Paper>
                    <TextField
                        disabled={true}
                        value={m !== "" && a !== "" ? Math.floor(m / a) : ""}
                        id="outlined-basic"
                        label="q"
                        variant="outlined"
                        type="number"
                        fullWidth={false}
                        size="medium"
                        style={{ width: 140, marginInline: 10 }}
                        onChange={(event) => {
                            console.log("modificando Q")
                        }}
                    />

                    <TextField
                        disabled={true}
                        value={m !== "" && a !== "" ? m % a : ""}
                        id="outlined-basic"
                        label="r"
                        variant="outlined"
                        type="number"
                        style={{ width: 140, marginInline: 5 }}
                        onChange={(event) => { setM(parseInt(event.target.value)) }}

                    />
                    <TextField
                        disabled={true}
                        value={m !== "" && a !== "" ? a * (m / a) + (m % a) : ""}
                        id="outlined-basic"
                        label="m"
                        variant="outlined"
                        type="number"
                        style={{ width: 140, marginInline: 5 }}
                        onChange={(event) => { setM(parseInt(event.target.value)) }}

                    />
                </Container>
                <Container style={{ flexDirection: "row", flex: "wrap", marginTop: 20, textAlign: "center" }}>

                    <Button color="inherit"
                        disabled={disabled}
                        className={classes.buttons}
                        onClick={() => {
                            console.log(codes)
                            generarCodigos(a, m, seed)
                            setGenerateBool(true)
                            setDisabled(true)
                        }}>
                        Generate
                    </Button>
                    <Button color="inherit"
                        className={classes.buttons2}
                        onClick={() => {
                            rows = []
                            setGenerateBool(false)
                            setA("")
                            setM("")
                            setSeed("")
                            setCodes("")
                            setDisabled(false)
                        }}>
                        Clean
                    </Button>

                </Container>

            </Container>
            {generateBool &&
                <>
                    <br />
                    <Divider />
                    <Divider />
                    <Divider />
                    <Divider />
                    <Divider />
                    <Divider />
                    <Divider />
                    <Divider />

                    <Paper className={classes.titleAlgorithm}>Uniformity test x²</Paper>

                    <Grid container spacing={2} className={classes.containerResults}>
                        <Grid item xs={2} className={classes.grid}>
                            <Paper className={classes.paper}>Range</Paper>
                            {<>
                                <h2>( {datos[0][0]} - {datos[0][1]})</h2>
                                <Divider />
                                <h2>( {datos[1][0]} - {datos[1][1]})</h2>
                                <Divider />
                                <h2>( {datos[2][0]} - {datos[2][1]})</h2>
                                <Divider />
                                <h2>( {datos[3][0]} - {datos[3][1]})</h2>
                                <Divider />
                                <h2>( {datos[4][0]} - {datos[4][1]})</h2>
                                <Divider />
                                <h2>( {datos[5][0]} - {datos[5][1]})</h2>
                                <Divider />
                                <h2>( {datos[6][0]} - {datos[6][1]})</h2>
                                <Divider />
                                <h2>( {datos[7][0]} - {datos[7][1]})</h2>
                                <Divider />
                                <h2>( {datos[8][0]} - {datos[8][1]})</h2>
                                <Divider />
                                <h2>( {datos[9][0]} - {datos[9][1]})</h2>
                                <Divider />
                            </>
                            }
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={2} className={classes.grid}>
                            <Paper className={classes.paper}>FO</Paper>
                            {<>
                                <h2>{datos[0][2]}</h2>
                                <Divider />
                                <h2>{datos[1][2]}</h2>
                                <Divider />
                                <h2>{datos[2][2]}</h2>
                                <Divider />
                                <h2>{datos[3][2]}</h2>
                                <Divider />
                                <h2>{datos[4][2]}</h2>
                                <Divider />
                                <h2>{datos[5][2]}</h2>
                                <Divider />
                                <h2>{datos[6][2]}</h2>
                                <Divider />
                                <h2>{datos[7][2]}</h2>
                                <Divider />
                                <h2>{datos[8][2]}</h2>
                                <Divider />
                                <h2>{datos[9][2]}</h2>
                                <Divider />
                            </>
                            }
                        </Grid>

                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={2} className={classes.grid}>
                            <Paper className={classes.paper}>FE</Paper>
                            {
                                Object.keys(datos).map(key => {
                                    if (key != 0) {
                                        return (
                                            <>
                                                <h2>{codes / 10}</h2>
                                                <Divider />
                                            </>
                                        )
                                    }


                                })
                            }
                            <br />
                            <Divider />
                            <h2 style={{ background: "#47e009", padding: 7, marginTop: 0 }}>
                                X²calc
                            </h2>
                            <Divider />
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={2} className={classes.grid}>
                            <Paper className={classes.paper}>(FE-FO)² / FE</Paper>
                            {
                                Object.keys(datos).map(key => {
                                    if (key <= 9) {
                                        return (
                                            <>
                                                <h2>{datos[key][3]}</h2>
                                                <Divider />
                                            </>
                                        )
                                    }
                                })
                            }
                            <h2 style={{ background: "#47e009", padding: 7, marginTop: 12 }}>{xcalc}</h2>
                            <Divider />
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={2} className={classes.grid}>
                            <Paper className={classes.paper}>X²crit</Paper>
                            <br />
                            <h2 style={{ background: "gray", padding: 7, margin: 0 }}>
                                {xcrit}
                            </h2>

                            <br />
                            <Paper className={classes.paper}>Confidence level α</Paper>
                            <br />
                            <h2 style={{ background: "gray", padding: 7, margin: 0 }}>
                                0,05
                            </h2>

                            <br />
                            <Paper className={classes.paper}>Degrees of freedom</Paper>
                            <br />
                            <h2 style={{ background: "gray", padding: 7, margin: 0 }}>
                                9
                            </h2>

                            {xcalc <= xcrit ?
                                <h2 style={{ marginTop: 50 }}>
                                    The generator is good in terms of uniformity.
                                </h2>
                                : <h2 style={{ padding: 7, margin: 20 }}>
                                    Generator not good in terms of uniformity
                                </h2>
                            }
                        </Grid>

                    </Grid>
                    
                    <Grid container spacing={2} className={classes.containerResults}>
                        <Paper className={classes.root}>
                            <TableContainer className={classes.container}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead style={{ background: "gray" }}>
                                        <TableRow style={{ background: "black" }}>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth,background: "black", color: "white" }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                                            </TableCell>
                                                        );
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Paper>
                    </Grid>
                </>
            }


        </>
    )
}

export default Algorithm2
