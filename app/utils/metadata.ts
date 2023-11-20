import { ResolvingMetadata } from 'next';
import { Metadata } from "../types/index.t";
import { createTranslator } from 'next-intl';
import getLocaleMessages from './messages';

import { headers } from 'next/headers';
import { getPathByPathName } from './paths';

//we generate the metadata dynamically, based on the route.
export async function generateMetadata(
    { params }: Metadata,
    parent: ResolvingMetadata
  ) {
  
    const {locale} = params;
    const {messages} = await getLocaleMessages({locale});
    const t = createTranslator({locale, messages});

    const headersList = headers();
    // read the custom x-url header
    const pathname = headersList.get('x-url') || "";
    const path = getPathByPathName(pathname);

    const title = t(`Index.Path.${path}.title`)
    const description = t('Index.Metadata.description')
    return {
      title: {
        default: title,
      },
      description:{
        default: description
      },
/*       robots: { index: true, follow: true },
      manifest: `/favicon/site.webmanifest`, */
      // authors: [
      //   {
      //     name: 'Onar Berrade',
      //     url: 'https://onar.dev',
      //   },
      // ],
    };
  }