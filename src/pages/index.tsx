import { useState } from "react";
import { Button, Heading, Input, Tag, Text, TextArea } from "../components";

export default function Index() {
  const [isClicked, setIsClicked] = useState(false)

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
      <br />
      <TextArea placeholder="Message" />
    </>
  )
}
