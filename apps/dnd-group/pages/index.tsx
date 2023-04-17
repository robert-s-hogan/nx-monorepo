import DndGroupLayout from '../components/layout/DndGroupLayout';

export function Index() {
  return (
    <DndGroupLayout>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome dnd-group 👋
            </h1>
          </div>
        </div>
      </div>
    </DndGroupLayout>
  );
}

export default Index;
