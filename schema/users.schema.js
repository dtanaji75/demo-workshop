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
