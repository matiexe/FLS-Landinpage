export interface InsurerItem {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  foundedYear: string;
  strengths: string[];
  color: string;
  bgLight: string;
  logoSvg: string;
}

export const insurers: InsurerItem[] = [
  {
    id: "federacion-patronal",
    name: "Federación Patronal",
    shortName: "Fed. Patronal",
    tagline: "Nº 1 en situación financiera y solvencia del mercado argentino.",
    foundedYear: "1921",
    strengths: ["Líder en autos y motos", "Respuesta inmediata en siniestros", "Red de talleres certificados"],
    color: "#034EA2",
    bgLight: "bg-blue-50 text-blue-900 border-blue-200",
    logoSvg: "fed-patronal"
  },
  {
    id: "san-cristobal",
    name: "San Cristóbal Seguros",
    shortName: "San Cristóbal",
    tagline: "Más de 80 años de solidez patrimonial y vocación de servicio.",
    foundedYear: "1939",
    strengths: ["Amplia red de sucursales", "Auxilio mecánico ágil 24/7", "App de autogestión completa"],
    color: "#E2001A",
    bgLight: "bg-red-50 text-red-900 border-red-200",
    logoSvg: "san-cristobal"
  },
  {
    id: "la-segunda",
    name: "La Segunda Seguros",
    shortName: "La Segunda",
    tagline: "Un grupo asegurador federal comprometido con la tranquilidad de sus asegurados.",
    foundedYear: "1933",
    strengths: ["Líder en coberturas agro y hogar", "Solidez institucional", "Planes corporativos a medida"],
    color: "#005596",
    bgLight: "bg-cyan-50 text-cyan-900 border-cyan-200",
    logoSvg: "la-segunda"
  },
  {
    id: "zurich",
    name: "Zurich Seguros",
    shortName: "Zurich",
    tagline: "Líder global en seguros patrimoniales, vida y protección financiera.",
    foundedYear: "1872",
    strengths: ["Prestigio y estándares internacionales", "Especialistas en Vida y Retiro", "Coberturas de alta gama"],
    color: "#2167AE",
    bgLight: "bg-indigo-50 text-indigo-900 border-indigo-200",
    logoSvg: "zurich"
  }
];
