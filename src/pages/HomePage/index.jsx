import './style.css';
import { CollapseBox } from '../../components/CollapseBox/CollapseBox';

export const HomePage = () => {
  return (
    <Collapse.Group>
    <CollapseBox title="Jsem boxik">
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </CollapseBox>
    </Collapse.Group>
  );
};
