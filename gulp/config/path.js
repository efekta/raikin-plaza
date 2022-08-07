// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`
    },
    src: {
        js: `${ srcFolder }/js/app.js`,
        images: `${ srcFolder }/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
        svg: `${ srcFolder }/img/icons/**/*.svg`,
        scss: `${ srcFolder }/scss/style.scss`,
        html: `${ srcFolder }/*.pug`, //.html
        files: `${ srcFolder }/files/**/*.*`,
        svgicons: `${srcFolder}/img/icons/*.svg`,
    },
    watch: {
        js: `${ srcFolder }/js/**/*.js`,
        scss: `${ srcFolder }/scss/**/*.scss`,
        html: `${ srcFolder }/**/*.pug`, //.html
        images: `${ srcFolder }/img/**/*.{jpg, jpeg, png, svg, gif, ico, webp}`,
        files: `${ srcFolder }/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}
