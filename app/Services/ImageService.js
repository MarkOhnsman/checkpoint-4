import { ProxyState } from "../AppState.js";
import Image from "../models/Image.js";
import { api } from "./AxiosService.js";

//TODO create methods to retrieve data and save to the State
class ImageService {
  async getImage() {
    console.log("Calling the Image in Service");
    let res = await api.get('images');
    ProxyState.image = new Image(res.data)
  }
}

const imageService = new ImageService();
export default imageService;