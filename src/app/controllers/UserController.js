import Mail from '../lib/Mail';
export default {
    async store(req,res)
    {
        const { name , email, password } = req.body;

        const user = {
            name,
            email,
            password
        }
        await Mail.sendMail({
            from: 'Teste de Fila <brunomestres@gmail.com>',
            to:`${name} <${email}>`,
            subject: 'Cadasro de usuario',
            html:`Hello world ${name} :D`
        });
        return res.json(user);
    }
}