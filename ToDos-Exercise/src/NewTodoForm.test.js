import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it('renders without crashing', function(){
    render(<NewTodoForm />)
})

it('matches snapshot', function() {
    const {asFragment} = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
})

it('runs the create function on submit', function(){
    const createMock = jest.fn();
    const { getByText } = render(<NewTodoForm createTodo={createMock} />);
    const createButton = getByText("Add a Todo!");
    fireEvent.click(createButton);
    expect(createMock).toHaveBeenCalled();
});