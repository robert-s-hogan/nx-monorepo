import Layout from '../components/layout/Layout';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="wrapper">
          <div className="container">
            <div id="welcome">
              <h1>
                <span> Hello there, </span>
                Welcome devblog 👋
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
