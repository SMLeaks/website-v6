//@ts-ignore
import type { ConfigType as MarkdocConfig } from '@markdoc/markdoc';
//@ts-ignore
import { defineMarkdocConfig } from '@astrojs/markdoc/config';
//@ts-ignore
import Heading from '@components/Markdown/Heading.astro';

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
        }
    }
} as MarkdocConfig);