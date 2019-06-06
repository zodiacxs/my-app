import React from "react";
import Optus from "./Optus"
import Loader from "react-loader-spinner"

describe("Optus", () => {
    
    describe("clickable elements", () => {
        let wrapper;
        const state = {
            isloading: false,
            buttons: [80, 41, -77, -42],
            bars: [11, 44, 53],
            limit: 123,
            active: 0,
        };
        beforeEach(() => {
        wrapper = shallow(<Optus />);
        wrapper.setState(state);
        });
        it('update the bar progress', () => {
            const instance = wrapper.instance();
            for (var i=0; i<4; i++){
                const prevProgress = instance.state.bars[instance.state.active]
                wrapper.find('button').at(i).simulate('click');
                expect (instance.state.bars[instance.state.active]).toEqual(prevProgress+instance.state.buttons[i])
            }
        });
        it('change active bar', () => {
            const instance = wrapper.instance();
            expect(instance.state.active).toEqual(0);
            instance.handleBarClick(2);
            expect(instance.state.active).toEqual(2);
        })
    })

})

