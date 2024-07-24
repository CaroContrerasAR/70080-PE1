import express from 'express'
import productRouter from './routes/products.routes.js'
import cartRouter from './routes/carts.routes.js'

const app = express()
const PORT = 8080

app.use(express.json())

app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)

app.get('/',(req,res)=>{
    res.status(200).send('Pre-entrega 1 - Carolina Contreras')
})

app.listen(PORT, ()=>{
    console.log(`Server Express online in Port ${PORT}`);
})
