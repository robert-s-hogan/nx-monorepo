import React from 'react';
// import ObjectiveTable from './ObjectiveTable';
// import ObjectiveForm from './ObjectiveForm';
// import { useObjectiveApi } from './hooks/useObjectiveApi';
import { NextPage } from 'next';

const AdminPage: NextPage = () => {
  // const { objectives, addObjective, updateObjective, deleteObjective } =
  //   useObjectiveApi();

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* <ObjectiveForm onSubmit={addObjective} />
      <ObjectiveTable
        objectives={objectives}
        onUpdate={updateObjective}
        onDelete={deleteObjective}
      /> */}
    </div>
  );
};

export default AdminPage;
