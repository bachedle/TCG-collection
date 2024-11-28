import express from 'express';
import viewEngine from './config/viewEngine.js';
import initWebRoutes from './routes/web.route.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connection from './config/connectDB.js';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express'
import userRoute from './routes/user.route.js';
dotenv.config();

const app = express();

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'http://localhost:8080'
            }
        ]
    },
    apis: ['src/routes/web.route.js']
}
const swaggerSpec = swaggerJSDoc(options)

app.use('/user', userRoute);
// function swaggerDocs(app, port) {
  // Swagger Page
  app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
  // Documentation in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })

//test connection
connection();

//config view engine
viewEngine(app);
//config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//init web routes (route khai bao o day, tao file rieng de khai bao route)
initWebRoutes(app);


// handling errors
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    return res.status(404).json({
        message: error.message
    });
});

app.use((error, req, res, next) => {
    const statusCode = error.status || 500
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        message: error.message || 'Internal Server Error'
    })
});

//port
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
export default app;
