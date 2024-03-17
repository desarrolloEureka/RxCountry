import Home from '@/components/home/Home';

import { ResolvingMetadata } from 'next';

export function generateMetadata(parent: ResolvingMetadata) {
  return {
    title: 'Home',
    description: 'Dashboard in home page',
  };
}

const page = () => {
  return <Home />;
};

export default page;
