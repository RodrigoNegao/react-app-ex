import Card from "../../components/Card";
import ImageCoverRow from "../../components/ImageCoverRow";
import Row from "../../components/Row";
import { Container } from "./style";

export default function Home() {
  return (
    <Container>
      <ImageCoverRow title={"TitleImage"} height={"300px"} />
      <Row>
        <Card title={"TitleCard"} subtitle={"subtitle"} />
        <Card title={"TitleCard"} subtitle={"subtitle"} />
        <Card title={"TitleCard"} subtitle={"subtitle"} />
      </Row>
      <Row height={"300px"}>
        <Card width={"50vw"} title={"TitleCard"} subtitle={"subtitle"} />
        <ImageCoverRow width={"50vw"} />
      </Row>
      <Row height={"300px"}>
        <ImageCoverRow width={"50vw"} />
        <Card width={"50vw"} title={"TitleCard"} subtitle={"subtitle"} />
      </Row>
      <Row height={"300px"}>
        <Card width={"50vw"} title={"TitleCard"} subtitle={"subtitle"} />
        <ImageCoverRow width={"50vw"} />
      </Row>
    </Container>
  );
}
