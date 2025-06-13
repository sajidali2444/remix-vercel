import { serveStatic } from "@hono/node-server/serve-static"
import { createHonoServer } from "react-router-hono-server/node"
import { i18next } from "remix-hono/i18next"
import i18nextOpts from "../localization/i18n.server"
import { getLoadContext } from "./context"

export default await createHonoServer({
	configure(server) {
		server.use("*", i18next(i18nextOpts))
		// Serve static files
		server.use("/assets/*", serveStatic({ root: "./build/client" }))
		server.use("/favicon.ico", serveStatic({ path: "./build/client/favicon.ico" }))
	},
	defaultLogger: false,
	getLoadContext,
})
