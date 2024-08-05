import { Blog } from "@/types/blog";

const BlogData: Blog[] = [
  {
    _id: 1,
    author: "Ingeniería y Telecomunicaciones",
    publishedAt: "July 30, 2023",
    mainImage: "/imagenes/ipv6-4.png",
    secondImage: "",
    thirdImage: "",
    title: "Como implementar IPV6 de forma segura.",
    metadata: "Según Stonesoft, muchas compañías han sufrido engaños sobre la complejidad que rodea la seguridad de IPv6. Así, la compañía está en disposición de ayudar tanto a las empresas privadas como a las públicas a implementar IPv6 de una forma segura y rentable.",
    body: `
      Según Stonesoft, muchas compañías han subestimado la complejidad que rodea la seguridad de IPv6. La compañía está dispuesta a ayudar tanto a empresas privadas como a entidades públicas a implementar IPv6 de una forma segura y rentable.
      Basándose en su experiencia en despliegues a gran escala, Stonesoft ofrece los siguientes consejos sobre seguridad en IPv6:
    `, 
    body1: `1. Moderniza tu red existente: Refresca tu red IPv4 eliminando elementos obsoletos y actualizándola completamente. Asegúrate de que cada aspecto de la red esté seguro y optimizado antes de migrar a IPv6.`,
    body2: `2. Planea una introducción gradual: Adopta una implementación gradual de IPv6, similar a la estrategia de las Administraciones Públicas, que han trabajado con este protocolo durante más de seis años. Aunque no necesitas avanzar tan lentamente como el gobierno, una transición gradual permitirá que el protocolo funcione correctamente con la infraestructura IPv4 existente y ayudará a mantener el presupuesto bajo control.`,
    body3: `3. Opta por el doble apilado: Implementa IPv6 en modo de doble pila, lo cual ofrece beneficios significativos aunque puede requerir actualizaciones en el router para cumplir con las demandas de memoria y potencia necesarias para soportar ambos protocolos simultáneamente.`,
    body4: `4. Cuida tus túneles: Trátalos con la misma precaución que a un enlace externo. Inspecciona cada fragmento de tráfico de túnel antes de permitir su entrada o salida del sistema`,
    body5: `5. Vigila a los usuarios maliciosos: Los atacantes ya se están infiltrando en IPv6. Presta atención a los anuncios de routers y los ataques de “hombre en el medio”.`,
    body6: `6. Adopta un firewall certificado: Verifica la compatibilidad con IPv6 mediante productos que hayan sido certificados por terceros. Esto garantiza que el firewall puede manejar adecuadamente el tráfico IPv6.`,
    body7: `7. Requiere autenticación: La autenticación es más crucial y accesible que nunca. Considera el uso de un proxy HTTP/HTTPS para el acceso a Internet, reduciendo la amenaza de terceros no deseados.`,
    body8: `8. Familiarízate con la sintaxis de IPv6: Conocer la sintaxis facilitará la gestión de brechas de seguridad y la implementación de medidas necesarias. Existen abundantes recursos y guías, incluyendo una de 188 páginas del gobierno de EE.UU.`,
    body9: `9. Desactiva IPv6 cuando no se use: Asegúrate de que IPv6 solo esté activo cuando se necesite, ya que muchos programas lo tienen habilitado por defecto. Instalar mecanismos para deshabilitar IPv6 ampliamente puede ser una inversión valiosa.`,
    body10: `10. Aprende a eliminar amenazas: Aunque gran parte de tu red tenga IPv6 deshabilitado, aún puedes enfrentar amenazas. Conocer la sintaxis de IPv6 es crucial para implantar firewalls y filtros de tráfico efectivos, permitiendo el acceso solo a lo necesario y bloqueando lo indeseado.`,
  },
  {
    _id: 2,
    mainImage: "/imagenes/mac 3.jpg",
    secondImage: "",
    thirdImage: "",
    author: "Ingeniería y Telecomunicaciones",
    publishedAt: "Julio 6, 2019",
    title: "Patton y Unify colaboran en llevar las Comunicaciones Unificadas a las Pymes",
    metadata: "En concreto, Patton y Unify han trabajado conjuntamente en la creación de SmartNode OpenScape Business Appliance (SN-OBP), un dispositivo único de Comunicaciones Unificadas diseñada para empresas de hasta 1000 trabajadores que es fácil y rápida de implementar por pequeñas compañías.",
    body: `Patton y Unify han colaborado en la creación del SmartNode OpenScape Business Appliance (SN-OBP), un dispositivo único de Comunicaciones Unificadas diseñado para empresas de hasta 1000 empleados, que es fácil y rápido de implementar, incluso para pequeñas compañías.`,
    body1: `Aunque muchas empresas son reacias a adoptar Comunicaciones Unificadas, Patton y Unify ofrecen una solución que facilita la transición a soluciones All-IP, permitiendo a las pymes aprovechar todos los beneficios de esta tendencia en comunicaciones.`,
    body2: `El dispositivo SN-OBP combina la tecnología VoIP Gateway y el hardware de Patton con el software de Comunicaciones Unificadas OpenScape Business S de Unify. Esta solución ofrece una UC de última generación a un precio asequible en un solo dispositivo. OpenScape S Business fusiona las mejores características de HiPath 3000 y OpenScape Office, y es compatible con los teléfonos IP OpenStage.`,
    body3: `A diferencia de otros dispositivos de UC en el mercado, el SN-OBP incluye interfaces de telefonía tradicionales (PRI, BRI, FXS y FXO) que permiten conectar dispositivos antiguos con los servicios All-IP de UCC. Además, soporta plataformas SIP, TDM y SIP con TDM o SIP Dual Survivability, garantizando interoperabilidad segura y fiable entre todos los sistemas gracias a la calidad de SmartNode.`,
    body4: `La solución UCC de Patton y Unify se basa en la plataforma de hardware SmartNode Open Gateway Appliance (SNOGA). Este sistema, integrado en el SmartNode VoIP Gateway, es altamente interoperable, capaz de conectar cualquier dispositivo analógico existente, PBX, PBX Digital o sistema telefónico DECT con todos los dispositivos y servicios basados en SIP y UCC.`,
    body5: `Para empresas que ya utilizan OpenScape pero requieren una solución VoIP Gateway, Unify ha certificado todas las puertas de enlace SmartNode VoIP de Patton, dispositivos de acceso integrado (IAD) y Enterprise Session Border Controller (E-SBC) para garantizar la interoperabilidad con su software OpenScape Business. Más información en www.patton.com y www.unify.com/es.`,
  },
  {
    _id: 3,
    mainImage: "/imagenes/enlace-3.jpg",
    secondImage: "",
    thirdImage: "",
    author: "Ingeniería y Telecomunicaciones",
    publishedAt: "Marzo 11, 2017",
    title: "Operaciones Mediante Enlaces Punto a Punto (Asignación de espectro para SHF)",
    metadata:
      "El Ministerio de Tecnologías de la Información y las Comunicaciones informa sobre la publicación de la Resolución 1810 del 15 de agosto de 2012, “Por medio de la cual se declara abierto el procedimiento de selección objetiva número 002 de 2012 para otorgar permisos para el uso del espectro radioeléctrico para los servicios fijos y móviles terrestres, en la banda de SHF en los segmentos atribuidos a los servicios fijos radioeléctricos para su operación mediante enlaces punto a punto en el rango de 3.6 GHz a 23 GHz, de conformidad con el Cuadro Nacional de Atribución de Bandas de Frecuencias – CNABF",
    body: `
      El Ministerio de Tecnologías de la Información y las Comunicaciones informa sobre la publicación de la Resolución 1810 del 15 de agosto de 2012, “Por medio de la cual se declara abierto el procedimiento de selección objetiva número 002 de 2012 para otorgar permisos para el uso del espectro radioeléctrico para los servicios fijos y móviles terrestres, en la banda de SHF en los segmentos atribuidos a los servicios fijos radioeléctricos para su operación mediante enlaces punto a punto en el rango de 3.6 GHz a 23 GHz, de conformidad con el Cuadro Nacional de Atribución de Bandas de Frecuencias – CNABF”.
    `,
    body1: `La Resolución establece el cronograma para cada una de las etapas del procedimiento. Las solicitudes para el otorgamiento de permisos para el uso del espectro radioeléctrico se podrán presentar hasta las 4:30 p.m. del 28 de septiembre de 2012 en el Punto de Atención al Ciudadano y al Operador (PACO), ubicado en el primer piso del Ministerio (Carrera 8 entre calles 12a y 12b, Edificio Murillo Toro), o a través del correo electrónico seleccionobjetivaespectro@mintic.gov.co.`,
    body2: `El trámite de presentación, condiciones y requisitos de las solicitudes y sus anexos se regirá por las reglas establecidas en las Resoluciones 2118 de 2011, 1588 y 1810 de 2012.`,
    body3: `Se recuerda a los solicitantes que quienes resulten seleccionados para ser titulares del permiso para el uso del espectro radioeléctrico en este proceso deberán estar inscritos o contar con el Registro TIC al momento de expedir la resolución de asignación, proceso que se realiza en línea en el portal web www.mintic.gov.co, adjuntando la documentación correspondiente.`,
  },
  {
    _id: 4,
    mainImage: "/imagenes/solar-energy-4.jpg",
    secondImage: "",
    thirdImage: "",
    author: "Ingeniería y Telecomunicaciones",
    publishedAt: "Febrero 30, 2021",
    title: "Beneficios de La Energía Solar",
    metadata: "La energía solar renovable es una solución eficaz y sostenible que está revolucionando la forma en que obtenemos energía. Su adopción ofrece múltiples beneficios tanto a nivel ambiental como financiero, permitiendo un futuro más limpio y económico para todos.",
    body: `
      La energía solar renovable es una solución eficaz y sostenible que está revolucionando la forma en que obtenemos energía. Su adopción ofrece múltiples beneficios tanto a nivel ambiental como financiero, permitiendo un futuro más limpio y económico para todos.
    `,
    body1: `El uso de paneles solares para la generación de electricidad reduce significativamente las emisiones de gases de efecto invernadero, contribuyendo a la mitigación del cambio climático. La energía solar no produce contaminación del aire ni del agua, lo que ayuda a preservar los ecosistemas y la salud pública.`,
    body2: `Además de los beneficios ambientales, la energía solar ofrece importantes ventajas económicas. La instalación de sistemas de energía solar puede resultar en ahorros sustanciales en las facturas de electricidad a largo plazo, dado que la energía solar es gratuita y abundante. Los costos iniciales de instalación se recuperan a lo largo de los años mediante la reducción de los gastos en energía.`,
    body3: `Los avances tecnológicos en la fabricación de paneles solares han llevado a una disminución significativa en los costos de producción, haciendo que la energía solar sea más accesible para hogares y empresas. Las políticas gubernamentales de incentivos fiscales y subvenciones también han fomentado la adopción de sistemas solares, haciendo que la transición sea más asequible para todos.`,
    body4: `La energía solar también proporciona independencia energética, reduciendo la dependencia de combustibles fósiles y fuentes de energía extranjeras. Esto no solo mejora la seguridad energética, sino que también puede proteger contra las fluctuaciones de precios en los mercados de energía tradicionales.`,
    body5: `Las instalaciones solares pueden generar empleos locales en la fabricación, instalación y mantenimiento de sistemas solares, impulsando el crecimiento económico y el desarrollo comunitario. Esto es especialmente beneficioso en áreas rurales y remotas, donde otras oportunidades de empleo pueden ser limitadas.`,
    body6: `El uso de la energía solar también puede aumentar el valor de las propiedades, ya que los compradores reconocen el ahorro a largo plazo y el impacto positivo en el medio ambiente. Los edificios con sistemas de energía solar pueden disfrutar de un mayor atractivo en el mercado inmobiliario.`,
    body7: `Las soluciones de energía solar a gran escala, como las plantas solares, pueden proporcionar una fuente de energía fiable y constante para grandes comunidades, disminuyendo la necesidad de construir nuevas plantas de energía basadas en combustibles fósiles.`,
    body8: `Los sistemas de almacenamiento de energía, como las baterías solares, permiten almacenar el exceso de energía generado durante el día para su uso durante la noche o en días nublados, mejorando la fiabilidad y la eficiencia de los sistemas solares.`,
    body9: `El mantenimiento de los sistemas solares es relativamente bajo, ya que los paneles solares tienen una larga vida útil y requieren poco más que limpieza y verificaciones periódicas para garantizar un rendimiento óptimo.`,
    body10: `Finalmente, la adopción de la energía solar es un paso crucial hacia un futuro sostenible y limpio, donde la energía renovable desempeña un papel central en la reducción de nuestra huella de carbono y la protección del planeta para las generaciones futuras.`,
  },
  {
    _id: 5,
    mainImage: "/imagenes/wind-energy-4.jpg",
    secondImage: "",
    thirdImage: "",
    author: "Ingeniería y Telecomunicaciones",
    publishedAt: "Marzo 5, 2021",
    title: "La Energia Eolica",
    metadata: "La energía eólica es una fuente de energía renovable que está ganando popularidad debido a sus numerosos beneficios ambientales y financieros. Esta tecnología aprovecha la fuerza del viento para generar electricidad, contribuyendo a un futuro más sostenible y económico.",
    body: `
      La energía eólica es una fuente de energía renovable que está ganando popularidad debido a sus numerosos beneficios ambientales y financieros. Esta tecnología aprovecha la fuerza del viento para generar electricidad, contribuyendo a un futuro más sostenible y económico.
  `,
    body1: `La generación de energía eólica no produce emisiones de gases de efecto invernadero, lo que ayuda a combatir el cambio climático y reduce la contaminación del aire. Al no depender de combustibles fósiles, la energía eólica contribuye a la reducción de la contaminación y mejora la calidad del aire, beneficiando la salud pública y los ecosistemas.`,
    body2: `Económicamente, la energía eólica ofrece ventajas significativas. La inversión inicial en la instalación de aerogeneradores puede ser elevada, pero los costos operativos son relativamente bajos. La energía del viento es gratuita y abundante, lo que permite recuperar la inversión a lo largo del tiempo mediante la reducción de las facturas de electricidad.`,
    body3: `La tecnología de energía eólica ha avanzado considerablemente, disminuyendo los costos de producción y haciendo que los aerogeneradores sean más eficientes y accesibles. Las políticas gubernamentales, como incentivos fiscales y subvenciones, han facilitado la adopción de esta tecnología tanto para empresas como para particulares.`,
    body4: `La energía eólica también proporciona independencia energética, reduciendo la dependencia de combustibles fósiles y fuentes de energía extranjeras. Esto mejora la seguridad energética y protege contra las fluctuaciones de precios en los mercados de energía tradicionales.`,
    body5: `Las instalaciones de energía eólica pueden generar empleo local en la fabricación, instalación y mantenimiento de aerogeneradores, impulsando el crecimiento económico y el desarrollo comunitario. Esto es especialmente beneficioso en áreas rurales y costeras, donde otras oportunidades de empleo pueden ser limitadas.`,
    body6: `El uso de energía eólica puede aumentar el valor de las propiedades cercanas a las instalaciones de aerogeneradores, ya que los compradores valoran la reducción de costos energéticos a largo plazo y el impacto positivo en el medio ambiente.`,
    body7: `Las soluciones de energía eólica a gran escala, como los parques eólicos, pueden proporcionar una fuente de energía fiable y constante para grandes comunidades, disminuyendo la necesidad de construir nuevas plantas de energía basadas en combustibles fósiles.`,
    body8: `Los sistemas de almacenamiento de energía, como las baterías, permiten almacenar el exceso de energía generada durante periodos de alta producción eólica para su uso durante periodos de baja producción, mejorando la fiabilidad y la eficiencia de los sistemas eólicos.`,
    body9: `El mantenimiento de los aerogeneradores es relativamente bajo, ya que tienen una larga vida útil y requieren inspecciones periódicas y mantenimiento básico para garantizar un rendimiento óptimo.`,
    body10: `Finalmente, la adopción de la energía eólica es un paso crucial hacia un futuro sostenible y limpio, donde la energía renovable desempeña un papel central en la reducción de nuestra huella de carbono y la protección del planeta para las generaciones futuras.`,
  },
  {
    _id: 6,
    mainImage: "/imagenes/ipv6-2.jpg",
    secondImage: "",
    thirdImage: "",
    author: "Ingeniería y Telecomunicaciones",
    publishedAt: "Agosto 13, 2016",
    title: "IPv6 se toma el Llano Colombiano!",
    metadata: "IPv6 estará presente en las instalaciones de la Cámara de Comercio de Villavicencio, junto a expertos nacionales e internacionales, el Presidente del IPv6 Forum Council Colombia y el Gerente de Ingeniería e Informática E.A.T (INGERNET), para inaugurar la Academia de Formación y Certificación IPv6. Esta academia orientará los procesos de adopción de esta tecnología y ofrecerá capacitación internacional certificada por el IPv6 Forum a todas las empresas y personal del área TIC en la región.",
    body: `
      IPv6 estará presente en las instalaciones de la Cámara de Comercio de Villavicencio, junto a expertos nacionales e internacionales, el Presidente del IPv6 Forum Council Colombia y el Gerente de Ingeniería e Informática E.A.T (INGERNET), para inaugurar la Academia de Formación y Certificación IPv6. Esta academia orientará los procesos de adopción de esta tecnología y ofrecerá capacitación internacional certificada por el IPv6 Forum a todas las empresas y personal del área TIC en la región.
    `,
    body1: `En este magno evento se abordarán temas como el Internet de las cosas, metodologías y estado de la adopción de IPv6, mitos sobre la adopción, aplicaciones de IPv6, políticas gubernamentales y el plan de carrera del IPv6 Forum. Los asistentes recibirán información relevante sobre cómo llevar a cabo el proceso de transición a IPv6 y obtener sus certificaciones.`,
    body2: `El evento contará con la participación del Ministerio de Tecnologías de la Información y las Comunicaciones (TIC), Lacnic, Academia IPv6 Forum Colombia, IPv6 Technology SAS, IPv6 Forum Council Colombia e INGERNET, entidades que lideran el desarrollo de esta tecnología en LATAM y el Caribe.`,
  },
];

export default BlogData;
