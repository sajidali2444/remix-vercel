import * as Module from "./_index"

const routeComponentProps = {
	loaderData: { timezoneDate: "2021-01-01T00:00:00.000Z" },
	params: {},
	// biome-ignore lint/suspicious/noExplicitAny: Matches are not used
	matches: [] as any,
}
describe("Home route", () => {
	it("should render the home page text properly in english", async ({ renderStub }) => {
		const { getByText } = await renderStub({
			entries: [
				{
					id: "home",
					path: "/",
					Component: () => Module.default(routeComponentProps),
				},
			],
		})

		expect(
			getByText("React Router is awesome!", {
				exact: false,
			})
		).not.toBeNull()
	})

	it("should render the home page text properly in bosnian", async ({ renderStub }) => {
		const { getByText } = await renderStub({
			entries: [
				{
					id: "home",
					path: "/",

					Component: () => Module.default(routeComponentProps),
				},
			],
			i18n: {
				lng: "bs",
			},
		})

		expect(
			getByText("React Router je zakon!", {
				exact: false,
			})
		).not.toBeNull()
	})
})
