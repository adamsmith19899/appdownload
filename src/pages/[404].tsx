import Head from 'next/head';

function Custom404() {
  return (
    <div>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
}

export default Custom404;
