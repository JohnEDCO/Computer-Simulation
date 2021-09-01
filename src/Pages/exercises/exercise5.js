import React, { useState } from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import bacterias2 from '../../Assets/bacterias2.jpg'
import bacterias from '../../Assets/bacterias.png'
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
    containerResults: {

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
        fontSize: 18,
        fontWeight: "bold",
        textDecoration: "underline gray",
        padding: theme.spacing(1),
        textAlign: 'center',
        color: "Black",
        marginBottom: 20,
    },
    content: {
        fontSize: 14,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: "white",
        background: "transparent",
        boxShadow: '0 3px 5px 2px rgba(50, 50, 50, .3)',
        background: 'black',
        width: "30%",
        marginInline: "35%",
        marginBottom: 20
    },
    contentText: {
        fontSize: 16,
        padding: theme.spacing(0),
        textAlign: 'justify',
        color: "black",
        textDecoration: "none",

    },

}));

function Exercise5() {
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

            <Container style={{ flex: "wrap", marginTop: 20, textAlign: "center", alignItems: "center", width: "35%" }}>

                <Typography variant="h5" component="h2" className={classes.title}>
                    Poblacion de Bacterias
                </Typography>
                <Typography variant="h5" component="h2" className={classes.contentText}>
                    El desarrollo de esta poblacion de bacterias es de forma exponencial, ya que cada hora
                    se duplica su poblacion.
                </Typography>
                <br />

                <Typography variant="h5" component="h2" className={classes.contentText}>
                    ¿Cómo es el comportamiento de la población si se considera también una tasa de
                    mortalidad proporcional al tamaño de la población?
                </Typography>
                <br />
                <Typography variant="h5" component="h2" className={classes.contentText}>
                    Si la tasa de mortalidad de las bacterias fuese propocional al tamaño de
                    la poblacion, el crecimiento de esta no seria tan grande ya que las bacterias
                    moririan a casi el mismo ritmo en que se reproducen
                </Typography>

                <img src={bacterias}
                    style={{ width: "100%", marginTop: 20, marginBottom: 30 }}
                />
            </Container>

        </>
    )
}

export default Exercise5
