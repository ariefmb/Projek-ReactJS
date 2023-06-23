const RightComp = () => {
  return (
    <div className="right-content">
      <div className="bio">
        <div className="bio-card">
          <h2>First Name</h2>
          <input type="text" value="Muhammad" readOnly />
        </div>
        <div className="bio-card">
          <h2>Mid Name</h2>
          <input type="text" value="Arief" readOnly />
        </div>
        <div className="bio-card">
          <h2>Last Name</h2>
          <input type="text" value="Budiman" readOnly />
        </div>
        <div className="bio-card">
          <h2>Born</h2>
          <input type="date" id="born" />
        </div>
        <div className="bio-card">
          <h2>Description</h2>
          <textarea rows="5" cols="86" placeholder="Description..."></textarea>
        </div>
      </div>
      <div className="submit">
        <button id="submit-btn">SUBMIT</button>
        <button id="cancel-btn">CANCEL</button>
      </div>
    </div>
  );
};

export default RightComp;
