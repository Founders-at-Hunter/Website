import { source } from '@/lib/source';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { useMDXComponents } from '@/mdx-components';

export default function Page() {
  const components = useMDXComponents({});
  const page = source.getPage([]);
  if (!page) return null;
  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc}>
      <DocsBody>
        <div className="docs-body">
          <h1>{page.data.title}</h1>
          <MDX components={components} />
        </div>
      </DocsBody>
    </DocsPage>
  );
}

export const metadata = {
  title: 'Founders @ Hunter Docs',
};


