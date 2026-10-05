// El número de WhatsApp: PUBLIC_WHATSAPP lo puede cambiar; si no está cargado (por ejemplo en Vercel), va el de Roda.
export const WHATSAPP: string = import.meta.env.PUBLIC_WHATSAPP || '5491150403408';
// El mail: PUBLIC_MAIL lo puede cambiar; si no está cargado, va el de Roda. Vacío, la web muestra el formulario en su lugar.
// Ojo: roda.studio es de otro estudio ("Roda Studio"), no usar ese dominio.
export const MAIL: string = import.meta.env.PUBLIC_MAIL || 'rodadevelop@gmail.com';
export const INSTAGRAM = 'roda.development';
