import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";
describe("Pruebas en <GifItem/>", () => {
  const title = "soy un titulo";
  const url = "http://www.soytitutlo.com/hola.jpg";

  test("debe de hacer match con el Snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el URL y el ALT indiciado", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("debe de mostrar el título en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
