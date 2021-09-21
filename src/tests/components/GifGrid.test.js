import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('Pruebas en el <GifGrid />', () => {
    const category = 'One Punch';
    test('Debe coincidir con el snapshot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();     
    });
    
    test('Debe mostrar items cuando se cargan imágenes', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://facebook.com/img.jpg',
            title: 'img'
        },
        {
            id: 'DEF',
            url: 'https://facebook.com/img.jpg',
            title: 'img2'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(true);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    
});
