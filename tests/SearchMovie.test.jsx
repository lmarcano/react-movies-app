import { render, screen } from "@testing-library/react";
import { SearchMovie } from "../src/Components/SearchMovie";

describe('Pruebas een SearchMovie component', () => {

    test('Debe haceer match ccon el snapshot', () => {

        const onSearch = () => {

        }

        const {container} = render(<SearchMovie onSearch={()=>onSearch()}></SearchMovie>);
        
        expect(container).toMatchSnapshot();
    });

    test('Debe exisitir un INPUT', () => {

        render(<SearchMovie onSearch={()=>onSearch()}></SearchMovie>);
        //expect(screen.getByRole('input'));
        
        //screen.debug();

    });

});