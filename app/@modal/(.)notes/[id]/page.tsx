import { fetchNoteById } from '@/lib/api';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import NoteModalIntercept from './NoteModalIntercept';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function InterceptedNotePage({ params }: Props) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteModalIntercept id={id} />
    </HydrationBoundary>
  );
}
