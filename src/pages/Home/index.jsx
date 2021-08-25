import Card from "../../components/Card";
import Footer from "../../components/Footer";
import ImageCoverRow from "../../components/ImageCoverRow";
import Row from "../../components/Row";
import { Container } from "./style";
import { AiOutlineGithub } from "react-icons/ai";

export default function Home() {
  return (
    <Container>
      <ImageCoverRow title={"TitleImage"} height={"350px"} />
      <Row>
        <Card title={"TitleCard"} subtitle={"subtitle"} />
        <Card title={"TitleCard"} subtitle={"subtitle"} />
        <Card title={"TitleCard"} subtitle={"subtitle"} />
      </Row>
      <Row height={"450px"}>
        <Card width={"49%"} title={"TitleCard"} subtitle={"subtitle"} />
        <ImageCoverRow width={"51%"} />
      </Row>
      <Row height={"400px"}>
        <ImageCoverRow width={"51vw"} />
        <Card width={"49vw"} title={"TitleCard"} subtitle={"subtitle"} />
      </Row>
      <Row height={"400px"}>
        <Card width={"49vw"} title={"TitleCard"} subtitle={"subtitle"} />
        <ImageCoverRow width={"51vw"} />
      </Row>
      <ImageCoverRow title={"Contato"} height={"250px"} />
      <Footer>
        <Card icon={<AiOutlineGithub />} width={"20px"} subtitle={"icon"} />
      </Footer>
    </Container>
  );
}
