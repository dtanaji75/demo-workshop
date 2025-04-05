export const register = {
	type: 'object',
	properties: {
		name: { type: 'string' },
		username: { type: 'string' },
		password: { type: 'string' },
	},
	required: ['name', 'username', 'password'],
	additionalProperties: false,
};
export const login = {
	type: 'object',
	properties: {
		username: { type: 'string' },
		password: { type: 'string' },
	},
	required: ['username', 'password'],
};
export const update = {
	type: 'object',
	properties: {
		name: { type: 'string' },
		username: { type: 'string' },
		password: { type: 'string' },
		user: {
			type: 'object',
			properties: {
				id: { type: ['string', 'integer'] },
				name: { type: 'string' },
				username: { type: 'string' },
			},
			required: ['id', 'name', 'username'],
			additionalProperties: false,
		},
	},
	required: ['name', 'username', 'password', 'user'],
	additionalProperties: false,
};
export const deleteSchema = {
	type: 'object',
	properties: {
		user: {
			type: 'object',
			properties: {
				id: { type: 'string' },
				name: { type: 'string' },
				username: { type: 'string' },
				iat: { type: 'number' },
			},
			required: ['id', 'name', 'username'],
			additionalProperties: false,
		},
	},
	required: ['user'],
	additionalProperties: false,
};
export const get = {
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
