export const home = (req, res) => res.render("home"); // export const home = (req, res) => res.send("Home");
export const search = (req, res) => res.render("search"); // export const search = (req, res) => res.send("Search");
export const videos = (req, res) => res.send("videos");
export const upload = (req, res) => res.render("upload");
export const videoDetail = (req, res) => res.render("videoDetail");
export const editVideo = (req, res) => res.render("editVideo");
export const deleteVideo = (req, res) => res.render("deleteVideo");
