import { LatestPosts } from './components/LatestPosts';
import { About } from './components/ui/About';
import { GitHubCommits } from './components/ui/GitHubCommits';
import { Hero } from './components/ui/Hero';
import { ZennArticles } from './components/ZennArticles';

export default async function Page() {
  return (
    <div className="space-y-6 px-16">
      <Hero />
      <GitHubCommits />
      <LatestPosts />
      <ZennArticles />
      <div>{/* ZennのTop */}</div>
      <div>{/* Oura ringのアクティビティ */}</div>
      <About />
    </div>
  );
}
