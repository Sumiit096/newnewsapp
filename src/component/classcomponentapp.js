// import React, { Component } from "react";
// import NavBar from "./component/NavBar";
// import News from "./component/News";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar";
// export class App extends Component {
//   // apiKey = process.env.REACT_APP_NEWS_API;
//   apiKey = "6caaa1a568c34f00952c43c8446560f0";
//   state = {
//     progress: 0,
//   };
//   setProgress = (progress) => {
//     this.setState({ progress: progress });
//   };
//   render() {
//     return (
//       <Router>
//         <div>
//           <div>
//             <LoadingBar color="#f11946" progress={this.state.progress} />
//             <NavBar />
//           </div>

//           <Routes>
//             {" "}
//             <Route
//               exact
//               path="/"
//               element={
//                 <News
//                   setProgress={this.setProgress}
//                   apiKey={this.apiKey}
//                   key="general"
//                   pageSize={8}
//                   country="us"
//                   categories="general"
//                 />
//               }
//             ></Route>
//             <Route
//               exact
//               path="/business"
//               element={
//                 <News
//                   setProgress={this.setProgress}
//                   apiKey={this.apiKey}
//                   key="business"
//                   pageSize={8}
//                   country="us"
//                   categories="business"
//                 />
//               }
//             ></Route>
//             <Route
//               exact
//               path="/entertainment"
//               element={
//                 <News
//                   setProgress={this.setProgress}
//                   apiKey={this.apiKey}
//                   key="entertainment"
//                   pageSize={8}
//                   country="us"
//                   categories="entertainment"
//                 />
//               }
//             ></Route>
//             <Route
//               exact
//               path="/general"
//               element={
//                 <News
//                   setProgress={this.setProgress}
//                   apiKey={this.apiKey}
//                   key="general"
//                   pageSize={8}
//                   country="us"
//                   categories="general"
//                 />
//               }
//             ></Route>
//             <Route
//               exact
//               path="/health"
//               element={
//                 <News
//                   setProgress={this.setProgress}
//                   apiKey={this.apiKey}
//                   key="health"
//                   pageSize={8}
//                   country="us"
//                   categories="health"
//                 />
//               }
//             ></Route>
//             <Route
//               exact
//               path="/science"
//               element={
//                 <News
//                   setProgress={this.setProgress}
//                   apiKey={this.apiKey}
//                   key="science"
//                   pageSize={8}
//                   country="us"
//                   categories="science"
//                 />
//               }
//             ></Route>
//             <Route
//               exact
//               path="/sports"
//               element={
//                 <News
//                   setProgress={this.setProgress}
//                   apiKey={this.apiKey}
//                   key="sports"
//                   pageSize={8}
//                   country="us"
//                   categories="sports"
//                 />
//               }
//             ></Route>
//             <Route
//               exact
//               path="/technology"
//               element={
//                 <News
//                   setProgress={this.setProgress}
//                   apiKey={this.apiKey}
//                   key="technology"
//                   pageSize={8}
//                   country="us"
//                   categories="technology"
//                 />
//               }
//             ></Route>
//           </Routes>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;
