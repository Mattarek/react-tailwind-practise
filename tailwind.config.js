export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            dropShadow: {
                '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
                '4xl': [
                    '0 45px 45px rgba(0, 0, 0, 0.25)',
                    '0 65px 75px rgba(0, 0, 0, 0.15)',
                ],
                '5xl': [
                    '0 60px 60px rgba(0, 0, 0, 0.25)',
                    '0 80px 90px rgba(0, 0, 0, 0.15)',
                ],
                '6xl': [
                    '0 75px 75px rgba(0, 0, 0, 0.25)',
                    '0 95px 105px rgba(0, 0, 0, 0.15)',
                ],
            },
            colors: {
                'regal-blue': 'rgba(0,212,255,0.48601190476190477)',
            },
        },
    },
    plugins: [],
};
