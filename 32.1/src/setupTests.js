import '@testing-library/jest-dom';

// Полифилл для window.matchMedia
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Для старого API
        removeListener: jest.fn(), // Для старого API
        addEventListener: jest.fn(), // Для нового API
        removeEventListener: jest.fn(), // Для нового API
        dispatchEvent: jest.fn(),
    })),
});



jest.mock('antd', () => {
    const antd = jest.requireActual('antd');
    return {
        ...antd,
        List: ({ children }) => <div>{children}</div>, // Мокаем List
    };
});