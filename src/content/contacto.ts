// El número de WhatsApp sale de PUBLIC_WHATSAPP (ver .env.example). PENDIENTE (Giuli/Facu): cargar el real.
export const WHATSAPP: string = import.meta.env.PUBLIC_WHATSAPP ?? '';
// El mail sale de PUBLIC_MAIL. PENDIENTE (Giuli/Facu): crearlo. Mientras esté vacío, la web muestra el formulario de contacto.
// Ojo: roda.studio es de otro estudio ("Roda Studio"), no usar ese dominio.
export const MAIL: string = import.meta.env.PUBLIC_MAIL ?? '';
export const INSTAGRAM = 'roda.development';
