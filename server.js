const app = require('./index');
const { PORT, NODE_ENV } = require('./helpers/config');
const errorMiddleware = require('./middlewares/error.middleware');

console.log(`Node environment: ${NODE_ENV}`);
app.listen(PORT, () => {
    console.log(`Example app listening at port http://localhost:${PORT}`)
})

// Error Handler Middleware
app.use(errorMiddleware)
