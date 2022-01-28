module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        fontFamily: {
            'display': ['"hvd_peaceregular"', 'ui-monospace', 'SFMono-Regular',],
            'sans': ['"hvd_posterregular"', 'ui-sans-serif', 'system-ui', ],
            'serif': ['"Alata"', 'ui-serif', 'Georgia', ],
            'mono': ['"joystixmonospace"', 'SFMono-Regular', ],
        },
        extend: {
            backgroundImage: theme => ({
                'blog': "url('/img/bg/blog.jpg')",
                'podcast': "url('/img/bg/podcast.jpg')",
            }),
            colors: {
                punk: {
                    pink: '#E7227E',
                    red: '#F53B18',
                    brown: '#E6B55C',
                    blue: '#5CB7E6',
                    lila: '#E566FE',
                    violet: '#BD18F5',
                    green: '#18dd81',
                    gray: '#D9C3CE',
                    dark: '#252525',
                    light: '#EFEFEF',
                    dm: {
                        p1: '#E7227E',
                        p2: '#B51B63',
                        p3: '#751240',
                        p4: '#691039',
                        p5: '#4F0C2B',
                    },
                    lm: {
                        p1: '#EC6AA7',
                        p2: '#E7227E',
                        p3: '#F52586',
                        p4: '#CF1F71',
                        p5: '#B51B63',
                    },
                }
            },
        },
    },
    variants: {
        extend: {
            fontWeight: ['dark', 'hover', 'focus'],
            borderColor: ['dark', 'active'],
            borderWidth: ['dark', 'hover', 'focus'],
            borderRadius: ['dark', 'hover', 'focus'],
            borderStyle: ['dark', 'hover', 'focus'],
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
