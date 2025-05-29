import PlaygroundPage from "../pages/PlaygroundPage";
import { screen, render } from '@testing-library/react';
import { describe, it, expect }  from 'vitest';
import '@testing-library/jest-dom/vitest';

describe("Playground page", () => {
    it("shows Playground Page text", () => {
        render(<PlaygroundPage />);

        expect(screen.getByText("Playground Page")).toBeInTheDocument();
    })
})
