import { PostGrid } from '../../components/PostGrid';
import { PostStrapi } from '../../shared-types/postStrapi';
import { SettingsStrapi } from '../../shared-types/settingsStrapi';
import { BaseTemplate } from '../Base';

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
};

export const PostsTemplate = ({ settings, posts = [] }: PostsTemplateProps) => {
  return (
    <BaseTemplate settings={settings}>
      <PostGrid posts={posts} />
    </BaseTemplate>
  );
};
