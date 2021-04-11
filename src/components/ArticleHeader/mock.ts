import { ArticleHeaderProps } from '.';
import { data } from '../../api/data.json';

const { title, excerpt, cover, author, categories, createdAt } = data.posts[0];

export default {
  title,
  excerpt,
  cover,
  createdAt,
  author,
  categories,
} as ArticleHeaderProps;
