import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function Themes() {
  const themesList = [
    { title: 'Theme A', variant: 'Light', imgSrc: './assets/img/themeA-light.png' },
    { title: 'Theme A', variant: 'Dark', imgSrc: './assets/img/themeA-dark.png' },
    { title: 'Theme B', variant: 'Light', imgSrc: './assets/img/themeB-light.png' },
    { title: 'Theme B', variant: 'Dark', imgSrc: './assets/img/themeB-dark.png' }
  ];
  return (
    <Container>
      <h3 className="mt-3 mb-2">All themes as Bootsrtap Cards</h3>
      <div className="mb-2 text-center d-flex flex-sm-wrap flex-wrap">
        {themesList.map((theme, idx) =>
          <Card key={idx} className="mt-2 ml-2 mx-auto text-start rounded-3 shadow-sm" style={{ width: '18rem' }}>
            <Card.Header>Theme item</Card.Header>
            <Card.Img className="border-bottom rounded-0" alt={`${theme.title} ${theme.variant} image`} variant="top" src={theme.imgSrc} />
            <Card.Body>
              <Card.Title>{theme.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{theme.variant}</Card.Subtitle>
            </Card.Body>
          </Card>
        )}
      </div>
    </Container>
  );
}

export default Themes;
