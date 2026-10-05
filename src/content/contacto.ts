// El número de WhatsApp: PUBLIC_WHATSAPP lo puede cambiar; si no está cargado (por ejemplo en Vercel), va el de Roda.
export const WHATSAPP: string = import.meta.env.PUBLIC_WHATSAPP || '5491150403408';
// El mail sale de PUBLIC_MAIL. PENDIENTE (Giuli/Facu): crearlo. Mientras esté vacío, la web muestra el formulario de contacto.
// Ojo: roda.studio es de otro estudio ("Roda Studio"), no usar ese dominio.
export const MAIL: string = import.meta.env.PUBLIC_MAIL ?? '';
export const INSTAGRAM = 'roda.development';
