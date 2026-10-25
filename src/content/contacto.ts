// Configuración de la web en un solo lugar: contactos, redes y datos para Google. El dominio está en astro.config.mjs (SITE_URL).
// El número de WhatsApp: PUBLIC_WHATSAPP lo puede cambiar; si no está cargado (por ejemplo en Cloudflare), va el de Roda.
export const WHATSAPP: string = import.meta.env.PUBLIC_WHATSAPP || '5491150403408';
// El mail: PUBLIC_MAIL lo puede cambiar; si no está cargado, va el de Roda. Vacío, la web muestra el formulario en su lugar.
// Ojo: roda.studio es de otro estudio ("Roda Studio"), no usar ese dominio.
export const MAIL: string = import.meta.env.PUBLIC_MAIL || 'hola@rodadevelop.com';

// Web3Forms: la clave con la que el formulario de contacto llega al mail de Roda. Es pública (está hecha para ir en la web).
export const WEB3FORMS: string = import.meta.env.PUBLIC_WEB3FORMS_KEY || '02020b3d-057d-436e-96dc-26ebde438d07';

// La agenda (Cal.com): la llamada de 30 minutos. PUBLIC_AGENDA la puede cambiar.
export const AGENDA: string = import.meta.env.PUBLIC_AGENDA || 'https://cal.com/roda-develop/30min';
export const INSTAGRAM = 'rodadevelop';

// Quiénes somos, para los datos que lee Google (schema.org)
export const FUNDADORES = ['Giuliana Di Rocco', 'Facundo Thibaut'];
// Verificación de Google Search Console (es pública: va en el HTML)
export const VERIFICACION_GOOGLE = '3tEIVGU7KAhx047kPRdxamCFTjkJUOXC69We-PIyEgw';
