// __tests__/CardItem.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import CardItem from "../CardItem";
import '@testing-library/jest-dom';

const mockCar = {
  id: 1,
  images: [{ imageUrl: "https://example.com/car.jpg" }],
  listingTitle: "2024 Tesla Model S",
  mileage: 15000,
  fuelType: "Electric",
  transmission: "Automatic",
  sellingPrice: 75000,
};

describe("CardItem Component", () => {
  it("renders car information correctly", () => {
    render(
      <BrowserRouter>
        <CardItem car={mockCar} />
      </BrowserRouter>
    );

    // Verificar se o título do carro está presente
    expect(screen.getByText(/2024 Tesla Model S/i)).toBeInTheDocument();

    // Verificar se a imagem é renderizada
    const carImage = screen.getByRole("img");
    expect(carImage).toHaveAttribute("src", mockCar.images[0].imageUrl);
    expect(carImage).toHaveAttribute("alt", "");

    // Verificar detalhes do carro
    expect(screen.getByText(/15000 Miles/i)).toBeInTheDocument();
    expect(screen.getByText(/Electric/i)).toBeInTheDocument();
    expect(screen.getByText(/Automatic/i)).toBeInTheDocument();
    expect(screen.getByText(/\$75000/i)).toBeInTheDocument();
  });

  it("navigates to the correct listing details page on click", async () => {
    render(
      <BrowserRouter>
        <CardItem car={mockCar} />
      </BrowserRouter>
    );

    const user = userEvent.setup();

    // Simular clique no card
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "/listing-details/1");

    await user.click(linkElement);
    expect(window.location.pathname).toBe("/listing-details/1");
  });

  it("displays 'New' badge correctly", () => {
    render(
      <BrowserRouter>
        <CardItem car={mockCar} />
      </BrowserRouter>
    );

    // Verificar se o badge "New" está presente
    expect(screen.getByText(/New/i)).toBeInTheDocument();
  });
});
