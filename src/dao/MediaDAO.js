import axios from 'axios'
import Media from "../model/Media";

export default class MediaDAO {
    async findImages(searchingString) {
        try {
            const result = []
            let res = await axios.get(
                "http://localhost:3000/api",
                {
                    params: {
                        s: searchingString
                    }
                }
            );

            res.data.forEach((element) => {
                let {url, thumbURL} = element;

                result.push(new Media(url,thumbURL))
            })

            return result
        } catch (e) {
            console.warn(e)
        }
    }
}