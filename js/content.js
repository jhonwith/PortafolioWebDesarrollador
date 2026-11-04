/* ============================================================
   CONTENIDO DEL PORTAFOLIO
   Este es el único archivo que necesitas editar para cambiar
   los textos, proyectos, habilidades y datos de contacto.

   Reglas simples:
   - Los textos van entre comillas "así".
   - Cada elemento de una lista termina con coma.
   - Para agregar un proyecto, copia un bloque { ... }, pégalo
     debajo y cambia sus datos.
   - Todo lo que dice [entre corchetes] es un dato que debes
     reemplazar por el tuyo.
   ============================================================ */

window.PORTFOLIO = {

  /* ---------- Datos principales ---------- */
  nombre: "Mauricio Choque Bernal",
  nombreCorto: "Mauricio Choque",
  iniciales: "MC",
  rol: "Desarrollador de software",
  ubicacion: "Quillacollo, Cochabamba",

  /* Tu foto: guarda la imagen dentro de la carpeta "img" con este nombre
     (foto.jpg). Si tu archivo se llama distinto o es PNG, cambia el texto
     de abajo, por ejemplo "img/mi-foto.png". Funciona con jpg, png y webp.
     Una imagen cuadrada de unos 600 x 600 píxeles se ve mejor.
     Si el archivo no existe, la foto simplemente no se muestra. */
  foto: "img/foto.jpg",

  /* Frase que aparece debajo de tu nombre */
  frase: "Construyo sistemas web que ordenan procesos reales: de la base de datos a la pantalla que usa la gente.",

  /* Datos rápidos bajo los botones del inicio */
  datosRapidos: [
    "Universidad Adventista de Bolivia",
    "C#, .NET, Angular, PHP, Laravel y Node.js",
    "MySQL y SQL Server"
  ],

  /* Las tres capas que se dibujan en el inicio */
  capas: ["Angular", ".NET", "SQL Server"],

  /* ---------- Sobre mí (uno o más párrafos) ---------- */
  sobreMi: [
    "Tengo 27 años y soy desarrollador de software formado en Ingeniería de Sistemas en la Universidad Adventista de Bolivia. Soy una persona responsable, con ganas de trabajar y de seguir aprendiendo, y me gusta resolver problemas de forma sistemática y convertirlos en soluciones que cumplan los objetivos de la organización.",
    "He desarrollado sistemas de control de accesos, de transporte y de alquileres, y hoy trabajo en un sistema web de administración de convocatorias, jornadas, sociedades científicas estudiantiles y reportes para la Dirección General de Investigación de mi universidad. Lo construyo con una arquitectura en n capas, la metodología RAD y un stack de .NET, Angular y SQL Server.",
    "Mi objetivo es aplicar los conocimientos teóricos y prácticos de mi formación para beneficiar a la organización donde trabaje y crecer profesionalmente junto a su equipo."
  ],

  /* ---------- Habilidades, agrupadas ---------- */
  habilidades: [
    {
      grupo: "Lenguajes",
      items: ["C#", "C++", "JavaScript", "PHP"]
    },
    {
      grupo: "Frameworks y plataformas",
      items: [".NET", "Angular", "Laravel", "Node.js"]
    },
    {
      grupo: "Web",
      items: ["HTML5", "CSS3", "Diseño responsivo"]
    },
    {
      grupo: "Bases de datos",
      items: ["SQL Server", "MySQL", "Modelado relacional"]
    },
    {
      grupo: "Método",
      items: ["Arquitectura en n capas", "RAD", "Maquetación de interfaces"]
    }
  ],

  /* ---------- Proyectos ----------
     estado: texto corto que aparece como etiqueta (ej. "En desarrollo", "Terminado")
     tecnologias: lista de tecnologías; déjala vacía [] si no quieres mostrarlas
     enlace: dirección del proyecto o del código; déjalo vacío "" si no tienes
     textoEnlace: lo que dice el botón del enlace

     Las descripciones de los proyectos terminados son breves a propósito:
     amplíalas con lo que hace cada sistema y las tecnologías que usaste. */
  proyectos: [
    {
      titulo: "Sistema web de administración para la Dirección General de Investigación",
      estado: "En desarrollo",
      descripcion: "Sistema para administrar convocatorias, jornadas de investigación, sociedades científicas estudiantiles y reportes de la Universidad Adventista de Bolivia. Reemplaza un circuito que hoy funciona por chat y correo electrónico.",
      tecnologias: [".NET", "Angular", "SQL Server", "n capas", "RAD"],
      enlace: "",
      textoEnlace: "Ver proyecto"
    },
    {
      titulo: "Sistema de control de acceso de entradas y salidas",
      estado: "Terminado",
      descripcion: "Sistema para registrar y controlar las entradas y salidas de personas.",
      tecnologias: [],
      enlace: "",
      textoEnlace: "Ver proyecto"
    },
    {
      titulo: "Sistema para Transcopacabana",
      estado: "Terminado",
      descripcion: "Sistema para la empresa de transporte Transcopacabana, orientado a la gestión de los viajes en bus.",
      tecnologias: [],
      enlace: "",
      textoEnlace: "Ver proyecto"
    },
    {
      titulo: "Sistema para Pahuichi",
      estado: "Terminado",
      descripcion: "Sistema desarrollado para Pahuichi.",
      tecnologias: [],
      enlace: "",
      textoEnlace: "Ver proyecto"
    },
    {
      titulo: "Sistema de alquileres",
      estado: "Terminado",
      descripcion: "Sistema para registrar y controlar alquileres.",
      tecnologias: [],
      enlace: "",
      textoEnlace: "Ver proyecto"
    }
  ],

  /* ---------- Formación (de lo más reciente a lo más antiguo) ---------- */
  formacion: [
    {
      periodo: "[Año inicio] – [Año fin]",
      titulo: "Ingeniería de Sistemas",
      lugar: "Universidad Adventista de Bolivia",
      detalle: "Trabajo dirigido: sistema web de administración para la Dirección General de Investigación."
    },
    {
      periodo: "2018",
      titulo: "Concursos de robótica",
      lugar: "Universidad Adventista de Bolivia e Instituto Tecnológico Sacaba",
      detalle: "Participación en el concurso de robótica BITBOT y en el 1.er Concurso de Robótica."
    },
    {
      periodo: "2018",
      titulo: "Cursos y eventos académicos",
      lugar: "Cochabamba, Bolivia",
      detalle: "Festival de Instalación de Software, II Encuentro de Gestores de Excelencia, Estrategias Metodológicas en la Enseñanza y Gobierno Electrónico en Bolivia y su Impacto en la Sociedad."
    },
    {
      periodo: "2017",
      titulo: "Bachiller en Humanidades",
      lugar: "Universidad Adventista de Bolivia",
      detalle: ""
    }
  ],

  /* ---------- Contacto ----------
     Si un campo queda vacío "", no se muestra.
     Este correo será público cuando publiques el sitio. */
  contacto: {
    texto: "¿Tienes un proyecto o una idea? Escríbeme y conversamos.",
    correo: "mauriciochoquebernal@gmail.com",
    github: "",        /* ej. "https://github.com/tu-usuario" */
    linkedin: "",      /* ej. "https://www.linkedin.com/in/tu-usuario" */
    whatsapp: ""       /* solo números con código de país, ej. "59170000000" */
  },

  /* ---------- Pie de página ---------- */
  pie: "Hecho con HTML5, CSS3 y JavaScript."
};