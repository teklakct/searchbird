export default class Media {
    constructor(URL, thumbURL = null) {
        if (!thumbURL) {
            thumbURL = URL;
        }

        this.url = URL;
        this.thumbURL = thumbURL;
    }

    static fromPixabay(pixabayObj) {
        const { largeImageURL, previewURL} = pixabayObj;

        return new this(largeImageURL, previewURL);
    }

    static fromGiphy(giphyObj) {
        const URL = giphyObj.images.original_still.url;
        const previewURL = giphyObj.images.preview.mp4;

        return new this(URL, previewURL);
    }
}