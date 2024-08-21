// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: {
          "welcome": "Bienvenido",
          "changeLanguage": "Cambiar idioma"
        },
        header:{
            "planetaMiller": "Planeta Miller",
            "about":"Explicación",
            "home":"Inicio",
        },
        timer: {
            "tittle": "Tiempo desde el estreno de Interstellar",
            "dateRelease": "6 de Noviembre de 2014",
            "subtittleEarth": "Tiempo en la Tierra",
            "subtittleMiller": "Tiempo en el Planeta Miller",
            "years": "Años",
            "days": "Días",
            "hours": "Horas",
            "minutes": "Minutos",
            "seconds": "Segundos",
        },
        about: {
          "tittle":"Que es el planeta Miller?",
          "t1p1":"El Planeta Miller es un planeta ficticio que aparece en la película de ciencia ficción de 2014 Interstellar, dirigida por Christopher Nolan. En la película, el Planeta Miller es uno de los exoplanetas potencialmente habitables que la tripulación de la nave espacial Endurance viaja a explorar, como parte de una misión para encontrar un nuevo hogar para la humanidad después de que la Tierra se vuelva cada vez más inhabitable. Los detalles clave sobre el Planeta Miller en Interstellar son:",
          "t1p2":"- Orbita alrededor de uno de los agujeros negros del sistema Gargantua, un agujero negro supermasivo rodeado por otros agujeros negros más pequeños.",
          "t1p3":"- La superficie del planeta está cubierta por un vasto océano poco profundo, con fuerzas de marea extremadamente altas debido a los efectos gravitatorios de los agujeros negros cercanos.",
          "t1p4":"- Las fuerzas de las mareas crean enormes olas en la superficie del planeta, convirtiéndolo en un entorno extremadamente peligroso e inhóspito para la vida humana.",
          "t1p5":"- Cuando la tripulación del Endurance aterriza en el planeta, se topa con estos enormes maremotos y experimenta los efectos extremadamente dilatadores del tiempo al encontrarse tan cerca del agujero negro, ya que 1 hora en el planeta equivale a 7 años en la Tierra.",
          "t1p6":"En resumen, el Planeta Miller es un exoplaneta ficticio que aparece en Interstellar y que, aunque potencialmente habitable, presenta unas condiciones ambientales extremas que lo hacen impracticable para la colonización humana. Es un punto importante en la exploración de la dilatación temporal cerca de los agujeros negros.",
          "subtittle1":"Porque el tiempo de el planeta miller transcurre diferente a la tierra?",
          "s1p1":"Los efectos de dilatación del tiempo en el Planeta Miller en la película Interstellar se deben a la extrema dilatación gravitatoria del tiempo causada por el cercano agujero negro supermasivo. Según la teoría de la relatividad general, el paso del tiempo se ve afectado por la presencia de campos gravitatorios intensos. Cuanto más cerca se está de un objeto masivo como un agujero negro, más lento transcurre el tiempo en relación con un observador situado en un campo gravitatorio más débil. En el Planeta Miller, que orbita muy cerca del horizonte de sucesos del agujero negro, la dilatación gravitatoria del tiempo es extrema. Por cada hora que pasa en Miller, transcurren varios años terrestres en las naves espaciales que orbitan más lejos. Esta es la razón por la que los personajes de Interstellar experimentan una diferencia de tiempo tan enorme cuando visitan el planeta de Miller. El factor específico de dilatación temporal nunca se indica explícitamente en la película, pero basándose en las dramáticas diferencias en el paso del tiempo, se da a entender que es del orden de miles a millones de veces más lento en Miller en comparación con la Tierra. Esta dilatación temporal extrema es un recurso argumental clave que crea el dilema de alto riesgo al que se enfrentan los personajes en la película.",
          "subtittle2":"Interstellar",
          "s2p1":"Interstellar es una película de ciencia ficción dirigida por Christopher Nolan y estrenada en 2014. Ambientada en un futuro distópico en el que la plaga y la sequía han devastado gran parte de los cultivos y el medio ambiente de la Tierra, la película sigue al ex piloto e ingeniero de la NASA Cooper, interpretado por Matthew McConaughey. Cooper es reclutado, junto con un equipo de científicos, para embarcarse en una peligrosa misión a través de un agujero de gusano recién descubierto en busca de planetas potencialmente habitables que puedan sustentar a la humanidad. A medida que se adentran en lo desconocido, la tripulación se topa con efectos gravitatorios extremos que provocan una grave dilatación del tiempo, que pasa de forma muy distinta en los planetas que visitan que en la Tierra. Esta dilatación temporal crea un dilema emocional y ético para Cooper, que debe enfrentarse a las consecuencias de su misión y a la posible pérdida de un tiempo precioso con su hija Murph, interpretada por Mackenzie Foy y Jessica Chastain.",
          "s2p2":"Interstellar mezcla ciencia dura, con referencias a la física cuántica y a las teorías del prestigioso físico Kip Thorne, con un drama familiar intimista. Los ambiciosos efectos visuales de la película, en particular la representación de un agujero negro supermasivo, fueron muy elogiados, al igual que el núcleo emocional de la historia, centrado en los vínculos de Cooper con sus hijos. Interstellar se consideró una adición audaz y cerebral al género de la ciencia ficción, al abordar temas de peso como el futuro de la humanidad, nuestra relación con la tecnología y el poder duradero del amor familiar frente a obstáculos inimaginables. La película fue un éxito comercial y de crítica, y consolidó la reputación de Christopher Nolan como uno de los cineastas más ambiciosos y reflexivos de su generación."
        },
        footer: {
            "desarrollado": "Desarrollado por",
            "github": "Github",
        }
      },
      en: {
        translation: {
          "welcome": "Welcome",
          "changeLanguage": "Change language"
        },
        header:{
            "planetaMiller": "Miller Planet",
            "about":"About it",
            "home":"Home"
        },
        timer: {
            "tittle": "Time since the release of Interstellar",
            "dateRelease": "6 November 2014",
            "subtittleEarth": "Time on Earth",
            "subtittleMiller": "Time on Miller Planet",
            "years": "Years",
            "days": "Days",
            "hours": "Hours",
            "minutes": "Minutes",
            "seconds": "Seconds",
        },
        about: {
          "tittle": "What is the Miller's Planet?",
          "t1p1":"The Miller Planet is a fictional planet that appears in the 2014 science fiction film Interstellar, directed by Christopher Nolan. In the film, the Miller Planet is one of the potentially habitable exoplanets that the crew of the Endurance spacecraft travels to explore, as part of a mission to find a new home for humanity after Earth becomes increasingly uninhabitable. The key details about the Miller Planet in Interstellar are:",
          "t1p2":"- It orbits one of the black holes in the Gargantua system, a supermassive black hole surrounded by several other smaller black holes.",
          "t1p3":"- The planet's surface is covered by a vast, shallow ocean, with extremely high tidal forces due to the gravitational effects of the nearby black holes.",
          "t1p4":"- The tidal forces create massive, towering waves on the planet's surface, making it an extremely dangerous and inhospitable environment for human habitation.",
          "t1p5":"- When the Endurance crew lands on the planet, they encounter these massive tidal waves and experience the extremely time-dilating effects of being so close to the black hole, with 1 hour on the planet equating to 7 years back on Earth.",
          "t1p6":"So in summary, the Miller Planet is a fictional exoplanet featured in Interstellar that, while potentially habitable, has extreme environmental conditions that make it impractical for human colonization. It serves as an important plot point in the film's exploration of time dilation near black holes.",
          "subtittle1":"Why does time on Planet Miller pass differently than on Earth?",
          "s1p1":"The time dilation effects on Planet Miller in the movie Interstellar are due to the extreme gravitational time dilation caused by the nearby supermassive black hole. According to the theory of general relativity, the passage of time is affected by the presence of strong gravitational fields. The closer you are to a massive object like a black hole, the slower time passes relative to an observer in a weaker gravitational field. On Planet Miller, which orbits very close to the event horizon of the black hole, the gravitational time dilation is extreme. For every hour that passes on Miller, several Earth years pass by on the spaceships orbiting farther away. This is why the characters in Interstellar experience such a massive difference in time when they visit Miller' planet. The specific time dilation factor is never explicitly stated in the movie, but based on the dramatic differences in time passage, it's implied to be on the order of thousands to millions of times slower on Miller compared to Earth. This extreme time dilation is a key plot device that creates the high-stakes dilemma the characters face in the movie.",
          "subtittle2":"Interstellar",
          "s2p1":"Interstellar is a sweeping science fiction film directed by Christopher Nolan, released in 2014. Set in a dystopian future where blight and drought have devastated much of Earth's crops and environment, the film follows former NASA pilot and engineer Cooper, played by Matthew McConaughey. Cooper is recruited, along with a team of scientists, to embark on a dangerous mission through a newly discovered wormhole in search of potentially habitable planets that could sustain humanity. As they venture deeper into the unknown, the crew encounters extreme gravitational effects that cause severe time dilation - with time passing vastly differently on the planets they visit compared to the passage of time back on Earth. This time dilation creates an emotional and ethical dilemma for Cooper, who must grapple with the consequences of his mission and the potential loss of precious time with his young daughter Murph, played by Mackenzie Foy and Jessica Chastain.",
          "s2p2":"Interstellar blends hard science, including references to quantum physics and the theories of renowned physicist Kip Thorne, with an intimate family drama. The film's ambitious visual effects, particularly the depiction of a supermassive black hole, were widely praised, as was the emotional core of the story centered on Cooper's bonds with his children. Interstellar was seen as a bold and cerebral addition to the science fiction genre, tackling weighty themes of humanity's future, our relationship with technology, and the enduring power of familial love in the face of unimaginable odds. The film was a critical and commercial success, further cementing Christopher Nolan's reputation as one of the most ambitious and thoughtful filmmakers of his generation."
        },
        footer: {
            "desarrollado": "Developed by",
            "github": "Github",
        }
      }
    },
    lng: "en", // idioma por defecto
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;