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
        width: "22%",
        marginInline: "38%",
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
    container: {
        maxHeight: 440,
    },
}));
const columns = [
    { id: 'name', label: '#', minWidth: 170 },
    { id: 'code', label: 'Codes', minWidth: 100 },

];
function createData(name, code) {
    return { name, code };
}

let rows = [];

function Algorithm2() {
    const classes = useStyles();
    let varia = "solsolecito"
    const [codes, setCodes] = useState("")
    const [seed, setSeed] = useState("")
    const [a, setA] = useState("")
    const [m, setM] = useState("")
    const [q, setQ] = useState("")
    const [r, setR] = useState("")
    const [generateBool, setGenerateBool] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const pseudoAleatorio = (a, m, semilla) => {
        let q = Math.floor(m / a)
        let r = (m % a)

        let op1 = a * (semilla % q) - r * (semilla / q)
        let op2 = a * (semilla % q) - r * (semilla / q) + m
        let op3 = (a * semilla) % m

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
                rows.push(createData(i, ultimo))

            } else {
                ultimo = pseudoAleatorio(a, m, ultimo)
                rows.push(createData(i, ultimo))

            }
        }
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
                                                style={{ minWidth: column.minWidth }}
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
            }


        </>
    )
}

export default Algorithm2
