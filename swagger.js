const swaggerAutogen = require('swagger-autogen')();

const doc = {
	info: {
		title: 'My API',
		description: 'Contacts'
	},
	host: 'three41-project.onrender.com/',
	schemes: ['https']
};

const outputfile = 'swagger.json';
const endppoointFiles = ['./routes/index.js'];

swaggerAutogen(outputfile, endppoointFiles, doc);