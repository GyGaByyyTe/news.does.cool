export default async function NewsDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log('News ID:', id);

  return (
    <div id="news">
      <h1>News page with details for: {id}</h1>
    </div>
  );
}
