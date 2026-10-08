import { ChurchConfig, ServiceSchedule, Ministry, Sermon, PrayerRequest } from '../types';

export const defaultChurchConfig: ChurchConfig = {
  name: "Vida con Propósito",
  affiliation: "Concilio General de las Asambleas de Dios",
  motto: "Una casa de fe, esperanza y restauración para toda la familia",
  verse: {
    text: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.",
    reference: "Jeremías 29:11"
  },
  pastors: "Pastores Principales David y Elizabeth Morales",
  address: "Av. Principal Los Olivos #450, Sector Central",
  city: "Ciudad y Región",
  phone: "+1 (555) 789-0123",
  whatsapp: "+15557890123",
  email: "contacto@vidaconpropositoad.org",
  youtubeChannel: "https://youtube.com",
  facebookPage: "https://facebook.com",
  instagram: "https://instagram.com",
  donationMethods: {
    accountName: "Iglesia Cristiana Vida con Propósito AD",
    bankName: "Banco Nacional / Entidad Bancaria",
    accountNumber: "0102-0987-6543-2109-8765",
    routingOrIban: "CLABE / IBAN / Código Swift",
    zelleOrBizum: "ofrendas@vidaconpropositoad.org",
    notes: "Indicar en el concepto: Diezmo, Ofrenda o Proyecto Misiones."
  }
};

export const serviceSchedules: ServiceSchedule[] = [
  {
    id: "domingo-celebracion",
    day: "Domingos",
    time: "10:00 AM",
    title: "Culto Principal de Celebración y Alabanza",
    description: "Tiempo congregacional de adoración vibrante, ministración de la Palabra de Dios y Escuela Bíblica para niños.",
    tag: "Principal",
    location: "Santuario Principal y Transmisión en Vivo"
  },
  {
    id: "domingo-tarde",
    day: "Domingos",
    time: "6:00 PM",
    title: "Culto Vespertino de Adoración y Avivamiento",
    description: "Una reunión llena de alabanza, comunión familiar y palabra inspiradora para comenzar la semana con bendición.",
    tag: "Familiar",
    location: "Santuario Principal"
  },
  {
    id: "miercoles-discipulado",
    day: "Miércoles",
    time: "7:30 PM",
    title: "Noche de Poder, Oración y Estudio Bíblico",
    description: "Profundizamos en las Sagradas Escrituras verso por verso, intercediendo por familias, salud y necesidades de la iglesia.",
    tag: "Discipulado",
    location: "Santuario y Salas de Oración"
  },
  {
    id: "sabado-jovenes",
    day: "Sábados",
    time: "6:30 PM",
    title: "Reunión de Jóvenes — Generación Propósito",
    description: "Comunidad juvenil dinámica, dinámicas, alabanza contemporánea y desafíos bíblicos para jóvenes y adolescentes.",
    tag: "Jóvenes",
    location: "Auditorio de Jóvenes"
  }
];

export const cardinalDoctrines = [
  {
    title: "La Salvación del Hombre",
    subtitle: "Jesucristo salva",
    verse: "Juan 3:16 & Romanos 10:9-10",
    description: "El único medio de salvación es a través del arrepentimiento de los pecados y la fe en Jesucristo, quien pagó por nosotros en la cruz del Calvario.",
    icon: "Cross"
  },
  {
    title: "El Bautismo en el Espíritu Santo",
    subtitle: "Jesucristo capacita con poder",
    verse: "Hechos 1:8 & Hechos 2:4",
    description: "Una experiencia distinta y posterior al nuevo nacimiento que capacita al creyente con denuedo y poder espiritual para el testimonio y ministerio cristiano.",
    icon: "Flame"
  },
  {
    title: "La Sanidad Divina",
    subtitle: "Jesucristo sana los cuerpos y almas",
    verse: "Isaías 53:4-5 & Santiago 5:14-15",
    description: "La liberación de enfermedades y aflicciones fue provista en la expiación de Cristo, y es el privilegio de todos los creyentes hoy.",
    icon: "HeartPulse"
  },
  {
    title: "La Segunda Venida de Cristo",
    subtitle: "La Esperanza Bienaventurada",
    verse: "1 Tesalonicenses 4:16-17 & Tito 2:13",
    description: "La resurrección de los que han muerto en Cristo y su arrebatamiento juntamente con los que estén vivos es la esperanza inminente de la Iglesia.",
    icon: "Sun"
  }
];

export const ministries: Ministry[] = [
  {
    id: "ninos",
    name: "Semillas del Reino",
    subtitle: "Ministerio Infantil (3 a 11 años)",
    description: "Un espacio seguro y divertido donde los más pequeños aprenden valores bíblicos, cantan alabanzas y descubren el amor de Jesús con maestros capacitados.",
    schedule: "Domingos durante los cultos de 10:00 AM",
    leader: "Hna. Raquel Fuentes & Equipo Infantil",
    ageGroup: "3 - 11 años",
    iconName: "Baby",
    accentColor: "amber"
  },
  {
    id: "jovenes",
    name: "Generación Propósito",
    subtitle: "Jóvenes y Universitarios (12 a 28 años)",
    description: "Una juventud apasionada por la presencia de Dios, construyendo amistades sanas, adoración sincera y proyectos de impacto en escuelas y universidades.",
    schedule: "Sábados a las 6:30 PM",
    leader: "Pastores de Jóvenes Joel y Karen Rivas",
    ageGroup: "12 - 28 años",
    iconName: "Sparkles",
    accentColor: "sky"
  },
  {
    id: "familias",
    name: "Hogares en Victoria",
    subtitle: "Matrimonios y Familias",
    description: "Talleres, retiros de parejas y consejería matrimonial basados en principios bíblicos para fortalecer los cimientos del hogar cristiano.",
    schedule: "2do y 4to Viernes del mes a las 7:30 PM",
    leader: "Diác. Andrés y Carmen Salcedo",
    ageGroup: "Parejas y Padres de familia",
    iconName: "Home",
    accentColor: "emerald"
  },
  {
    id: "damas",
    name: "Mujeres de Fe y Oración",
    subtitle: "Sociedad Femenil",
    description: "Unidas en intercesión constante, desayunos misioneros, apoyo comunitario y edificación espiritual mutua entre mujeres de todas las edades.",
    schedule: "Jueves a las 4:30 PM",
    leader: "Pastora Elizabeth Morales",
    ageGroup: "Damas y Madres",
    iconName: "Heart",
    accentColor: "rose"
  },
  {
    id: "varones",
    name: "Hombres de Honor",
    subtitle: "Ministerio de Varones",
    description: "Formando hombres íntegros como sacerdotes en el hogar, líderes en la comunidad y servidores comprometidos con la causa de Cristo.",
    schedule: "Primer Sábado de cada mes a las 8:00 AM",
    leader: "Pastor David Morales",
    ageGroup: "Varones y Jóvenes adultos",
    iconName: "Shield",
    accentColor: "indigo"
  },
  {
    id: "alabanza",
    name: "Kadosh Worship",
    subtitle: "Ministerio de Música y Alabanza",
    description: "Músicos y vocalistas consagrados a guiar al pueblo de Dios hacia una adoración genuina en espíritu y en verdad, con excelencia.",
    schedule: "Ensayos los Martes a las 7:00 PM",
    leader: "Dir. Daniel Navarro",
    ageGroup: "Convocatoria abierta por audición",
    iconName: "Music",
    accentColor: "purple"
  }
];

export const sampleSermons: Sermon[] = [
  {
    id: "sermon-1",
    title: "Caminando en el Propósito Eterno",
    speaker: "Pastor David Morales",
    date: "Último Domingo",
    passage: "Romanos 8:28",
    series: "Serie: Diseñados para Trascender",
    duration: "44 min",
    summary: "Descubre cómo Dios transforma cada prueba y circunstancia difícil en un instrumento divino para forjar nuestro carácter y cumplir su propósito supremo.",
    keyPoints: [
      "Las circunstancias no definen tu destino, las promesas de Dios sí.",
      "El llamado divino es inquebrantable a pesar de las caídas.",
      "Caminar en propósito requiere rendir nuestra voluntad cada día."
    ]
  },
  {
    id: "sermon-2",
    title: "Llenos del Espíritu para Vencer",
    speaker: "Pastora Elizabeth Morales",
    date: "Hace 1 semana",
    passage: "Hechos 1:8 & Efesios 5:18",
    series: "Serie: El Fuego de Pentecostés",
    duration: "38 min",
    summary: "La vida cristiana no se vive en fuerzas humanas sino bajo el poder vivificante del Espíritu Santo que sana, restaura y nos hace testigos valientes.",
    keyPoints: [
      "El Espíritu Santo es nuestro Consolador y Guía perpetuo.",
      "La llenura espiritual produce frutos visibles de amor, gozo y paz.",
      "Un corazón limpio es la morada donde el fuego de Dios permanece."
    ]
  },
  {
    id: "sermon-3",
    title: "Restauración Familiar en Tiempos de Crisis",
    speaker: "Pastor Invitado Carlos Mendoza",
    date: "Hace 2 semanas",
    passage: "Josué 24:15",
    series: "Serie: Hogares sobre la Roca",
    duration: "41 min",
    summary: "Herramientas bíblicas prácticas para sanar la comunicación entre esposos e hijos y levantar un altar de oración en el centro del hogar.",
    keyPoints: [
      "El perdón diario es el escudo de un matrimonio bendecido.",
      "Instruir a los hijos con el ejemplo antes que con meras palabras.",
      "La decisión voluntaria: Yo y mi casa serviremos a Jehová."
    ]
  }
];

export const initialPrayerRequests: PrayerRequest[] = [
  {
    id: "req-1",
    name: "Familia Gómez",
    isAnonymous: false,
    category: "salud",
    request: "Pedimos oración por sanidad de mi madre que se encuentra en recuperación quirúrgica. Confiamos plenamente en las llagas de Jesús.",
    date: "Ayer",
    prayingCount: 24
  },
  {
    id: "req-2",
    name: "Hermano en Cristo",
    isAnonymous: true,
    category: "finanzas",
    request: "Oración por una puerta de empleo digna y provisión para sustentar a mis tres pequeños hijos en este mes.",
    date: "Hace 2 días",
    prayingCount: 38
  },
  {
    id: "req-3",
    name: "Lorena M.",
    isAnonymous: false,
    category: "familia",
    request: "Por la restauración del corazón de mi hijo adolescente y para que regrese a los caminos de Dios con amor.",
    date: "Hace 3 días",
    prayingCount: 42
  },
  {
    id: "req-4",
    name: "Anónimo",
    isAnonymous: true,
    category: "espiritual",
    request: "Acción de gracias a Dios porque el médico confirmó que los resultados salieron limpios. ¡La gloria sea solo para el Señor!",
    date: "Hace 4 días",
    prayingCount: 56
  }
];
