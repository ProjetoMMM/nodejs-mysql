// Importar Usuário
const User = require('../models/User')

// Importar biblioteca para criptografar a senha
const bcrypt = require('bcryptjs')

// Funçoes para abrir rotas
module.exports = class AuthController{

    static cadastro(req, res) {
        res.render('auth/cadastro')
    }

    static async cadastroPost(req, res) {
        // pegando dados do POST vindo do front
        const {name, email, password, confirmpassword} = req.body

        if(password != confirmpassword){
            // talvez flash message para avisar
            res.render('auth/cadastro')

            return
        }

        // checar se já existe esse email cadastrado
        const checagem = await User.findOne({where: {email: email}})

        if(checagem) {
            // flash message pra avisar
            res.render('auth/cadastro')
        }

        // criar a senha criptografada
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const user = {
            name,
            email,
            password: hashedPassword
        }

        try{ 
            const novoUser = await User.create(user)

            // criar um id de sessao
            req.session.userid = novoUser.id

            // talvez flash message pra avisar que cadastro foi realizado

            req.session.save(() => {
                res.redirect('/cadastro')
            })
        }catch(err) {
            console.log(err)
        }
    }
}