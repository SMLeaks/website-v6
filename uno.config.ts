import { defineConfig, presetUno, transformerCompileClass, transformerDirectives, transformerVariantGroup } from 'unocss';

export default defineConfig({
    presets: [
        presetUno()
    ],
    transformers: [
        transformerVariantGroup(),
        transformerDirectives(),
        transformerCompileClass()
    ]
})