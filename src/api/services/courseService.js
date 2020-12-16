import { refactoryAPI } from "../baseAPI";
const getDataAlumni = () => refactoryAPI.get("alumni-report.json");

export { getDataAlumni };
