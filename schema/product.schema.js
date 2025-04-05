export const productSchema = {
	type: 'object',
	properties: {
		user: {
			type: 'object',
			properties: {
				id: { type: 'integer' },
				name: { type: 'string' },
				username: { type: 'string' },
				iat: { type: 'integer' },
			},
			required: ['id', 'name', 'username'],
			additionalProperties: false,
		},
	},
	required: ['user'],
	additionalProperties: false,
};
