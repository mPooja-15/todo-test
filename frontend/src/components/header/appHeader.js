import React, { useState } from "react";
import Button, { SelectButton } from "../common/button/button";
import TodoModal from "../common/modal/modal";

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="header-app">
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add todo
      </Button>
      <SelectButton id="status">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  );
}

export default AppHeader;
