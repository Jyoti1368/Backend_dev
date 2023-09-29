
const express = require('express')
const app = express();
const port = 3000;

app.use(express.json()); // Enable JSON parsing for requests
app.get('/',(req,res)=>{
    res.send('hello User Welcome to Our site')
})

// GET endpoint to retrieve product listings
app.get('/products', (req, res) => {
    
    res.json(/* Your product data */);
});

// GET endpoint to retrieve user information
app.get('/user/:userId', (req, res) => {
    
    const userId = req.params.userId;
    
    res.json(`Hello ${userId} welcome `);
});

// POST endpoint to add products to the cart
app.post('/cart/add', (req, res) => {
    const { userId, productId, quantity } = req.body;
  
});

// POST endpoint to process orders
app.post('/orders', (req, res) => {
    const { userId, cartItems } = req.body;
    
});

// DELETE endpoint = to remove items from the cart
app.delete('/cart/remove/:userId/:productId', (req, res) => {
    const userId = req.params.userId;
    const productId = req.params.productId;
  
});

// DELETE endpoint to cancel orders
app.delete('/orders/cancel/:orderId', (req, res) => {
    const orderId = req.params.orderId;
    
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
