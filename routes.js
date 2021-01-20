import {User} from './connection.js'
module.exports= function(app){
    
    app.get('/', (req, res)=>{
        return res.send('ola mundo');
    });
    
    //Listar Usuarios no Banco de Dados
    app.get('/users', (req, res, next)=>{
        User.find({}).lean().exec(function(e, docs){
            res.json(docs);
            res.end();
            
        });
    });
    
    //Exibi Um Usuario no Banco de Dados
    app.get('/users/:id', (req, res, next)=>{
        User.find({_id: req.params.id}).lean().exec(function(e, docs){
            res.json(docs);
            res.end();
        });
        
    });
    
    //Incluir Um Usuario no Banco de Dados
    app.post('/users', (req, res) =>{
        const user = User(req.body);
        user.save((err) => {
            if(err){
                return res.send(err);
            }
            return res.send(user);
        });
    });
}