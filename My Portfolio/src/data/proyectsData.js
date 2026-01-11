import { Cloudinary } from "@cloudinary/url-gen";
const cld = new Cloudinary({cloud: {cloudName: "dhn7thh3k"}})

export const proyects = [
  {
    /* titleProyect: "Little Paws",
    descriptionProyect: `es una plataforma en la cual
            se publican mascotas en situación de calle, para que las puedan
            adoptar. Cuenta con un apartado de e-shop, donde se encuentran
            productos para las mascotas, entre otros. Los usuarios tienen la
            posibilidad de registrarse o iniciar sesión, pueden editar su perfil
            y ver su historial, tanto de compras, como adopciones y sus
            publicaciones de mascotas. Los administradores poseen un dashboard
            para tener un control preciso de la plataforma, donde pueden agregar
            productos, bannear usuarios, bloquear publicaciones, entre otras
            cosas .`,
    imgArr: [
      "Pf_screenshot_ufh7lk",
      "Pf_screenshot_2_hzjrgw",
      "Pf_screenshot_3_afbymd",
      "Pf_screenshot_4_ccls13",
      "Pf_screenshot_5_mgsvge",
      "Pf_screenshot_6_pyf62p",
      "Pf_screenshot_7_sr1ugn",
      "Pf_screenshot_8_uq8ika",
      "Pf_screenshot_9_aupv0m",
      "Pf_screenshot_10_fndaqi",
      "Pf_screenshot_11_awflm8",
      "Pf_screenshot_12_ig5nkb",
      "Pf_screenshot_13_belqen",
    ].map((img)=> cld.image(img).format('auto').quality('auto')),
    linkProyect: "https://proyecto-final-pf.vercel.app/",
    repoProyect: "https://github.com/gitperalta/proyecto-final-pf",
    typeProyect: "PROYECTO ACADÉMICO GRUPAL",
  }, */
    titleProyect: "Henry Food",
    descriptionProyect: `es una aplicación para ver
    recetas de comidas. Las recetas se pueden filtrar por tipos de
    dietas, ordenar de manera ascendente y descendente, tanto
    alfabeticamente como por puntaje de salud, otras de las
    funcionalidades, es que podemos buscar las recetas por su nombre,
    ingresando el mismo en el buscador que se encuentra en la barra de
    navegación. Tambien se pueden publicar recetas mediante un
    formulario controlado.`,
    imgArr: [
      "PI_screenshot_2_xlqmyx",
      "PI_screenshot_o2uoiz",
      "PI_screenshot_3_bbpwj5",
      "PI_screenshot_4_dw8rpt",
    ].map((img)=> cld.image(img).format('auto').quality('auto')),
    linkProyect: "https://henry-food-one.vercel.app/",
    repoProyect: "https://github.com/EzeGomez0407/Proyecto-Individual-",
    typeProyect: "PROYECTO ACADÉMICO INDIVIDUAL",
  },
  {
    titleProyect: "App ToDo",
    descriptionProyect: `es una aplicación sencilla y práctica, desarrollada con el propósito de poner en práctica mis conocimientos en programación. Agrega tareas a la lista con su respectiva descripción, ajusta el tiempo que te vas a tomar para realizarla, marca como completadas tus tareas existentes o elimina tareas no deseadas. Las tareas quedan guardadas en el localstorage, los usuarios son almacenados en una base de datos MySQL, las contraseñas son hasheadas para que nadie pueda acceder a sus cuentas. Todavía sigue en desarrollo, faltan algunas funciones por añadir.`,
    imgArr: [
      "img-app-todo-1_x4kewk",
      "img-app-todo-2_eqpgch",
      "img-app-todo-3_fqldha",
      "img-app-todo-4_q3wma0",
      "img-app-todo-5_mwcsaj",
    ].map((img)=> cld.image(img).format('auto').quality('auto')),
    linkProyect: "https://app-to-do-sigma.vercel.app/",
    repoProyect: "https://github.com/EzeGomez0407/App-To-Do",
    typeProyect: "PROYECTO PERSONAL (EN DESARROLLO)",
  },
];
