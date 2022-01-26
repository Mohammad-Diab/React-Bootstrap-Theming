import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import CustomGrid from "./../../components/custom-grid"

function Home() {

  let gridInfo = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'next'
    }, {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'calender'
    }, {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'apps'
    },
  ]
  return (
    <Container>
      <div className="mx-auto w-75">
        <div className="text-center mb-4">
          <h1 className="mt-5 mb-4">Bootstrap-Themes <Badge pill bg="danger">New</Badge></h1>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
          <Button variant="primary">Show me how</Button>
        </div>

        <CustomGrid gridData={gridInfo} />
      </div>
    </Container>
  );
}

export default Home;
