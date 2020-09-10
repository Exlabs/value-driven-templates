import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { getAllTemplatesIDs, getTemplate } from '../../lib/templates';
import { Template } from '../../app/templates/template.component';
import { TemplateNotFound } from '../../app/templates/template-not-found/template-not-found.component';

export interface TemplateData {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
  content: string;
}

const TemplatePage = ({ template }: { template: TemplateData }) => {
  const router = useRouter();

  if (router.isFallback || !template) {
    return <TemplateNotFound />;
  } else {
    return <Template template={template} />;
  }
};

export const getStaticPaths = () => ({
  paths: getAllTemplatesIDs(),
  fallback: false,
});

export const getStaticProps = ({ params: { id } }) => {
  const template = getTemplate(id);

  return {
    props: {
      template,
    },
  };
};

export default TemplatePage;
