import type { Config } from "@react-router/dev/config"
import { vercelPreset } from "@vercel/react-router/vite"

export default {
	future: {
		unstable_viteEnvironmentApi: true,
		unstable_splitRouteModules: true,
		unstable_optimizeDeps: true,
	},
	presets: [vercelPreset()],
} satisfies Config
