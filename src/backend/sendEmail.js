import emailjs from '@emailjs/browser'

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

if (PUBLIC_KEY) {
    emailjs.init(PUBLIC_KEY)
} else {
    console.error("EmailJS Public Key não encontrada. Verifique seu arquivo .env.")
}
export async function sendEmail (formData) {
    const templateParams = {
        ...formData,
        title: 'Nova Mensagem de Contato do Site',
        time: new Date().toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit', second:'2-digit'})

    }

    try{
        if (!SERVICE_ID || !TEMPLATE_ID){
            throw new Error('IDs de Serviço ou Template de EMAIL  não configurado.')

        }
        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            templateParams
        )
        return true
    } catch  (error){
        console.log('Falha ao enviar email:', error);
        return false
    }
}