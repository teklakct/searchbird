import Media from './Media'

describe("Media model", () => {
    test("returns thumb URL if ask form preview URL", () => {
        const media = new Media('full', 'thumb')

        expect(media.URL()).toBe('full')
        expect(media.URL(true)).toBe('thumb')
    })
})
