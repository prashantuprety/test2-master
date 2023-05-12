import logo from "./logo.svg";
import "./App.css";
import NFT from "./components/NFT";
import Test from "./components/Test";
import Test2 from "./components/Test2";
import pic1 from "../src/images/img1.jpg";
import Sample from "./components/Sample";
import Cdr from "./components/Cdr";
import CDR1 from "./components/CDR1";
import Main from "./components/Main";
import Vnabs from "./components/Vnabs";
import Dflex from "./components/Dflex";
import Hire from "./components/Hire";
import Landingp from "./components/Landingp";
import Tabs_LoadMore from "./components/Tabs_LoadMore";
import LPD from "./components/LPD";

function App() {
  const data = [
    {
      heading: "welcome",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  ",
      id: 1,
      img: { pic1 },
    },
    {
      heading: "welcome",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  ",
      id: 2,
      img: { pic1 },
    },
    {
      heading: "welcome",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ",
      id: 3,
      img: { pic1 },
    },
    {
      heading: "welcome",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  ",
      id: 4,
      img: { pic1 },
    },
    {
      heading: "welcome",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  ",
      id: 5,
      img: { pic1 },
    },
    {
      heading: "welcome",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ",
      id: 6,
      img: { pic1 },
    },
  ];
  const sample = [
    {
      title: "CDR Sample 1",
      heading: " Project name: Simple things that matters a lot ",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean com",
      id: 1,
    },
    {
      title: "CDR Sample 2",
      heading:
        "Project name:unknown worls is filled with shit things that matters a lot ",
      paragraph:
        "It is the first and simplest step in problem-solving. It organizes the steps/sequence required to formulate one goal out of multiple goals as well as actions to achieve that goal. Goal formulation is based on the current situation and the agent's performance measure (discussed below)  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodos",
      id: 2,
    },
    {
      title: "CDR Sample 3",
      heading:
        "Project name:Simple art is a kind of things that matters a lot ",
      paragraph:
        "the problem implicitly. State-space of a problem is a set of all states which the problem implicitly. State-space of a problem is a set of all states which can be reached from the initial state followed by any sequence of actions. The state-space forms a directed map or graph where nodes are the states, links between the nodes are actions, and the path",
      id: 3,
    },
  ];

  const cdr = [
    {
      button: "1",
      head1:
        " Here's How you can get a flawless CDR Report writing for engineers Australia",
      body1:
        "This is just the sample word he problem implicitly. State-space ofa problem is a set of all states which the problemimplicitlyStatespace of a problem is a set of all states which can be reached from the initial state followed by any sequence of actions. The state-space forms a directed map or graph where node are the states, links between the nodes are actions, and the pathThe state-space forms a directed map or graph where nodes are tthrstates, links between the The state-space forms a directed map or graph",
      head2: "Get your quality CDR report button 1",
      body2:
        " Go through your top quality CDR report before your deadline at the best prices.Also,you can ask for amendments if requires.",
    },
    {
      button: "2",
      head1:
        " Here's How you can get a flawless CDR Report writing for engineers Australia Button 2",
      body1:
        "This is just the sample word he problem implicitly. State-space ofa problem is a set of all states which the problemimplicitlyStatespace of a problem is a set of all states which can be reached from the initial state followed by any sequence of actions. The state-space forms a directed map or graph where node are the states, links between the nodes are actions, and the pathThe state-space forms a directed map or graph where nodes are tthrstates, links between the The state-space forms a directed map or graph",
      head2: "Get your quality CDR report button 2.",
      body2:
        " Go through your top quality CDR report before your deadline at the best prices.Also,you can ask for amendments if requires.",
    },
    {
      button: "3",
      head1:
        " Here's How you can get a flawless CDR Report writing for engineers Australia Button 3",
      body1:
        "This is just the sample word he problem implicitly. State-space ofa problem is a set of all states which the problemimplicitlyStatespace of a problem is a set of all states which can be reached from the initial state followed by any sequence of actions. The state-space forms a directed map or graph where node are the states, links between the nodes are actions, and the pathThe state-space forms a directed map or graph where nodes are tthrstates, links between the The state-space forms a directed map or graph",
      head2: "Get your quality CDR report button 3.",
      body2:
        " Go through your top quality CDR report before your deadline at the best prices.Also,you can ask for amendments if requires.",
    },
    {
      button: "4",
      head1:
        " Here's How you can get a flawless CDR Report writing for engineers Australia Button 4",
      body1:
        "This is just the sample word he problem implicitly. State-space ofa problem is a set of all states which the problemimplicitlyStatespace of a problem is a set of all states which can be reached from the initial state followed by any sequence of actions. The state-space forms a directed map or graph where node are the states, links between the nodes are actions, and the pathThe state-space forms a directed map or graph where nodes are tthrstates, links between the The state-space forms a directed map or graph",
      head2: "Get your quality CDR report button 4.",
      body2:
        " Go through your top quality CDR report before your deadline at the best prices.Also,you can ask for amendments if requires.",
    },
  ];
  return (
    <div className="App">
      {/* <Hire /> */}
      {/* <Dflex /> */}
      {/* <Vnabs data={cdr} /> */}
      {/* <Main data={sample} /> */}
      {/* <Cdr /> */}
      {/* <Test1 /> */}
      {/* <Sample /> */}
      {/* <Test data={data} /> */}
      {/* <NFT /> */}
      <Landingp />
      {/* <Tabs_LoadMore /> */}
      {/* <Tabs /> */}
      {/* <LPD /> */}
    </div>
  );
}

export default App;
