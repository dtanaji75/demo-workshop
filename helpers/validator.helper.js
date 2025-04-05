import Ajv from 'ajv';
const ajv = new Ajv();

export default function SchemaValidator(schema, data) {
	try {
		const validate = ajv.compile(schema);
		const valid = validate(data);
		if (!valid) {
			return { status: false, message: validate.errors };
		}
		return { status: true, message: 'Data validation successfully done.' };
	} catch (error) {
		console.error(error);
		return { status: false, message: error.message };
	}
}
