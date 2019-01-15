export const home = (req, res) => res.render("home", { pageTitle: "Home" }); // export const home = (req, res) => res.send("Home");

export const search = (req, res) =>
  res.render("search", { pageTitle: "Search" }); // export const search = (req, res) => res.send("Search");

export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" }); // render 함수의 첫 번째 인자는 '템플릿'이고, 두 번째 인자는 '템플릿에 추가할 정보가 담긴 객체'다.

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
