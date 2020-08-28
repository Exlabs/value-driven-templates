import path from 'path';
import fs from 'fs';
import templates from '../content/templates.json';

const templateContentDirectory = path.join(process.cwd(), 'src', 'content', 'templates');

export const getAllTemplatesIDs = () =>
  templates.map((template) => ({
    params: {
      id: template.id,
    },
  }));

export const getTemplateMetadata = (id: string) =>
  templates.find((template) => template.id === id) ?? null;

export const getTemplate = (id: string) => {
  const metadata = getTemplateMetadata(id);

  if (!metadata) {
    return null;
  }

  const content = fs.readFileSync(`${templateContentDirectory}/${id}.md`);

  if (!content) {
    return null;
  }

  return {
    ...metadata,
    content: content.toString(),
  };
};
