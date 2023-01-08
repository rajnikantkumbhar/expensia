import { AppShell, Header, Image, ActionIcon, Flex, Grid } from "@mantine/core";
import LogoDark from "../images/logo-dark.svg";
import LogoLight from "../images/logo-light.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, toggleLoggedIn } from "../redux/RootReducer";
import { Sun, Moon, Logout } from "tabler-icons-react";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
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
      <Grid gutter={5}>
        <Grid.Col lg={6} md={6}>
          <Section1 />
        </Grid.Col>
        <Grid.Col lg={6} md={6}>
          <Section2 />
        </Grid.Col>
      </Grid>
    </AppShell>
  );
};
export default AppPage;
