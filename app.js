import express from "express"; // express를 1. 폴더 목록에서 먼저 찾고 2. 만약 목록에 없을시, node_modules에서 express를 찾아라는 명령
import morgan from "morgan"; // express 중, logging을 위한 기능.
import helmet from "helmet"; // express 중, node.js의 보안을 위한 기능.
import cookieParser from "cookie-parser"; // express 중, session을 다루기 위해 cookie에 유저 정보를 저장.
import bodyParser from "body-parser"; //
import { userRouter } from "./router";
/* export const userRouter = express.Router();가 export default app;처럼 디폴트로 설정되지 않았기에 import 해주어야 한다.*/
const app = express(); // var app = express(); 어플리케이션!

/*

const handleHome = (req, res) => {
  // ES6의 Arrow Function. 편함.
  // 서버에서 Route에 응답
  console.log(req);
  res.send("Hello from my home!");
};

=  var handleHome = function handleHome(req, res) {
    console.log(req);
    res.send("Hello from my home!");
}; 

const handleProfile = (req, res) => res.send("You are on my Profile"); // 서버에서 Route에 응답

= var handleProfile = function handleProfile(req, res) {
  return res.send("You are on my Profile");
}; 

*/

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Route
app.use(morgan("dev")); // morgan이 이 단계에서 모든 걸 기억한다.
app.use(helmet()); // express의 한 기능이며, node.js의 보안을 위한 역할을 한다.

/*

app.get("/", handleHome); // Route, "/"가 Home임!

app.get("/profile", handleProfile); // Route


*/

app.use("/user", userRouter);
/* 원래 app.get("/user")에 import한 userRouter를 준 것.
   여기서 use의 의미는 누군가 /user 경로에 접속하면 이 router 전체를 사용하겠다는 의미.
   */

export default app; // init.js에서 app.js를 사용하기 위해 app object를 export!

/* middleware는 순서가 정말 중요하다.

   쉽게 예제를 들자면, 클라이언트 쪽에서 로그인을 하거나 자료를 올리거나 할 때, 
   완료되기 전에 중간에서 개발자인 내가 가로챌 수도 있고 관련 내용을 확인할 수도 있다.
 
   더 쉽게 예제를 들어보자.
   가령, IP주소를 체크하는 미들웨어를 만들었다고 가정하자.
   만약 거부할 IP주소를 찾았다고 하면, 접속을 취소할 수 있겠지.
 
   니꼴라스는 middleware를 betweenHome과 같은 변수를 통해서 실행하곤 했다.
 
   루트가 반환되기 전에, 그 사이에 미들웨어를 넣는 게 순서에 맞다.
   왜냐하면 코드를 에디터가 위에서 아래로 순서대로 읽어내려가기 때문이다.
   말 그대로 가운데에 있는 소프트웨어라고 생각하자.
   
   Morgan은 logging에 도움을 주는 미들웨어다.
   logging이란, 무슨 일이 어디에서 일어났는지를 기록하는 것이다.
   설치는 npm install morgan을 통해 할 수 있다.
   
   helmet express는 node.js의 보안을 위한 것이다.
   
   MVC= M : Model (모델은 데이터다.)
        V : View (데이터가 어떻게 생겼는지.)
        C : Control (컨트롤러는 데이터를 보여주는 함수.(= 데이터를 찾는 함수))
      
      즉, MVC를 일종의 끝내는 구조라고 생각하면 된다. 이건 그냥 패턴일 뿐.
   */
