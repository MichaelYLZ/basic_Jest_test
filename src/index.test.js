import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('简单测试 Demo', () => {
    
    it('测试array', () => {
        expect(['a', 'b', 'c']).toContain('a')
    })
    
    it('测试boolean', () => {
        expect(true).toBe(true)
    })
    
})