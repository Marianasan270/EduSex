const formChat = document.getElementById("formChat");
const pregunta = document.getElementById("pregunta");
const conversacion = document.getElementById("conversacion");
let esperandoComoEstas = false;

const preguntas = [
"¿Qué es el embarazo adolescente?",
"¿Cuáles son las causas del embarazo adolescente?",
"¿Qué consecuencias tiene el embarazo adolescente?",
"¿Cómo se puede prevenir un embarazo?",
"¿Qué es la educación sexual?",
"¿Qué son los métodos anticonceptivos?",
"¿Qué es el preservativo?",
"¿Para qué sirve el condón?",
"¿Qué son las pastillas anticonceptivas?",
"¿Qué es el implante anticonceptivo?",
"¿Qué es el DIU?",
"¿Qué son las inyecciones anticonceptivas?",
"¿Los anticonceptivos previenen infecciones?",
"¿Qué son las infecciones de transmisión sexual?",
"¿Cómo se pueden prevenir las ITS?",
"¿Qué es el consentimiento?",
"¿Qué significa tener una relación saludable?",
"¿Qué hago si mi pareja me presiona?",
"¿Cómo decir que no a una relación sexual?",
"¿Por qué es importante respetar las decisiones?",
"¿Qué mitos existen sobre el embarazo?",
"¿Es posible quedar embarazada la primera vez?",
"¿Se puede quedar embarazada sin protección?",
"¿Qué es la menstruación?",
"¿Qué es el ciclo menstrual?",
"¿Cuáles son las señales de embarazo?",
"¿Cómo se confirma un embarazo?",
"¿Qué debo hacer ante un embarazo inesperado?",
"¿Dónde puedo recibir orientación médica?",
"¿Qué servicios ofrecen los centros de salud?",
"¿Por qué es importante acudir al médico?",
"¿Qué es la planificación familiar?",
"¿Qué es la responsabilidad sexual?",
"¿Cómo influye la falta de información?",
"¿Cómo afecta el embarazo a los estudios?",
"¿Qué apoyo necesita una adolescente embarazada?",
"¿Cómo puede apoyar la familia?",
"¿Cómo puede ayudar la escuela?",
"¿Por qué debemos evitar la discriminación?",
"¿Qué es la violencia en el noviazgo?",
"¿Qué hago si sufro violencia o abuso?",
"¿Qué es la anticoncepción de emergencia?",
"¿Dónde consigo métodos anticonceptivos?",
"¿Todos los métodos anticonceptivos son iguales?",
"¿Cómo elegir un método anticonceptivo?",
"¿Qué pasa si falla un anticonceptivo?",
"¿Por qué es importante hablar de sexualidad?",
"¿Cómo puedo resolver mis dudas de forma segura?",
"¿Cuál es el objetivo de EducSex?",
"¿Cómo puedo cuidar mi salud y mi futuro?"
];

const respuestas = [
"El embarazo adolescente es aquel que ocurre durante la adolescencia. Puede implicar cambios en los planes personales, escolares y familiares. La información confiable y el apoyo son importantes.",
"Puede relacionarse con falta de educación sexual, dificultades para acceder a anticonceptivos, presión de pareja, violencia y falta de orientación.",
"Puede implicar necesidades médicas, cambios en los estudios, nuevas responsabilidades económicas y emocionales. El apoyo familiar, escolar y profesional puede ayudar.",
"Se puede prevenir mediante educación sexual, acceso a anticonceptivos, orientación profesional y decisiones libres de presión. El preservativo ayuda a prevenir embarazos e infecciones de transmisión sexual.",
"La educación sexual es información sobre el cuerpo, la reproducción, los anticonceptivos, el consentimiento, las relaciones saludables y el cuidado de la salud.",
"Son métodos que ayudan a prevenir embarazos. Entre ellos están el preservativo, las pastillas, las inyecciones, el implante y el DIU.",
"El preservativo o condón es una barrera que ayuda a evitar que los espermatozoides lleguen al aparato reproductor y reduce el riesgo de algunas infecciones de transmisión sexual.",
"El condón ayuda a prevenir embarazos y reduce el riesgo de infecciones de transmisión sexual cuando se utiliza correctamente. Existen preservativos externos e internos.",
"Son medicamentos hormonales que ayudan a prevenir el embarazo. Deben utilizarse siguiendo las indicaciones correspondientes de profesionales de salud y no protegen contra las ITS.",
"Es un pequeño dispositivo que se coloca debajo de la piel del brazo por personal capacitado. Libera hormonas y previene el embarazo durante un periodo prolongado.",
"El DIU es un pequeño dispositivo que un profesional de salud coloca dentro del útero. Existen distintos tipos, como el de cobre y el hormonal.",
"Son métodos hormonales que se administran mediante inyecciones en intervalos determinados. El personal de salud puede explicar sus características y posibles efectos.",
"No todos. El preservativo ayuda a reducir el riesgo de ITS; las pastillas, el implante, las inyecciones y el DIU previenen embarazos, pero no protegen contra las ITS.",
"Son infecciones que pueden transmitirse principalmente mediante contacto sexual. Algunas pueden no presentar síntomas, por lo que la orientación y las pruebas médicas son importantes.",
"El uso correcto del preservativo, las pruebas médicas, la información confiable y la atención de salud ayudan a reducir el riesgo. Consulta a un profesional para conocer las medidas adecuadas.",
"El consentimiento es aceptar libremente una situación sin presión, amenazas ni manipulación. Debe ser claro y puede retirarse en cualquier momento.",
"Una relación saludable se basa en respeto, confianza, comunicación, igualdad y libertad para tomar decisiones. Nadie debe controlar ni presionar a la otra persona.",
"Nadie tiene derecho a presionarte. Puedes expresar tus límites, alejarte de la situación y hablar con una persona adulta de confianza o con personal especializado.",
"Puedes decir claramente que no deseas hacerlo. No tienes que justificar tu decisión. Una pareja que te respeta acepta tus límites sin presionarte.",
"Porque cada persona tiene derecho a decidir sobre su cuerpo y su vida. Respetar las decisiones favorece relaciones sanas, seguras y libres de violencia.",
"Algunos mitos dicen que el embarazo no puede ocurrir la primera vez o que ciertos remedios caseros lo evitan. Estas ideas son falsas. Busca información en fuentes de salud confiables.",
"Sí. Puede ocurrir un embarazo desde la primera relación sexual si existe exposición a espermatozoides. El uso adecuado de anticonceptivos ayuda a prevenirlo.",
"Sí. Las relaciones sexuales sin protección pueden provocar un embarazo. Si existe una preocupación, consulta cuanto antes a un profesional de salud sobre las opciones disponibles.",
"La menstruación es el sangrado que ocurre como parte del ciclo menstrual cuando no se produce un embarazo. Su duración y características pueden variar entre personas.",
"Es el conjunto de cambios hormonales que prepara al cuerpo para una posible gestación. Su duración puede variar y no siempre tiene la misma regularidad.",
"Algunas señales pueden ser retraso menstrual, náuseas, cansancio o sensibilidad en los senos. Estos síntomas también pueden tener otras causas; una prueba ayuda a comprobarlo.",
"Se puede confirmar mediante una prueba de embarazo y, cuando sea necesario, una valoración médica. Sigue las instrucciones de la prueba y consulta si tienes dudas.",
"Busca atención de salud confiable y apoyo de una persona adulta en quien confíes. Un profesional puede explicar las opciones disponibles de manera respetuosa y sin juzgarte.",
"Dependiendo del centro, pueden ofrecer orientación sexual, anticonceptivos, pruebas de embarazo, pruebas de ITS y consultas médicas. Confirma directamente qué servicios están disponibles.",
"Permite resolver dudas, recibir orientación preventiva, identificar problemas de salud y conocer las opciones adecuadas para cada persona.",
"La planificación familiar consiste en recibir información y servicios para tomar decisiones informadas sobre si tener hijos, cuándo y cuántos. Incluye orientación sobre anticonceptivos.",
"Es tomar decisiones informadas, respetar los límites propios y ajenos, conocer los métodos de prevención y buscar orientación profesional cuando sea necesario.",
"Sin información confiable, una persona puede creer mitos, desconocer los métodos anticonceptivos o tener dificultades para reconocer situaciones de presión. La educación ayuda a tomar decisiones informadas.",
"Un embarazo puede generar citas médicas, responsabilidades y cambios en la organización escolar. Con apoyo familiar y educativo, es posible buscar alternativas para continuar los estudios.",
"Puede necesitar atención médica, apoyo emocional, acompañamiento familiar, orientación social y facilidades para continuar estudiando sin discriminación.",
"La familia puede escuchar sin juzgar, brindar apoyo emocional, acompañar a consultas de salud y ayudar a buscar información confiable y opciones educativas.",
"La escuela puede proporcionar educación sexual, orientación, información confiable y un ambiente respetuoso. También puede ayudar a prevenir la discriminación y favorecer la continuidad escolar.",
"Todas las personas merecen respeto y apoyo. Discriminar puede causar daño emocional y dificultar el acceso a la educación, la atención médica y otros servicios.",
"Es cuando existen conductas de control, amenazas, humillaciones, presión o agresiones en una relación. El respeto y la seguridad son fundamentales.",
"Busca un lugar seguro y cuéntaselo a una persona adulta de confianza, orientadora escolar o profesional especializado. Si estás en peligro inmediato, solicita ayuda a los servicios de emergencia de tu localidad.",
"Es un método que puede ayudar a prevenir un embarazo después de una relación sexual sin protección o de un fallo anticonceptivo. Debe buscarse orientación farmacéutica o médica lo antes posible, porque las opciones tienen distintos plazos.",
"Puedes consultar centros de salud y servicios de planificación familiar. La disponibilidad y el costo dependen del lugar; pregunta al personal sanitario por las opciones apropiadas.",
"No. Varían en eficacia, duración, forma de uso, posibles efectos y protección frente a las ITS. El preservativo es el que también ayuda a reducir el riesgo de transmisión de infecciones.",
"Depende de la salud, necesidades, preferencias y circunstancias de cada persona. Un profesional de salud puede explicar las opciones para elegir de manera informada.",
"Depende del método y de lo ocurrido. Consulta cuanto antes a un profesional de salud para conocer las opciones, incluida la anticoncepción de emergencia cuando corresponda.",
"Permite aclarar dudas, prevenir riesgos, reconocer el consentimiento y conocer los servicios de salud. Hablar del tema con respeto ayuda a tomar decisiones informadas.",
"Consulta fuentes oficiales, personal de salud, centros de planificación familiar u orientación escolar. No compartas datos personales con páginas o personas desconocidas.",
"EducSex busca informar y orientar a los estudiantes del CECyTEM sobre educación sexual, prevención del embarazo adolescente, anticonceptivos y relaciones respetuosas.",
"Puedes cuidar tu salud buscando información confiable, respetando tus límites, tomando decisiones libres de presión y acudiendo a profesionales de salud cuando tengas dudas."
];

const listaPreguntas = "Estas son las 50 preguntas que puedes hacerme:\n\n" +
preguntas.map((p, i) => (i + 1) + ". " + p).join("\n") +
"\n\nEscribe una pregunta o selecciona un tema.";

function mostrarMensaje(texto, tipo) {
  const mensaje = document.createElement("p");
  mensaje.className = "mensaje " + tipo;
  mensaje.textContent = texto;
  mensaje.style.whiteSpace = "pre-line";
  conversacion.appendChild(mensaje);
  conversacion.scrollTop = conversacion.scrollHeight;
}

function normalizar(texto) {
  return texto.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[¿?¡!.,;:]/g, "")
    .trim();
}

function responder(texto) {
  const t = normalizar(texto);

  if (esperandoComoEstas) {
    esperandoComoEstas = false;

    if (t === "no" || t.includes("no se") || t.includes("no tengo") ||
        t.includes("que pregunto") || t === "nada") {
      return "No te preocupes 😊. Aquí tienes algunas ideas:\n\n" + listaPreguntas;
    }

    if (t.includes("bien") || t.includes("genial") ||
        t.includes("excelente") || t.includes("todo bien")) {
      return "¡Qué bueno, me alegro por ti! 😊 ¿Qué te gustaría saber sobre EducSex? Escribe «lista» para ver las preguntas.";
    }

    return "Gracias por contarme 😊. ¿Qué te gustaría saber? Escribe «lista» para ver las preguntas.";
  }

  if (t === "lista" || t.includes("preguntas") ||
      t.includes("que puedo preguntar") || t.includes("que sabes") ||
      t.includes("temas")) {
    return listaPreguntas;
  }

  if (t === "hola" || t.startsWith("hola ") ||
      t.includes("buenas") || t.includes("buenos dias") ||
      t.includes("buenas tardes") || t.includes("buenas noches")) {
    esperandoComoEstas = true;
    return "¡Holaaa! ¿Cómo estás? ";
  }

  if (t.includes("gracias")) {
    return "¡De nada! 😊 Estoy aquí para compartir información general sobre EducSex. Escribe «lista» para ver las preguntas.";
  }

  if (t.includes("no se") || t.includes("no tengo pregunta") || t === "nada") {
    return "No te preocupes 😊. Aquí tienes algunas ideas:\n\n" + listaPreguntas;
  }

  let mejorIndice = -1;
  let mejorPuntaje = 0;

  const palabrasIgnoradas = [
    "que", "es", "son", "como", "puedo", "para", "por",
    "del", "las", "los", "una", "un", "el", "la",
    "me", "se", "de", "y", "a", "en", "con", "mi"
  ];

  const palabrasTexto = t.split(/\s+/).filter(
    palabra => palabra.length > 2 && !palabrasIgnoradas.includes(palabra)
  );

  preguntas.forEach(function(p, i) {
    const preguntaNormalizada = normalizar(p);

    if (t === preguntaNormalizada) {
      mejorIndice = i;
      mejorPuntaje = 100;
      return;
    }

    const palabrasPregunta = preguntaNormalizada.split(/\s+/).filter(
      palabra => palabra.length > 2 && !palabrasIgnoradas.includes(palabra)
    );

    let puntaje = 0;

    palabrasPregunta.forEach(function(palabra) {
      if (palabrasTexto.includes(palabra)) {
        puntaje++;
      }
    });

    if (palabrasPregunta.length > 0) {
      const proporcion = puntaje / palabrasPregunta.length;
      if (proporcion >= 0.5 && puntaje > mejorPuntaje) {
        mejorPuntaje = puntaje;
        mejorIndice = i;
      }
    }
  });

  if (mejorIndice !== -1) {
    return respuestas[mejorIndice];
  }

  if (t.includes("embarazo") || t.includes("causa") ||
      t.includes("consecuencia")) {
    return respuestas[0] + "\n\n" + respuestas[1] + "\n\n" + respuestas[2];
  }

  if (t.includes("metodo") || t.includes("condon") ||
      t.includes("anticoncept")) {
    return respuestas[5] + "\n\n" + respuestas[6] + "\n\n" + respuestas[7];
  }

  if (t.includes("prevencion") || t.includes("prevenir") ||
      t.includes("evitar")) {
    return respuestas[3];
  }

  if (t.includes("ayuda") || t.includes("salud") ||
      t.includes("orientacion") || t.includes("clinica") ||
      t.includes("doctor") || t.includes("centro de salud")) {
    return respuestas[28] + "\n\n" + respuestas[29];
  }

  if (t.includes("educacion")) {
    return respuestas[4];
  }

  return "Todavía no encuentro una respuesta exacta para esa pregunta. Escribe «lista» para ver los 50 temas disponibles o consulta a personal de salud para recibir orientación profesional.";
}

function enviarPregunta(texto) {
  const limpio = texto.trim();
  if (!limpio) return;

  mostrarMensaje(limpio, "usuario");
  mostrarMensaje(responder(limpio), "bot");
}

formChat.addEventListener("submit", function(event) {
  event.preventDefault();
  enviarPregunta(pregunta.value);
  pregunta.value = "";
  pregunta.focus();
});

document.querySelectorAll("[data-pregunta]").forEach(function(boton) {
  boton.addEventListener("click", function() {
    const temas = {
      embarazo: preguntas[0],
      metodos: preguntas[5],
      prevencion: preguntas[3],
      ayuda: preguntas[28]
    };

    const clave = boton.dataset.pregunta;
    const numero = Number(clave.replace("pregunta", ""));

    if (temas[clave]) {
      enviarPregunta(temas[clave]);
    } else if (numero >= 1 && numero <= preguntas.length) {
      enviarPregunta(preguntas[numero - 1]);
    }
  });
});