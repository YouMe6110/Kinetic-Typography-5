class App {
    constructor() {
        this.setWebgl();

        WebFont.load({
            google: {
                families: ['Hind:700']
            },
            fontactive: () => {
            }
        });
    }
}

window.onload = () => {
    new App();
}