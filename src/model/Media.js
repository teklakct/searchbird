export default class Media {
    constructor(URL, thumbURL) {
        this._url = URL;
        this._thumbURL = thumbURL;
    }

    URL(preview = false) {
       if (preview) {
           return this._thumbURL;
       }

       return this._url;
    }
}