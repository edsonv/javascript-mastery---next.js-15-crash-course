import SearchForm from '@/components/SearchForm';
import StartupCard from '@/components/StartupCard';

type Props = {
  searchParams: Promise<{ query?: string }>;
};

const Home = async ({ searchParams }: Props) => {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'Edson' },
      _id: 1,
      description: 'This is a description',
      image: 'https://m.media-amazon.com/images/I/41ZP9GyHkKL.jpg',
      category: 'Robots',
      title: 'We Robots',
    },
  ];

  return (
    <>
      <section className='pink_container'>
        <h1 className='heading'>
          Pitch Your Startup, <br /> Connect with Enterpreneurs
        </h1>
        <p className='sub-heading !max-w-3xl'>
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search results for ${query}` : 'All startups'}
        </p>
        <ul className='mt-7 card_grid'>
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className='no-results'>No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;
