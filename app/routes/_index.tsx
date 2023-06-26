import type { V2_MetaFunction } from '@remix-run/node';
import MainLayout from '~/components/pageLayouts/MainLayout';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <MainLayout>
      <div className="bg-amber-50 h-[100vh]">dsdsddsd</div>
    </MainLayout>
  );
}
