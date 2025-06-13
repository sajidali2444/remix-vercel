import { serve } from "@hono/node-server"
import { createHonoServer } from "react-router-hono-server/node"
import { i18next } from "remix-hono/i18next"
import i18nextOpts from "../localization/i18n.server"
import { getLoadContext } from "./context"

const server = await createHonoServer({
	configure(server) {
		// Configure i18n middleware with custom header handling
		server.use("*", async (c, next) => {
			const request = c.req.raw
			const headers = new Headers()
			request.headers.forEach((value, key) => {
				headers.set(key, value)
			})
			c.req.raw = new Request(request.url, {
				method: request.method,
				headers,
				body: request.body,
				redirect: request.redirect,
				signal: request.signal,
			})
			await next()
		})
		server.use("*", i18next(i18nextOpts))
	},
	defaultLogger: false,
	getLoadContext,
})

// Export for Vercel serverless functions
export default server

// For local development
if (import.meta.env.DEV) {
	const port = 3000
	serve({
		fetch: server.fetch,
		port,
	})
}
