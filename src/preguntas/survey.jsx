import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Checkbox,
  FormControlLabel,
  Button,
  FormGroup,
} from "@mui/material";
import Ambivalente from "../Resultados/ambibalente";
import Angustiado from "../Resultados/angustiado";
import Apostador from "../Resultados/apostador";
import Atesorador from "../Resultados/atesorador";
import Codicioso from "../Resultados/codicioso";
import Gastador from "../Resultados/gastador";
import Impasible from "../Resultados/impasible";
import Pacificador from "../Resultados/pacificador";

const questions = [
  {
    questionText: "Es mi día de hacer compras y me siento…",
    answerOptions: [
      { answerText: "Angustiado", subperfil: "Angustiado" },
      { answerText: "Dudoso", subperfil: "Ambivalente" },
      { answerText: "Enérgico", subperfil: "Apostador" },
      { answerText: "Satisfecho", subperfil: "Codicioso" },
      { answerText: "Entusiasmado", subperfil: "Gastador" },
      { answerText: "Disminuido", subperfil: "Atesorador" },
      { answerText: "Imparcial", subperfil: "Impasible" },
      { answerText: "Merecedor", subperfil: "Pacificador" },
    ],
  },
  {
    questionText:
      "Me encuentro reflexionando sobre lo que realmente me apasiona del dinero…",
    answerOptions: [
      { answerText: "Ser reconocido", subperfil: "Codicioso" },
      {
        answerText: "Tener como atender emergencias",
        subperfil: "Ambivalente",
      },
      { answerText: "Ayudar a otros", subperfil: "Pacificador" },
      { answerText: "Sentirme protegido", subperfil: "Atesorador" },
      { answerText: "Poder divertirme", subperfil: "Gastador" },
      { answerText: "Adquirir aprendizaje", subperfil: "Impasible" },
      { answerText: "Tener como subsistir", subperfil: "Angustiado" },
      { answerText: "Vivir nuevas experiencias", subperfil: "Apostador" },
    ],
  },
  {
    questionText:
      "Voy caminando y me encuentro una bolsa, al abrirla hay dinero…",
    answerOptions: [
      { answerText: "No me interesa", subperfil: "Impasible" },
      { answerText: "Quiero invetirlo", subperfil: "Codicioso" },
      { answerText: "Necesito gastarlo", subperfil: "Gastador" },
      { answerText: "Debo ahorrarlo", subperfil: "Atesorador" },
      { answerText: "Tengo en que apostarlo", subperfil: "Apostador" },
      { answerText: "Quien lo habrá perdido", subperfil: "Angustiado" },
      {
        answerText: "Puedo guardarlo y después lo gasto",
        subperfil: "Ambivalente",
      },
      { answerText: "Voy a donarlo", subperfil: "Pacificador" },
    ],
  },
  {
    questionText:
      "Considero que la emoción que mejor me describe cuando ahorro…",
    answerOptions: [
      {
        answerText: "Lo disfruto hasta que me cansa y termino gastándolo",
        subperfil: "Ambivalente",
      },
      {
        answerText: "Me siento deseoso de aumentar mis ganancias",
        subperfil: "Codicioso",
      },
      {
        answerText: "Pienso que estoy siendo ambicioso",
        subperfil: "Pacificador",
      },
      { answerText: "Me hace sentir feliz", subperfil: "Atesorador" },
      { answerText: "No me genera ningún sentimiento", subperfil: "Impasible" },
      {
        answerText: "Me genera ansiedad de tener una mayor cantidad",
        subperfil: "Angustiado",
      },
      {
        answerText: "Siento que no avanzo, tengo cosas que comprar",
        subperfil: "Gastador",
      },
      { answerText: "Me produce aburrimiento", subperfil: "Apostador" },
    ],
  },
  {
    questionText:
      "Estoy inmerso en mis pensamientos y de pronto me surge una duda acerca de dinero…",
    answerOptions: [
      { answerText: "¿Qué tengo que comprar?", subperfil: "Gastador" },
      {
        answerText: "¿Por qué me me hace sentir angustiado?",
        subperfil: "Angustiado",
      },
      {
        answerText:
          "¿Por qué lo tengo casi siempre presente en mis pensamientos?",
        subperfil: "Impasible",
      },
      { answerText: "¿Cuánto dinero tengo guardado?", subperfil: "Atesorador" },
      {
        answerText: "¿Cuándo obtendré grandes ganancias?",
        subperfil: "Apostador",
      },
      {
        answerText: "¿Será mejor ahorrarlo o gastarlo?",
        subperfil: "Ambivalente",
      },
      {
        answerText: "¿Cómo puedo aumentar mis ingresos?",
        subperfil: "Codicioso",
      },
      { answerText: "¿Qué podría hacer para donar?", subperfil: "Pacificador" },
    ],
  },
];

function Survey() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [answers, setAnswers] = useState([]);
  const [profileResult, setProfileResult] = useState(null);

  const profileComponents = {
    Ambivalente: <Ambivalente />,
    Angustiado: <Angustiado />,
    Apostador: <Apostador />,
    Atesorador: <Atesorador />,
    Codicioso: <Codicioso />,
    Gastador: <Gastador />,
    Impasible: <Impasible />,
    Pacificador: <Pacificador />,
  };

  const handleOptionChange = (event, subperfil) => {
    setSelectedOption({ answerText: event.target.name, subperfil });
  };

  const handleNextQuestion = () => {
    // Si selectedOption.subperfil es una cadena vacía o no está definido, no hagas nada
    if (!selectedOption.subperfil) {
      console.log("No hay opción seleccionada.");
      return;
    }

    // Agrega la nueva opción seleccionada a la lista de respuestas
    const newAnswers = [...answers, selectedOption.subperfil];
    setAnswers(newAnswers); // Actualiza el estado de answers

    // Imprime las respuestas actuales después de actualizarlas
    console.log(newAnswers);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(""); // Reinicia la selección para la siguiente pregunta
    } else {
      calculateProfile(newAnswers); // Llama a calculateProfile con las respuestas actualizadas
    }
  };

  const calculateProfile = (answers) => {
    // Contadores para cada subperfil
    let subprofileCounts = {
      Gastador: 0,
      Impasible: 0,
      Angustiado: 0,
      Ambivalente: 0,
      Apostador: 0,
      Pacificador: 0,
      Codicioso: 0,
      Atesorador: 0,
    };

    // Asignar respuestas a subperfiles
    answers.forEach((answer) => {
      const subperfil = answer; // Asumiendo que 'answer' es una string que corresponde al subperfil
      if (subprofileCounts.hasOwnProperty(subperfil)) {
        subprofileCounts[subperfil] += 1;
      } else {
        console.log(`Subperfil no reconocido: ${subperfil}`);
      }
    });

    // Encontrar todos los subperfiles con el recuento más alto
    const maxCount = Math.max(...Object.values(subprofileCounts));
    let dominantSubprofiles = Object.keys(subprofileCounts).filter(
      (key) => subprofileCounts[key] === maxCount
    );

    // Determinar el resultado basado en las reglas dadas
    let result = "";
    if (dominantSubprofiles.length === 1) {
      // Regla 2: Hay un subperfil dominante
      result = dominantSubprofiles[0];
    } else if (dominantSubprofiles.length === 5) {
      // Regla 1: Todos los subperfiles son diferentes
      result = "Gastador";
    } else if (
      dominantSubprofiles.length === 2 &&
      Object.values(subprofileCounts).filter((count) => count === maxCount)
        .length === 2
    ) {
      // Regla 3: Dos pares de subperfiles iguales, aplicar la jerarquía
      const hierarchy = [
        "Gastador",
        "Atesorador",
        "Codicioso",
        "Impasible",
        "Pacificador",
        "Apostador",
        "Ambivalente",
        "Angustiado",
      ];

      // Filtrar los subperfiles dominantes según la jerarquía y encontrar el primero que coincida
      result = hierarchy.find((subperfil) =>
        dominantSubprofiles.includes(subperfil)
      );
    } else {
      // Si ninguna de las condiciones anteriores se cumple, manejar casos no especificados
      console.log(
        "No se cumplen las condiciones especificadas para los subperfiles"
      );
    }

    console.log(`Resultado del perfil: ${result}`);
    setProfileResult(result);
    // setState({ profileResult: result });
  };

  const renderContent = () => {
    if (profileResult) {
      // Si se ha establecido un perfil resultante, devuelve el componente correspondiente
      return (
        console.log(profileResult), 
        profileComponents[profileResult] || <div>Perfil no encontrado.</div>
      );
    } else {
      return (
        <Container component="main" maxWidth="sm" sx={{ mt: 8, mb: 8 }}>
          <Paper
            elevation={6}
            sx={{
              my: 8,
              p: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ alignSelf: "center" }}>
              {questions[currentQuestion].questionText}
            </Typography>
            {/* Opciones de respuesta */}
            <FormGroup>
              {questions[currentQuestion].answerOptions.map((option, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={selectedOption.answerText === option.answerText}
                      onChange={(event) =>
                        handleOptionChange(event, option.subperfil)
                      }
                      name={option.answerText}
                      color="primary"
                    />
                  }
                  label={option.answerText}
                />
              ))}
            </FormGroup>

            <Button
              variant="contained"
              color="primary"
              size="sm"
              onClick={handleNextQuestion}
              sx={{
                alignSelf: "center",
                marginTop: "1rem",
                backgroundColor: "#6B66FF",
                ":hover": {
                  backgroundColor: "#FCCD1F", // Cambiar para el estado hover si se desea
                },
                ":active": {
                  backgroundColor: "#4e49cc", // Cambiar para el estado active/clicked
                },
              }}
            >
              Siguiente
            </Button>
          </Paper>
        </Container>
      );
    }

  };
  return <Container component="main" maxWidth="sm" sx={{ mt: 8, mb: 8 }}>{renderContent()}</Container>;
}

export default Survey;
