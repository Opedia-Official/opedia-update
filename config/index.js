const dev = process.env.NODE_ENV !== 'production';


export const server = dev ? "http://admin.opediatech.com" : 'http://admin.opediatech.com'