
const clientController = {
    // !---- Muesta todos los productos en el index ( Funciona al 100% ) ---- //
    index: (req,res) => {
       
       res.send('Jalo este pedo en client')
    },
 
    // !---- Muestra los productos buscados por titulo.  ( Funciona al 100% ) ---- //
    buscador: (req,res) =>{
            db.Products.findAll({
                where:  {
                    name: {
                      [Op.like]: '%' + req.query.buscador + '%'
                          }
                        }
            })
            .then(function (products) {
                res.render('search',{products:products})
                console.log('Entro a la DB y saco datos');
            })
            .catch(function (error) {
              console.log(error);  
            }) 
        }
}

module.exports = clientController;