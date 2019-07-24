import axios from 'axios'


export default class MediaDAO {
    async findImages(searchingString) {
        try {
            let res = await axios.get(
                "http://localhost:3000/api",
                {
                    params: {
                        s: searchingString
                    }
                }
            );

            return res.data
        } catch (e) {
            console.warn(e)
        }
    }
}