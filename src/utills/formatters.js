import { replace } from "react-router-dom";

export const writeTime = (date) => {
    return date.replace("T", " ").substring(0, 16);
};
// ex) 2024-12-30T16:54:53.341
// fwlketjwel
// rejwolr
