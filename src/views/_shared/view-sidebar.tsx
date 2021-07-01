import { NavLink, useHistory } from "react-router-dom";
import { DASHBOARD, LOGIN, SETTINGS } from "routes/routes-config";
import { useDispatch } from "react-redux";
import { logout } from "services/redux/features/authentication/actions";
import styled, { css } from "styled-components";
import { declareCssForMediumView } from "styles/responsive";
import { Button } from "components";

const Aside = styled.aside`
  flex-basis: 30%;
  padding-bottom: calc(${({ theme }) => theme.gutter} * 2);
  padding-top: calc(${({ theme }) => theme.gutter} * 2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${declareCssForMediumView(css`
    flex-basis: 30%;
    max-width: 200px;
  `)}
`;

const Navigation = styled.nav`
  .active-link {
    background: ${({ theme }) => theme.primaryVariantColor};
    color: ${({ theme }) => theme.onPrimaryColor};
  }

  display: flex;
  flex-direction: column;

  a {
    display: block;
    padding: 10px ${({ theme }) => theme.gutter};
    color: ${({ theme }) => theme.onPrimaryColor};
    text-decoration: none;
  }
`;

const ViewSidebar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogoutClick = () => {
    dispatch(logout());
    history.push(LOGIN);
  };

  return (
    <Aside>
      <Navigation>
        <NavLink
          to={DASHBOARD}
          data-testid="sidebar__nav-link__dashboard"
          activeClassName="active-link"
        >
          Dashboard
        </NavLink>
        <NavLink
          to={SETTINGS}
          data-testid="sidebar__nav-link__settings"
          activeClassName="active-link"
        >
          Settings
        </NavLink>
      </Navigation>
      <Button data-testid="signout__btn" onClick={handleLogoutClick}>
        Logout
      </Button>
    </Aside>
  );
};

export default ViewSidebar;
