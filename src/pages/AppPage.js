import {
  AppShell,
  Header,
  Image,
  ActionIcon,
  Flex,
  Card,
  Text,
  TextInput,
  NumberInput,
  Button,
  Grid,
} from "@mantine/core";
import LogoDark from "../images/logo-dark.svg";
import LogoLight from "../images/logo-light.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, toggleLoggedIn } from "../redux/RootReducer";
import { Sun, Moon, Logout, Plus } from "tabler-icons-react";

const AppPage = () => {
  const statex = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <AppShell
      padding="md"
      header={
        <Header
          height={80}
          px="lg"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20",
          }}
        >
          <Image
            src={statex.theme === "dark" ? LogoDark : LogoLight}
            width="140px"
            alt="Logo"
          />
          <Flex justify="space-between" align="center" gap="md" wrap="wrap">
            <ActionIcon variant="light" onClick={() => dispatch(toggleTheme())}>
              {statex.theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </ActionIcon>
            <ActionIcon
              variant="light"
              onClick={() => dispatch(toggleLoggedIn())}
            >
              <Logout size={16} />
            </ActionIcon>
          </Flex>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Grid gutter={5} gutterXs="md" gutterMd="xl">
        <Grid.Col span={6}>
          <Flex align="center" justify="center" gap="md">
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
                  <Button
                    variant="subtle"
                    gradient={{ from: "indigo", to: "cyan" }}
                  >
                    Clear
                  </Button>
                </Flex>
              </Flex>
            </Card>
          </Flex>
        </Grid.Col>
        <Grid.Col span={6}>
          <Flex align="center" justify="center" gap="md">
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
                  <Button
                    variant="subtle"
                    gradient={{ from: "indigo", to: "cyan" }}
                  >
                    Clear
                  </Button>
                </Flex>
              </Flex>
            </Card>
          </Flex>
        </Grid.Col>
      </Grid>
    </AppShell>
  );
};
export default AppPage;
