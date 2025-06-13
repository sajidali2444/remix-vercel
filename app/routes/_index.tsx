import { useTranslation } from "react-i18next"
import type { MetaFunction } from "react-router"

export const meta: MetaFunction = () => {
	return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }]
}

export default function Index() {
	const { t } = useTranslation()
	return (
		<div>
			<h1>{t("hi")}</h1>
		</div>
	)
}
