/**
* Based on code from Dr. Abel Sanchez
*/
const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Swagger Demo',
            version: '0.0.1'
        }
    },
    apis: ['app.js']
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
* @swagger
* /demo:
*   get:
*     description: Echo a welcome demo
*     responses:
*       200:
*         description: Success
*
*/
app.get('/demo', (req,res) => {
    res.send({"hello": "world"});
});

app.listen(4000, () => console.log('On port 4000'));
