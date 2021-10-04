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
        background: 'linear-gradient(45deg, #e0b209 30%, #5ddd29 90%)',
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

function Algorithm1() {
    const classes = useStyles();
    let varia = "solsolecito"
    //variables para los datos del generador
    const [codes, setCodes] = useState("")
    const [seed, setSeed] = useState("5")
    const [a, setA] = useState("106")
    const [c, setC] = useState("1283")
    const [m, setM] = useState("6075")

    const [xcalc, setXcalc] = useState(0)
    const [DMcalc, setDMcalc] = useState(0)
    const [xcrit, setXcrit] = useState(16.92)
    const [DMcrit, setDMcrit] = useState(0.043)
    const [generateBool, setGenerateBool] = useState(false)
    const [disabled, setDisabled] = useState(false)

    //para las corridas
    const [totalRuns, setTotalRuns] = useState(0)
    const [runs, setRuns] = useState("* ")
    const [media, setMedia] = useState(0)
    const [varianza, setVarianza] = useState(0)

    //para las series
    const [FE, setFE] = useState(0)
    const [resultXcalc, setResultXcalc] = useState(0)

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
    // estos arrays son para las pruebas de series
    const initialState2 = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ]
    const initialState3 = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ]
    //estos arrays son para las pruebas de poker
    const amountRepeatsNum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    // [0][0]---> FO poker       [0][0] --> 1P
    // [0][1]---> Probabilidad   [1][0] --> 2P
    // [0][2]--->  FE            [2][0] --> T
    // [0][3]---> (FE-FO)2 / FE  [3][0] --> Pk
    //                           [4][4]--->  TD                 
    const initialStatePoker = [
        [0, 0.432, 0, 0, 0],
        [0, 0.027, 0, 0, 0],
        [0, 0.036, 0, 0, 0],
        [0, 0.001, 0, 0, 0],
        [0, 0.504, 0, 0, 0],
    ]
    //variables pruebbas series
    const [datos, setDatos] = useState(initialState)
    const [series, setSeries] = useState(initialState2)
    const [seriesFEFO, setSeriesFEFO] = useState(initialState3)
    //variables pruebas poker
    const [amountNumsRepeat, setAmountNumsRepeat] = useState(amountRepeatsNum)
    const [poker, setPoker] = useState(initialStatePoker)
    const [xcalcPoker, setXCalcPoker] = useState(0)
    const [xcritPoker, setXCritPoker] = useState(2.195)

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
    const getSeriePosition = (key) => {
        console.log("vea la key-->", key)
        let dato = key
        switch (true) {
            case (dato >= 0 && dato < 0.2):
                return 0
            case (dato >= 0.2 && dato < 0.4):
                return 1
            case (dato >= 0.4 && dato < 0.6):
                return 2
            case (dato >= 0.6 && dato < 0.8):
                return 3
            case (dato >= 0.8 && dato <= 1):
                return 4
            case (dato > 1):
                console.log("OJO QUE EL PERIODO SE PASO DE 1")
                break;
            default:
                console.log("ninguno es opcion")
                break;
        }
    }
    const calculatePEA_POA = () => {
        let value = 0
        let dmcalc = 0
        for (let i = 0; i < datos.length; i++) {
            value = Math.abs((datos[i][6] - datos[i][5]).toFixed(3))
            if (value > dmcalc) {
                console.log("value--->", value)
                dmcalc = value
                setDMcalc(value)
            }
            setDatos([...datos, datos[i][7] = value])
        }

        console.log(DMcalc)
    }
    const calculatePEA = () => {
        let fe = codes / 10
        console.log(fe)
        for (let i = 0; i < datos.length; i++) {
            // setDatos([...datos, datos[i][6] = parseFloat(datos[i][5]).toFixed(1)])
            setDatos([...datos, datos[i][6] = (fe * (i + 1) / codes).toFixed(1)])
        }
    }
    const calculatePOA = () => {
        for (let i = 0; i < datos.length; i++) {
            setDatos([...datos, datos[i][5] = (datos[i][4] / codes).toFixed(3)])
        }
    }
    const calculateFOA = () => {
        for (let i = 0; i < datos.length; i++) {
            if (i == 0) {
                setDatos([...datos, datos[i][4] = datos[i][2]])
            } else {
                setDatos([...datos, datos[i][4] = datos[i - 1][4] + datos[i][2]])
            }
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
    const pseudoAleatorio = (a, c, m, semilla) => {
        return (a * semilla + c) % m
    }
    const generarCorridas = () => {
        let corridas = "* "
        let count = 0
        let total = 1
        let plus = 0
        for (let i = 0; i < rows.length; i++) {
            if (i !== 0) {
                if (count > (rows[i].code) / m) {
                    if (plus == 2) {
                        total++
                    }
                    corridas += "+ "
                    plus = 1
                } else {
                    if (plus == 1) {
                        total++
                    }
                    corridas += "- "

                    plus = 2
                }
            } else {
                count = (rows[i].code) / m
            }

            count = (rows[i].code) / m

        }
        console.log("total-->", total)
        setRuns(corridas)
        setTotalRuns(total)
        setMedia((((2 * codes) - 1) / 3).toFixed(2))
        setVarianza((((16 * codes) - 29) / 90).toFixed(2))
    }
    const saveSerie = (row, column) => {
        console.log("Pareja-->", "(" + row + "," + column + ")")
        let position1 = getSeriePosition(row)
        let position2 = getSeriePosition(column)

        console.log(position1, position2)
        setSeries([...series, series[position1][position2] += 1])
    }
    const getTestSeries = () => {
        let total = 0
        let result = 0
        let fe = (codes / 2) / 25
        Object.keys(series).map((key1) => {
            Object.keys(series).map((key2) => {
                result = (Math.pow(fe - series[key1][key2], 2) / fe).toFixed(2)
                if (series[key1][key2] !== undefined) {
                    console.log(series[key1][key2], result)
                    setSeriesFEFO([...seriesFEFO, seriesFEFO[key1][key2] = result])

                }
                total += parseFloat(result)

                console.log("result-->", total)
            })
        })
        setResultXcalc(total.toFixed(2))
        console.log("resultado total-->", total.toFixed(2), fe)
    }
    // Estas funciones son para la prueba de poker
    const cleanNumsRepeat = () => {
        for (let i = 0; i < amountNumsRepeat.length; i++) {
            setAmountNumsRepeat([...amountNumsRepeat, amountNumsRepeat[i] = 0])
        }
    }
    const calculateFE = () => {
        let resultado = 0
        Object.keys(poker).map((key) => {
            console.log("JEJEJEJEJE", poker[key][1])
            resultado = (poker[key][1] * codes).toFixed(3)
            setPoker([...poker, poker[key][2] = resultado])
            
        })
        
    }
    const calculateFE_FO = () => {
        let resultado = 0
        let fe = 0
        let xcalculado = 0

        Object.keys(poker).map((key) => {
            console.log("JEJEJEJEJE", poker[key][1])
            fe = poker[key][2]
            resultado = Math.pow((fe - poker[key][0]), 2) / fe
            setPoker([...poker, poker[key][3] = resultado.toFixed(3)])

            xcalculado += resultado
        })
        console.log("calculadooo--<", xcalculado)

        setXCalcPoker(xcalculado.toFixed(3))
    }
    const verifyAmountNums = (num) => {
        console.log("vea el numero-->", num, num.length)
        let position = 0

        let par = 0
        let trecilla = 0
        let PK = 0
        let TD = 0
        for (let i = 0; i < num.length; i++) {
            position = num[i]
            console.log("hey position-->", position)
            setAmountNumsRepeat([...amountNumsRepeat, amountNumsRepeat[position] += 1])

        }
        console.log("veaa esteee......>", amountNumsRepeat)

        for (let i = 0; i < amountNumsRepeat.length; i++) {
            console.log("cantidad-->", amountNumsRepeat[i])
            if (amountNumsRepeat[i] == 2) {
                par += 1
            } else if (amountNumsRepeat[i] == 3) {
                trecilla += 1
            } else if (amountNumsRepeat[i] == 4) {
                PK += 1
            }
        }

        if (par == 0 && trecilla == 0 && PK == 0) {
            setPoker([...poker, poker[4][0] += 1])
        }
        if (par !== 0) {
            if (par == 1) {
                setPoker([...poker, poker[0][0] += 1])
            } else if (par == 2) {
                setPoker([...poker, poker[1][0] += 1])
            }
        }
        if (trecilla !== 0) {
            setPoker([...poker, poker[2][0] += 1])
        }
        if (PK !== 0) {
            setPoker([...poker, poker[3][0] += 1])
        }
        console.log(par, trecilla, PK, TD, poker)
    }

    const separate = async () => {
        calculateFE()
        for (let i = 0; i < codes; i++) {
            verifyAmountNums((rows[i].rn).slice(2, 6))
            cleanNumsRepeat()
        }
        calculateFE_FO()
    }
    // Hasta aqui prueba de poker

    const generarCodigos = (a, c, m, semilla) => {
        let ultimo = semilla
        let par = 0
        let dato = 0
        for (let i = 1; i < codes + 1; i++) {
            if (i == 1) {
                // console.log("primera vez", ultimo)
                rows.push(createData(i, ultimo, (ultimo / m).toFixed(4)))
                // saveRange(periodo.toFixed(1))
                saveRange((ultimo / m))
                // console.log("periodo primera-->",(ultimo/m).toFixed(1))
            } else {
                // console.log("ultimo---<", ultimo,a,c,m,(a*ultimo+ c)%m,m,pseudoAleatorio(a, c, m, ultimo))
                ultimo = pseudoAleatorio(a, c, m, ultimo)
                rows.push(createData(i, ultimo, (ultimo / m).toFixed(4)))
                // console.log(ultimo, ".----",(ultimo/m).toFixed(1))
                // saveRange(periodo.toFixed(1))
                saveRange((ultimo / m))
            }

            //logica para coger pares
            if (par == 0) {
                dato = ultimo
            }
            par++

            if (par == 2) {
                //    console.log("pareja ("+dato+","+ultimo+")")
                saveSerie((dato / m), (ultimo / m))
                par = 0
            } else if (i + 1 > codes) {
                // console.log("Cantidad de codigos impar -->", ultimo, 0)
                saveSerie((ultimo / m), 0)
            } else {
                // console.log("datos -->", dato, ultimo)
            }
        }
        setFE((codes / 2) / 25)
        calculateChi()
        calculateFOA()
        calculatePOA()
        calculatePEA()
        calculatePEA_POA()
        generarCorridas()
        getTestSeries()
        separate()
        setGenerateBool(true)

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
                        console.log("eeaaa", event.target.value)
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
                        value={c}
                        id="outlined-basic"
                        label="c"
                        variant="outlined"
                        type="number"
                        style={{ width: 140, marginInline: 5 }}
                        onChange={(event) => { setC(parseInt(event.target.value)) }}

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

                    <Button color="inherit"
                        disabled={disabled}
                        className={classes.buttons}
                        onClick={() => {
                            console.log(codes)
                            // generarCodigos(1073741827, 536870919, 4294967296, 316630)
                            generarCodigos(parseInt(a), parseInt(c), parseInt(m), parseInt(seed))
                            setGenerateBool(true)
                            // setDisabled(true)
                        }}>
                        Generate
                    </Button>
                    <Button color="inherit"
                        className={classes.buttons2}
                        onClick={() => {
                            rows = []
                            setGenerateBool(false)
                            setA("")
                            setC("")
                            setM("")
                            setSeed("")
                            setCodes("")
                            setDisabled(false)
                            setDatos(initialState)
                            // console.log(datos)
                            // console.log(series)
                            // console.log(seriesFEFO)
                            console.log(amountNumsRepeat)

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
                    {/*Prueba uniformidad Kolmogorov*/}
                    <Paper className={classes.titleAlgorithm2}>Kolmogorov uniformity tests</Paper>
                    <Grid container spacing={2} className={classes.containerResults}>

                        <Grid item xs={1.5} className={classes.grid}>
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
                        <Grid item xs={1.5} className={classes.grid}>
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
                        <Grid item xs={1.5} className={classes.grid}>
                            <Paper className={classes.paper}>FOA</Paper>
                            {
                                Object.keys(datos).map(key => {
                                    if (key <= 9) {
                                        return (
                                            <>
                                                <h2>{datos[key][4]}</h2>
                                                <Divider />
                                            </>
                                        )
                                    }

                                })
                            }
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={1.5} className={classes.grid}>
                            <Paper className={classes.paper}>POA</Paper>
                            {
                                Object.keys(datos).map(key => {
                                    if (key <= 9) {
                                        return (
                                            <>
                                                <h2>{datos[key][5]}</h2>
                                                <Divider />
                                            </>
                                        )
                                    }
                                })
                            }
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={1.5} className={classes.grid}>
                            <Paper className={classes.paper}>PEA</Paper>
                            {
                                Object.keys(datos).map(key => {

                                    return (
                                        <>
                                            <h2>{datos[key][6]}</h2>
                                            <Divider />
                                        </>
                                    )
                                })
                            }
                            <h2 style={{ background: "#156cff", padding: 7, marginTop: 0 }}>DMcalc</h2>
                            <Divider />
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={2} className={classes.grid}>
                            <Paper className={classes.paper}>| PEA - POA |</Paper>
                            {
                                Object.keys(datos).map(key => {
                                    if (key <= 9) {
                                        return (
                                            <>
                                                <h2>{datos[key][7]}</h2>
                                                <Divider />
                                            </>
                                        )
                                    }
                                })
                            }
                            <h2 style={{ background: "#156cff", padding: 7, marginTop: 12 }}>{DMcalc}</h2>
                            <Divider />
                        </Grid>
                        <Divider orientation="vertical" flexItem />

                        <Grid item xs={2} className={classes.grid}>
                            <Paper className={classes.paper}>DMcrit</Paper>
                            <br />
                            <h2 style={{ background: "gray", padding: 7, margin: 0 }}>
                                {DMcrit}
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
                                {codes - 1}
                            </h2>

                            {DMcalc <= DMcrit ?
                                <h2 style={{ marginTop: 50 }}>
                                    The generator is good in terms of uniformity.
                                </h2>
                                : <h2 style={{ padding: 7, margin: 20 }}>
                                    Generator not good in terms of uniformity
                                </h2>
                            }
                        </Grid>
                    </Grid>
                    {/*Prueba Independencia CORRIDAS*/}
                    <Paper className={classes.titleAlgorithm3}>Independence test runs</Paper>
                    <Grid container spacing={2} className={classes.containerResults}>

                        <Grid item xs={8} className={classes.grid}>
                            {/* <Paper className={classes.paper}>Range</Paper> */}

                            <h1 style={{ fontWeight: "normal", fontSize: 22, textAlign: "justify", background: "transparent" }}>
                                {runs}
                            </h1>
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Divider orientation="vertical" flexItem />
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={2} className={classes.grid}>
                            <Paper className={classes.paper}>Runs</Paper>
                            <br />
                            <h2 style={{ background: "gray", padding: 7, margin: 0 }}>
                                {totalRuns}
                            </h2>
                            <br />
                            <Paper className={classes.paper}>µₐ</Paper>
                            <br />
                            <h2 style={{ background: "gray", padding: 7, margin: 0 }}>
                                {media}
                            </h2>
                            <br />
                            <Paper className={classes.paper}>σ²ₐ</Paper>
                            <br />
                            <h2 style={{ background: "gray", padding: 7, margin: 0 }}>
                                {varianza}
                            </h2>

                            <br />
                            <Paper className={classes.paper}>Zabs</Paper>
                            <br />
                            <h2 style={{ background: "gray", padding: 7, margin: 0 }}>
                                {((totalRuns - media) / Math.sqrt(varianza)).toFixed(2)}
                            </h2>

                            <br />
                            <Paper className={classes.paper}>α</Paper>
                            <br />
                            <h2 style={{ background: "gray", padding: 7, margin: 0 }}>
                                0,05
                            </h2>

                            {((totalRuns - media) / Math.sqrt(varianza)).toFixed(2) <= 1.96
                                && ((totalRuns - media) / Math.sqrt(varianza)).toFixed(2) >= -1.96 ?
                                <h2 style={{ marginTop: 30 }}>
                                    No evidence to reject the independence hypothesis.
                                </h2>
                                : <h2 style={{ padding: 7, margin: 20 }}>
                                    The hypothesis of independence is rejected
                                </h2>
                            }
                        </Grid>
                    </Grid>
                    {/*Prueba Independencia SERIES*/}
                    <Paper className={classes.titleAlgorithm4}>Independence test series</Paper>
                    <Grid container spacing={2} className={classes.containerResults}>
                        <Grid item xs={1.5} className={classes.grid}>
                            <Paper style={{ paddingTop: 32, background: "transparent" }}></Paper>
                            {<>

                                <h2 className={classes.paper2}>0 - 0.2</h2>
                                <h2 className={classes.paper2}>0.2 - 0.4</h2>
                                <h2 className={classes.paper2}>0.4 - 0.6</h2>
                                <h2 className={classes.paper2}>0.6 - 0.8</h2>
                                <h2 className={classes.paper2}>0.8 - 1</h2>
                            </>
                            }
                        </Grid>
                        <Divider orientation="vertical" flexItem />

                        <Grid item xs={1.5} className={classes.grid}>
                            <Paper className={classes.paper}>0 - 0.2</Paper>
                            {
                                Object.keys(series).map(key => {
                                    if (key <= 4) {
                                        return (
                                            <>
                                                <h2>{series[key][0]}</h2>
                                                <Divider />
                                            </>
                                        )
                                    }

                                })
                            }
                        </Grid>

                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={1.5} className={classes.grid}>
                            <Paper className={classes.paper}>0.2 - 0.4</Paper>

                            {
                                Object.keys(series).map(key => {
                                    if (key <= 4) {
                                        return (
                                            <>
                                                <h2>{series[key][1]}</h2>
                                                <Divider />
                                            </>
                                        )
                                    }

                                })
                            }
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={1.5} className={classes.grid}>
                            <Paper className={classes.paper}>0.4 - 0.6</Paper>
                            {
                                Object.keys(series).map(key => {
                                    if (key <= 4) {
                                        return (
                                            <>
                                                <h2>{series[key][2]}</h2>
                                                <Divider />
                                            </>
                                        )
                                    }

                                })
                            }
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={1.5} className={classes.grid}>
                            <Paper className={classes.paper}>0.6 - 0.8</Paper>
                            {
                                Object.keys(series).map(key => {
                                    if (key <= 4) {
                                        return (
                                            <>
                                                <h2>{series[key][3]}</h2>
                                                <Divider />
                                            </>
                                        )
                                    }

                                })
                            }
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={1.5} className={classes.grid}>
                            <Paper className={classes.paper}>0.8 - 1</Paper>
                            {
                                Object.keys(series).map(key => {
                                    if (key <= 4) {
                                        return (
                                            <>
                                                <h2>{series[key][4]}</h2>
                                                <Divider />
                                            </>
                                        )
                                    }

                                })
                            }

                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Divider orientation="vertical" flexItem />
                        <Divider orientation="vertical" flexItem />
                        <Divider orientation="vertical" flexItem />
                        <Divider orientation="vertical" flexItem />

                        <Grid item xs={2} className={classes.grid}>
                            <Paper className={classes.paper}>FE</Paper>
                            <br />
                            <h2 style={{ background: "gray", padding: 7, margin: 0 }}>
                                {FE}
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
                                {Math.pow(series.length - 1, 2) - 1}
                            </h2>

                        </Grid>
                        {/* Segunda tabla pero con el Xcalc */}
                        <Grid container spacing={2} className={classes.containerResults2}>

                            <Grid item xs={1.5} className={classes.grid}>
                                <Paper style={{ paddingTop: 32, background: "transparent" }}></Paper>
                                {<>

                                    <h2 className={classes.paper2}>0 - 0.2</h2>
                                    <h2 className={classes.paper2}>0.2 - 0.4</h2>
                                    <h2 className={classes.paper2}>0.4 - 0.6</h2>
                                    <h2 className={classes.paper2}>0.6 - 0.8</h2>
                                    <h2 className={classes.paper2}>0.8 - 1</h2>
                                </>
                                }
                            </Grid>
                            <Divider orientation="vertical" flexItem />

                            <Grid item xs={1.5} className={classes.grid}>
                                <Paper className={classes.paper}>0 - 0.2</Paper>
                                {
                                    Object.keys(seriesFEFO).map(key => {
                                        if (key <= 4) {
                                            return (
                                                <>
                                                    <h2>{seriesFEFO[key][0]}</h2>
                                                    <Divider />
                                                </>
                                            )
                                        }

                                    })
                                }
                            </Grid>

                            <Divider orientation="vertical" flexItem />
                            <Grid item xs={1.5} className={classes.grid}>
                                <Paper className={classes.paper}>0.2 - 0.4</Paper>

                                {
                                    Object.keys(seriesFEFO).map(key => {
                                        if (key <= 4) {
                                            return (
                                                <>
                                                    <h2>{seriesFEFO[key][1]}</h2>
                                                    <Divider />
                                                </>
                                            )
                                        }

                                    })
                                }
                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid item xs={1.5} className={classes.grid}>
                                <Paper className={classes.paper}>0.4 - 0.6</Paper>
                                {
                                    Object.keys(seriesFEFO).map(key => {
                                        if (key <= 4) {
                                            return (
                                                <>
                                                    <h2>{seriesFEFO[key][2]}</h2>
                                                    <Divider />
                                                </>
                                            )
                                        }

                                    })
                                }
                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid item xs={1.5} className={classes.grid}>
                                <Paper className={classes.paper}>0.6 - 0.8</Paper>
                                {
                                    Object.keys(seriesFEFO).map(key => {
                                        if (key <= 4) {
                                            return (
                                                <>
                                                    <h2>{seriesFEFO[key][3]}</h2>
                                                    <Divider />
                                                </>
                                            )
                                        }

                                    })
                                }
                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid item xs={1.5} className={classes.grid}>
                                <Paper className={classes.paper}>0.8 - 1</Paper>
                                {
                                    Object.keys(seriesFEFO).map(key => {
                                        if (key <= 4) {
                                            return (
                                                <>
                                                    <h2>{seriesFEFO[key][4]}</h2>
                                                    <Divider />
                                                </>
                                            )
                                        }

                                    })
                                }

                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Divider orientation="vertical" flexItem />
                            <Divider orientation="vertical" flexItem />
                            <Divider orientation="vertical" flexItem />
                            <Divider orientation="vertical" flexItem />

                            <Grid item xs={2} className={classes.grid}>

                                <br />
                                <Paper className={classes.paper}>X²crit</Paper>
                                <br />
                                <h2 style={{ background: "gray", padding: 7, margin: 0 }}>
                                    {36.42}
                                </h2>

                                <br />
                                <Paper className={classes.paper}>X²calc</Paper>
                                <br />
                                <h2 style={{ background: "gray", padding: 7, margin: 0 }}>
                                    {resultXcalc}
                                </h2>

                                { (resultXcalc < 36.42  )?
                                <h2 style={{ marginTop: 30 }}>
                                   The hypothesis that the data have a two-dimensional uniform distribution is accepted.
                                </h2>
                                : <h2 style={{ padding: 7, margin: 20 }}>
                                    The hypothesis that the data have a two-dimensional uniform distribution is not accepted.
                                </h2>
                            }
                            </Grid>
                        </Grid>
                    </Grid>

                    {/*Prueba Independencia POKER*/}
                    <Paper className={classes.titleAlgorithm5}>Independence test Poker</Paper>
                    <Grid container spacing={2} className={classes.containerResults}>
                        <Grid item xs={1.5} className={classes.grid}>
                            <Paper style={{ paddingTop: 32, background: "transparent" }}></Paper>
                            {<>

                                <h2 className={classes.paper2}>1P</h2>
                                <h2 className={classes.paper2}>2P</h2>
                                <h2 className={classes.paper2}>T</h2>
                                <h2 className={classes.paper2}>PK</h2>
                                <h2 className={classes.paper2}>TD</h2>
                            </>
                            }
                        </Grid>
                        <Divider orientation="vertical" flexItem />

                        <Grid item xs={1.5} className={classes.grid}>
                            <Paper className={classes.paper}>FO</Paper>
                            {
                                Object.keys(poker).map(key => {
                                    if (key <= 4) {
                                        return (
                                            <>
                                                <h2>{poker[key][0]}</h2>
                                                <Divider />
                                            </>
                                        )
                                    }

                                })
                            }
                        </Grid>

                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={1.5} className={classes.grid}>
                            <Paper className={classes.paper}>Probability</Paper>

                            {
                                Object.keys(poker).map(key => {
                                    if (key <= 4) {
                                        return (
                                            <>
                                                <h2>{poker[key][1]}</h2>
                                                <Divider />
                                            </>
                                        )
                                    }

                                })
                            }
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={1.5} className={classes.grid}>
                            <Paper className={classes.paper}>FE</Paper>
                            {
                                Object.keys(poker).map(key => {
                                    if (key <= 4) {
                                        return (
                                            <>
                                                <h2>{poker[key][2]}</h2>
                                                <Divider />
                                            </>
                                        )
                                    }

                                })
                            }
                            <br />
                            <Divider />
                            <h2 style={{ background: "#5947ff", padding: 7, marginTop: 0 }}>
                                X²calc
                            </h2>
                            <Divider />
                        </Grid>

                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={2} className={classes.grid}>
                            <Paper className={classes.paper}>(FE-FO)² / FE</Paper>
                            {
                                Object.keys(poker).map(key => {
                                    if (key <= 4) {
                                        return (
                                            <>
                                                <h2>{poker[key][3]}</h2>
                                                <Divider />
                                            </>
                                        )
                                    }

                                })
                            }
                            <br />
                            <Divider />
                            <h2 style={{ background: "#5947ff", padding: 7, marginTop: 0 }}>
                                {xcalcPoker}
                            </h2>
                            <Divider />
                        </Grid>
                        <Divider orientation="vertical" flexItem />

                        <Divider orientation="vertical" flexItem />
                        <Divider orientation="vertical" flexItem />
                        <Divider orientation="vertical" flexItem />
                        <Divider orientation="vertical" flexItem />
                        <Divider orientation="vertical" flexItem />

                        <Grid item xs={2} className={classes.grid}>
                            <Paper className={classes.paper}>X²crit</Paper>
                            <br />
                            <h2 style={{ background: "gray", padding: 7, margin: 0 }}>
                                {xcritPoker}
                            </h2>

                            <br />
                            <Paper className={classes.paper}>Confidence level α</Paper>
                            <br />
                            <h2 style={{ background: "gray", padding: 7, margin: 0 }}>
                                0,70
                            </h2>

                            <br />
                            <Paper className={classes.paper}>Degrees of freedom</Paper>
                            <br />
                            <h2 style={{ background: "gray", padding: 7, margin: 0 }}>
                                {(poker.length - 2)}
                            </h2>

                            { (xcalcPoker < xcritPoker)?
                                <h2 style={{ marginTop: 30 }}>
                                    The sequence of numbers passes the test
                                </h2>
                                : <h2 style={{ padding: 7, margin: 20 }}>
                                    The sequence of numbers does not pass the test
                                </h2>
                            }
                        </Grid>

                    </Grid>

                    {/* Esta es la tabla con los codigos */}
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
                                                    style={{ minWidth: column.minWidth, background: "black", color: "white" }}
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

export default Algorithm1