import { refactoryAPI } from "../baseAPI";

const getPartners = () => refactoryAPI.get("partner.json");

const getAsSeeOn = () => refactoryAPI.get("seen_on.json");

export { getPartners, getAsSeeOn };
