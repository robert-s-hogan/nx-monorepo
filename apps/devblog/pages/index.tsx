import DevBlogLayout from '../components/layout/DevBlogLayout';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <DevBlogLayout>
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
    </DevBlogLayout>
  );
}

export default Index;
