import simpleParallax from 'simple-parallax-js';

export function jsParallax() {
    let hero = document.querySelectorAll('.__prllx0');
    new simpleParallax(hero, {
        orientation: 'down',
        scale: 2,
        overflow: false,
        delay: 2
    });

    let ocean = document.querySelectorAll('.__prllx1');
    new simpleParallax(ocean, {
        orientation: 'up',
        scale: 2,
        overflow: false,
        delay: 3
    });
};