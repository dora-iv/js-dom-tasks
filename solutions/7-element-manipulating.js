import camelCase from 'lodash/camelCase';

// BEGIN
export default function normalize(document) {
    const elements = document.body.getElementsByTagName('*');
    Array.from(elements).forEach(element => {
        const classes = element.className.split(' ');
        const normalizedClasses = classes.map(className => camelCase(className));
        element.className = normalizedClasses.join(' ');
    });
}
// END