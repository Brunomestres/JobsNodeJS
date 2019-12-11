import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    async handle({ data }){
        const { user } = data;

        await Mail.sendMail({
            from: 'Teste de Fila <brunomestres@gmail.com>',
            to:`${user.name} <${user.email}>`,
            subject: 'Cadasro de usuario',
            html:`Hello world ${user.name} :D`
        });
    }
}