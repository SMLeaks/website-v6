//@ts-ignore
import type { ConfigType as MarkdocConfig } from '@markdoc/markdoc';
import Markdoc from '@markdoc/markdoc';
//@ts-ignore
import { defineMarkdocConfig } from '@astrojs/markdoc/config';
//@ts-ignore
import Heading from '@components/Markdown/Heading.astro';
//@ts-ignore
import Image from '@components/Markdown/Image.astro';

export default defineMarkdocConfig({
    tags: {
        anchor: {
            render: "a"
        }
    },
    nodes: {
        heading: {
            attributes: {
                level: {
                    type: Number
                }
            },
            render: Heading
        },
        image: {
            attributes: {
				...Markdoc.nodes.image.attributes,
				__optimizedSrc: { type: 'Object' },
            },
            render: Image
        }
    }
} as MarkdocConfig);