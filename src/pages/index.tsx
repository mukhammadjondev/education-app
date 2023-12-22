import { GetServerSideProps } from "next";
import { useState } from "react";
import { Button, Card, Heading, Input, Rating, Tag, Text, TextArea } from "../components";
import axios from "axios";
import { withLayout } from "../layout/layout";

const Index = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [rating, setRating] = useState<number>(3)

  return (
    <>
      <Heading tag="h1">Heading</Heading>
      <Text size="md">Text</Text>
      <Tag size="sm" color="red">Red</Tag>
      <Tag color="green">Green</Tag>
      <br />
      <Button appearance="primary">Primary</Button>
      <Button appearance="ghost">Ghost</Button>
      <Button appearance="primary" arrow={isClicked ? 'down' : 'right'} onClick={() => setIsClicked(prev => !prev)}>
        Arrow
      </Button>
      <Button appearance="ghost" arrow="down">Down</Button>
      <br />
      <Input placeholder="Enter" />
      <div>
        <TextArea placeholder="Message" />
      </div>

      <br />
      <Rating rating={rating} isEditabled={true} setRating={setRating} />

      <Card color="white" style={{marginTop: '30px'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi dolores pariatur nemo corrupti voluptatum esse vero saepe, provident, at incidunt quod natus ipsum quis deserunt ipsam repudiandae voluptatibus culpa dolor.
      </Card>

      <Card color="primary" style={{marginTop: '30px'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi dolores pariatur nemo corrupti voluptatum esse vero saepe, provident, at incidunt quod natus ipsum quis deserunt ipsam repudiandae voluptatibus culpa dolor.
      </Card>
    </>
  )
}

export default withLayout(Index)

export const getServerSideProps: GetServerSideProps = async () => {
  const {data} = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`, {firstCategory: 0})

  return {
    props: {
      data,
    }
  }
}