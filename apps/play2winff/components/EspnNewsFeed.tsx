import { Heading, Section, Text } from '@with-nx/react-ui';
import { useEspnNews } from '../hooks/useEspnNews';

export function EspnNewsFeed() {
  const { news, isLoading, isError } = useEspnNews();

  if (isLoading) {
    return <div className="">Loading</div>;
  }

  if (isError) return <div>An error occurred</div>;

  return (
    <Section className="border border-white p-2 bg-gradient-bottom-right">
      <Heading level={2}>ESPN News</Heading>
      {/* The div below will be scrollable */}
      <div className="overflow-y-auto max-h-[400px] word-break">
        {' '}
        {/* Define the height as per your requirement */}
        {news.articles.slice(0, 10).map((item, index) => (
          <div
            key={index}
            className="text-center border bg-gunmetal border-white"
          >
            <a
              href={item.links.web.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text
                isLoading={isLoading}
                className="font-semibold text-left my-1"
              >
                {item.headline}
              </Text>
              <Text isLoading={isLoading} className="text-left italic ml-5">
                {item.description}
              </Text>
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default EspnNewsFeed;
