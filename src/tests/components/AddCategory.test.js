const { shallow } = require("enzyme");
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola, mundo.';
        input.simulate('change', { target: { value } });
    
        expect(wrapper.find('p').text().trim()).toBe(value);
    });
    
    test('No debe postear informacion con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });
    
    test('Debe llamar el setCategories y limpiar la caja de text', () => {
        const input = wrapper.find('input');
        const value = 'Hola, mundo.';
        input.simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('p').text().trim()).toBe('');
    })
    
});
