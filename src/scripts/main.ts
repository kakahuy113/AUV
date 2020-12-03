import { getSVGs, Loading } from "./utilities/util";
import Axios from "axios";
declare var Swiper:any;

document.addEventListener("DOMContentLoaded", async () => {
	getSVGs(".svg");
	Loading();
});
