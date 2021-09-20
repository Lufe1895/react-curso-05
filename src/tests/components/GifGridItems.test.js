import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem/>', () => {
    const title = "Título";
    const url = "https://www.facebook.com";
    const wrapper = shallow(<GifGridItem title={ title } url={ url } />);

    test('Debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe tener la imagen igual al url', () => {
        const img = wrapper.find('img');
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
    });
    
    test('debe tener la animación', () => {
        const div = wrapper.find('div');
        const className = div.props().className;
        expect(className.includes('animate__fadeIn')).toBe(true);
    });
});
