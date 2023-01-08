import { Card, Flex, List, ThemeIcon, Text } from "@mantine/core";
import { CircleCheck, CircleDashed } from "tabler-icons-react";
const Section2 = () => {
  return (
    <Flex align="center" justify="center" gap="md" h="auto">
      <Card
        shadow="md"
        p="xl"
        radius="sm"
        withBorder
        style={{ width: "24rem" }}
      >
        <Flex
          mih={50}
          gap="lg"
          justify="flex-start"
          align="flex-start"
          direction="column"
          wrap="wrap"
        >
          <Text fw={800} size="xl">
            Expense History
          </Text>
          <List
            spacing="lg"
            size="sm"
            center
            icon={
              <ThemeIcon color="teal" size={24} radius="xl">
                <CircleCheck size={16} />
              </ThemeIcon>
            }
          >
            <List.Item>Clone or download repository from GitHub</List.Item>
            <List.Item>Install dependencies with yarn</List.Item>
            <List.Item>
              To start development server run npm start command
            </List.Item>
            <List.Item>
              Run tests to make sure your changes do not break the build
            </List.Item>
            <List.Item
              icon={
                <ThemeIcon color="blue" size={24} radius="xl">
                  <CircleDashed size={16} />
                </ThemeIcon>
              }
            >
              Submit a pull request once you are done
            </List.Item>
          </List>
        </Flex>
      </Card>
    </Flex>
  );
};

export default Section2;
