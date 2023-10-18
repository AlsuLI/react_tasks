// import { Alert } from "./components/Alert/Alert";
// import { Alert2 } from "./components/Alert/Alert2";
// import { Animals } from "./components/Animals/Animals";
// import { Badge } from "./components/Badge/Badge";
// import { Blog } from "./components/Blog/Blog";
// import { Card } from "./components/Card/Card";
import { Accordion } from "./components/Accordion/Accordion";
import { Accordion2 } from "./components/Accordion2/Accordion2";
import { Counter } from "./components/Counter/Counter";

import { Demo } from "./components/Demo/Demo";
import { NameForm } from "./components/NameForm/NameForm";
// import { Jumbotron } from "./components/Jumbotron/Jumbotron";
// import { Navigation } from "./components/Navigation/Navigation";
// import { Numbers } from "./components/Numbers/Numbers";
// import { Object } from "./components/Object/Object";
// import { People } from "./components/People/People";
// import { Planets } from "./components/Planets/Planets";
// import { Post } from "./components/Post/Post";
// import { Pricecard } from "./components/Pricecard/Pricecard";
import { Progress } from "./components/Progress/Progress";
import { SayHello } from "./components/SayHello/SayHello";
import { TextAlign } from "./components/TextAlign/TextAlign";
import { TextToggle } from "./components/TextToggle/TextToggle";
import { TextToggle2 } from "./components/TextToggle2/TextToggle2";
import "./global.css";


function App() {
  return (
    <>
      {/* <Card
        title="Bob Dylan"
        article="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American
      singer/songwriter, author, and artist who has been an influential figure
      in popular music and culture for more than five decades."
        link="https://en.wikipedia.org/wiki/Bob_Dylan"
        button="Go to wikipedia"
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/440px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg"
      />
      <Numbers />
      <Object />
      <Post />
      <Jumbotron
        title="Custom jumbotron"
        description="Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking."
        buttonLabel="Example button"
      />
      <Pricecard
        item="dress"
        price="30$"
        description="long black dress, 100% cotton, 10% discount!"
        buttonLabel="Add to cart"
      />
      <Pricecard
        item="dress"
        price="23$"
        description="Short pink dress, 100% poliester, 20% discount!"
        buttonLabel="Add to cart"
      />
      <Pricecard item="shorts" price="10$" buttonLabel="Add to cart">
        green shorts with pockets, 100% cotton, 15% discount!
      </Pricecard>
      <Blog />
      <People
        ppl={["Bob Dust", "Fredy Mercury", "Shazam Nikola", "Wilibin Walabam"]}
      ></People>
      <Animals />
      <Planets />
      <Alert title="OMG! Something really bad has happended!" show={true} />
      <Alert2 title="OMG!" show={true}>
        Something really bad has happended!
      </Alert2>
      <Navigation /> */}
      <Progress min={0} max={100} value={10} />
      <Demo />
      <TextAlign />
      <SayHello name={"Юра"} />
      <TextToggle />
      <TextToggle2 />
      <Counter />
      <NameForm />
      <Accordion />
      <Accordion2 />
    </>
  );
}

export default App;
