const express = require('express');
const viewEngine = require('./config/viewEngine.js');
const initWebRoutes = require('./routes/web.route.js');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connection = require('./config/connectDB.js');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
// const userRoute = require('./routes/user.route.js');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsOptions = require('./config/CORS/CorsOption.js');

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
            },
            {
                url: 'https://tcg-collection.onrender.com'
            }
        ]
    },
    apis: ['src/routes/web.route.js']
};

const swaggerSpec = swaggerJSDoc(options);

// app.use('/user', userRoute);

app.use(cookieParser());
app.use(cors(corsOptions));

// Swagger documentation setup
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

// Test connection
connection();

// Config view engine
viewEngine(app);

// Config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Init web routes
initWebRoutes(app);

// Handling 404 errors
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// Global error handler
app.use((error, req, res, next) => {
    const statusCode = error.status || 500;
    res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        message: error.message || 'Internal Server Error'
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
