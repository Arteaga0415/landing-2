import { Blog } from "@/types/blog";
const date = new Date()
const year = date.getFullYear();
const MisionData: Blog[] = [
  {
    _id: 1,
    mainImage: "/imagenes/mac 1.jpg",
    title: "Misión",
    metadata:
      "Somos una empresa que se enfoca en soluciones tecnológicas aplicadas al sector corporativo, específicamente en la prestación de servicios de conectividad de alta velocidad Inalámbrica y energías renovables como la solar y eólica; Ofreciendo siempre a nuestros clientes una solución de tecnológica sólida y confiable.",
  },
  {
    _id: 2,
    mainImage: "/imagenes/mac 1.jpg",
    title: "Visión",
    metadata:
      `En el ${year} ser una empresa Innovadora, posicionada en los Llanos Orientales de Colombia, en la prestación de servicios de energias renovables, comunicaciones, infraestructura y capacitación; por medio de soluciones y desarrollos tecnológicos que sean adaptativos, evolutivos y dinámicos; que respondan a los cambios emergentes de sector, logrando estar a la vanguardia y así mejorar el desarrollo en la región.`,
  },
];

export default MisionData;
