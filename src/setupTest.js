import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './components/App.jsx';

describe('<App />', () => {
  it('renders the <Banner /> component', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(Banner)).to.have.lengthOf(1);
  });
  it('renders the <Funding /> component', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(Funding)).to.have.lengthOf(1);
  });
  it('renders the <Video /> component', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(Video)).to.have.lengthOf(1);
  });
});