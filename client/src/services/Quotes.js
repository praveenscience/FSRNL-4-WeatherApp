import axios from "axios";

export const GetQoD = () => axios.get("https://quotes.rest/qod");
export const GetDeviMayor = () => axios.get("/api/mayor.json");
