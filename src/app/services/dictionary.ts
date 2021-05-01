const words = {
    'trabajos': {
        'es': 'Trabajos',
        'en': 'Stories'
    },
    'about-me':{
        'es': '<p class="mt-4">Periodista venezolana radicada en New York, especializada en medios digitales y con cinco años de experiencia en temas de salud, género y migración.</p> <p>He enfocado mi trabajo en explorar la relación del periodismo y la tecnología, buscando siempre pensar en nuevas narrativas y formatos para contar una historia. Actualmente trabajo como Subeditora en español para la Red Global de Periodismo de Investigación (GIJN), desde donde me encargo de impulsar el periodismo de investigación y de datos en la región y generar y divulgar oportunidades de crecimiento para periodistas hispanoparlantes. </p> <p>También pertenezco al equipo digital de La Tercera, desde donde busco el desarrollo de nuevos productos y la mejora de los ya existentes y hacer crecer el programa de suscriptores, además de colaborar como reportera. Durante los últimos años he publicado temas de salud y migración en Efecto Cocuyo, Cinco 8, Distintas Latitudes, Caracas Chronicles, La Tercera y Salud con Lupa. </p> <p>Estudié Periodismo de investigación gracias a una alianza de la Columbia University (USA) y la Universidad Diego Portales (Chile) en 2020 y un diplomado en Escritura narrativa de no ficción en la Universidad Alberto Hurtado (Chile - 2017). Me licencié en Comunicación Social en la Universidad Bicentenaria de Aragua (Venezuela - 2016), y estudié desarrollo web becada por la fundación Desafío Latam. Fui parte de la tercera generación de la Red Latam de Jóvenes Periodistas (2019). </p> <p class="mb-4">Mi proyecto personal es un boletín sobre tendencias en el mundo del periodismo que se envía cada dos semanas y tiene más de 700 suscriptores.</p>',
        'en': '<p class="mt-4">Venezuelan journalist based in New York, specialized in digital media and with five years of experience in health, gender and migration issues.</p> <p>I have focused my work on exploring the relationship between journalism and technology, always seeking to think of new narratives and formats to tell a story. I currently work as a Sub-Editor in Spanish for the Global Investigative Journalism Network (GIJN), from where I am in charge of promoting investigative and data journalism in the region and generating and disseminating growth opportunities for Spanish-speaking journalists. </p> <p>I also belong to the digital team of La Tercera, Chilean news outlet, from where I seek the development of new products and the improvement of existing ones and help the subscriber program grow, in addition to collaborating as a reporter. During the last years I have published health and migration topics in Efecto Cocuyo, Cinco 8, Distintas Latitudes, Caracas Chronicles, La Tercera and Salud con Lupa.</p> <p>I studied Investigative Journalism thanks to an alliance of Columbia University (USA) and Diego Portales University (Chile) in 2020 and a diploma in Nonfiction Narrative Writing from Alberto Hurtado University (Chile - 2017). I graduated in Social Communication at the Bicentennial University of Aragua (Venezuela - 2016), and studied web development with a scholarship from the Desafío Latam foundation. I was part of the third generation of the Latam Network of Young Journalists (2019). </p> <p class="mb-4">My personal project is a newsletter on trends in the world of journalism that is sent every two weeks and has more than 700 subscribers.</p>'
    },
    'subscribe': {
        'es': 'Suscríbete',
        'en': 'Subscribe'
    },
    'previous-editions': {
        'es': 'Ediciones previas',
        'en': 'Previous editions'
    },
    'subscribe-header':{
        'es': 'Suscríbete a mi newsletter',
        'en': 'Subscribe to my newsletter'
    },
    'newsletter-info':{
        'es': 'Cada 15 días mando un newsletter sobre periodismo digital. Hablo sobre innovación, te cuento qué ha pasado en el mundo, paso noticias de redes sociales y de estrategias de medios y recomiendo iniciativas y herramientas. Suscríbete aquí',
        'en': 'Every 15 days I send out a newsletter about digital journalism. I talk about innovation, I tell you what has happened in the world, I share news from social networks and media strategies and recommend initiatives and tools. Subscribe here',

    },
    'required-field':{
        'es': 'Campo obligatorio',
        'en': 'Required field'
    },
    'email': {
        'es': 'Dirección de E-mail',
        'en': 'E-mail address'
    },
    'name': {
        'es': 'Nombre',
        'en': 'Name'
    },
    'last-name': {
        'es': 'Apellido',
        'en': 'Last name'
    },
    'subscribe-button': {
        'es': 'Suscribir',
        'en': 'Subscribe'
    }
}

const t = (lang, word) => {
    return words[word][lang];
}

export {t};