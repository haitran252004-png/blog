import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { newsData } from '@/data/news';

const NewsDetail = () => {
  const { id } = useParams();
  const { language } = useLanguage();

  const newsItem = newsData.find(item => item.id === Number(id));

  if (!newsItem) {
    return (
      <Layout>
        <div className="container-custom py-20">
          <h1 className="text-2xl font-bold">Bài viết không tồn tại</h1>
          <Link to="/news" className="text-primary mt-4 inline-block">
            ← Quay lại tin tức
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container-custom max-w-5xl mx-auto">
          <img
            src={newsItem.image}
            alt={newsItem.title[language]}
            className="rounded-2xl mb-8 w-full"
          />

          <h1 className="text-3xl font-bold mb-4">
            {newsItem.title[language]}
          </h1>

          <p className="text-muted-foreground mb-8">
            {newsItem.date}
          </p>

          {/* CONTENT BLOCKS */}
          <article>
            {newsItem.content[language].map((block, index) => {
              if (block.type === 'text') {
                return (
                  <p
                    key={index}
                    className="mb-4 text-base leading-relaxed text-foreground"
                  >
                    {block.value}
                  </p>
                );
              }

              if (block.type === 'image') {
                return (
                  <figure key={index} className="my-10">
                    <img
                      src={block.src}
                      alt={block.caption || 'news image'}
                      className="rounded-xl w-full"
                      loading="lazy"
                    />
                    {block.caption && (
                      <figcaption className="text-sm text-muted-foreground mt-2 text-center">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }

              return null;
            })}
          </article>

          <Link
            to="/news"
            className="inline-block mt-10 text-primary font-medium"
          >
            ← Quay lại danh sách
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NewsDetail;
