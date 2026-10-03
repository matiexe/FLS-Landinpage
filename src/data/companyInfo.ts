export interface CompanyInfo {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  address: {
    street: string;
    city: string;
    province: string;
    zipCode: string;
    country: string;
  };
  officeHours: {
    weekdays: string;
    saturday: string;
    emergency: string;
  };
  matricula: string;
  socials: {
    instagram: string;
    linkedin: string;
    facebook: string;
  };
}

export const companyInfo: CompanyInfo = {
  name: "FLS Seguros",
  tagline: "Productor Asesor de Seguros | Solidez, Respaldo y Confianza",
  heroHeadline: "Cotizá tu seguro en 5 minutos",
  heroSubheadline: "Asesoramiento profesional e independiente con el respaldo de las compañías aseguradoras líderes del país.",
  phone: "+54 11 5555 4321",
  phoneDisplay: "(011) 5555-4321",
  whatsappNumber: "5491155554321",
  whatsappMessage: "Hola! Me comunico desde la web y quisiera recibir asesoramiento para cotizar un seguro.",
  email: "contacto@flsseguros.com.ar",
  address: {
    street: "Sarmiento 268",
    city: "Río Gallegos",
    province: "Santa Cruz",
    zipCode: "Z9400",
    country: "Argentina"
  },
  officeHours: {
    weekdays: "Lunes a Viernes de 09:00 a 18:00 hs",
    saturday: "Sábados de 09:30 a 13:00 hs (Guardia)",
    emergency: "Línea de Siniestros y Urgencias: 24/7"
  },
  matricula: "Matrícula SSN Nº 89.412 - Superintendencia de Seguros de la Nación",
  socials: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com"
  }
};
