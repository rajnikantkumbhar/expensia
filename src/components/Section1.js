import {
  Card,
  Flex,
  TextInput,
  NumberInput,
  Text,
  Button,
} from "@mantine/core";
import { Plus } from "tabler-icons-react";
const Section1 = () => {
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
            Add Expense
          </Text>
          <NumberInput
            autoComplete="off"
            withAsterisk
            label="Amount"
            placeholder="enter amount"
            style={{ width: "100%" }}
          />
          <TextInput
            autoComplete="off"
            withAsterisk
            label="Description"
            placeholder="enter description"
            style={{ width: "100%" }}
          />
          <Flex align="center" justify="space-between" w="100%" mt="md">
            <Button
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
              leftIcon={<Plus size={14} />}
            >
              Add Expense
            </Button>
            <Button variant="subtle" gradient={{ from: "indigo", to: "cyan" }}>
              Clear
            </Button>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};

export default Section1;
