const { shallow } = require("enzyme")
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
    test('Debe mostrarse correctamente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar una lista de categorías', () => {
        const categories = ['Hellblade', 'Darksiders 3'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
});
