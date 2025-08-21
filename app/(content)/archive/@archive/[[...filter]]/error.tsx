'use client';

export default function ErrorArchivePage({ error }: { error: Error }) {
  return (
    <div id="error">
      <h1>An error occurred!</h1>
      <p>{error?.message ?? 'Invalid path.'}</p>
    </div>
  );
}
