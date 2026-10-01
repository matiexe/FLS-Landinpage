export interface CoverageItem {
  id: string;
  title: string;
  shortDesc: string;
  category: "Personas" | "Patrimoniales" | "Empresas" | "Especiales";
  iconName: string;
  popular?: boolean;
}

export const coverages: CoverageItem[] = [
  {
    id: "auto",
    title: "Seguro Automotor",
    shortDesc: "Protección integral para tu auto: Responsabilidad Civil, Terceros Completo, Granizo y Todo Riesgo con franquicia.",
    category: "Patrimoniales",
    iconName: "Car",
    popular: true
  },
  {
    id: "moto",
    title: "Seguro de Moto",
    shortDesc: "Cobertura ante robo, incendio, destrucción total y responsabilidad civil para motovehículos particulares o comerciales.",
    category: "Patrimoniales",
    iconName: "Bike"
  },
  {
    id: "hogar",
    title: "Combinado Familiar / Hogar",
    shortDesc: "Tranquilidad para tu casa o departamento: incendio, robo de bienes, electrodomésticos, cristales y daños por agua.",
    category: "Patrimoniales",
    iconName: "Home",
    popular: true
  },
  {
    id: "vida",
    title: "Seguro de Vida",
    shortDesc: "Respaldo económico y seguridad financiera para vos y tu familia ante cualquier eventualidad o contingencia futura.",
    category: "Personas",
    iconName: "HeartPulse",
    popular: true
  },
  {
    id: "accidentes-personales",
    title: "Accidentes Personales (AP)",
    shortDesc: "Pólizas flexibles de 24 hs o ámbito laboral para profesionales independientes, contratistas y deportistas.",
    category: "Personas",
    iconName: "ShieldAlert"
  },
  {
    id: "art",
    title: "ART (Riesgos del Trabajo)",
    shortDesc: "Cumplimiento de la Ley 24.557 para proteger a tus colaboradores con cobertura médica inmediata e indemnizaciones.",
    category: "Empresas",
    iconName: "HardHat",
    popular: true
  },
  {
    id: "comercio",
    title: "Comercio e Industria",
    shortDesc: "Póliza multirriesgo diseñada a medida de locales comerciales, depósitos y plantas industriales ante incendio y robo.",
    category: "Empresas",
    iconName: "Store"
  },
  {
    id: "responsabilidad-civil",
    title: "Responsabilidad Civil",
    shortDesc: "Protección patrimonial frente a reclamos de terceros por daños involuntarios causados durante el ejercicio de tu actividad.",
    category: "Empresas",
    iconName: "Scale"
  },
  {
    id: "mala-praxis",
    title: "Mala Praxis Profesional",
    shortDesc: "Respaldo legal y financiero ante reclamos profesionales para médicos, odontólogos, abogados, contadores y arquitectos.",
    category: "Personas",
    iconName: "BriefcaseMedical"
  },
  {
    id: "consorcio",
    title: "Integral de Consorcio",
    shortDesc: "Cobertura obligatoria para edificios residenciales y de oficinas: incendio, cristales, calderas y ascensores.",
    category: "Empresas",
    iconName: "Building2"
  },
  {
    id: "transporte",
    title: "Transporte de Mercaderías",
    shortDesc: "Asegurá tu carga en tránsito terrestre, marítimo o aéreo frente a colisiones, vuelco, robo y pérdida de mercadería.",
    category: "Empresas",
    iconName: "Truck"
  },
  {
    id: "embarcaciones",
    title: "Embarcaciones de Placer",
    shortDesc: "Protección para lanchas, veleros, yates y motos de agua contra naufragio, varamiento, incendio y auxilio náutico.",
    category: "Especiales",
    iconName: "Anchor"
  },
  {
    id: "movilidad-urbana",
    title: "Movilidad Urbana (Bici/Monopatín)",
    shortDesc: "Seguridad contra robo y destrucción de bicicletas convencionales, e-bikes y monopatines eléctricos en vía pública.",
    category: "Patrimoniales",
    iconName: "Footprints"
  },
  {
    id: "tecnologia",
    title: "Equipos Electrónicos y Portátiles",
    shortDesc: "Cobertura para notebooks, smartphones, tablets y cámaras fotográficas ante robo y daños accidentales en todo el país.",
    category: "Patrimoniales",
    iconName: "Smartphone"
  },
  {
    id: "caucion",
    title: "Seguros de Caución",
    shortDesc: "Garantías ágiles para alquiler comercial o habitacional, cumplimiento de contratos y licitaciones de obra pública.",
    category: "Especiales",
    iconName: "FileCheck"
  },
  {
    id: "agro-retiro",
    title: "Agropecuario y Retiro",
    shortDesc: "Planes de capitalización para tu futuro y pólizas agropecuarias contra granizo, heladas y eventos climáticos para el campo.",
    category: "Especiales",
    iconName: "Wheat"
  }
];
