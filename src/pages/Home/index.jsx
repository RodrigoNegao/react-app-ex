import { Link } from "react-router-dom";
import ImageCoverRow from "../../components/ImageCoverRow";
import { Container } from "./style";

export default function Home() {
  return (
    <Container>
      <ImageCoverRow title={"Titulo"} height={"200px"} />
    </Container>
  );
}
