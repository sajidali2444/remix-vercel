import { createHonoServer } from "react-router-hono-server/node"
import { i18next } from "remix-hono/i18next"
import i18nextOpts from "../localization/i18n.server"
import { getLoadContext } from "./context"

const server = await createHonoServer({
	configure(server) {
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
	console.log(`Server starting on port ${port}`)
	server.fire()
}
